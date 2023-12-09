const express = require("express");
const dotenv = require("dotenv");
const {connectDB} = require("./database/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const passport = require('passport');
const session = require('express-session');
const GithubStrategy = require('passport-github2').Strategy;
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Orgin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use(cors({methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))
  .use(cors({origin: '*'}))
  .use('/', require('./routes/index.js'));

  passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done){
    return done(null, profile);
  }));

  passport.serializeUser((user, done) => {
    done(null,user);
  });

  passport.deserializeUser((user, done) => {
    done(null,user);
  });
  
  app.get('/', (req, res) => {res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}` : "Logged out")});
  app.get('/github/callback', passport.authenticate('github', {
failureRedirect: '/api-docs', session: false }),
(req, res) => {
  req.session.user = req.user;
  res.redirect('/');
});

// Connect to the database
connectDB();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Third party middleware
//app.use(cors());

// Swagger middleware
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});
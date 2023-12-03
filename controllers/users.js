import User from "../models/userModel.js"

const getAll = async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const getSingle = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({message: "User not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const createUser = async (req, res) => {
    try {
      const {date_of_birth, email, first_name, last_name, password, phone_number} = req.body;
  
      const user = new User({
        date_of_birth,
        email,
        first_name,
        last_name,
        password,
        phone_number
      });
      const createUser = await User.save();

      res.status(201).json(createUser);
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const updateUser = async (req, res) => {
    try {
      const {date_of_birth, email, first_name, last_name, password, phone_number} = req.body;
  
      const user = await User.findByIdAndUpdate(req.params.id, {
        date_of_birth,
        email,
        first_name,
        last_name,
        password,
        phone_number
      }, {new: true});
  
      if (user) {
        const updateUser = await user.save();
        res.json(updateUser);
      } else {
        res.status(404).json({message: "User not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const deleteUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      if (user) {
        await user.deleteOne({_id: req.params.id});
        res.status(201).json({message: "User deleted"});
      } else {
        res.status(404).json({message: "User not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }
  
  export {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
  }
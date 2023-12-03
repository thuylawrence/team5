import Favorite from "../models/favoriteModel";

const getAll = async (req, res) => {
    try {
      const favorites = await Favorite.find({});
      res.json(favorites);
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const getSingle = async (req, res) => {
    try {
      const favorite = await Favorite.findById(req.params.id);
  
      if (favorite) {
        res.json(favorite);
      } else {
        res.status(404).json({message: "Favorite not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const createFavorite = async (req, res) => {
    try {
      const {favorite_color, favorite_food, favorite_movie} = req.body;
  
      const favorite = new Favorite({
        favorite_color,
        favorite_food,
        favorite_movie
      });
      const createFavorite = await Favories.save();

      res.status(201).json(createFavories);
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const updateFavorite = async (req, res) => {
    try {
      const {favorite_color, favorite_food, favorite_movie} = req.body;
  
      const favorite = await Favorite.findByIdAndUpdate(req.params.id, {
        favorite_color,
        favorite_food,
        favorite_movie
      }, {new: true});
  
      if (favorite) {
        const updateFavorite = await favorite.save();
        res.json(updateFavorite);
      } else {
        res.status(404).json({message: "Favorite not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const deleteFavorite = async (req, res) => {
    try {
      const favorite = await Favorite.findById(req.params.id);
  
      if (favorite) {
        await favorite.deleteOne({_id: req.params.id});
        res.status(201).json({message: "Favorite deleted"});
      } else {
        res.status(404).json({message: "Favorite not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }
  
  export {
    getAll,
    getSingle,
    createFavorite,
    updateFavorite,
    deleteFavorite
  }
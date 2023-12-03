import Hobbies from "../models/hobbiesModel"

const getAll = async (req, res) => {
    try {
      const hobbies = await Hobbies.find({});
      res.json(hobbies);
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const getSingle = async (req, res) => {
    try {
      const hobby = await Hobbies.findById(req.params.id);
  
      if (hobby) {
        res.json(hobby);
      } else {
        res.status(404).json({message: "Hobby not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const createHobby = async (req, res) => {
    try {
      const {hobby} = req.body;
  
      const hobbies = new Hobby({
        hobbies
      });
      const createHobby = await Hobbies.save();

      res.status(201).json(createHobby);
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const updateHobby = async (req, res) => {
    try {
      const {hobby} = req.body;
  
      const hobbies = await Hobbies.findByIdAndUpdate(req.params.id, {
        hobby
      }, {new: true});
  
      if (hobby) {
        const updateHobby = await hobby.save();
        res.json(updateHobby);
      } else {
        res.status(404).json({message: "Hobby not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const deleteHobby = async (req, res) => {
    try {
      const hobby = await Hobbies.findById(req.params.id);
  
      if (hobby) {
        await hobby.deleteOne({_id: req.params.id});
        res.status(201).json({message: "Hobby deleted"});
      } else {
        res.status(404).json({message: "Hobby not found"})
      }
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }
  
  export {
    getAll,
    getSingle,
    createHobby,
    updateHobby,
    deleteHobby
  }
const Skillset = require ("../models/skillsetModel");

const getAll = async (req, res) => {
  try {
    const skillsets = await Skillset.find({});
    res.json(skillsets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const skillset = await Skillset.findById(req.params.id);

    if (skillset) {
      res.json(skillset);
    } else {
      res.status(404).json({ message: "Skillset not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createSkillset = async (req, res) => {
  try {
    const { id, technical_skill, other_skill } = req.body;

    const newSkillset = new Skillset({
      id,
      technical_skill,
      other_skill,
    });

    const createdSkillset = await newSkillset.save();

    res.status(201).json(createdSkillset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateSkillset = async (req, res) => {
  try {
    const { id, technical_skill, other_skill } = req.body;

    const updatedSkillset = await Skillset.findByIdAndUpdate(
      req.params.id,
      {
        id,
        technical_skill,
        other_skill,
      },
      { new: true }
    );

    if (updatedSkillset) {
      res.json(updatedSkillset);
    } else {
      res.status(404).json({ message: "Skillset not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteSkillset = async (req, res) => {
  try {
    const skillset = await Skillset.findById(req.params.id);

    if (skillset) {
      await skillset.deleteOne({ _id: req.params.id });
      res.status(201).json({ message: "Skillset deleted" });
    } else {
      res.status(404).json({ message: "Skillset not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createSkillset,
  updateSkillset,
  deleteSkillset
};

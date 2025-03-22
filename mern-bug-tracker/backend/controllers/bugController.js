const Bug = require('../models/Bug');

// Creating a new bug
exports.createBug = async (req, res, next) => {

  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);

  } catch (error) {
    next(error);
  }
};

// Geting all bugs
exports.getBugs = async (req, res, next) => {

  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    next(error);
  }
};

// Updating bug status
exports.updateBug = async (req, res, next) => {
  try {

    const { id } = req.params;
    const updatedBug = await Bug.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBug) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.status(200).json(updatedBug);
  } catch (error) {
    next(error);
  }
};

// Deleting a bug
exports.deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBug = await Bug.findByIdAndDelete(id);

    if (!deletedBug) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.status(200).json({ message: 'Bug deleted successfully' });
  } catch (error) {
    next(error);
  }
};

import Query from "../model/contact.model.js";

export const getQuery = async (req, res) => {
  try {
    const query = new Query(req.body);
    await query.save();
    res.status(201).json(query);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

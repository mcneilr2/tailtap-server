import createKnex from 'knex';
import knexFile from '../knexfile.js';
const knex = createKnex(knexFile);

export const index = async (_req, res) => {
  try {
    const data = await knex("spots");
    res.json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Inventories: ${err}`);
  }
};

export const getSpotbyId = async (req, res) => {
 const { id } = req.params;
    try {
      const spot = await knex("spots")
        .where({ id: Number(id) })
        .first();
  
      if (!spot) {
        return res.status(404).json({ message: "Spot not found" });
      }
      res.status(200).json(spot);
    } catch (error) {
      res.status(500).json({
        message: "Unable to find spot",
      });
    }
  };

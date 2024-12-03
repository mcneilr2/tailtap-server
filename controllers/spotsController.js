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
  

export const addSpot = async (req, res) => {
  console.log("req.body", req.body);

  const { name, type, latitude, longitude, address, hours, is_public, is_lit_night, weather_coverage, occupancy_level, median_skill_level 
   } =
    req.body;

  if ( !name || !type || !latitude || !longitude || !address || !hours || is_public == "null" || is_lit_night == "null" || !weather_coverage || occupancy_level == "null" || median_skill_level == "null" ) {
    return res.status(400).json({
      message: "Please provide all the requred data",
    });
  }

  try {
    const result = await knex("spots").insert(req.body);
    const newItemId = result[0];
    const createdItem = await knex("spots").where({ id: newItemId });

    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new inventory item: ${error}`,
    });
  }
};


// Import seed data files, arrays of objects
import spotsData from '../seed-data/spots.js';

export async function seed(knex) {
  await knex("spots").del();
  await knex("spots").insert(spotsData);
};

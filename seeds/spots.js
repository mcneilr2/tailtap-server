/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("spots").del();
  await knex("spots").insert([
    {
      id: 1,
      name: "Plaza Skatepark",
      type: "Park",
      latitude: 49.27730567009009,
      longitude: -123.10246046739596,
      address: "Quebec St & Union St, Vancouver, BC",
      hours: "2h/7",
      is_public: true,
      is_lit_night: true,
      weather_coverage: "partial",
      occupancy_level: 8,
      median_skill_level: 8,
      homepage_video: "https://www.youtube.com/watch?v=gPpJ2lcCOxI&list=PPSV",
      closest_hospital_name: "Mount Saint Joseph Hospital",
      closest_hospital_address: "3080 Prince Edward St, Vancouver, BC V5T 3N4",
    },
    {
      id: 2,
      name: "Leeside Skatepark",
      latitude: 49.28116307233384,
      longitude: -123.03134769117345,
      address:
        "Cassiar Connector & East Hastings St and Highway 1, Vancouver, BC V5K 2C8",
      hours: "2h/7",
      is_public: true,
      is_lit_night: true,
      weather_coverage: "full",
      occupancy_level: 4,
      median_skill_level: 8,
      homepage_video: "https://www.youtube.com/watch?v=66kelc8CmCs",
      closest_hospital_name: "Burnaby Hospital",
      closest_hospital_address: "3935 Kincaid St, Burnaby, BC V5G 2X6",
    },
  ]);
}

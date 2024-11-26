export function up(knex) {
    return knex.schema.createTable("spots", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("type").notNullable();
        table.float("latitude").notNullable();
        table.float("longitude").notNullable();
        table.string("address").notNullable();
        table.string("hours").notNullable();
        table.boolean("is_public").notNullable();
        table.boolean("is_lit_night").notNullable();
        table.string("weather_coverage").notNullable();
        table.integer("occupancy_level").notNullable();
        table.integer("median_skill_level").notNullable();
        table.string("homepage_video").notNullable();
        table.string("closest_hospital_name").notNullable();
        table.string("closest_hospital_address").notNullable();
    });
}

export function down(knex) {
  return knex.schema.dropTable("spots");
};

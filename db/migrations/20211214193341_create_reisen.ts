import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('reisen', function (table) {
            table.uuid('id').primary();
            table.string('name', 255).notNullable();
            table.date('startDatum').notNullable();
            table.date('endDatum').notNullable();
            table.string('land').notNullable();
            table.string('user_email').references('email').inTable('users').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
};

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists('reisen')
}

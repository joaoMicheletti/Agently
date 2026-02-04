import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cargos', function(table){
        table.increments();
        table.string("nomeCargo");
        table.string("descricaoCargo");
        table.timestamp('data_criacao').defaultTo(knex.fn.now());
        table.string('empresa');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cargos');
}
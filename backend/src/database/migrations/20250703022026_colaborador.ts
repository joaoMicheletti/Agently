
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('colaborador', function(table){
        table.increments();
        table.string("user");
        table.string('pass');
        table.string('funcao');
        table.string('empresa');
        table.string('token');
        table.timestamp('data_criacao').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('colaborador');
}


import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('crister', function(table){
        table.increments();
        table.string("cpf");// / cnpj
        table.string("nome");
        table.string("pass");
        table.timestamp('data_criacao').defaultTo(knex.fn.now());
        table.integer('diasFree').defaultTo(7);
        table.string("plano");
        table.string("inicioPlano");
        table.string("terminoPlano");
        table.string('valorPlano');
        table.integer('colaboradores');
        table.integer('colaboradoresLimite');
        table.string('storageUsed');
        table.string('storyAutomations');
        table.integer('clientesLimite');
        table.integer('clientes');
        table.string('suporte');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('crister');
}

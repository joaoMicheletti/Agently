import {Injectable } from "@nestjs/common";
import connection from "src/database/connection";
import { ColaboradorDto } from "src/controllers/colaborador/colaboradorDto";
@Injectable()

export class colaboradorProvider { 
    // registro de colaborador
    async RegisterColaborador(data: ColaboradorDto): Promise<any> {
        console.log('ola', data )
        let Data = {
            user:data.user,
            pass:data.pass,
            funcao:data.funcao,
            empresa:data.empresa,
            token: `${data.empresa}${data.user}${data.funcao}`
        }
        //definir um token - empresa-nome-funcao
        // verificando cadastro exstente:
        const verification = await connection('colaborador')
        .where('user', data.user)
        .where('pass', data.pass)
        .where('funcao', data.funcao)
        .where('empresa', data.empresa);
        
        
        const dadosEmpresa = await connection('crister').where('cpf', data.empresa).select('*');
        console.log('Dados da empresa:', dadosEmpresa);
        // vaerificar numero limite de colaboradores
        if(dadosEmpresa[0].colaboradoresLimite === null){
            return { res: "Defina um limite de colaboradores no seu plano para cadastrar novos colaboradores." };
        } else if(dadosEmpresa[0].colaboradoresLimite.length > 0){
            // verificar a quantidade de colaboradores cadastrados.
            if(dadosEmpresa[0].colaboradores.length >= dadosEmpresa[0].colaboradoresLimite){
                return { res: "Limite de colaboradores atingido. Atualize seu plano para cadastrar mais colaboradores." };
            } else {
                // prosseguir com o cadastro, verificar se ja existe o cadastro.
                if(verification.length > 0){
                    return { res: "Colaborador já cadastrado." };
                } else {
                    let res = await connection('colaborador').insert(Data);
                    if(res.length > 0){
                        // cfiar o Wf do colaborador:
                        let dataWf = {
                            token: Data.token,
                            funcao: Data.funcao,
                            empresa: Data.empresa
                        }
                        let wf = await connection('wf').insert(dataWf);
                        console.log('CRiado o Wf do colaborador.', wf)
                        return{res: "Registrado com sucesso!"}
                    } else {
                        return {res: "Erro ao efetuar o registro"}
                    }
                }
            }

        }

            /**
             * 
             * let res = await connection('colaborador').insert(Data);
            if(res.length > 0){
                // cfiar o Wf do colaborador:
                let dataWf = {
                    token: Data.token,
                    funcao: Data.funcao,
                    empresa: Data.empresa
                }
                let wf = await connection('wf').insert(dataWf);
                console.log('CRiado o Wf do colaborador.', wf)
                return{res: "Registrado com sucesso!"}
            } else {
                return {res: "Erro ao efetuar o registro"}
            }
             */
            
        
    
    }
    // registro de nova função
    async RegisterFuncao(data): Promise<any> {        
        console.log('data recebido no provaider.', data );
        // inserindo dados no banco de dados:
        // verificar exixtencia do cargo no banco de dados
        console.log(data.nomeCargo)
        console.log(data.empresa);
        let verificaCargo = await connection('cargos')
        .where('nomeCargo', data.nomeCargo)
        .where('empresa', data.empresa);
        if(verificaCargo.length > 0){
            return { res: "Função já cadastrada na empresa." };
        } else {
            let condicao = await connection('cargos').insert(data);
            if(condicao.length > 0){
                return { res: "Função cadastrada com sucesso!" };
            } else {
                return { res: "Erro ao cadastrar função." };
            }
        }
    };
}
import { Body, Controller, Post } from "@nestjs/common";
import { ColaboradorDto } from "./colaboradorDto";
import { colaboradorProvider } from "src/providers/colaborador/colaboradorService";

@Controller()

export class colaboradorController{
    constructor(private readonly colaborador: colaboradorProvider){}

    @Post('registerColab')
    async RegisterColaborador(@Body() data: ColaboradorDto): Promise<object> {
        return await this.colaborador.RegisterColaborador(data);
    }
    // roa para deletar colaborador. remover acesso a plataforma.
    // rota para cadastrar novas functiosn na empresa.
    @Post('registerFuncao')
    async RegisterFuncao(@Body() data): Promise<object> {
        // lógica para registrar nova função.
        console.log('Dados recebidos com sucesso.:', data);
        // chamando Funcção no provider.
        return await this.colaborador.RegisterFuncao(data);
        //return { res: "Função cadastrada com sucesso!" };
    }
}
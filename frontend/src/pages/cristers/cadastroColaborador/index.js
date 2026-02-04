import React, { use, useState } from "react";
import Api from '../../../services/api';
import './styles.css';
import { useNavigate } from "react-router-dom";
import logoLogin from '../../../assets/image/logoLogin.webp'

export default function RegisterCliente() {
    const Hystory = useNavigate();
    // Coloque os hooks useState fora da função Login
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const [ idPerfil, setIdPerfil] = useState(''); // variavel responsavel por armazenar a ;função do colaborador. nome generico
    const [ funcao, setFuncao] = useState('');
    const [ descricaoFuncao, setDescricaoFuncao] = useState('');

    //funcção para mostrar campos a serem preenchidos de cadastro de Funcionalidades
    async function mostrarFuncao(e){
        e.preventDefault();
        document.querySelector('#divformularioLoginColaborador').style.display = 'none';
        document.querySelector('.cadastroDeFunction').style.display = 'flex';
    }

    // funcção de cadastro de Funcionalidades.
    async function cadastrarFuncao(e){
        e.preventDefault();
        const Data = {
            nomeCargo: funcao,
            descricaoCargo: descricaoFuncao,
            empresa: sessionStorage.getItem('tokenCrister')
        };
        console.log(Data)
        Api.post("/registerFuncao", Data).then((response) => {
            // validar resposta e responder de acordo.
            const responseEl = document.querySelector('.responseServer');
            if(response.data.res === "Função cadastrada com sucesso!"){
                document.querySelector('.responseServer').innerHTML = '*'+ response.data.res;
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            } else {
                responseEl.style.color = 'red';
                document.querySelector('.responseServer').innerHTML = '*'+ response.data.res;
            }
        }).catch((erro) =>{
            alert("server not found");
        })
        

    }
    // Função de login
    async function RegistrarColab(e) {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
        // Aqui você pode adicionar lógica para autenticação real
        if(use === "" || pass === "" || cPass === "" || idPerfil === "" ){
            document.querySelector('.alerta_login').innerHTML ='* Preencha todos os campos.'

        } else if(cPass != pass){
            document.querySelector('.alerta_login').innerHTML ='As senhas presisam ser iguais '
        } else {
            //let data = new Date()
            const Data = {
            user,
            pass,
            funcao: idPerfil, // variavel com nome generico.
            empresa: sessionStorage.getItem('tokenCrister')
            };
            console.log(Data)
            //enviar para a api e autenticar usuario
            await Api.post('/registerColab', Data).then((response) => {
                console.log(response.data.res);
                if(response.data.res === "Defina um limite de colaboradores no seu plano para cadastrar novos colaboradores."){
                    alert(response.data.res);
                }
            }).catch((erro) =>{
                console.log("server not found");
            });
        };
        
    };

    return (
        <>
            <section id="sectionFormulario">
            <div className="cadastroDeFunction">
                <h1 className="titleNovaFunction">Nova Função.</h1>
                <p className="responseServer"></p>
                <br/>
                <input 
                    onChange={(e) => setFuncao(e.target.value)}
                    className="inputNovaFunction" 
                    placeholder="   Cargo.."
                />
                <textarea
                    value={descricaoFuncao}
                    onChange={(e) => setDescricaoFuncao(e.target.value)}
                    maxLength={500}
                    className="textAreaNovaFunction"
                    placeholder="Descreva essa função (até 500 caracteres)."
                />
                <button onClick={cadastrarFuncao} className="btnNovaFunction">Adicionar Função</button>                
            </div>
                <div id="divformularioLoginColaborador">
                    <form id="formularioLoginColaborador">
                        <img id="logoLogin" src={logoLogin} alt="logo img" />
                        <input 
                            onChange={(e) => setUser(e.target.value)}
                            className="inputLoginCrister"
                            placeholder="  *User"
                            type="text"
                            value={user}
                            required
                        />
                        <select id="SelectColab" value={idPerfil} onChange={(e) => setIdPerfil(e.target.value)}>
                            
                            <option value='selecione'>Selecione a função</option>
                            <option value='editor'>Editor</option>
                            <option value='socialmedia'>Social media</option>
                            <option value='gestor'>Gestor de Progetos</option>
                        </select>
                        <input 
                            onChange={(e) => setPass(e.target.value)}
                            className="inputLoginCrister"
                            placeholder="  *Senha"
                            type="password"
                            value={pass}
                            required
                        />
                        <input     
                            onChange={(e) => setCPass(e.target.value)}
                            className="inputLoginCrister"
                            placeholder="  *Confirmar Senha"
                            type="password"
                            value={cPass}
                            required
                        />
                        <a className="addfunction" onClick={mostrarFuncao} id="linkNovaFuncaoColab">+ Adicionar nova função</a>
                        <br/>
                        
                        <input onClick={RegistrarColab} id="BtnLoginUserColaborador" type="button" value="Register"/>
                    </form>
                    <p className="alerta_login"></p>
                </div>
            </section>
        </>
    );
}

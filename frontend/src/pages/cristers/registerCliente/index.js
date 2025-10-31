import React, { useState } from "react";
// mesmo style css da pagina de login - sendo renderizado de lá 
import { Link, useNavigate } from "react-router-dom";
import logoLogin from "../../home/assets/agentlyLogo.webp";
import Api from "../../../services/api.js";

export default function RegisterCliente() {
  const navigate = useNavigate();

  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [alerta, setAlerta] = useState("");

  // Função auxiliar para validar CPF/CNPJ
  function validarCpfCnpj(valor) {
    const cpfRegex = /^\d{11}$/;
    const cnpjRegex = /^\d{14}$/;
    return cpfRegex.test(valor) || cnpjRegex.test(valor);
  }

  // Função principal de registro
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!cpf || !nome || !senha || !confirmarSenha) {
      setAlerta("* Preencha todos os campos.");
      return;
    }

    if (!validarCpfCnpj(cpf)) {
      setAlerta("* CPF ou CNPJ inválido. Use apenas números (11 ou 14 dígitos).");
      return;
    }

    if (senha !== confirmarSenha) {
      setAlerta("* As senhas não conferem.");
      return;
    }

    // Objeto de dados a ser enviado à API
    const dadosRegistro = {
      cpf,
      nome,
      pass: senha
    };

    console.log("Dados do registro:", dadosRegistro);
    setAlerta("✔️ Dados validados com sucesso!");

    // Aqui você pode integrar com sua API futuramente
    // await Api.post('/registerCliente', dadosRegistro)
    await Api.post('/registerCrister', dadosRegistro)
    .then((response) => {
      console.log("Resposta da API:", response.data);
      // Redirecionar ou mostrar mensagem de sucesso
      navigate("/LoginCliente");
    })
    .catch((error) => {
      console.error("Erro ao registrar:", error);
      setAlerta("* Erro ao registrar. Tente novamente.");
    });
  };

  return (
    <>
      <section id="sectionFormulario">
        <div className="containerLoginParceiro">
          <div className="contentLogin">
            <img src={logoLogin} alt="logo img" />
            <Link to="/" id="LinkRegister">HOME</Link><br/><br />
            <Link to="/LoginCliente" id="LinkRegister">Já possui conta? Faça login</Link><br/><br />
          </div>

          <form className="formLogin" onSubmit={handleRegister}>
            <h1 id="titleFormLogin">CADASTRO</h1>

            <input
              onChange={(e) => setCpf(e.target.value)}
              className="inputLoginCrister"
              placeholder=" * CPF ou CNPJ (somente números)"
              type="text"
              value={cpf}
              maxLength="14"
            />
            <input
              onChange={(e) => setNome(e.target.value)}
              className="inputLoginCrister"
              placeholder=" * Nome do responsável ou empresa"
              type="text"
              value={nome}
            />
            <input
              onChange={(e) => setSenha(e.target.value)}
              className="inputLoginCrister"
              placeholder=" * Senha"
              type="password"
              value={senha}
            />
            <input
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="inputLoginCrister"
              placeholder=" * Confirmar Senha"
              type="password"
              value={confirmarSenha}
            />

            <p className="alerta_login">{alerta}</p>

            <button className="btnLoginCliente" type="submit">
              Registrar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

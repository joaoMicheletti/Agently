import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from '../home/assets/agentlyLogo.webp';

export default function Planos() {

  const planos = [
    {
      id: 1,
      nome: "Agently Start",
      preco: 213,
      clientes: 5,
      colaboradores: 3,
      automacaoStories: false,
      armazenamento: "5 GB",
      recursos: [
        "Calendário Editorial",
        "Workflow de Colaboradores",
        "Aprovação de Cliente",
        "Upload via plataforma",
        'Suporte via E-mail - Horário comercial'
      ]
    },
    {
      id: 2,
      nome: "Agently Pro",
      preco: 429,
      clientes: 10,
      colaboradores: 8,
      automacaoStories: false,
      armazenamento: "20 GB",
      recursos: [
        "Tudo do Start",
        "Controle de prazos",
        "Ajustes automáticos",
        "Histórico de postagens",
        'Suporte via E-mail e WhatsApp - Horário comercial'
      ]
    },
    {
      id: 3,
      nome: "Agently Infinity",
      preco:  969,
      clientes: "Clientes ilimitados",
      colaboradores: 20,
      automacaoStories: true,
      armazenamento: "100 GB",
      recursos: [
        "Tudo do Pro",
        "Automação de Stories",
        "Publicação Inteligente",
        "Painel de análise",
        "Suporte prioritário via E-mail e WhatsApp - Horário comercial'"
      ]
    }
  ];

  const handleSelecionarPlano = (plano) => {
    const dadosPlano = {
      id: plano.id,
      nome: plano.nome,
      valor: plano.preco,
      automacaoStories: plano.automacaoStories,
      limites: {
        clientes: plano.clientes,
        colaboradores: plano.colaboradores,
        armazenamento: plano.armazenamento
      },
      dataSelecao: new Date().toISOString(),
    };

    console.log("Plano selecionado:", dadosPlano);
  };

  return (
    <>
      {/* HEADER */}
      <header className="headerHome">
        <div className="logo">
          <Link to="/"><img id="LogoHeader" src={Logo} alt="Logo" /></Link>
        </div>
        <nav id="navHeaderHome">
          <Link to="/">Home</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/loginCliente">Login</Link>
          <Link id="BtnGratis" to="/loginCliente">Teste Grátis</Link>
        </nav>
      </header>

      {/* SEÇÃO DE PLANOS */}
      <section className="sectionPlanos">
        <h1>Escolha o plano ideal para sua agência</h1>
        <p>Automatize seus processos e ganhe produtividade com o Agently ⚙️</p>

        <div className="containerPlanos">
          {planos.map((plano) => (
            <div key={plano.id} className={`cardPlano ${plano.id === 2 ? "planoPopular" : ""}`}>
              <h2>{plano.nome}</h2>
              <p className="preco">R$ {plano.preco}/mês</p>
              <ul>
                <li><strong>Clientes:</strong> {plano.clientes}</li>
                <li><strong>Colaboradores:</strong> {plano.colaboradores}</li>
                <li><strong>Armazenamento:</strong> {plano.armazenamento}</li>
                <li><strong>Automação Stories:</strong> {plano.automacaoStories ? "✔️ Inclusa" : "❌ Não incluso"}</li>
              </ul>
              <div className="recursos">
                <h4>Recursos</h4>
                <ul>
                  {plano.recursos.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <button id="BtnTesteGratis" onClick={() => handleSelecionarPlano(plano)}>
                Selecionar
              </button>
            </div>
          ))}
        </div>
      </section>

      
      <footer className="footerHome">
        <div className="footerContainer">
            <div className="footerLogoArea">
            <img id="LogoFooter" src={Logo} alt="Logo Agently" />
            <p>Automatize seu processo com a Agently.</p>
            <div className="socialIcons">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            </div>

            <div className="footerLinks">
            <h4>Navegação</h4>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Planos</Link></li>
                <li><Link to="/loginCliente">Login</Link></li>
                <li><Link to="/loginCliente">Teste Grátis</Link></li>
            </ul>
            </div>

            <div className="footerContact">
            <h4>Contato</h4>
            <p>📧 contato@agently.com.br</p>
            <p>📱 +55 (11) 93222-3533</p>
            <button id="BtnFooter"><Link to="/loginCliente">Falar com Suporte</Link></button>
            </div>
        </div>

        <div className="footerDivider"></div>

        <div className="footerBottom">
            <p>© {new Date().getFullYear()} Agently — Todos os direitos reservados.</p>
        </div>
    </footer>
    </>
  );
}

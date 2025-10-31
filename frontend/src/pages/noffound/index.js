import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from '../home/assets/agentlyLogo.webp';

export default function NotFound() {
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

      {/* SEÇÃO NOT FOUND */}
      <section className="sectionNotFound">
        <div className="notFoundContent">
          <h1 className="errorCode">404</h1>
          <h2>Página não encontrada</h2>
          <p>
            Opa! Parece que você se perdeu no caminho.  
            A página que você procura não existe ou foi movida.
          </p>
          <button id="BtnTesteGratis">
            <Link to="/">Voltar</Link>
          </button>
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
            <button id="BtnFooter"><Link to="/loginCrister">Falar com Suporte</Link></button>
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

import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from './assets/agentlyLogo.webp';
import agenda from './assets/agende.webp';
import propaganda from './assets/propaganda.webp';
import depMokup from './assets/depMokup.webp';
export default function Home() {

    useEffect(() => {
        
    }, []);

    return (
        <>
            <header className="headerHome">
                <div className="logo">
                    <img id="LogoHeader" src={Logo} alt="Logo" />
                </div>
                <nav id="navHeaderHome">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Planos</Link>
                    <Link to='/loginUser'>Login cliente</Link>
                    <Link to='/loginCrister'>Login Crister</Link>
                    <Link id="BtnGratis" to='/loginCrister'>Teste Grátis</Link>
                </nav>
            </header>
            <section className="sectionHome">
                <div className="contentHome">
                    <h1 className="typewriter">Automatize seu processo com Agently</h1>
                    <p>Agende, aprove, publique e mensure em um só lugar — rápido, seguro e 100% automatizado.</p>
                    <button id="BtnTesteGratis"><Link to='/loginCrister'>Teste Grátis</Link></button>
                </div>
                <div className="imageHome">
                    <img src={propaganda} alt="Chatbot Illustration" />
                </div>
            </section>
            <div className="clientes-marquee">
                <div className="marquee-content">
                    <img src={Logo} alt="Cliente 1" />
                    <img src={Logo} alt="Cliente 2" />
                    <img src={Logo} alt="Cliente 3" />
                    {/* Repita os logos para efeito contínuo */}
                    <img src={Logo} alt="Cliente 1" />
                    <img src={Logo} alt="Cliente 2" />
                    <img src={Logo} alt="Cliente 3" />
                </div>
            </div>
            <section className="sectionHomeAgendamento">
                <div className="ImgAgenda">
                    <img src={agenda} alt="Chatbot Illustration" />
                </div>
                <div className="textAgenda">
                    <h2>Ganhe tempo com o agendamento de posts em múltiplos formatos para redes sociais!</h2>
                    <p>
                        Descubra os melhores dias e horários para postar na rede social de seus clientes e 
                        agende posts em todos os formatos aceitos no Instagram!
                    </p>
                    <button id="BtnTesteGratis"><Link to='/loginCrister'>Teste Grátis</Link></button>

                </div>
            </section>
            <section className="depoimentos">
                <div className="ContainerDepoimento">
                    <div className="textDepoimentos">
                        <h2>Resultados que falam por si</h2>
                        <p>Centralize perfis, ganhe horas no seu dia e mostre resultado.</p>
                        <button id="BtnTesteGratis"><Link to='/loginCrister'>Teste Grátis</Link></button>
                    </div>
                    <div className="imageDepoimentos">
                        <img src={depMokup} alt="Chatbot Illustration" />
                    </div>
                </div>
            </section>
        </>
    );
}

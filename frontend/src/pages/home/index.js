import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from './assets/agentlyLogo.webp';
import agenda from './assets/agende.webp';
import propaganda from './assets/propaganda.webp';
import depMokup from './assets/depMokup.webp';
import Androis from './assets/android.webp';
import Ios from './assets/ios.webp';
import Aplication from './assets/aplicatiion.webp';
import Suporte from './assets/suporte.webp';
export default function Home() {

    useEffect(() => {
        
    }, []);

    return (
        <>
            <header className="headerHome">
                <div className="logo">
                    <Link to='/'><img id="LogoHeader" src={Logo} alt="Logo"></img></Link>
                    
                </div>
                <nav id="navHeaderHome">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Planos</Link>
                    <Link to='/loginCrister'>Login</Link>
                    <Link id="BtnGratis" to='/loginCrister'>Teste Grátis</Link>
                </nav>
            </header>
            <section className="sectionHome">
                <div className="contentHome">
                    <h1 className="typewriter">Automatize seu processo <br/> 
                    com Agently</h1>
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
                    <img src={Logo} alt="Cliente 1" />
                    <img src={Logo} alt="Cliente 2" />
                    <img src={Logo} alt="Cliente 3" />
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
            <section className="sectionApllicarion">
                <div className="containerApllication">
                    <div className="textApllication">
                        <h2>Cuide dos seus Clientes de onde estiver!</h2>
                        <p>
                            Com Nosso APLICATIVO seus clientes e sua equipe acompanham todos os processos em tempo REAL.
                            Fala o Download para IOS ou ANDROID.
                        </p>
                        <div className="buttonsLojasApp">
                            <button id="BtnLoja"><Link to='/loginCrister'><img className="imgButtonAplicatiion" src={Androis} alt="icone Loja de APp"></img></Link></button>
                            <br/>
                            <button id="BtnLoja"><Link to='/loginCrister'><img className="imgButtonAplicatiion" src={Ios} alt="icone Loja de APp"></img></Link></button>
                        </div>
                        
                    </div>
                </div>
                <div className="imgAplication">
                    <img src={Aplication} alt="Chatbot Illustration" />
                </div>

            </section>
            <section className="sectionsuporte">
                <div className="containerSuporte">
                    <div className="imageSuporte">
                        <img src={Suporte} alt="Chatbot Illustration" />
                    </div>
                    <div className="textSuporte">
                        <h2>Suporte especializado para você</h2>
                        <p>
                            Nossa equipe está pronta para ajudar você a aproveitar ao máximo nossa plataforma.
                            Entre em contato conosco para qualquer dúvida ou suporte necessário.
                        </p>
                        <button id="BtnTesteGratis"><Link to='/loginCrister'>Teste Grátis</Link></button>
                    </div>
                </div>
            </section>
            <footer className="footerHome">
                <div className="footerContent">
                    <div className="footerSection">
                        <img id="LogoFooter" src={Logo} alt="Logo"></img>
                        <p>Automatize seu processo com Agently</p><br/>
                        <button id="BtnTesteGratis"><Link to='/loginCrister'>Teste Grátis</Link></button>
                    </div>
                    <div className="footerSection">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>Planos</Link></li>
                            <li><Link to='/loginCrister'>Login</Link></li>
                        </ul>
                    </div>
                    <div className="footerSection">
                        <h3>Contato</h3>
                        <p>Email: jv604014@gmail.com</p>
                        <p>Telefone: +55 (11) 93222-3533</p>
                    </div>
                </div>
                <div className="footerBottom">
                    <p>&copy; 2024 Agently. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

import React, { useState } from "react";
import '../dashboard/styles.css';
import HeaderComponente from "../../../componentes/header_componente";
import _01 from '../../../assets/capa_Dashboard/01.webp';
import _02 from '../../../assets/capa_Dashboard/02.webp';
import _03 from '../../../assets/capa_Dashboard/3.webp';
import User from '../../../assets/capa_Dashboard/user.webp';
import Criacao from  '../../../assets/capa_Dashboard/criacao.webp';
import Update from '../../../assets/capa_Dashboard/update.webp'
import Ajustes  from '../../../assets/capa_Dashboard/ajustes.webp';
import { useNavigate } from "react-router-dom";
import Api from '../../../services/api.js';
export default function DashboardColab() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
        sessionStorage.setItem("token", token);
    }
    const Hystory = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [
        _01,
        _02,
        _03,
    ];

    const cards = [
        { img: Criacao, link: "createContent", description: "Create Content" },
        { img: Update, link: "updateMaterial", description: "Atualização de Material" },
        { img: Ajustes, link: "solicitacoes", description: "Ajustes Solicitados"},
        { img: User, link: "buscarCliente", description: "update dados Clientes"}, 
        
        
    ];

    const moveCarousel = (direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };
    // Registrar o service worker
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('/service-worker.js', {scope: '/'})
            .then(async (registration) => {
            // Verifica se já existe uma assinatura
            let existingSubscription = await registration.pushManager.getSubscription();
            console.log(existingSubscription);
            if (existingSubscription) {
                // Envia a assinatura atual para o backend para validar ou atualizar
                await Api.post('/notifications/check', { subscription: existingSubscription });
                console.log('Assinatura já existente verificada.');

                console.log('assinatura atualizada', );
            } else {
                // Requisita a chave pública do servidor
                const { data } = await Api.get('/notificationsKey');

                // Cria nova assinatura
                const newSubscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: data.publicKey
                });

                // Envia nova assinatura ao backend
                await Api.post('/notificationsRegister', {
                token: sessionStorage.getItem('tokenColab'),
                typeUser: 'colab',
                tokenCrister: sessionStorage.getItem('tokenCrister'),
                subscription: newSubscription
                });

                console.log('Nova assinatura criada e registrada.');
            }
            })
            .catch(err => {
            console.error('Erro ao registrar service worker ou assinar:', err);
            });
    };
    // Solicitar permissão para notificações
    if ('Notification' in window) {
        Notification.requestPermission().then(function(permission) {
            console.log('Permissão de notificação:', permission);
            if (permission === 'granted') {
                // Aqui você pode disparar uma notificação de exemplo, se quiser:
                /*new Notification('Notificações ativadas!', {
                    body: 'Você receberá novidades da Cristatus 🚀',
                    icon: '/icon.png' // Opcional: coloque o caminho do seu ícone
                });*/
            }
        });
    }

    return (
        <>
            <HeaderComponente />

            {/* Carrossel */}
            <section className="carousel-container">
                <div className="carousel">
                    <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="carousel-item" />
                </div>
                <button className="prev" onClick={() => moveCarousel(-1)}>&#10094;</button>
                <button className="next" onClick={() => moveCarousel(1)}>&#10095;</button>
            </section>

            {/* Cards */}
            <section className="cards-container">
                {cards.map((card, index) => {
                    async function redirect(){
                        Hystory(`/${card.link}`)

                    }
                    return(
                        <div className="cardDashCrister" key={index}>
                            <div onClick={redirect} className="card-img">
                                <img src={card.img} alt={`Card ${index + 1}`} className="card-img-inner" />
                            </div>
                            <p  className="card-description">{card.description}</p>
                        </div>
                    )
                })}
            </section>            
        </>
    );
}

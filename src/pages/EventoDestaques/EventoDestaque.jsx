import { useState, useEffect } from 'react';
import Styles from './EventoDestaque.module.css';
import codecon from '../../images/codecon.png';

function EventoDestaque() {
    const targetDate = new Date('2025-07-18T09:30:00');

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const difference = targetDate - now;

        let time = {};

        if (difference > 0) {
            time = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            time = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return time;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={Styles.container}>
            <div className={Styles.header}>
                <h2>Eventos de <span>Tecnologia</span></h2>
                <p>Eventos e networking para a comunidade tech</p>
            </div>

            <div className={Styles.card}>
                <h3><strong>Próximo Evento</strong></h3>
                <h4>Live: Carreira em Desenvolvimento Web</h4>
                <p>Com especialistas da área discutindo tendências e oportunidades</p>

                <div className={Styles.content}>
                    <div className={Styles.imagemBloco}>
                        <img src={codecon} alt="Codecon Summit" />
                        <div className={Styles.timer}>
                            <div>{timeLeft.days}<br />Dias</div>
                            <div>{timeLeft.hours}h</div>
                            <div>{timeLeft.minutes}m</div>
                            <div>{timeLeft.seconds}s</div>
                        </div>
                    </div>

                    <div className={Styles.info}>
                        <span className={Styles.presencial}>Presencial</span>
                        <p><strong>Fecha em:</strong> 25/04/2025 às 23:59:00</p>
                        <p><strong>Previsão Início:</strong> 18/07/2025 às 09:30:00</p>
                        <p><strong>Previsão Fim:</strong> 19/07/2025 às 19:00:00</p>
                        <p>Viasoft Experience, São Paulo - SP</p>
                        <a className={Styles.saibaMais} href="https://codecon.dev/summit">Saiba mais ➤</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventoDestaque;

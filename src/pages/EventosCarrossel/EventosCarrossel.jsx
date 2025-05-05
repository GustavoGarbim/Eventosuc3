import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Styles from './EventosCarrossel.module.css';
import evento1 from '../../images/evento1.avif';
import evento2 from '../../images/evento2.png';
import evento3 from '../../images/evento3.png';
import evento4 from '../../images/evento4.jpg';
import evento5 from '../../images/evento5.jpg';

function EventosCarrossel() {
    const eventos = [
        {
            imagem: evento1,
            tipo: 'Presencial',
            titulo: 'Coding Developers',
            data: '25/04/2025 às 23:59:00',
            inicio: '18/07/2025 às 09:30:00',
            fim: '19/07/2025 às 19:00:00',
            local: 'Viasoft Experience, São Paulo - SP',
        },
        {
            imagem: evento2,
            tipo: 'Presencial',
            titulo: 'Hackathon de IA',
            data: '28/04/2025 às 18:00:00',
            inicio: '20/07/2025 às 10:00:00',
            fim: '21/07/2025 às 16:00:00',
            local: 'Espaço Maker, Curitiba - PR',
        },
        {
            imagem: evento3,
            tipo: 'Presencial',
            titulo: 'Feira de Tecnologia Caxias',
            data: '30/04/2025 às 10:00:00',
            inicio: '22/07/2025 às 09:00:00',
            fim: '23/07/2025 às 18:00:00',
            local: 'UCS, Caxias do Sul - RS',
        },
        {
            imagem: evento4,
            tipo: 'Online',
            titulo: 'Hackathon B3: Futuro da IA',
            data: '02/05/2025 às 15:00:00',
            inicio: '24/07/2025 às 14:00:00',
            fim: '24/07/2025 às 16:00:00',
            local: 'Online',
        },
        {
            imagem: evento5,
            tipo: 'Presencial',
            titulo: 'Hackathon WOMEN: In tech',
            data: '05/05/2025 às 09:00:00',
            inicio: '25/07/2025 às 08:00:00',
            fim: '26/07/2025 às 17:00:00',
            local: 'Centro de Eventos, Florianópolis - SC',
        },
    ];

    return (
        <div className={Styles.container}>
            <h2 className={Styles.titulo}>Próximos Eventos</h2>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={3}
                spaceBetween={1}
            >
                {eventos.map((evento, index) => (
                    <SwiperSlide key={index}>
                        <div className={Styles.card}>
                            <img src={evento.imagem} alt={evento.titulo} />
                            <h3 className={Styles.eventoTitulo}>{evento.titulo}</h3>
                            <span className={Styles.tipo}>{evento.tipo}</span>
                            <div className={Styles.info}>
                                <p><strong>Data:</strong> {evento.data}</p>
                                <p><strong>Início:</strong> {evento.inicio}</p>
                                <p><strong>Fim:</strong> {evento.fim}</p>
                                <p><strong>Local:</strong> {evento.local}</p>
                            </div>
                            <a className={Styles.saibaMais} href="#">Saiba mais ➔</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default EventosCarrossel;

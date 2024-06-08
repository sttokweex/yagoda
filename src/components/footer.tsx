import React from "react"; 
import tgSvg from '../assets/img/tg.svg'
import instSvg from '../assets/img/inst.svg'
import emailSvg from '../assets/img/mail.svg'
import viberSvg from '../assets/img/viber.svg'
import numberSvg from '../assets/img/number.svg'
import timeSvg from '../assets/img/time.svg'
import logoSvg from '../assets/img/logo.svg'
export  const Footer:React.FC = () =>{
    return(<div className="block footer">
        <div className="footer_block">
            <div className="footer_info"><div className="footer_title">Информация</div><div className="text"> Главная<br/> Акции<br/> Процедуры<br/> Магазин<br/> Онлайн-запись<br/>Партнёрам<br/> Способы оплаты <br/>Как сделать заказ?</div></div>
            <div className="about"> <div className="footer_title">Контактная информация</div><div className="text_about">ИП Пархутова Алина Евгеньевна<br/>
государственная регистрация<br/> №690867884 от 31.07.2020. <br/>
Логойским горисполкомом<br/>
Защита прав потребителей +375259990755</div></div>
            <div className="socialNet">
                <div className="footer_title">Соц.сети</div>
                <div className="networks"><img src={tgSvg}/><img src={instSvg}/><img src={emailSvg}/><img src={viberSvg}/></div>
                <div className="number_phone"><img src={numberSvg}/> <div className="number">+7-923-223-22-25</div></div>
                <div className="time"><img src={timeSvg}/> <div className="time_text">10:00-20:00, без выходных</div></div>
            </div>
            <div className="logo"><img src={logoSvg}/></div>
        </div>
    </div>)
}
export default Footer
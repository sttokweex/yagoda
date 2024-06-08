import React from "react";
import catalogImage1 from "../assets/img/catalogImage1 copy.svg";
import catalogImage2 from "../assets/img/catalogImage2 copy.svg";
import catalogImage3 from "../assets/img/catalogImage3 copy.svg";
import catalogImage4 from "../assets/img/catalogImage4 copy.svg";
import catalogImage5 from "../assets/img/IMG_3661.png"
import catalogImage6 from "../assets/img/IMG_3662.png"
import { Link } from "react-router-dom";

export const ServiceCatalog:React.FC = ()=>{
    return (<div>
        <div className="navigation"><Link to="/"><p>Главная</p></Link> / <Link to="/service-catalog"><p>Каталог услуг</p></Link></div>
       <div className="title">Каталог услуг</div>
<div style={{width:'150px',borderTop:'1px white solid',marginTop:'15px',marginBottom:'15px'}}></div>
<div className="grid-container">
    <div style={{width:255}}>
        <div className="serv_text">маникюр</div>
        <Link to='/service-catalog/manicure'><img style={{boxShadow:' 0 0 5px white'}} src={catalogImage1} alt="img_manicure"></img></Link>
    </div>
    <div style={{width:255}}>
        <div className="serv_text">парикмахер</div>
        <Link to="/service-catalog//hairdresser"><img style={{boxShadow:' 0 0 5px white'}} src={catalogImage3} alt="img_hairdresser"></img></Link>
    </div>
    <div style={{width:255}}>
        <div className="serv_text">ресницы </div>
        <Link to="/service-catalog//eyelashes"><img style={{boxShadow:' 0 0 5px white'}} src={catalogImage6} alt="img_eyelashes"></img></Link>
    </div>
    <div style={{width:255}}>
        <div className="serv_text">макияж</div>
        <Link to="/service-catalog//makeup"><img style={{boxShadow:' 0 0 5px white'}} src={catalogImage4} alt="img_makeup"></img></Link>
    </div>
    <div style={{width:255}}>
        <div className="serv_text">брови</div>
        <Link to="/service-catalog//brows"><img style={{boxShadow:' 0 0 5px white'}} src={catalogImage2} alt="img_brows"></img></Link>
    </div>
    <div style={{width:255}}>
        <div className="serv_text">барбер</div>
        <Link to="/service-catalog//barber"><img style={{boxShadow:' 0 0 5px white'}} src={catalogImage5} alt="img_barber"></img></Link>
    </div>
</div>



    </div>)
}
export default ServiceCatalog
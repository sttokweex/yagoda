import React ,{useRef} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img/manicure1.svg';
import img2 from '../assets/img/manicure2.svg'
import img3 from '../assets/img/manicure3.svg'
import master1 from '../assets/img/master1.svg'
import master3 from '../assets/img/master3.svg'
import master4 from '../assets/img/master4.svg'
import arrowRSvg from '../assets/img/slide-right2.svg';
import arrowLSvg from '../assets/img/slide-left.svg';
import regSvg from '../assets/img/reg.svg'
import arrowRightSvg from '../assets/img/arrow-right.svg'
import { EmployeeCard } from "../components/employeeCard";
import { Link } from "react-router-dom";
export const Manicure: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
  const goToNextSlide = () => {
    if(sliderRef.current){
    sliderRef.current.slickNext(); 
    }
  };
  const goToPrevSlide = () => {
    if(sliderRef.current){
    sliderRef.current.slickPrev(); 
    }
  };
    const settings = {
        arrows:false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        style:{width:'63%'}, responsive: [
            {
              breakpoint: 960,
              settings: {
                centerMode:true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },{
                breakpoint: 1300,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              
                }
              }
          ],
      };
      const images = [img1,img2,img3,img3]
    return(<div>
        <div className="navigation"><Link to="/"><p>Главная</p></Link> / <Link to="/service-catalog"><p>Каталог услуг</p></Link>/<Link to="/service-catalog/manicure"><p>Маникюр</p></Link></div>
                <div className="title">Маникюр</div>
                    <div className="block" style={{height:'450px'}}>
                        <div className="price_list_text">Прайс-лист</div>
                        <div style={{width:'100px',borderTop:'1px white solid',marginTop:'15px',marginBottom:'15px'}}></div>
    <table className="price">
      <tbody>
        <tr>
          <td >Услуга</td>
          <td >Стоимость (мастер/топ-мастер)</td>
        </tr>
        <tr>
          <td >Комбинированный маникюр</td>
          <td >900₽ / 1100₽</td>
        </tr>
        <tr>
          <td >Комбинированный маникюр с укреплением базой или гелем</td>
          <td >1200₽ / 1400₽</td>
        </tr>
        <tr>
          <td>Комбинированный маникюр с покрытием</td>
          <td>1600₽ / 1800₽</td>
        </tr>
        <tr>
          <td>Снятие чужой работы</td>
          <td>200₽ / 300₽</td>
        </tr>
        <tr>
          <td>Ремонт 1 ногтя</td>
          <td>50₽ / 100₽</td>
        </tr>
        <tr>
          <td>Френч</td>
          <td>400₽ / 600₽</td>
        </tr>
        <tr>
          <td>Дизайн</td>
          <td>от 25₽ / 50₽</td>
        </tr>
        <tr>
          <td>Парафинотерапия</td>
          <td>400₽ / 400₽</td>
        </tr>
      </tbody>
    </table>
    <a href="https://n900730.yclients.com" target="_blank"><div style={{position:'absolute',left:'73%',bottom:'0'}}><img src={regSvg}></img></div></a>
                    </div> 
                    <div className="title" >Фотогалерея 
                    </div>
                    <div style={{width:'200px',borderTop:'1px white solid',marginTop:'15px',marginBottom:'15px'}}></div>
                   <div className="slider_manicure">
                   <button style={{ background: 'transparent', border: 'none',marginRight:'6%' }} onClick={goToPrevSlide}>
  <img src={arrowLSvg} alt="slide" style={{ }} />
</button>
      
                        <Slider ref={sliderRef} {...settings}>
                        {images.map((image, index) => (
            <div key={index} className="slide" style={{width:'231px'}}>
              <img src={image} alt={`Slide ${index + 1}`} style={{justifyContent:'center'}} />
            </div>
          ))}
                        </Slider>
                        <button style={{background: 'transparent', border: 'none', width:'10%'}} onClick={goToNextSlide}>
  <img src={arrowRSvg} alt="slide" style={{ }} />
</button>
                        </div>
                        <div className="block" style={{ height: '600px'}}>
          <div className="title">Мастера</div>
          <div style={{width:'100px',borderTop:'1px white solid',marginTop:'15px',marginBottom:'15px'}}></div>
     
        <div style={{width:'72%',float:'left',textAlign:'end'}}><img src={arrowRightSvg}></img></div>
      
          <div className="empList">
            <EmployeeCard imageSrc={master1} name={'Людмила'} specialization={'Мастер маникюра'} bool={false}/>
            <EmployeeCard imageSrc={master3} name={'Вероника'} specialization={'Мастер маникюра'} bool={false}/>
            <EmployeeCard imageSrc={master4} name={'Алина'} specialization={'Топ-мастер маникюра'} bool={false}/>
          </div>

        </div>
                  
            </div> )
}
export default Manicure
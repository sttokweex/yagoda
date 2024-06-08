import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img/slider.svg';
import starSvg from '../assets/img/star.svg';
import addSvg from '../assets/img/add.svg';
import arrowRSvg from '../assets/img/slide-right.svg';
import topSvg from '../assets/img/top.svg';
import mesSvg from '../assets/img/msg.svg';
import regSvg from '../assets/img/reg.svg';
import master1 from '../assets/img/master1.svg';
import master2 from '../assets/img/master2.svg';
import master3 from '../assets/img/master3.svg';
import master4 from '../assets/img/master4.svg';
import ellipseSvg from '../assets/img/ellipse.svg';
import ellipseFullSvg from '../assets/img/ellipseFull.svg';
import instSvg from '../assets/img/inst.svg';
import katalogSvg from '../assets/img/katalog.svg';
import catalogImage1 from '../assets/img/catalogImage1.svg';
import catalogImage2 from '../assets/img/catalogImage2.svg';
import catalogImage3 from '../assets/img/catalogImage3.svg';
import catalogImage4 from '../assets/img/catalogImage4.svg';

import { EmployeeCard } from '../components/employeeCard';

const First: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    style: { width: '80%' },
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const images = [img1, img1, img1];

  return (
    <div className="home-page">
      <div className="home-page__slider-wrapper">
        <a
          href="https://n900730.yclients.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="home-page__registration-link">
            <img src={regSvg} alt="Registration" />
          </div>
        </a>
        <Slider {...settings} className="home-page__main-slider">
          {images.map((image, index) => (
            <div key={index} className="home-page__slide">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="home-page__slide-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="block home-page__about ">
        <div className="block__title">Почему выбирают нас?</div>
        <div className="block__ellipse">
          <img src={ellipseSvg} alt="Ellipse" />
        </div>
        <div className="block__grid">
          <div className="block__grid-item">
            Экспертные
            <br /> мастера{' '}
          </div>
          <div
            style={{
              gridColumn: '2',
              gridRow: '1',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '28px',
                height: '28px',
                background: 'linear-gradient(90deg, #E4DAC9 0%, #D8BA9E 100%)',
                boxShadow: '0px 4px 10px rgba(228, 218, 201, 0.5)',
                left: '-3%',
                bottom: '30%',
                borderRadius: '50%',
              }}
            ></div>
          </div>
          <div style={{ gridColumn: '3', gridRow: '1', width: '100%' }}>
            Индивидуальный подход
          </div>
          <div style={{ gridColumn: '5', gridRow: '1', width: '100%' }}>
            Современное оборудование
          </div>
          <div
            style={{
              gridColumn: '6',
              gridRow: '1',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '47px',
                height: '47px',
                top: '-40%',
                left: '10%',
                background:
                  'linear-gradient(344.63deg, #E4DAC9 7.82%, #D8BA9E 92.18%)',
                boxShadow: '0px 4px 10px rgba(228, 218, 201, 0.5)',
                borderRadius: '50%',
              }}
            ></div>
          </div>
          <div style={{ gridColumn: '7', gridRow: '1', width: '100%' }}>
            Премиальные продукты
          </div>
          <div
            style={{
              gridColumn: '2',
              gridRow: '2',
              width: '100%',
              alignSelf: 'end',
              paddingBottom: '22px',
            }}
          >
            Уютная атмосфера
          </div>
          <div
            style={{
              gridColumn: '3',
              gridRow: '2',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '47px',
                height: '47px',
                left: '-6%',
                bottom: '-15%',
                background:
                  'linear-gradient(143.07deg, #E4DAC9 5.33%, #D8BA9E 94.67%)',
                boxShadow: '0px 4px 10px rgba(228, 218, 201, 0.5)',
                borderRadius: '50%',
              }}
            ></div>
          </div>
          <div
            style={{
              gridColumn: '6',
              gridRow: '2',
              width: '100%',
              alignSelf: 'end',
            }}
          >
            Непревзойденный сервис
          </div>
          <div
            style={{
              gridColumn: '7',
              gridRow: '2',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '28px',
                height: '28px',
                background: 'linear-gradient(90deg, #E4DAC9 0%, #D8BA9E 100%)',
                boxShadow: '0px 4px 10px rgba(228, 218, 201, 0.5)',
                left: '5%',
                bottom: '20%',
                borderRadius: '50%',
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            marginTop: '8%',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.scrollTo(window.scrollX, 0);
          }}
        >
          <img src={topSvg} alt="top" style={{}} />
        </div>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            marginTop: '8%',
            float: 'right',
            cursor: 'pointer',
          }}
        >
          <img src={mesSvg} alt="top" style={{}} />
        </div>
      </div>
      <div className="block" style={{ height: '650px' }}>
        {' '}
        <div className="title">Процедуры</div>
        <div
          style={{
            width: '99%',
            textAlign: 'end',
            marginBottom: '10px',
            marginTop: '10px',
          }}
        >
          {' '}
          <Link to="/catalog" title="Каталог">
            <img src={katalogSvg}></img>
          </Link>
        </div>
        <div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <div
              style={{ width: '600px', height: '600px', marginRight: '20px' }}
            >
              <Link to="/page1">
                <img
                  src={catalogImage1}
                  alt="Catalog 1"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Link>
            </div>
            <div>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    width: '381px',
                    height: '381px',
                    marginRight: '10px',
                  }}
                >
                  <Link to="/page2">
                    <img
                      src={catalogImage2}
                      alt="Catalog 2"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Link>
                </div>
                <div style={{ width: '381px', height: '381px' }}>
                  <Link to="/page3">
                    <img
                      src={catalogImage3}
                      alt="Catalog 3"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div
                style={{ width: '772px', height: '196px', marginTop: '10px' }}
              >
                <Link to="/page4">
                  <img
                    src={catalogImage4}
                    alt="Catalog 4"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block" style={{ height: '400px' }}>
        <div className="title">Отзывы наших гостей</div>
        <div className="revSlider" style={{ display: 'flex' }}>
          <Slider ref={sliderRef} {...settings2}>
            <div>
              <div
                style={{
                  height: '204px',
                  maxWidth: 500,
                  minWidth: 500,
                  position: 'relative',
                  marginTop: '5%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  className="Rectangle38"
                  style={{
                    width: '500px',
                    height: 204,
                    position: 'absolute',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    background:
                      'radial-gradient(50% 50% at 50% 50%, #12332E 0%, rgba(6, 19, 17, 0.5) 100%)',
                    border: '1px #E4DAC9 solid',
                  }}
                />
                <div
                  style={{
                    width: '57%',
                    height: 70,
                    left: '36%',
                    top: 20,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img src={starSvg} alt="star" />
                </div>
                <div
                  style={{
                    width: '263px',
                    height: 70,
                    left: '36%',
                    top: 75,
                    position: 'absolute',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '11px',
                    lineHeight: '170%',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#E4DAC9',
                  }}
                >
                  Замечательный салон! Всегда все чистенько уютно, кофе
                  вкусняшки, качество услуг на высшем уровне, хожу сюда очень
                  давно.
                </div>
                <div
                  style={{
                    width: '82px',
                    height: '20px',
                    left: '36%',
                    top: 150,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#E4DAC9',
                    fontSize: '11px',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '1.7',
                    fontStyle: 'normal',
                    background:
                      'linear-gradient(90deg, #E4DAC9 0%, #D8BA9E 100%)',
                    WebkitBackgroundClip: 'text',

                    backgroundClip: 'text',
                    wordBreak: 'break-word',
                  }}
                >
                  Анна Котлова
                </div>
                <div
                  className="052024"
                  style={{
                    left: '80%',
                    top: 150,
                    position: 'absolute',
                    color: '#E4DAC9',
                    fontSize: '11px',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '19px',
                    display: 'flex',
                    alignItems: 'center',
                    background:
                      'linear-gradient(90deg, #E4DAC9 0%, #D8BA9E 100%)',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  23.05.2024
                </div>
                <img
                  className="Ellipse8"
                  alt="logo"
                  style={{
                    width: 94,
                    height: 94,
                    left: '5%',
                    top: 52,
                    position: 'absolute',
                    boxShadow: '0px 4px 10px rgba(228, 218, 201, 0.40)',
                    borderRadius: '50%',
                    filter:
                      'drop-shadow(0px 4px 10px rgba(228, 218, 201, 0.4))',
                  }}
                  src="https://via.placeholder.com/94x94"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  height: '204px',
                  maxWidth: 500,
                  minWidth: 500,
                  position: 'relative',
                  marginTop: '5%',
                }}
              >
                <div
                  className="Rectangle38"
                  style={{
                    width: 500,
                    height: 204,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
                    background:
                      'radial-gradient(ellipse at center, rgba(228, 218, 201, 0.05) 0%,rgba(1,1,1,0.28) 80%)',
                    border: '1px #E4DAC9 solid',
                  }}
                />
                <div
                  style={{
                    width: '57%',
                    height: 70,
                    left: '36%',
                    top: 20,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img src={starSvg} alt="star" />
                </div>
                <div
                  style={{
                    width: '263px',
                    height: 70,
                    left: '36%',
                    top: 75,
                    position: 'absolute',
                    color: '#7D7D7D',
                    fontFamily: 'ROBOTO',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '11px',
                    lineHeight: '170%',
                  }}
                >
                  Спасибо мастеру Елене за стрижку :3 Очень рада, что на районе
                  есть действительно хорошие места.
                </div>
                <div
                  style={{
                    width: '82px',
                    height: '20px',
                    left: '36%',
                    top: 150,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#E4DAC9',
                    fontSize: '11px',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '1.7',
                    fontStyle: 'normal',
                    background:
                      'linear-gradient(90deg, #E4DAC9 0%, #D8BA9E 100%)',
                    WebkitBackgroundClip: 'text',

                    backgroundClip: 'text',
                    wordBreak: 'break-word',
                  }}
                >
                  Анна Котлова
                </div>
                <div
                  className="052024"
                  style={{
                    left: '80%',
                    top: 150,
                    position: 'absolute',
                    color: '#E4DAC9',
                    fontSize: '11px',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '19px',
                    display: 'flex',
                    alignItems: 'center',
                    background:
                      'linear-gradient(90deg, #E4DAC9 0%, #D8BA9E 100%)',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  12.05.2024
                </div>
                <img
                  className="Ellipse8"
                  alt="logo"
                  style={{
                    width: 94,
                    height: 94,
                    left: '5%',
                    top: 52,
                    position: 'absolute',
                    boxShadow: '0px 4px 10px rgba(228, 218, 201, 0.40)',
                    borderRadius: '50%',
                  }}
                  src="https://via.placeholder.com/94x94"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  height: '204px',
                  maxWidth: 500,
                  minWidth: 500,
                  position: 'relative',
                  marginTop: '5%',
                }}
              >
                <div
                  className="Rectangle38"
                  style={{
                    width: 500,
                    height: 204,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
                    background:
                      'radial-gradient(ellipse at center, rgba(228, 218, 201, 0.05) 0%,rgba(1,1,1,0.28) 80%)',
                    border: '1px #E4DAC9 solid',
                  }}
                />
                <div
                  style={{
                    width: '57%',
                    height: 70,
                    left: '36%',
                    top: 20,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img
                    src={starSvg}
                    alt="star"
                    style={{ marginRight: '5px' }}
                  />
                  <img src={starSvg} alt="star" />
                </div>
                <div
                  style={{
                    width: '263px',
                    height: 70,
                    left: '36%',
                    top: 75,
                    position: 'absolute',
                    color: '#7D7D7D',
                    fontFamily: 'ROBOTO',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '11px',
                    lineHeight: '170%',
                  }}
                >
                  Спасибо мастеру Елене за стрижку :3 Очень рада, что на районе
                  есть действительно хорошие места.
                </div>
                <div
                  style={{
                    width: '82px',
                    height: '20px',
                    left: '36%',
                    top: 150,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#E4DAC9',
                    fontSize: '11px',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '1.7',
                    fontStyle: 'normal',
                    background:
                      'linear-gradient(90deg, #E4DAC9 0%, #D8BA9E 100%)',
                    WebkitBackgroundClip: 'text',

                    backgroundClip: 'text',
                    wordBreak: 'break-word',
                  }}
                >
                  Анна Котлова
                </div>
                <div
                  className="052024"
                  style={{
                    left: '80%',
                    top: 150,
                    position: 'absolute',
                    color: '#E4DAC9',
                    fontSize: '11px',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '19px',
                    display: 'flex',
                    alignItems: 'center',
                    background:
                      'linear-gradient(90deg, #E4DAC9 0%, #D8BA9E 100%)',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  12.05.2024
                </div>
                <img
                  className="Ellipse8"
                  alt="logo"
                  style={{
                    width: 94,
                    height: 94,
                    left: '5%',
                    top: 52,
                    position: 'absolute',
                    boxShadow: '0px 4px 10px rgba(228, 218, 201, 0.40)',
                    borderRadius: '50%',
                  }}
                  src="https://via.placeholder.com/94x94"
                />
              </div>
            </div>
          </Slider>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              marginLeft: '10%',
            }}
            onClick={goToNextSlide}
          >
            <img src={arrowRSvg} alt="slide" style={{}} />
          </button>
        </div>
        <a
          href="https://2gis.ru/novosibirsk/geo/70000001069879080"
          target="_blank"
        >
          <button style={{ marginTop: '2%', border: 'none', height: '37px' }}>
            <img src={addSvg} alt="add" />
          </button>
        </a>
      </div>
      <div className="block" style={{ height: '600px' }}>
        <div className="title">Мастера</div>
        <div style={{ position: 'absolute', right: 0, top: '250%' }}>
          <img src={ellipseSvg}></img>
        </div>
        <div className="empList">
          <EmployeeCard
            imageSrc={master1}
            name={'Людмила'}
            specialization={'Мастер маникюра'}
          />
          <EmployeeCard
            imageSrc={master2}
            name={'Елена'}
            specialization={'Парикмахер-колорист'}
          />
          <EmployeeCard
            imageSrc={master3}
            name={'Вероника'}
            specialization={'Лешмейкер'}
          />
          <EmployeeCard
            imageSrc={master4}
            name={'Алина'}
            specialization={'Бровист'}
          />
        </div>
      </div>
      <div className="block" style={{ height: '600px' }}>
        <div className="title">Контакты</div>
        <div className="contact">
          <div className="frame">
            <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3Ac5922b62b081c15152fe6985b7922f443f64bf9a13424d17a57feafd6edf5ebd&amp;source=constructor"
              width="100%"
              height="400"
            ></iframe>
          </div>
          <div className="info">
            <div className="buisiness_details">
              <div className="contact_header">Адрес</div>
              <div style={{ position: 'absolute', right: 0 }}>
                <img src={ellipseFullSvg}></img>
              </div>
              <div className="contact_info">г.Новосибирск, ул.Ошанина, д.3</div>
              <div className="contact_header">Номер для связи</div>
              <div className="contact_info">+7-923-223-22-25</div>
              <div className="contact_header">График работы</div>
              <div style={{ position: 'absolute', right: 0 }}>
                <img src={ellipseSvg}></img>
              </div>
              <div className="contact_info">10:00-20:00, без выходных</div>
            </div>
            <div className="social">
              <div className="network">Мы в соц.сетях</div>
              <div className="inst">
                <a href="#" className="inst">
                  <img src={instSvg} alt="inst" />
                </a>
                <a href="#" className="inst">
                  <img src={instSvg} alt="inst" />
                </a>
                <a href="#" className="inst">
                  <img src={instSvg} alt="inst" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSwiper from '../Hooks/useSwiper';
import 'swiper/swiper.min.css'; // Import Swiper styles

const Brand = () => {
  let brands = [
    './Skillminds_Dev_Website/assets/img/brand/brand_8_1.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_2.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_3.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_4.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_5.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_1.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_2.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_3.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_4.svg',
    './Skillminds_Dev_Website/assets/img/brand/brand_8_5.svg',
  ];

  // Swiper settings
  const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 24,
    speed:1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: false,
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 5 },
    },
  };

  // Use the custom hook
  useSwiper(swiperParams);

  return (
    <div className="brand-sec8 bg-title overflow-hidden">
      <div className="container th-container4">
        <div className="slider-area text-center">
          <h2 className="tw-text-white">Our Clients</h2>
          <Swiper {...swiperParams}>
            {brands.map((src, index) => (
              <SwiperSlide key={index}>
                <a href="" className="brand-box style4">
                  <img src={src} alt="Brand Logo" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brand;

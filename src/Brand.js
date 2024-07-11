import { useEffect } from "react";
import $ from "jquery";

const Brand = () => {
    let brands= [
        'assets/img/brand/brand_8_1.svg',
        'assets/img/brand/brand_8_2.svg',
        'assets/img/brand/brand_8_3.svg',
        'assets/img/brand/brand_8_4.svg',
        'assets/img/brand/brand_8_5.svg',
        'assets/img/brand/brand_8_1.svg',
        'assets/img/brand/brand_8_2.svg',
        'assets/img/brand/brand_8_3.svg',
        'assets/img/brand/brand_8_4.svg',
        'assets/img/brand/brand_8_5.svg',

    ]

    const brand_img=brands.map((src,index)=>(
        <div className="swiper-slide" key={index}>
                            <a href="" className="brand-box style4">
                                <img src={src} alt="Brand Logo" />

                            </a>
                        </div>
    ));

    useEffect(() => {
        onePageNav('.onepage-nav');
        onePageNav('.scroll-down');
        
      }, []);
    return ( 
        // Brand Area  

    <div className="brand-sec8 bg-title overflow-hidden ">
        <div className="container th-container4">
            <div className="slider-area text-center">
            <h2 className="tw-text-white">Our Partners</h2>
                <div className="swiper th-slider" id="brandSlider3" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5"}}}'>
                    <div className="swiper-wrapper">
                       {brand_img}
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
function onePageNav(element) {
    if ($(element).length > 0) {
      $(element).each(function () {
        var link = $(this).find('a');
        $(this).find(link).each(function () {
          $(this).on('click', function (event) {
            var href = $(this).attr('href');
            if (href && href.startsWith('/')) {
              // Skip handling for React Router links
              return;
            }
            
            var target = $(this.getAttribute('href'));
            if (target.length) {
              event.preventDefault();
              $('html, body').stop().animate({
                scrollTop: target.offset().top - 10
              }, 1000);
            }
          });
        });
      });
    }
  }
export default Brand;
import Image from "next/image"
import { useRef, useEffect } from "react";
import { Box, Heading, Container, Button } from "theme-ui";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Autoplay } from "swiper/modules";


SwiperCore.use([Autoplay]);


const Items = () => {

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    const swiperContainer = swiperInstance.el;

    const handleMouseLeave = () => {
      swiperInstance.autoplay.stop();
    };

    const handleMouseEnter = () => {
      swiperInstance.autoplay.start();
    };

    swiperContainer.addEventListener('mouseenter', handleMouseEnter);
    swiperContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      swiperContainer.removeEventListener('mouseenter', handleMouseEnter);
      swiperContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  return (
    <Box sx={{
    }}>
      <Container>
        <Heading sx={{
          marginTop: '169px',
        }}>Buy quality & affordable second-hand household items
        </Heading>
      </Container>
      <br />
      <br />
      <Box sx={{
        width: '100%',
        h2: {
          my: '80px',
        }

      }}>

        <Box sx={{
          position: "relative",
          ".swiper-slide": {
            display: "block",
          },
          padding: '0px',
          margin: '0px',
          display: 'flex',
          width: '100%',
          overflow: 'hidden',
          gap: '20px',
          img: {
            height: ['460px',null,null,'700px'],
            width: ['90%',null,null,'100%'],
            borderRadius: '10px',
            objectFit: 'cover',
            mx:'auto'
          }
        }}>
          <Swiper
            spaceBetween={0}
            ref={swiperRef}
            centeredSlides={true}
            centeredSlidesBounds
            effect="slide"
            preventClicks={false}
            preventClicksPropagation={false}
            speed={3000}
            grabCursor={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 5,
                slidesPerGroup: 2

              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 17,
                slidesPerGroup: 2

              },
            }}
            modules={[Autoplay]}
          >

            <SwiperSlide>
              <Image src="/assets/items/1.jpg" alt="img" width={600} height={200} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/assets/items/2.jpg" alt="img" width={600} height={200} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/assets/items/3.jpg" alt="img" width={600} height={200} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/assets/items/4.jpg" alt="img" width={600} height={200} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/assets/items/5.jpg" alt="img" width={600} height={200} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/assets/items/6.jpg" alt="img" width={600} height={200} />
            </SwiperSlide>

          </Swiper>

          <Box
            className="absolute flex justify-between items-center w-[100%] right-0 left-0 mx-auto z-30"
            sx={{
              top: "45%",
              height: "fit-content",
              mx:'auto',
              display: ['flex', null, null, 'none']
            }}
          >
            <Box
              onClick={() => {
                if (
                  swiperRef.current !== null &&
                  swiperRef.current !== undefined
                ) {
                  return swiperRef.current.swiper.slidePrev();
                }
              }}
            >
              <svg width="76" height="88" viewBox="0 0 76 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2318_1473)">
                  <rect width="48" height="48" rx="24" transform="matrix(-1 0 0 1 56 20)" fill="white" />
                  <path d="M34.6666 36L27.6094 43.0572C27.0887 43.5779 27.0887 44.4221 27.6094 44.9428L34.6666 52" stroke="#333333" stroke-width="2" stroke-linecap="round" />
                </g>
                <defs>
                  <filter id="filter0_d_2318_1473" x="-12" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2318_1473" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2318_1473" result="shape" />
                  </filter>
                </defs>
              </svg>

            </Box>
            <Box
              onClick={() => {
                if (
                  swiperRef.current !== null &&
                  swiperRef.current !== undefined
                ) {
                  
                  return swiperRef.current.swiper.slideNext();
                }
              }}
            >
              <svg width="76" height="88" viewBox="0 0 76 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2319_1468)">
                  <rect x="20" y="20" width="48" height="48" rx="24" fill="white" />
                  <path d="M41.3334 36L48.3906 43.0572C48.9113 43.5779 48.9113 44.4221 48.3906 44.9428L41.3334 52" stroke="#333333" stroke-width="2" stroke-linecap="round" />
                </g>
                <defs>
                  <filter id="filter0_d_2319_1468" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2319_1468" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2319_1468" result="shape" />
                  </filter>
                </defs>
              </svg>

            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default Items;
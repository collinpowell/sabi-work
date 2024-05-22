import Image from "next/image"
import { useRef, useState } from "react";
import { Box, Heading, Container } from "theme-ui";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";


const Items = () => {
  const swiper = useSwiper();

  const swiperRef = useRef<any>(null);

  return (
    <Box sx={{
      display: ['none', null, null, 'contents']
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
          padding: '0px',
          margin: '0px',
          display: 'flex',
          width: '100%',
          overflow: 'hidden',
          gap: '20px',
          img: {
            height: '700px',
            width:'100%',
            borderRadius:'10px',
            objectFit:'cover'
          }
        }}>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            centeredSlidesBounds
            onSwiper={(swiper) => {
              if (swiperRef.current) {
                swiperRef.current = swiper;
              }
            }}
            effect="slide"
            preventClicks={false}
            preventClicksPropagation={false}
            speed={1200}
            grabCursor={true}
            //bounce={true}
            ref={swiperRef}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 17,
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

        </Box>
      </Box>
    </Box>
  );
}

export default Items;
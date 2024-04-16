'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { mainSlider } from '@/constants';

const MainSlider = () => {
  return (
    <section className="slider__main box left">
      <h2 className="hidden">슬라이드</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={'auto'}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {mainSlider.map((slider, index) => (
          <SwiperSlide key={index}>
            <Link href={slider.link} target='_blank'>
              <div className="slider__wrap">
                <h3>
                  <span>{slider.desc[0]}</span>
                  {slider.desc[1]}
                </h3>
                <Image src={slider.src} width={1280} height={264} alt={slider.desc.join(" ")} />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSlider;
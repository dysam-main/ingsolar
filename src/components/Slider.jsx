import React from "react";
import WorkCard from "../commons/WorkCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider=({content,visibles})=>{
    const slides=visibles||3
    
    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={slides}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
        >
            {content?.map((servicio)=><SwiperSlide key={servicio.nombre}><WorkCard content={servicio}/></SwiperSlide>)}
        </Swiper>
      );

}

export default Slider
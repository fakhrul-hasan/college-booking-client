import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import FeatureSection from './FeatureSection';
import PopularSection from './PopularSection';

const Home = () => {
    return (
        <div>
            <Swiper
            slidesPerView={1}
            centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full min-h-screen bg-no-repeat bg-cover bg-center bg-slider-1 flex flex-col items-center justify-center'>
                <h3 className='font-bold text-4xl text-white'>My College Booking</h3>
                <p className='text-white text-xl'>Will guide your educational needs and knowledge online !</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full min-h-screen bg-no-repeat bg-cover bg-center bg-slider-2 flex flex-col items-center justify-center'>
                <h3 className='font-bold text-4xl text-white'>My College Booking</h3>
                <p className='text-white text-xl'>Will guide your educational needs and knowledge online !</p>
            </div>
        </SwiperSlide>
      </Swiper>
      <FeatureSection />
      <PopularSection />
        </div>
    );
};

export default Home;
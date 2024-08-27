import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function SliderPhotos() {
	return (
		<Swiper
			pagination={{
				dynamicBullets: true,
			}}
			navigation={true}
			modules={[Navigation, Pagination]}
			className='mySwiper'
		>
			<SwiperSlide>
				<img src='./slider/1.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/2.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/3.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/4.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/5.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/6.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/7.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/8.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/9.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/10.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/11.jpg' alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='./slider/12.jpg' alt='' />
			</SwiperSlide>
		</Swiper>
	);
}

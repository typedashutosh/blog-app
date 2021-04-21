import { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import { Typography, makeStyles } from '@material-ui/core'
interface ICarousel {
  title: string
  children: ReactElement[]
}
const useStyles = makeStyles({
  slide: {
    width: 'fit-content',
    margin: '2rem 0 2rem'
  }
})
SwiperCore.use([Navigation, Pagination, Autoplay])

export const Slides: FC<ICarousel> = ({ title, children }): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h5'>{title}</Typography>
      <Swiper
        loop
        slidesPerView='auto'
        spaceBetween={25}
        freeMode={true}
        navigation
        pagination={{
          type: 'bullets',
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {children.map((slide) => (
          <SwiperSlide key={slide.key} className={classes.slide}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export const Skeleton: FC<{}> = ({}): JSX.Element => {
  return (
    <Swiper
      loop={true}
      spaceBetween={25}
      slidesPerView={1}
      navigation={{}}
      pagination={{
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div style={{ height: '300px', background: '#f0f0f0' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#f0f0f0' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#f0f0f0' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#f0f0f0' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#f0f0f0' }}></div>
      </SwiperSlide>
    </Swiper>
  )
}

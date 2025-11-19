'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { achievementSlides } from './data';

import 'swiper/css';
import 'swiper/css/pagination';

export default function AchievementsCarousel() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Showcase"
        title="Recent Achievements"
        subtitle="Momentum fueled by patents, grants, and national recognitions."
      />
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        className="!pb-10"
      >
        {achievementSlides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <motion.div
              className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 to-white/0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={480}
                  height={280}
                  className="h-48 w-full object-contain p-6"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{slide.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{slide.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}



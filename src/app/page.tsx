"use client";

import React from "react";
import { Header } from "@/components/ui/header";
import { FittingPage } from "./pages/fitting";
import { AboutPage } from "./pages/about";
import { CompanyPage } from "./pages/company";
import { ContactPage } from "./pages/contact";
import { LogosPage } from "./pages/logos";
import { Imprint } from "./pages/imprint";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import config from "../../next.config.mjs";

// Import Swiper styles
import 'swiper/css';


export default function Home() {
  return (
    <>
      { // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        // <link rel="manifest" href="/site.webmanifest">
        // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        // <meta name="msapplication-TileColor" content="#da532c">
        // <meta name="theme-color" content="#000000"></meta>
        // </meta>
      }
      <Header />
      <main>

        {//<AuroraBackground />
        }

        <div
          className="relative flex flex-col  items-center justify-center text-slate-950 overflow-hidden"
        >
          <div style={{ maxWidth: 'calc(min(3000px, 400%))', marginTop: 64 }} className="bg-black">

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={3}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
              autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
              centeredSlides={true}
              className="border-b border-neutral-200 dark:border-white/[0.1]"
            >
              <SwiperSlide>
                {/* <Image src="/clubs/_DSF1731.webp" width={100} height={100} alt="golf-club" /> */}
                <img src={`${config.basePath}/clubs/_DSF1731.webp`} width={1000} alt="golf-club" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${config.basePath}/clubs/edited_clubs.webp`} width={1000} alt="golf-club" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${config.basePath}/clubs/_DSF1747.webp`} width={1000} alt="golf-club" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${config.basePath}/clubs/_DSF1737.webp`} width={1000} alt="golf-club" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${config.basePath}/clubs/_DSF1740.webp`} width={1000} alt="golf-club" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${config.basePath}/clubs/_DSF1743.webp`} width={1000} alt="golf-club" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col items-center w-[100%] bg-white/[0.8] dark:bg-neutral-900/[0.8] border-y border-neutral-200 dark:border-white/[0.1]" style={{ overflow: 'hidden', position: 'relative' }}>
            <div className="py-28">
              <div className="font-semibold text-4xl dark:text-white">
                EASY GOLFEN
              </div>
              <div className="font-light text-4xl dark:text-white pl-6">
                MIT
              </div>
              <div className="font-semibold text-4xl dark:text-white pl-12">
                EASY-GOLF
              </div>
            </div>
            <div style={{ position: 'absolute', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img alt="Logo" loading="lazy" decoding="async" data-nimg="1" src="/easy-golf_logo_white.svg" style={{ color: 'transparent', opacity: 0.1, width: '600px', minWidth: '600px' }} />
            </div>
          </div>

          <FittingPage />
          <AboutPage />
          <LogosPage />
          <Imprint />
          <CompanyPage />
          <ContactPage />

        </div>
      </main>
    </>
  );
}

"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Header } from "@/components/ui/header";
import { FittingPage } from "./pages/fitting";
import { AboutPage } from "./pages/about";
import { CompanyPage } from "./pages/company";
import { ContactPage } from "./pages/contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from "next/image";

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
          <div style={{ maxWidth: '140%', marginTop: 64 }} className="bg-black">

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
                <Image src="/golfwerkstatt/clubs/_DSF1731.webp" alt="golf-club" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/golfwerkstatt/clubs/edited_clubs.webp" alt="golf-club" />
              </SwiperSlide>/
              <SwiperSlide>/
                <Image src="/golfwerkstatt/clubs/_DSF1746.webp" alt="golf-club" />
              </SwiperSlide>/
              <SwiperSlide>/
                <Image src="/golfwerkstatt/clubs/_DSF1747.webp" alt="golf-club" />
              </SwiperSlide>/
              <SwiperSlide>/
                <Image src="/golfwerkstatt/clubs/_DSF1737.webp" alt="golf-club" />
              </SwiperSlide>/
              <SwiperSlide>/
                <Image src="/golfwerkstatt/clubs/_DSF1740.webp" alt="golf-club" />
              </SwiperSlide>/
              <SwiperSlide>/
                <Image src="/golfwerkstatt/clubs/_DSF1743.webp" alt="golf-club" />
              </SwiperSlide>

            </Swiper>
          </div>


          <div className="font-extralight text-4xl dark:text-white pt-80 pb-4">
            BODY GEOMETRY FITTING
          </div>
          <TextGenerateEffect words={[
            { word: "Deine", bold: true },
            { word: "Geometrie", bold: false },
            { word: "-", bold: false },
            { word: "Deine", bold: true },
            { word: "Schläger", bold: false }
          ]}
            className="text-6xl pb-80"
          />

          {/*<div className="flex flex-col items-center gap-8 w-[100%] bg-black pt-16 pb-16 backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.4] border-y border-neutral-200 dark:border-white/[0.1]">*/}
          {/*<div className="flex flex-col items-center gap-8 w-[100%] bg-black pt-12 pb-12 backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.3] border-y border-neutral-200 dark:border-white/[0.1]">
            <img alt="Logo" loading="lazy" width="72" height="72" decoding="async" data-nimg="1" src="golfwerkstatt_logo_white.svg" style={{ color: 'transparent' }} />
          </div>
          */}

          <FittingPage />
          <AboutPage />
          <CompanyPage />
          <ContactPage />

        </div>
      </main>
    </>
  );
}

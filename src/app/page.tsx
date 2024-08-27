"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Header } from "@/components/ui/header";
import { Logo } from "@/components/ui/logo";
import { FittingPage } from "./pages/fitting";
import { AboutPage } from "./pages/about";
import { CompanyPage } from "./pages/company";
import { ContactPage } from "./pages/contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from "next/image";

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


          <div
            className="flex flex-row justify-center w-[100%] bg-white/[0.8] dark:bg-neutral-900/[0.8] border-b border-neutral-200 dark:border-white/[0.1]"
          >
            <div
              className="flex flex-wrap py-4 px-4 gap-x-4 md:gap-x-16 md:py-16"
              style={{
                maxWidth: 'calc(min(1600px, 100%))',
                justifyContent: 'center',
              }}>
              <Logo href='https://mizunogolf.com/de' src='/partners/mizuno-logo.svg' />
              <Logo href='https://www.grindworks.jp/en/#' src='/partners/grindworks-logo.png' />
              <Logo href='https://kbsgolfshafts.com' src='/partners/kbs-logo.png' />
              <Logo href='https://www.truetempersports.com/en-us/golf' src='/partners/true-temper-logo.svg' />
              <Logo href='https://nipponshaft.com' src='/partners/nippon-logo-01.png' />
              <Logo href='https://mitsubishigolf.com' src='/partners/mitsubishi-logo.png' />
              <Logo href='https://www.ustmamiya.com' src='/partners/ust-mamiya-logo.png' />
              <Logo href='https://www.aldila.com' src='/partners/aldila-logo-white.svg' />
              <Logo href='https://www.golfpride.com' src='/partners/golfpride-logo-white.svg' />
              <Logo href='https://www.lamkingrips.com' src='/partners/lamkin-logo.png' />
              <Logo href='https://www.winngrips.com' src='/partners/winn-grips-logo-white.png' />
            </div>
          </div>


          <div className="font-extralight text-4xl dark:text-white pt-60 pb-4">
            Schläger nach Maß
          </div>
          <TextGenerateEffect words={[
            { word: "Deine", bold: true },
            { word: "Geometrie", bold: false },
            { word: "-", bold: false },
            { word: "Deine", bold: true },
            { word: "Schläger", bold: false }
          ]}
            className="text-6xl pb-60"
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

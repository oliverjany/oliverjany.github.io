"use client";

import { PageFrame } from "@/components/ui/pageFrame";

export const ContactPage = () => (
  <PageFrame className="" light>
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        className="order-1"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?q=Antonifeldstraße+23,+Pinkafeld,+Austria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
      </iframe>

      <div className="order-0 flex flex-col gap-4">

        <div className="text-4xl font-medium dark:text-white pb-4 lg:pb-8">
          Kontakt
        </div>

        <div className="flex gap-3 items-center text-lg font-light text-black dark:text-white">
          <span className="material-symbols-outlined text-3xl text-black dark:text-white">event_available</span>
          Termine auf Anfrage
        </div>
        <div className="flex gap-3 items-center text-lg font-light text-black dark:text-white">
          <span className="material-symbols-outlined text-3xl text-black dark:text-white">location_on</span>
          <div>
            <div>Inhaber: Ing. Oliver Jany</div>
            <div>Antonifeldstraße 23</div>
            <div>A-7423 Pinkafeld</div>
          </div>
        </div>
        <a href="tel:+43-699-17417317"
          className="flex gap-3 items-center text-lg font-light text-black dark:text-white"
        >
          <span className="material-symbols-outlined text-3xl text-black dark:text-white">call</span>
          +43 699 17417317
        </a>
        <a href="mailto:office@easy-golf.at"
          className="flex gap-3 items-center text-lg font-light text-black dark:text-white"
        >
          <span className="material-symbols-outlined text-3xl text-black dark:text-white">outgoing_mail</span>
          office@easy-golf.at
        </a>

      </div>
    </div>
  </PageFrame>
);

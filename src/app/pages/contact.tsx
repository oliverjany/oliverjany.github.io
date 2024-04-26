"use client";

export const ContactPage = () => (
  <div id="contact" className="flex flex-col items-center w-[100%] gap-8 pt-16 pb-16">
    <div className="flex flex-col max-w-screen-xl">
      <div className="flex flex-row gap-16">

        <iframe
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?q=Antonifeldstraße+23,+Pinkafeld,+Austria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
        </iframe>

        <div className="flex flex-col gap-4">

          <div className="text-4xl font-medium dark:text-white pb-8">
            Kontakt
          </div>

          <div className="flex gap-3 items-center text-lg font-light text-black dark:text-white">
            <span className="material-symbols-outlined text-3xl text-white">event_available</span>
            Termine auf Anfrage
          </div>
          <div className="flex gap-3 items-center text-lg font-light text-black dark:text-white">
            <span className="material-symbols-outlined text-3xl text-white">location_on</span>
            <div>
              <div>Inhaber: Ing. Oliver Jany</div>
              <div>Antonifeldstraße 23</div>
              <div>A-7423 Pinkafeld</div>
            </div>
          </div>
          <a href="tel:+43-699-17417317"
            className="flex gap-3 items-center text-lg font-light text-black dark:text-white"
          >
            <span className="material-symbols-outlined text-3xl text-white">call</span>
            +43 699 17417317
          </a>
          <a href="mailto:kontakt@golfwerkstatt.at"
            className="flex gap-3 items-center text-lg font-light text-black dark:text-white"
          >
            <span className="material-symbols-outlined text-3xl text-white">outgoing_mail</span>
            kontakt@golfwerkstatt.at
          </a>

        </div>
      </div>
    </div>
  </div>
);

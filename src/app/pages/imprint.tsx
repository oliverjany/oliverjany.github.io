"use client";

import { Card } from "@/components/ui/card";

export const Imprint = () => (
    <div id="imprint" className="flex flex-col items-center w-[100%] pt-16 pb-16 text-white">
        <div style={{ maxWidth: '600px' }}>
            <strong>Inhaber: Ing. Oliver Jany</strong> {/* Name */}
            <br/>
            <br/>
            Antonifeldstraße 23
            <br/>
            7423 Pinkfafeld
            <br/>
            Österreich
            <br/>
            <br/>
            Handelsgewerbe mit Ausnahme der reglementierten Handelsgewerbe
            <br/>
            <br/>
            <strong>Tel.:</strong> <a href="tel:+43-699-17417317">
                +43 699 17417317
            </a>
            <br/>
            <strong>E-Mail:</strong> <a href="mailto:office@easy-golf.at" style={{ textDecoration: 'underline' }}>
                office@easy-golf.at
            </a>
            <br/>
            <br/>
            <strong>Mitglied bei:</strong> WKO Burgenland
            <br/>
            <br/>
            <strong>Berufsrecht:</strong> 
            <br/>
            <a style={{ textDecoration: 'underline' }} href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517" target="_blank">
                Gewerbeordnung:
            </a> <a style={{ textDecoration: 'underline' }} href="http://www.ris.bka.gv.at/" target="_blank">
                www.ris.bka.gv.at
            </a>
            <br/>
            <br/>
            <strong>Aufsichtsbehörde/Gewerbebehörde:</strong> Bezirkshauptmannschaft Oberwart
            <br/>
            <br/>
            Verbraucher haben die Möglichkeit, 
            Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a style={{ textDecoration: 'underline' }} href="http://ec.europa.eu/odr" target="_blank">
                ec.europa.eu/odr
            </a>.
            Sie können allfällige Beschwerde auch an die
            oben angegebene E-Mail-Adresse richten.
        </div>
    </div>
);

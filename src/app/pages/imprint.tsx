"use client";

import { PageFrame } from "@/components/ui/pageFrame";
import { useState } from "react";


export const Imprint = () => {
    const [open, setOpen] = useState(false);
    const maxHeight = open ? '' : '30px';
    return (
        <div className="w-[100%]" style={{ maxHeight, overflow: 'hidden' }}>
            <PageFrame id="imprint" className="text-black dark:text-white" light>
                <div className="absolute top-1.5 text-xs">
                    © 2024 EASY-GOLF. Alle Rechte vorbehalten.
                    <button
                        className="underline ml-4"
                        onClick={() => setOpen((prev) => {
                            if (!prev) {
                                // NOTE: Not working without timeout
                                setTimeout(() => window.scrollBy(0, 800), 16);
                            }
                            return !prev;
                        })}
                    >
                        Impressum
                    </button>
                </div>
                
                <div style={{ maxWidth: '600px' }}>
                    <div className="text-4xl font-medium dark:text-white pb-6 lg:pb-8 pt-8 lg:pt-0">
                        Impressum
                    </div>

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

            </PageFrame>
        </div>
    );
}

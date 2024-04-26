"use client";

import Image from "next/image";

export const CompanyPage = () => (
    <div id="company" className="flex flex-col items-center w-[100%] gap-8 pt-16 pb-16 backdrop-blur-3xl bg-white/[0.8] dark:bg-neutral-900/[0.8] border-y border-neutral-200 dark:border-white/[0.1]">
        <div className="flex flex-col max-w-screen-xl">
            <div className="text-4xl font-medium dark:text-white pb-10">
                Unternehmen
            </div>

            <div className="mt-0 mb-6 text-lg font-light text-black dark:text-neutral-300">
                In einer technisch bestens ausgestatteten Werkstatt (Shaft Alignment System, Frequency Analyzer, MOI Speed Match System, Loft-/Lie Bending Gauge usw.) werden &mdash; einzigartig in Österreich &mdash; 
                Golfschläger auf Basis eines <span className="font-semibold">Body Geometry Fitting</span> nach Maß gefertigt. 
                Aber auch jedes am Markt erhältliche Produkt kann entsprechend angepasst werden.
            </div>

            <Image src="./schaftvermessung.jpg" width={1400} height={200} alt="" />

            <div className="mt-6 mb-0 text-lg font-light text-black dark:text-neutral-300">
                Jeder Schaft weist strukturelle Unregelmäßigkeiten auf, welche sich störend auf Schwung und Ballkontakt auswirken. 
                Vor dem Zusammenbau eines Schlägers wird mittels elektronischer Vermessung die optimale Einbausituation des Schaftes ermittelt. 
                Durch diese Art des &bdquo;Schläger-Tunings&ldquo; verbessern sich Trefferwahrscheinlichkeit mit dem Sweetspot des Schlägers und Konstanz der Schläge enorm. 
                Golfschläger mit lagerichtig eingebauten Schäften &mdash; bei Tour-Spielern seit vielen Jahren kein Thema mehr.
            </div>
        </div>
    </div>
);

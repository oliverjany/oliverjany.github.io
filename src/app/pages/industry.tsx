"use client";

import { PageFrame } from "@/components/ui/pageFrame";

export const IndustryPage = () => (
    <PageFrame id="industry" className="">
        <div className="flex pb-4 lg:pb-6">
            <div className="text-4xl font-medium dark:text-white">
                Wie fittet die Industrie?
            </div>
            
        </div>

        <div className="text-lg font-light text-black dark:text-neutral-300 max-w-screen-lg">
            Beim Industrie-Fitting erfolgt die Anpassung eines Standard-Schlägers über den Lie-Winkel und nicht über die Schlägerlänge.
            Diese Anpassung ist schnell, einfach und kostengünstig, da keine Schlägerparameter aufwendig justiert werden müssen.
            Der entscheidende Nachteil dieser Fitting-Methode ist jedoch, dass weder die Schlägerlänge noch der Lie-Winkel optimal sind.
            Jahrelange Erfahrung und viele &bdquo;gefittete&ldquo; Sets von Kunden zeigen, dass diese Form des Fittings 
            wichtige Schlägereigenschaften verschlechtert und der Golferin oder dem Golfer das Spiel erschwert.
        </div>
    </PageFrame>
);

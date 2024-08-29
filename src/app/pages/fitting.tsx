"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const FittingPage = () => (
    <div id="fitting" className="flex flex-col items-center w-[100%] gap-8 pt-16 pb-16 border-y border-neutral-200 dark:border-white/[0.1]">
        <div className="flex flex-col" style={{ maxWidth: '1200px' }}>

            <div className="flex pb-10">
                <div className="text-4xl font-medium dark:text-white pr-2">
                    {// Massenabfertigung vs. Maßanfertigung 
                    }
                    Was zeichnet einen nach Maß gefertigten Schläger aus?
                </div>
                
            </div>


            <div className="flex flex-wrap justify-center gap-8">
                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-white">
                        Schlägerlänge
                    </h2>

                    <div className="mt-4 mb-2">
                        Diese ergibt sich aus der individuellen Körpergeometrie des Golfers und
                        der optimalen Winkel in der Ansprechposition (Setup).
                    </div>
                </Card>

                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-white">
                        Lie-Winkel
                    </h2>

                    <div className="mt-4 mb-2">
                        Die seit Jahrzehnten bewährten und von der Industrie auch gefertigten
                        Lie-Winkel werden nicht verändert.
                    </div>
                </Card>

                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-white">
                        Schaft
                    </h2>

                    <div className="mt-4 mb-2">
                        Dieser ergibt sich aus Schwungcharakteristik des Golfers wie auch aus der Schlägerkopfgeschwindkeit.
                        Eine elektronische Vermessung optimiert den Flex im Set.
                    </div>
                </Card>

                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-white">
                        Schwunggewicht
                    </h2>

                    <div className="mt-4 mb-2">
                        Dieses ist auf Basis der vorgenannten Punkte zu ermitteln, um einen
                        Schläger zu erhalten, welcher den Golfer in seinem Spiel bestmöglich unterstützt.
                    </div>
                </Card>

                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-white">
                        Griff
                    </h2>

                    <div className="mt-4 mb-2">
                        Auch auf die richtige Griffstärke darf nicht vergessen werden.
                    </div>
                </Card>
            </div>
        </div>
    </div>
);

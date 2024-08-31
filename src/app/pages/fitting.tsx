"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card } from "@/components/ui/card";
import { PageFrame } from "@/components/ui/pageFrame";
import Image from "next/image";

export const FittingPage = () => (
    <PageFrame id="fitting" className="">

            <div className="flex pb-10">
                <div className="text-4xl font-medium dark:text-white pr-2">
                    {// Massenabfertigung vs. Maßanfertigung 
                    }
                    Was zeichnet einen nach Maß gefertigten Schläger aus?
                </div>
                
            </div>


            <div className="flex flex-wrap justify-center items-start gap-8">
                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-black dark:text-white">
                        Schlägerlänge
                    </h2>

                    <div className="mt-4 mb-2">
                        Die optimale Schlägerlänge wird anhand der individuellen <strong>Körpergeometrie</strong> der
                        Golferin oder des Golfers präzise ermittelt.
                        Diese Anpassung ist entscheidend, um den idealen Winkel in der Ansprechposition 
                        und eine komfortable Haltung &mdash; für die bestmögliche Leistung auf dem Platz  &mdash; zu gewährleisten.
                    </div>
                </Card>

                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-black dark:text-white">
                        Lie-Winkel
                    </h2>

                    <div className="mt-4 mb-2">
                        {//Über Jahrzehnte haben sich optimale Lie-Winkel etabliert.
                        }
                        Seit Jahrzehnten etablierte Standards für die optimalen Lie-Winkel haben sich bewährt 
                        und werden daher bewusst beibehalten. 
                        Beim Fitting werden daher primär andere Parameter des Schlägers angepasst.

                        {//Für die optimalen Lie-Winkel gibt es seit Jahrzehnten bewährte Standards.
                         //Diese werden bewusst übernommen. 
                        }
                    </div>
                </Card>

                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-black dark:text-white">
                        Schaft
                    </h2>

                    <div className="mt-4 mb-2">
                        Der Schaft wird sorgfältig basierend auf der Schwungcharakteristik 
                        und der Schläger&shy;kopf&shy;geschwindkeit ausgewählt und anschließend feinabgestimmt. 
                        Mittels elektronischer Vermessung wird der Flex im Set optimiert.
                    </div>
                </Card>

                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-black dark:text-white">
                        Schwunggewicht
                    </h2>

                    <div className="mt-4 mb-2">
                        Das Schwunggewicht wird im We&shy;sent&shy;li&shy;chen an die Schlägerlänge und den gewählten Schaft angepasst. 
                        Diese Optimierung schafft ein über das gesamte Set hinweg homogenes Trägheitsmoment, was 
                        sich in einem einheitlichen &bdquo;Schwung&shy;gefühl&ldquo; äußert.
                        So wird jede Golferin und jeder Golfer bestmöglich im Spiel unterstützt.

                        { //Dieses ist auf Basis der vorgenannten Punkte zu ermitteln, um einen
                          //Schläger zu erhalten, welcher den Golfer in seinem Spiel bestmöglich unterstützt.
                        }
                    </div>
                </Card>

                <Card className="bg-white/[0.8] dark:bg-neutral-900/[0.8] text-lg font-light text-black dark:text-neutral-300">
                    <h2 className="text-xl relative z-10 font-semibold text-black dark:text-white">
                        Griff
                    </h2>

                    <div className="mt-4 mb-2">
                        Auch auf die richtige Griffstärke darf nicht vergessen werden.
                        Mit der passenden Griffstärke können Krämpfe in der Hand vermieden werden.
                    </div>
                </Card>
            </div>
    </PageFrame>
);

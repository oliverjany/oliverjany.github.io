"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card } from "@/components/ui/card";

export const FittingPage = () => (
    <div id="fitting" className="flex flex-col items-center w-[100%] gap-8 pt-16 pb-16 backdrop-blur-3xl bg-white/[0.8] dark:bg-neutral-900/[0.8] border-y border-neutral-200 dark:border-white/[0.1]">
        <div className="flex flex-col">

            {/*<div className="flex w-[100%] pb-8">
                <div className="flex-1 flex justify-center font-medium text-4xl dark:text-white max-w-xl">
                  {// Massenabfertigung vs. Maßanfertigung 
                  }
                  Industriegefertigt
                </div>
                <div className="font-extralight text-4xl dark:text-white">
                  vs
                </div>
                <div className="flex-1 flex justify-center font-medium text-left text-4xl dark:text-white max-w-xl">
                  Maßgefertigt
                </div>
              </div>*/}

            <div className="flex pb-10">
                <div className="text-4xl font-medium dark:text-white pr-2">
                    {// Massenabfertigung vs. Maßanfertigung 
                    }
                    Industriegefertigt
                </div>
                <div className="font-extralight text-4xl dark:text-white">
                    vs
                </div>
                <div className="text-4xl font-medium dark:text-white pl-2">
                    Maßgefertigt
                </div>
            </div>


            <div className="flex justify-center gap-8">
                <div>
                    <div style={{ height: '0px' }} />
                    <Card className="bg-white dark:bg-red-500/15 text-lg font-light text-black dark:text-neutral-300">
                        <img src="industrie-fitting.jpg" />

                        <h2 className="text-2xl relative z-10 mt-4  font-semibold text-red-500">
                            Industrie-Fitting
                        </h2>

                        <div className="mt-4 mb-2">
                            Einem definierten &bdquo;Standard&ldquo; entsprechen in der Praxis nur ca. 10% der Golfer.
                            Die Schlägerlänge ist annähernd immer gleich, eine Anpassung erfolgt ausschließlich über den <AnimatedTooltip
                                tooltip="Winkel zwischen Golfschläger und Boden">
                                <span className="font-medium cursor-help bg-black/[0.4] pl-2 pr-2 pt-1 pb-1 rounded">Lie-Winkel</span>
                            </AnimatedTooltip>.
                            In der Fertigung ist eine solche Anpassung schnell und ohne zusätzliche Kosten umsetzbar.
                            Dass dieser Ansatz der Industrie jedoch falsch ist, spiegeln Statistiken wieder.
                        </div>
                        <p className="mt-0 mb-2">
                            Seit Jahrzehnten gehen trotz Fitting ca. 85% der Golfer mit einem nicht passenden Set auf die Runde.
                            Ein Master-Clubfitter in Deutschland schätzt diesen Prozentsatz zwischenzeitlich sogar auf 95% (Golfzeitschrift, Ausgabe September 2019).
                        </p>
                        <p className="mt-0 mb-2">
                            Auch aus logischer Sicht ist nicht nachvollziehbar, weshalb ein flacherer Lie-Winkel für einen kleineren Golfer bzw. ein steilerer Lie-Winkel für einen größeren Golfer idealer sein sollte.
                        </p>
                        <p className="mt-0 mb-0">
                            Mit nicht idealem Lie-Winkel muss im Schwung eine falsche Schlägerlänge kompensiert werden.
                            Ein kostenopti-mierender und falscher Ansatz der Industrie &mdash; zum Nachteil der Golfer.
                        </p>
                    </Card>
                </div>

                <div>
                    <Card className="bg-white dark:bg-green-500/15 text-lg font-light text-black dark:text-neutral-300">
                        <img src="body-geometry-fitting.jpg" />

                        <h2 className="text-2xl relative z-10 mt-4  font-semibold text-green-500">
                            Body Geometry Fitting
                        </h2>

                        <p className="mt-4 mb-4">
                            Jeder Golfer für sich hat eine einzigartige Geometrie.
                            Ein für einen Standard idealer Lie-Winkel, gilt für jede Geometrie als ideal.
                            Die passende Schlägerlänge wird auf Basis der Geometrie ermittelt und die Schläger infolge nach Maß
                            gefertigt, was jedoch nur mit entsprechendem Fachwissen möglich ist.
                        </p>
                        <p className="mt-0 mb-4">
                            Ein idealer Lie-Winkel ist zu 100% unabhängig von der Körpergeometrie. Ebenso ist die Schwungebene zu 100% unabhängig
                            vom Setup &mdash; diese ist lediglich ein Thema der Biomechanik und abhängig vom Verhältnis Unterarm- zu Oberarmlänge.
                        </p>
                        <div className="mt-0 mb-0">
                            Nur mittels Body Geometry Fitting ist gewährleistet Golfschläger zu erhalten, welche auch zur Geometrie passen.
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
);

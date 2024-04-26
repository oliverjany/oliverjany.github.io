"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const AboutPage = () => (
    <div id="about" className="flex flex-col items-center w-[100%] gap-8 pt-16 pb-16">
        <div className="flex flex-col max-w-screen-xl">

            <div className="text-4xl font-medium dark:text-white pb-10">
                Über GOLFWERKSTATT
            </div>


            <div className="flex justify-center gap-8">
                <div>
                    <div style={{ height: '0px' }} />
                    <Card className="bg-white dark:bg-gray-500/15">
                        <Image src="./ing-oliver-jany.png" width={400} height={400} alt="Inhaber" />

                        <h2 className="text-2xl z-10 mt-6  font-semibold dark:text-white">
                            Ing. Oliver Jany
                        </h2>
                        <div className="text-lg z-10 font-light dark:text-neutral-400">
                            Inhaber
                        </div>
                    </Card>
                </div>


                <div>
                    <Card className="bg-white dark:bg-gray-500/15 max-w-3xl text-lg text-black font-light dark:text-neutral-300">
                        <div className="text-2xl font-semibold dark:text-white pb-2">
                            Geschichte
                        </div>

                        <p className="mt-0 mb-2">
                            Vor nunmehr 10 Jahren bin ich durch Zufall zum Golfspiel gekommen.
                            Ich war sofort mit dem Golfvirus infiziert und die Faszination,
                            einen kleinen Ball mit unterschiedlichen Schlägern mit so wenigen Schlägen als
                            möglich in ein Loch zu befördern, hat mich nicht mehr losgelassen.
                        </p>
                        <p className="mt-0 mb-2">
                            Im Laufe der Zeit galt mein Interesse neben dem eigentlichen Golfspiel
                            jedoch immer mehr den Golfschlägern.
                            Ich war überzeugt, dass keines meiner Sets wirklich für mich passte.
                            Dies dürfte vermutlich auch der Grund gewesen sein,
                            weshalb ich wiederholt Probleme im Rückenbereich hatte.
                        </p>
                        <p className="mt-0 mb-2">
                            Ich hatte mir zu diesem Zeitpunkt &mdash; vor nunmehr drei
                            Jahren zum Ziel gesetzt herauszufinden, was die wesentlichen Kriterien eines Golfschlägers
                            sind, um für meine Person passende Schläger zu erhalten.
                        </p>
                        <p className="mt-0 mb-0">
                            Anfangs war ich noch der Überzeugung, dass dies nicht so schwierig sein sollte.
                            Jedoch weit gefehlt, wie sich in den nächsten Wochen und Monaten immer wieder zeigen sollte.
                            Mir wurde schnell klar, welch komplexes &bdquo;Sportgerät&ldquo; ein Golfschläger in Wirklichkeit ist.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </div>
);

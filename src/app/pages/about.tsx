"use client";

import { PageFrame } from "@/components/ui/pageFrame";

export const AboutPage = () => (
    <PageFrame id="about" className="" light>
        <div className="">

            <div className="text-4xl font-medium dark:text-white pb-4 lg:pb-10">
                Über EASY-GOLF
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-x-12 gap-y-6">
                <div className="flex min-w-48 basis-52 max-w-64 lg:min-w-60 lg:basis-60 lg:max-w-80 grow flex-col">
                    <img src="/ing-oliver-jany.png" width={400} height={400} alt="Inhaber" />

                    <h2 className="text-2xl z-10 mt-6  font-semibold dark:text-white">
                        Ing. Oliver Jany
                    </h2>
                    <div className="text-lg z-10 font-light dark:text-neutral-400">
                        Inhaber
                    </div>
                </div>

                <div className="flex flex-col max-w-3xl text-lg text-black font-light dark:text-neutral-300">
                    <div className="text-2xl font-semibold dark:text-white pb-2">
                        Geschichte
                    </div>

                    <p className="mt-0 mb-2">
                        Vor nunmehr über 10 Jahren bin ich durch Zufall zum Golfspiel gekommen.
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
                        Ich hatte mir zu diesem Zeitpunkt zum Ziel gesetzt, herauszufinden, 
                        was die wesentlichen Kriterien eines Golfschlägers sind, 
                        um für meine Person passende Schläger zu erhalten.
                    </p>
                    <p className="mt-0 mb-0">
                        Anfangs war ich noch der Überzeugung, dass dies nicht so schwierig sein sollte.
                        Jedoch weit gefehlt, wie sich in den darauf folgenden Wochen und Monaten immer wieder zeigen sollte.
                        Mir wurde schnell klar, welch komplexes &bdquo;Sportgerät&ldquo; ein Golfschläger in Wirklichkeit ist.
                    </p>
                </div>
            </div>
        </div>
    </PageFrame>
);

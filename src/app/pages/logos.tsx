"use client";

import { Logo } from "@/components/ui/logo";

export const LogosPage = () => (
    <div className="flex flex-row justify-center w-[100%] bg-white/[0.8] dark:bg-neutral-900/[0.8] border-b border-neutral-200 dark:border-white/[0.1]">
        <div
            className="flex flex-wrap py-4 px-4 gap-x-4 md:gap-x-16 md:py-16"
            style={{
                maxWidth: 'calc(min(1600px, 100%))',
                justifyContent: 'center',
            }}>
            <Logo href='https://mizunogolf.com/de' src='/partners/mizuno-logo.svg' />
            <Logo href='https://www.grindworks.jp/en/#' src='/partners/grindworks-logo.png' />
            <Logo href='https://kbsgolfshafts.com' src='/partners/kbs-logo.png' />
            <Logo href='https://www.truetempersports.com/en-us/golf' src='/partners/true-temper-logo.svg' />
            <Logo href='https://nipponshaft.com' src='/partners/nippon-logo-01.png' />
            <Logo href='https://mitsubishigolf.com' src='/partners/mitsubishi-logo.png' />
            <Logo href='https://www.ustmamiya.com' src='/partners/ust-mamiya-logo.png' />
            <Logo href='https://www.aldila.com' src='/partners/aldila-logo-white.svg' />
            <Logo href='https://www.golfpride.com' src='/partners/golfpride-logo-white.svg' />
            <Logo href='https://www.lamkingrips.com' src='/partners/lamkin-logo.png' />
            <Logo href='https://www.winngrips.com' src='/partners/winn-grips-logo-white.png' />
        </div>
    </div>
);

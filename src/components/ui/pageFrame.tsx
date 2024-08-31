"use client";

import { cn } from "@/utils/cn";
import React from "react";

export const PageFrame = ({
    id,
    light,
    className,
    children,
}: {
    id?: string,
    light?: boolean | undefined;
    className: string | undefined;
    children?: React.ReactNode;
}) => {
    const foo = (!!light) ? "bg-white dark:bg-neutral-900/[0.8]" : "bg-neutral-200/50 dark:bg-black";

    return (
        <div id={id}
            className={cn(
                "flex flex-col items-center",
                "w-[100%] py-6 lg:py-16",
                foo,
                "border-b border-neutral-200 dark:border-white/[0.1]",
                "relative",
                className
            )}
        >
            <div className="max-w-screen-xl mx-6">
                {children}
            </div>
        </div>
    );
};

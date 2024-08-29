"use client";

import { cn } from "@/utils/cn";
import React from "react";
import config from "../../../next.config.mjs";

export const Logo = ({
    href,
    src,
    className,
    children,
}: {
    href: string,
    src: string,
    className?: string | undefined;
    children?: React.ReactNode;
}) => {
    return (
        <a href={href} target='_blank'
            className={cn(
                "flex flex-col justify-center w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48",
                className
            )}
        >
            <img src={`${config.basePath}${src}`} className="w-24 md:w-36 lg:w-48" />
        </a>
    );
};
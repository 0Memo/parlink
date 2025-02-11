"use client";

import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { HiMiniWrench } from "react-icons/hi2";
import '../../App.css';

export function NavbarBanner() {
    return (
        <Banner>
            <div className="banner flex h-24 sm:h-16 w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600">
                <div className="mx-auto flex flex-col items-center">
                    <p className="flex items-center text-sm font-h1 text-gray-500 dark:text-gray-400">
                        <HiMiniWrench className="mr-4 h-6 w-6 bannerIcon" />
                        <span className="[&_p]:inline text-lg bannerText">
                            Application en cours de développment
                        </span>
                        <HiMiniWrench className="mr-4 h-6 w-6 bannerIcon" />
                    </p>
                    <p className="flex items-center text-sm font-h1 text-gray-500 dark:text-gray-400">
                        <MdAnnouncement className="mr-4 h-6 w-6 bannerIcon" />
                        <span className="[&_p]:inline text-lg bannerText">
                            Certaines fonctionnalités peuvent ne pas être finalisées. Merci pour votre compréhension !
                        </span>
                    </p>
                </div>
                <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                    <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
            </div>
        </Banner>
    );
}
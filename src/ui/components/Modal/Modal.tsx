"use client"
import { FC } from "react"
import { IModalProps } from "./types"

export const Modal: FC<IModalProps> = ({
    children,
    title }) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`
                    absolute
                    w-80
                    bg-light-background dark:bg-dark-background
                    shadow-lg
                    p-4
                    rounded-md
                    flex flex-col
                    items-center
                    justify-center
                    text-light-text dark:text-dark-text
                    gap-4
                `}>         
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
};
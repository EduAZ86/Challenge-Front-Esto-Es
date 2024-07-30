import { FC } from "react";
import { NavBar } from "../NavBar/NavBar";
import ThemeSwitcher from "@/ui/theme/ThemeSwitcher";

export const Header: FC = () => {
    return (
        <header
            className={`
                w-full h-20 
                bg-light-background dark:bg-red-500
               flex flex-col               
                items-center 
                justify-start 
                relative
                `}
        >
            <div
                className={`
                w-full h-10
                 flex flex-row items-center justify-between px-4                
                 `} >
                <img src="/logo.png" alt="logo" className="h-8" />
                <ThemeSwitcher />
            </div>
            <NavBar />
        </header>
    )
}
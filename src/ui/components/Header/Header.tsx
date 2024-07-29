import { FC } from "react";
import Image from 'next/image';

export const Header: FC = () => {
    return (
        <header
            className="w-full h-10 p-2 flex items-center justify-start"
        >
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
        </header>
    )
}
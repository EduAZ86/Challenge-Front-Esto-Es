"use client"
import ThemeColorProvider from "@/ui/theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactNode } from "react";

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient} >
            <ThemeColorProvider>                
                    {children}                
            </ThemeColorProvider>
        </QueryClientProvider>
    )
}
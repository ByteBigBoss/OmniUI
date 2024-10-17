import { PageMetadata } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    ...PageMetadata.works
};

export default function WorksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div>
            {children}
        </div>

    );
}

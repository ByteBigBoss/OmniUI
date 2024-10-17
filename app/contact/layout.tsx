import { PageMetadata } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    ...PageMetadata.contact
};

export default function ContactLayout({
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

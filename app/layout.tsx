import type { Metadata } from "next";
import "@/style/globals.css";
import '@mantine/core/styles.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider'

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { poppins } from "@/lib/fonts";
import { SiteMetadata } from "@/config/site";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/foo/Footer";
import { theme } from "@/config/mantine-theme";
import ShoelaceSetup from "@/components/anim/shoelace/shoelace-setup";

export const metadata: Metadata = {
  ...SiteMetadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={`${poppins.className} antialiased bg-white dark:bg-black text-black dark:text-white relative`}>

        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'

        >
          <MantineProvider defaultColorScheme="auto" theme={theme}>
            <ShoelaceSetup>
              <Navbar />
              {children}
              <Footer />
            </ShoelaceSetup>
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client"
import React, { useEffect, useState } from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import { Button } from '@nextui-org/react'
import ThemeSwitch from '../theme/theme-switch'
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { Site } from '@/config/site'

const Navbar = () => {

    const [currentPath, setCurrentPath] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const path = usePathname();

    const [opened, { toggle, close  }] = useDisclosure();


    useEffect(() => {

        const changeCurrentPath = () => {
            if (path === "/") {
                setCurrentPath("home");
            } else if (path.endsWith("about")) {
                setCurrentPath("about");
            } else if (path.endsWith("works")) {
                setCurrentPath("works");
            } else if (path.endsWith("blog")) {
                setCurrentPath("blog");
            } else if (path.endsWith("contact")) {
                setCurrentPath("contact");
            }
        }

        changeCurrentPath();


    }, [path]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > scrollPosition) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setScrollPosition(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);



    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.4, type: "spring" }}

            className="w-full fixed top-0 pt-[30px] z-[100]"

        >
            <Drawer.Root offset={8} radius="md" opened={opened} onClose={close}  >
                <Drawer.Overlay />
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title className='font-bold uppercase'>{Site.siteName}</Drawer.Title>
                        <Drawer.CloseButton />
                    </Drawer.Header>
                    <Drawer.Body>
                        <div className='flex justify-between items-center mt-4'>
                            <span>Theme:</span>
                            <ThemeSwitch/>
                        </div>

                        <div
                            className={`px-[4px] flex flex-col items-center  text-[14px] h-auto mt-6 gap-4 w-full`
                            }>
                            {/* HOME */}
                            <Link className='w-full' href={currentPath === "home" ? "" : "/"}>
                                <Button variant='ghost'
                                    className={`${currentPath === "home" ? "border  font-medium opacity-100  flex items-center justify-center bg-[#f7f7f7] dark:bg-[#00000025] "
                                        : currentPath === "about" ? " px-0 border-none focus:outline-none  opacity-80"
                                            : " px-0 border-none focus:outline-none opacity-80"} w-full rounded-full h-[40px] border-[#0000001f] dark:border-[#ffffff1f] text-center`}
                                >Home</Button>
                            </Link>
                            {/* ABOUT */}
                            <Link className='w-full' href={currentPath === "about" ? "" : "/about"}>
                                <Button variant='ghost'
                                    className={`${currentPath === "about" ? "border  font-medium opacity-100  flex items-center justify-center bg-[#f7f7f7] dark:bg-[#00000025] "
                                        : currentPath === "works" ? " px-0 border-none focus:outline-none  opacity-80"
                                            : "  px-0 border-none focus:outline-none opacity-80"} w-full rounded-full h-[40px] border-[#0000001f] dark:border-[#ffffff1f] text-center`}
                                >About</Button>
                            </Link>
                            {/* WORKS */}
                            <Link className='w-full' href={currentPath === "works" ? "" : "/works"}>
                                <Button variant='ghost' className={`${currentPath === "works" ? "border   font-medium opacity-100  flex items-center justify-center bg-[#f7f7f7] dark:bg-[#00000025] "
                                    : currentPath === "blog" ? " px-0 border-none focus:outline-none  opacity-80"
                                        : "  px-0 border-none focus:outline-none opacity-80"} w-full rounded-full h-[40px] border-[#0000001f] dark:border-[#ffffff1f] text-center`}
                                >Works</Button>
                            </Link>
                            {/* BLOG */}
                            <Link className='w-full' href={currentPath === "blog" ? "" : "/blog"}>
                                <Button variant='ghost' className={`${currentPath === "blog" ? "border   font-medium opacity-100  flex items-center justify-center bg-[#f7f7f7] dark:bg-[#00000025] "
                                    : "  px-0 border-none focus:outline-none opacity-80"} w-full rounded-full h-[40px] border-[#0000001f] dark:border-[#ffffff1f] text-center`}
                                >Blog</Button>
                            </Link>
                        </div>
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>
            <WrapperBody>
                <nav className='flex items-center justify-between w-full relative '>

                    {/* LEFT */}
                    <div className='z-[50]'>
                        <Link href={'/'} className='font-bold uppercase'>{Site.siteName}</Link>
                    </div>

                    {/* CENTER */}
                    <div className='absolute flex flex-col items-center w-full z-[10] mobile:hidden mid:hidden mid:w-0 mid:h-0 mobile:w-0 mobile:h-0'>
                        <div
                            className={`px-[4px] flex items-center  text-[14px] h-[41px] rounded-full border border-[#0000001f] dark:border-[#ffffff1f] backdrop-blur-sm `
                            }>
                            {/* HOME */}
                            <Link href={currentPath === "home" ? "" : "/"}>
                                <Button variant='ghost'
                                    className={`${currentPath === "home" ? "border  font-medium opacity-100 px-[24px] flex items-center justify-center bg-[#f7f7f7] dark:bg-[#00000025] "
                                        : currentPath === "about" ? " px-0 border-none focus:outline-none  opacity-80"
                                            : " px-0 border-none focus:outline-none opacity-80"} rounded-full h-[33px] border-[#0000001f] dark:border-[#ffffff1f] text-center`}
                                >Home</Button>
                            </Link>
                            {/* ABOUT */}
                            <Link href={currentPath === "about" ? "" : "/about"}>
                                <Button variant='ghost'
                                    className={`${currentPath === "about" ? "border  font-medium opacity-100 px-[24px] flex items-center justify-center bg-[#f7f7f7] dark:bg-[#00000025] "
                                        : currentPath === "works" ? " px-0 border-none focus:outline-none  opacity-80"
                                            : "  px-0 border-none focus:outline-none opacity-80"} rounded-full h-[33px] border-[#0000001f] dark:border-[#ffffff1f] text-center`}
                                >About</Button>
                            </Link>
                            {/* WORKS */}
                            <Link href={currentPath === "works" ? "" : "/works"}>
                                <Button variant='ghost' className={`${currentPath === "works" ? "border   font-medium opacity-100 px-[24px] flex items-center justify-center bg-[#f7f7f7] dark:bg-[#00000025] "
                                    : currentPath === "blog" ? " px-0 border-none focus:outline-none  opacity-80"
                                        : "  px-0 border-none focus:outline-none opacity-80"} rounded-full h-[33px] border-[#0000001f] dark:border-[#ffffff1f] text-center`}
                                >Works</Button>
                            </Link>
                            {/* BLOG */}
                            <Link href={currentPath === "blog" ? "" : "/blog"}>
                                <Button variant='ghost' className={`${currentPath === "blog" ? "border   font-medium opacity-100 px-[24px] flex items-center justify-center bg-[#f7f7f7] dark:bg-[#00000025] "
                                    : "  px-0 border-none focus:outline-none opacity-80"} rounded-full h-[33px] border-[#0000001f] dark:border-[#ffffff1f] text-center`}
                                >Blog</Button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='flex items-center gap-6 z-[50] mobile:hidden mid:hidden mid:w-0 mid:h-0 mobile:w-0 mobile:h-0'>
                        <ThemeSwitch />
                        <Link href={"/contact"}> <Button className='text-[14px] font-semibold text-black bg-[#91FF00] h-[37px] px-[20px] rounded-[15px] flex justify-center items-center'>Let&apos;s Talk</Button></Link>
                    </div>

                    {/* MENUBAR */}
                    <div className='hidden mobile:flex mid:flex'>
                    <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />

                    </div>

                </nav>

            </WrapperBody>
        </motion.header>
    )
}

export default Navbar

"use client"

import { useMantineColorScheme } from '@mantine/core';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react'

type themeProps = {
    t: "light"|"dark"|"system"
}
const ThemeSwitch = () => {

    const { theme, setTheme } = useTheme();
    const { setColorScheme } = useMantineColorScheme({
        keepTransitions: true,
      });


    const handleChangeTheme = ({t}:themeProps)=>{
        if(t==="light"){
            setTheme("light");
            setColorScheme("light");
        }else if(t==="dark"){
            setTheme("dark");
            setColorScheme("dark");
        }else if(t==="system"){
            setTheme("system");
            setColorScheme("auto");
        }
    };

    return (
        <div className='h-[41px] flex items-center px-[6px] py-[4px] rounded-full border border-imcrox_border_primary w-fit'>
            <div onClick={() => handleChangeTheme({t:"light"})} className={`w-[28px] h-[28px] rounded-full flex justify-center items-center cursor-pointer ${theme === "light" ? "dark:bg-[#1A1A1A] bg-[#f7f7f7]" : ""} `}><Sun size={16} /></div>
            <div onClick={() =>handleChangeTheme({t:"system"})} className={`w-[28px] h-[28px] rounded-full flex justify-center items-center cursor-pointer ${theme === "system" ? "dark:bg-[#1A1A1A] bg-[#f7f7f7]" : ""} `}><Monitor size={16} /></div>
            <div onClick={() => handleChangeTheme({t:"dark"})} className={`w-[28px] h-[28px] rounded-full flex justify-center items-center cursor-pointer ${theme === "dark" ? "dark:bg-[#1A1A1A] bg-[#f7f7f7]" : ""} `}><Moon size={16} /></div>
        </div>
    )
}

export default ThemeSwitch

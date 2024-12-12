import React from 'react'
import { buttons } from './Buttons'
import { FaJs, FaPython, FaCuttlefish, FaJava, FaGem } from "react-icons/fa";

  
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { useTheme } from '@/providers/theme-provider';
import { useState } from 'react';
import { useEffect } from 'react';
import SmallSpinner from './SmallSpinner';

  

const Navbar = ({handleRun , loading , language , setLanguage}) => {
    const [theme , settheme] = useState('winter-is-coming')
    const LANGUAGE_CONFIG = [
        { id: "javascript", label: "JavaScript", icon: <FaJs /> },
        { id: "python", label: "Python", icon: <FaPython /> },
        { id: "c", label: "C", icon: <FaCuttlefish /> },
        { id: "cpp", label: "C++", icon: <FaCuttlefish /> },
        { id: "java", label: "Java", icon: <FaJava /> },
        { id: "ruby", label: "Ruby", icon: <FaGem /> },
        { id: "go", label: "Go", icon: <FaGem /> },
      ];
      
      const THEMES = [
        { id: "vs-dark", label: "VS Dark" },
        { id: "vs-light", label: "VS Light" },
        { id: "github-dark", label: "GitHub Dark" },
        { id: "monokai", label: "Monokai" },
        { id: "solarized-dark", label: "Solarized Dark" },
        { id: "winter-is-coming", label: "Winter is Coming" },
      ];
const {setTheme} = useTheme()
      useEffect(() => {
        setTheme(theme)
        //  console.log(theme)
      }, [theme , settheme])
      
    return (
       <nav className='w-full h-24 select-none'>
        <div className="flex items-center h-full justify-around shadow-lg">
            <div className="logo select-none flex items-center relative  rounded-lg transition duration-300 w-96 hover:shadow cursor-pointer">
                <h2 className='text-3xl text-gray-400 font-semibold select-none'><span className='text-violet-400'>&lt;</span> CWJ <span className='text-violet-600'>/&gt;</span></h2>
                <small className='absolute -bottom-4 left-3'> <span className='text-violet-400'>&lt;</span>CodeWithJoe<span className='text-violet-600'>/&gt;</span> </small>
            </div>

          
            <button onClick={handleRun}
  className={`inline-flex h-12 items-center justify-center rounded-md border border-slate-800 px-6 font-medium text-white transition-all active:scale-110 bg-[#0000ff] ${
    loading
      ? "bg-[linear-gradient(110deg,#0000ff,45%,#ffffaacc,55%,#0000ff)] bg-[length:200%_100%] animate-shimmer"
      : ""
  }`} >
 {!loading  && 'Run'}
 {loading && <SmallSpinner size='sm'/>}
</button>

<div className="flex items-center justify-between gap-3 h-full">
<Select value={theme} onValueChange={(value)=>settheme(value)}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Theme" />
    </SelectTrigger>
    <SelectContent>
      {THEMES.map((theme) => (
        <SelectItem key={theme.id} value={theme.id}>
          {theme.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

<Select value={language} onValueChange={(value)=>setLanguage(value)}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Language" />
    </SelectTrigger>
    <SelectContent>
      {LANGUAGE_CONFIG.map((lang) => (
        <SelectItem key={lang.id} value={lang.id}>
          <div className="flex items-center">
            {lang.icon}
            <span className="ml-2">{lang.label}</span>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

</div>


        </div>
       </nav>
      )
}

export default Navbar


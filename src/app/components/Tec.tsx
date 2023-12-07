'use client'

import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdImages } from "react-icons/io";




import Link from 'next/link';

export function Tec() {

    return (
      <section id='tec' className="text-white top-0 lg:h-screen h-full px-4 md:py-0 py-28 bg-black items-center justify-center text-center md:flex md:flex-col" >

      <div className='items-center justify-center w-full md:flex md:flex-col max-w-6xl'>
<div className='flex items-center justify-center w-full py-10'>
<h2 className='items-start justify-start flex w-full text-4xl font-semibold' >
Tecnologias
</h2>
</div>

<div className='max-w-5xl w-full items-center justify-center flex flex-col'>
<div className='lg:flex grid md:grid-cols-2 grid-cols-1 items-center justify-center'>

<div className='border border-white lg:h-72 lg:w-96 h-60 w-72 py-10 md:px-8 px-4'>
<div className='flex items-start justify-start pb-5 gap-6'>
<GrReactjs size={50}/>
<div className='items-start justify-start flex flex-col'>
<h2 className='lg:text-3xl font-semibold border-b-4 border-yellow-500'>
Frontend Dev
</h2>
<h2 className='lg:text-xl font-semibold'>
React, NextJS
</h2>
</div>
</div>
<div className='flex flex-col items-start justify-start px-3'>
<p className='text-slate-600 text-base font-normal'>{"< h3 >"}</p>
<p className='text-left lg:text-base text-sm lg:left-7 left-4 relative'>
Experiência na criação de projetos utilizando ReactJS, NextJS, TypeScript e TailwindCSS.
</p>
<p className='text-slate-600 text-base font-normal'>{"< h3 >"}</p>
</div>
</div>

<div className='border border-white lg:h-72 lg:w-96 h-60 w-72 py-10 md:px-8 px-4'>
<div className='flex items-start justify-start pb-5 gap-6'>
<IoMdImages size={50}/>
<div className='items-start justify-start flex flex-col'>
<h2 className='lg:text-3xl font-semibold border-b-4 border-yellow-500'>
DesignGráfico
</h2>
<h2 className='lg:text-xl font-semibold'>
Photoshop
</h2>
</div>
</div>
<div className='flex flex-col items-start justify-start px-3'>
<p className='text-slate-600 text-base font-normal'>{"< h3 >"}</p>
<p className='text-left lg:text-base text-sm lg:left-7 left-4 relative'>
Experiência na criação visual de sites, blogs, banners, panfletos digitais e peças publicitárias digitais em geral.
</p>
<p className='text-slate-600 text-base font-normal'>{"< h3 >"}</p>
</div>
</div>

<div className='border border-white lg:h-72 lg:w-96 h-60 w-72 py-10 md:px-8 px-4'>
<div className='flex items-start justify-start pb-5 gap-6'>
<MdOutlineSlowMotionVideo size={50}/>
<div className='items-start justify-start flex flex-col'>
<h2 className='lg:text-3xl font-semibold border-b-4 border-yellow-500'>
VideoMaker
</h2>
<h2 className='lg:text-xl font-semibold'>
DaVinci Resolve
</h2>
</div>
</div>
<div className='flex flex-col items-start justify-start px-3'>
<p className='text-slate-600 text-base font-normal'>{"< h3 >"}</p>
<p className='text-left lg:text-base text-sm lg:left-7 left-4 relative'>
Experiência na criação, produção e edição de vídeos através do aplicativo DaVinci Resolve.
</p>
<p className='text-slate-600 text-base font-normal'>{"< h3 >"}</p>
</div>
</div>





</div>
<picture className='relative bottom-12 opacity-30'>
<img src="/cod.webp" alt="" className='' />
</picture>
</div> 
  

</div>
</section>
  )
}

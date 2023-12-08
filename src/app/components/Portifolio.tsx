'use client'

import Link from 'next/link';

export function Portifolio() {

return (
      <section id='port' className="text-white top-0 lg:h-screen h-full px-4 lg:py-0 py-28 bg-black items-center justify-center text-center lg:flex lg:flex-col" >

      <div className='items-center justify-center w-full flex flex-col max-w-6xl'>
<div className='max-w-6xl w-full items-center justify-center '>

<div className=' w-full md:max-w-sm'>
<h2 className='items-start justify-start flex w-full md:text-3xl text-xl font-semibold pb-4' >
FrontEnd Developer
</h2>
</div>
<div className='md:flex md:flex-row w-full pt-2 gap-5 items-center md:justify-start flex flex-col justify-center'>
<div className="overflow-hidden max-w-xs w-72 aspect-vide cursor-pointer relative group">
<div className="z-50 opacity-0 group-hover:opacity-100 transition h-full duration-300 ease-in-out cursor-pointer absolute from-purple-400/80 to-transparent bg-gradient-to-t inset-x-0  text-white flex justify-center items-center">
<div className="group-hover:opacity-100 group-hover:translate-y-0 gap-6 flex translate-y-4  transform transition duration-300 ease-in-out">
<Link href='#' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Github</button>
</Link>
<Link href='#' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Projeto</button>
</Link>
</div>
</div>
<img className="" src="/2.png" alt=""/>
</div>

<div className="overflow-hidden max-w-xs w-72 aspect-vide cursor-pointer relative group">
<div className="z-50 opacity-0 group-hover:opacity-100 transition h-full duration-300 ease-in-out cursor-pointer absolute from-green-400/80 to-transparent bg-gradient-to-t inset-x-0  text-white flex justify-center items-center">
<div className="group-hover:opacity-100 group-hover:translate-y-0 gap-6 flex translate-y-4  transform transition duration-300 ease-in-out">
<Link href='#' target='_blank' rel="noreferrer">
<button className="bg-green-600 hover:bg-green-700 text-sm text-white font-medium py-2 px-4 rounded-xl">Github</button>
</Link>
<Link href='#' target='_blank' rel="noreferrer">
<button className="bg-green-600 hover:bg-green-700 text-sm text-white font-medium py-2 px-4 rounded-xl">Projeto</button>
</Link>
</div>
</div>
<img className="" src="/3.png" alt=""/>
</div>

<div className="overflow-hidden max-w-xs w-72 aspect-vide cursor-pointer relative group">
<div className="z-50 opacity-0 group-hover:opacity-100 transition h-full duration-300 ease-in-out cursor-pointer absolute from-blue-500/80 to-transparent bg-gradient-to-t inset-x-0  text-white flex justify-center items-center">
<div className="group-hover:opacity-100 group-hover:translate-y-0 gap-6 flex translate-y-4  transform transition duration-300 ease-in-out">
<Link href='#' target='_blank' rel="noreferrer">
<button className="bg-blue-700 hover:bg-blue-800 text-sm text-white font-medium py-2 px-4 rounded-xl">Github</button>
</Link>
<Link href='#' target='_blank' rel="noreferrer">
<button className="bg-blue-700 hover:bg-blue-800 text-sm text-white font-medium py-2 px-4 rounded-xl">Projeto</button>
</Link>
</div>
</div>
<img className="" src="/4.png" alt=""/>
</div>

{/* <div className="overflow-hidden max-w-xs aspect-vide cursor-pointer relative group">
<div className="z-50 opacity-0 group-hover:opacity-100 transition h-full duration-300 ease-in-out cursor-pointer absolute from-gray-500/80 to-transparent bg-gradient-to-t inset-x-0  text-white flex justify-center items-center">
<div className="group-hover:opacity-100 group-hover:translate-y-0 gap-6 flex translate-y-4  transform transition duration-300 ease-in-out">
<Link href='https://globo.com' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Github</button>
</Link>
<Link href='www.google.com.br' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Projeto</button>
</Link>
</div>
</div>
<img className="" src="/3.png" alt=""/>
</div> */}

</div>

<div className=' w-full md:max-w-xs mt-10'>
<h2 className='items-start justify-start flex w-full md:text-3xl text-xl font-semibold pb-4' >
Design gráfico
</h2>
</div>
<div className='md:flex md:flex-row w-full pt-2 gap-5 md:items-center md:justify-start flex flex-col items-center justify-center'>




<div className='flex items-center justify-center max-w-xs w-72'>
        <img className="w-full "
            src="/D1.png" />
    </div>
    <div className='flex items-center justify-center max-w-xs w-72'>
    <img className="w-full "
            src="/D2.png" />
    </div>
    <div className='flex items-center justify-center max-w-xs w-72'>
    <img className="w-full "
            src="/D3.png" />
    </div>
{/* <div>
<img className="w-full "
            src="/D4.png" />
    </div> */}


</div>

<div className=' w-full md:max-w-xs mt-10'>
<h2 className='items-start justify-start flex w-full md:text-3xl text-xl font-semibold pb-4' >
VideoMaker
</h2>
</div>
<div className='md:flex md:flex-row w-full pt-2 gap-10 md:items-center md:justify-start items-center justify-center flex flex-col'>

{/* <div className='relative z-50'>
<video src="/ImobiliariaLares.mp4"  controls width={300} height={300}></video>
</div> */}


<div className='relative z-40 max-w-xs w-72 flex items-center justify-start'>
<iframe width="360" height="215" src="https://www.youtube.com/embed/DFmhXON9TII?si=uI3VyrwT4riXbUd2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
</div>

<div className='relative z-40 max-w-xs w-72 flex items-center justify-start'>
<iframe width="360" height="215" src="https://www.youtube.com/embed/E8x77VA5eS8?si=VgjdVGWQKp9nMiYZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
</div>


</div>

</div> 



</div>
</section>
  )
}

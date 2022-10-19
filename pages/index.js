import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiOutlineGithub, AiFillLinkedin, AiFillCodepenCircle } from "react-icons/ai";
import Image from 'next/image';
import avatar from "../public/avatar1.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consult from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark': ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=' min-h-screen '>
          <nav className='py-10 mb-12 flex justify-between dark:text-slate-50'>
            <h1 className='text-xl font-bold font-burtons'>dinesh</h1>
            <ul className='flex justify-between items-center  gap-10'>
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
              <li><a href="https://www.linkedin.com/in/dvs-dinesh-kumar/" target="_blank" rel="noreferrer">linkedin</a></li>
              <li><a href="https://github.com/dinesh671" target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="https://codepen.io/dinesh671" target="_blank" rel="noreferrer">codepen</a></li>
              <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md '>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Dinesh Kumar</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-slate-300'>Developer and designer.</h3>
            <p className='dark:text-slate-400 text-md leading-8 text-gray-800 py-10 mx-w-xl mx-auto md:text-xl'>Self-motivated and hardworking graduate seeking an opportunity to work in a challenging environment to prove my coding skills and utilize my knowledge of various databases for the growth of the organization.</p>
          </div>
          <div className='text-5xl flex dark:text-slate-300  justify-center gap-10 py-3 text-gray-600'>
            <a href="https://github.com/dinesh671" target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/dvs-dinesh-kumar/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://codepen.io/dinesh671" target="_blank" rel="noopener noreferrer">
              <AiFillCodepenCircle/>
            </a>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
          <Image src={avatar} alt="" layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
          <div className='mt-16'>
            <h3 className="text-3xl py-1 dark:text-slate-100 ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
              Since the beginning of my journey as a freelance designer and
              developer, I&#39;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 dark:text-slate-400 leading-8 text-gray-800 ">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center  shadow-lg p-10 rounded-xl dark:hover:bg-gray-800'>
              <Image src={design} alt="" width={100} height={100} />
              <h3 className='text-lg font-medium dark:text-slate-100 pt-8 pb-2'>Beautifull Designs</h3>
              <p className='dark:text-slate-400'>
                {" "}
                Creating elegant designs for your needs following core design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Figma</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Adobe XD</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Blender</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>spline</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl dark:hover:bg-gray-800'>
              <Image src={code} alt="" width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-slate-100'>Beautifull Designs</h3>
              <p className='dark:text-slate-400'>
                {" "}
                Creating elegant designs for your needs following core design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Figma</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Adobe XD</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Blender</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>spline</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl dark:hover:bg-gray-800'>
              <Image src={consult} alt="" width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-slate-100'>Beautifull Designs</h3>
              <p className='dark:text-slate-400'>
                {" "}
                Creating elegant designs for your needs following core design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Figma</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Adobe XD</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>Blender</p>
              <p className='text-gray-800 py-1 dark:text-slate-200'>spline</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-slate-100'>
              Portfolio 
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
              Since the beginning of my journey as a freelance designer and
              developer, I&#39;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap '>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} alt='' className='rounded-lg object-cover' width={'100%'} height={"100%"} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} alt='' className='rounded-lg object-cover' width={'100%'} height={"100%"} layout="responsive" />
            </div>
            <div  className='basis-1/3 flex-1'>
              <Image src={web3} alt='' className='rounded-lg object-cover' width={'100%'} height={"100%"} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} alt='' className='rounded-lg object-cover' width={'100%'} height={"100%"} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} alt='' className='rounded-lg object-cover' width={'100%'} height={"100%"} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} alt='' className='rounded-lg object-cover' width={'100%'} height={"100%"} layout="responsive" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

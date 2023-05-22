'use client'
import './page.css'
import Lottie from 'lottie-react'

import NavBar from '../components/NavBar/NavBar.js'

import heroAnimation from '../assets/58948-finance-blue.json';
import {BsPiggyBank} from 'react-icons/bs';
import { BiAnalyse } from 'react-icons/bi';

export default function Home() {
  return (
    <main className="flex flex-col mx-9 min-h-[100vh]">
      <section className=' min-h-[100vh] flex flex-col relative'>
        <div className='bg-circle'></div>
        <NavBar />
        <div className=' flex items-center justify-between lg:min-h-[85vh] lg:mt-[5vh]'>
          <div className=' flex flex-col justify-center'>
            <div className=' flex flex-col justify-center w-[800px] min-h-[45vh] relative'>
              <p className='text-[#c6cacb] text-xl'>Introducing</p>
              <p className='text-8xl font-semibold tracking-[5px]'>TrackPE</p>
              <p className='text-3xl'>Empowering your finances.</p>
              <p className='mt-4 text-lg text-[#c6cacb]'>Makha Sale Me Chhori Shopping KarkeTag Tu Paa De Zara KaRollie Hath Me Fendi Pair MeTashan Dekhiye Yaara Ka
              Jab Challe Kaafila Caran KaTere Hosh Josh Se Kho JangeJine Tu Best Friend BataveEk Ghoor Me Roo Denge</p>
            </div>
            <div className=' flex gap-20 lg:h-[35vh]'>
              <div className='card-gradient w-[300px] h-[250px] flex flex-col items-center justify-center gap-4'>
                <BsPiggyBank className='text-5xl' />
                <p className='text-xl font-semibold'>Finance made easier.</p>
                <p className='italic text-base px-4 font-semibold text-[#c6cacb]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='card-gradient w-[300px] h-[250px] flex flex-col items-center justify-center gap-4'>
                <BiAnalyse className='text-5xl' />
                <p className='text-xl font-semibold'>Personalised Analysis.</p>
                <p className='italic text-base px-4 font-semibold text-[#c6cacb]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className=' h-[85vh] flex flex-col relative justify-evenly items-center'>
            <Lottie animationData={heroAnimation} className=' h-[70vh] w-[500px]' />
            <div className=' card-gradient w-fit mx-auto flex items-center justify-center cursor-pointer absolute bottom-8'>
              <p className='text-xl p-2'>Find your peace. <span className='text-blue-300'>Get started.</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className=' min-h-[100vh] flex flex-col relative'>
      </section>
    </main>
  )
}

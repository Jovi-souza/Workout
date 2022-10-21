import { List, X} from 'phosphor-react'
import Model from '../../assets/model.svg'
import Nike from '../../assets/Nike.svg'
import Buzz from '../../assets/BuzzFeed.svg'
import Espirit from '../../assets/Espirit.svg'
import National from '../../assets/NationalGeographic.svg'
import DW from '../../assets/DW.svg'
import HuufPost from '../../assets/Huffpost.svg'
import { useState } from 'react'

export function Header(){
  const [menu, setMenu] = useState('hidden')
  function ToggleMenu() {
    setMenu( menu === 'hidden' ? 'flex' : 'hidden')
  }

  return(
    <header>
      <div className="flex justify-between items-center p-4 text-white">
        <h1 className="font-black">WORKOUT</h1>
        <nav>
          <div className='hover:bg-gray-600 rounded p-1 md:hidden'>
            <List size={24} weight="fill" className='cursor-pointer' onClick={ToggleMenu}/>
          </div>
          <ul className={`${menu} flex flex-col gap-4 p-6 absolute bg-gray-900 right-16 top-16 z-50 rounded-md md:bg-gray-800 md:flex-row md:p-0 md:static`}> 
            <li
              className="cursor-pointer border-transparent hover:bg-gray-700 p-2 rounded-md transition ease-in-out duration-800 font-light w-max"
            >
              WORKOUTS
            </li>
            <li
              className="cursor-pointer border-transparent hover:bg-gray-700 p-2 rounded-md transition ease-in-out duration-800 font-light w-max"
            >
              PROGRAMS
            </li>
            <li
              className="cursor-pointer border-transparent hover:bg-gray-700 p-2 rounded-md transition ease-in-out duration-800 font-light w-max"
            >
              HEALTHY LIVING
            </li>
            <li
              className="cursor-pointer border-transparent hover:bg-gray-700 p-2 rounded-md transition ease-in-out duration-800 font-light w-max"
            >
              COMMUNITY
            </li>
            <li
              className="cursor-pointer border-transparent hover:bg-gray-700 p-2 rounded-md transition ease-in-out duration-800 font-light w-max"
            >
              ABOUT
            </li>
            <li
              className="cursor-pointer border-transparent hover:bg-gray-700 p-2 rounded-md transition ease-in-out duration-800 font-light w-max"
            >
              STORE
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex gap-5 flex-col text-white p-4 sm:relative'>
        <h1 className='text-6xl font-bold sm:z-10 sm:text-8xl sm:w-96 lg:text-9xl lg:w-2/3'>Workout with me</h1>
        <p className='text-gray-400 sm:z-10 sm:text-base sm:w-96 lg:text-xl lg:w-1/2'>A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!</p>
        <button className='bg-orange-500 p-2 rounded w-max sm:z-10 lg:text-base'>Join Club Now!</button>
        <img src={Model} alt="model" className='hidden sm:flex sm:w-64 sm:absolute sm:z-0 sm:top-0 sm:right-24 lg:w-80 lg:right-56'/>
        <div className='mt-4'>
          <span className='text-gray-400 text-xs inline-flex mb-2 sm:mt-14 lg:mt-20'>As featured in</span>
          <ul className='flex flex-wrap gap-4 justify-star'>
            <li><img src={Nike} alt="Nike" className='w-8 sm:w-20' /></li>
            <li><img src={Buzz} alt="Buzz" className='w-12 sm:w-24'/></li>
            <li><img src={Espirit} alt="Espitir" className='w-10 sm:w-20'/></li>
            <li><img src={National} alt="National" className='w-8 sm:w-16'/></li>
            <li><img src={DW} alt="DW" className='w-8 sm:w-12'/></li>
            <li><img src={HuufPost} alt="HuufPost" className='w-16 sm:w-32'/></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
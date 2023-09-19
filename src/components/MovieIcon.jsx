import React from 'react'
import {MdOutlineTheaterComedy, MdFamilyRestroom, MdSportsFootball} from "react-icons/md";
import {GiMineExplosion, GiDramaMasks, GiShamblingZombie, GiUfo, GiPoliceTarget} from "react-icons/gi"
import {FaHatWizard, FaRunning} from "react-icons/fa"
import {PiDetectiveBold} from "react-icons/pi"
import {BsArrowThroughHeart} from "react-icons/bs"


const MovieIcon = ( {genre} ) => {
    

   return  (
    <div>
        {genre === 'Action' && <GiMineExplosion className='text-4xl text-sky-600' />}
        {genre === 'Comedy' && <MdOutlineTheaterComedy className='text-4xl text-sky-600'/>}
       {genre === 'Drama' && <GiDramaMasks className='text-4xl text-sky-600'/>}
        {genre === 'Fantasy' && <FaHatWizard className='text-4xl text-sky-600'/>}
        {genre === 'Horror' && <GiShamblingZombie className='text-4xl text-sky-600'/>}
        {genre === 'Mystery' && <PiDetectiveBold className='text-4xl text-sky-600'/>}
        {genre === 'Romance' && <BsArrowThroughHeart className='text-4xl text-sky-600'/>}
        {genre === 'Thriller' && <FaRunning className='text-4xl text-sky-600'/>}
        {genre === 'Sci-fi' && <GiUfo className='text-4xl text-sky-600'/>}
        {genre === 'Family' && <MdFamilyRestroom className='text-4xl text-sky-600'/>}
        {genre === 'Sports' && <MdSportsFootball className='text-4xl text-sky-600'/>}
        {genre === 'Crime' && <GiPoliceTarget className='text-4xl text-sky-600'/>}
    </div>
   )
      }

  

 
export default MovieIcon
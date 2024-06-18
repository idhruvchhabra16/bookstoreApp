import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import {Link} from 'react-router-dom';


function Course() {
  return (
    <div className='bg-white'>
    <div className='bg-white max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className=' mt-28 bg-white items-center justify-center text-center'>
            <h1 className='text-black text-2xl  md:text-4xl bg-white'>We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
            <p className='text-black mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium culpa, cumque tenetur incidunt dignissimos obcaecati maxime! Sequi nesciunt fuga eum exercitationem quidem delectus mollitia repellat dolore? Error, soluta deleniti!</p>
           <Link to='/'>  <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
             list.map((item)=>(<Cards key={item.id} item={item} />))   
            }
        </div>

    </div>
    </div>
  )
}

export default Course
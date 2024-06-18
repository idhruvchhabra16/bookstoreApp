import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards  from './Cards';


 
import list from '../../public/list.json';
function Freebook() {
    const filterData=list.filter((data)=>data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,          
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }; 

   
  return (
<>
    <div className='bg-white max-w-screen-2xl container mx-auto md:px-20 px-4'> 
        <div>
        <h1 className='text-black font-semibold text-xl pb-2 '>Free Offered Courses</h1>
        <p className='text-black '>
        Welcome to the free books segment of our website! Here, you'll find a curated selection of books across various genres and subjects, all available at no cost. </p>
        </div>
   
    <div>
    <Slider {...settings}>
      {filterData.map((item)=>(
        <Cards item={item} key={item.id}/> 
      ))}
      </Slider>
        </div>  
        </div>  
    </>
    );
}

export default Freebook;   
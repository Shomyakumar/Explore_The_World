import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


import Anchit from '../assets/testimonials/anchit.jpg'
import Mayank from '../assets/testimonials/mayank.jpg'
import Lucky from '../assets/testimonials/lucky.jpg'
import Vikash from '../assets/testimonials/vikash.jpg'
import Star from '../assets/testimonials/star (2).png'

const data=[
    {
        id:1,
        Name:'Anchit Kumar',
        image:Anchit,
        review:'Osum travel experience with price within the budget.',
        rating:4
    },
    {
        id:2,
        Name:'Mayank Mehra',
        image:Mayank,
        review:'Exploring mountains is always fun and this becomes more fun and exiting with this travel agency.',
        rating:5
    },
    {
        id:3,
        Name:'Vikash Kumar Mehta',
        image:Vikash,
        review:'Satisfied with the services provided according to the price.',
        rating:4
    },
    {
        id:4,
        Name:'Lucky Mehta',
        image:Lucky,
        review:'Exploring new places and planning trips with friends is always fun and this website gives a lot more choices to discuss.',
        rating:5
    },
]


export default function Testimonials(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <div className='bg-sky-200'>
            <div className="max-w-[1200px] mx-auto py-[4rem] px-8 sm:px-12">
                <p className='text-center pb-6 text-4xl font-semibold text-blue-950'>Our happy customers</p>
                
                <Slider {...settings}>
                {
                    data.map((item)=>(
                        <div key={item.id} className='bg-sky-600 py-6 px-4  h-[320px] rounded-md'>
                            <div className='flex flex-col gap-2 items-center'>
                                <img className='rounded-full aspect-square object-cover max-w-[100px]' src={item.image} alt="user" loading="lazy"></img>
                                <p className='text-lg text- font-semibold italic'>{item.Name}</p>
                            </div>
                            <div>
                                <p className='text-center text-white font-semibold '>{item.review}</p>

                                <div className="flex justify-center py-2 " loading="lazy">
                                    {
                                        (item.rating===4)&& <div className='flex gap-1'>
                                            <img className='w-3' src={Star} alt="star"></img>
                                            <img className='w-3' src={Star} alt="star"></img>
                                            <img className='w-3' src={Star} alt="star"></img>
                                            <img className='w-3' src={Star} alt="star"></img>
                                            
                                        </div>
                                    }
                                    {
                                        (item.rating===5)&& (<div className='flex gap-1'>
                                            <img className='w-3' src={Star} alt="star"></img>
                                            <img className='w-3' src={Star} alt="star"></img>
                                            <img className='w-3' src={Star} alt="star"></img>
                                            <img className='w-3' src={Star} alt="star"></img>
                                            <img className='w-3' src={Star} alt="star"></img>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
                </Slider>
                
            </div>
        </div>
    )
}
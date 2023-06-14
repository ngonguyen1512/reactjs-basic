import React, {useEffect} from 'react'
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAXED',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is on of the best travel destinations in the World. This place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAXED',
    fees: '$990',
    description: 'The epitome of romance, ABC is on of the best travel destinations in the World. This place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAXED',
    fees: '$880',
    description: 'The epitome of romance, Cappadocia is on of the best travel destinations in the World. This place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Great Barrier Reef',
    location: 'New Zealand',
    grade: 'CULTURAL RELAXED',
    fees: '$1400',
    description: 'One of the most remarkable Australia natural gifts in the Great Barrier Reef. The hallmark of this place is `lavish` and `beautiful`.Always interesting to be in this place.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAXED',
    fees: '$690',
    description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous acivities.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAXED',
    fees: '$1030',
    description: 'An immense mausoleum of white marble, built-in Agra by Muhal emperor Shah Jahan in memory of his wife Mumtaz, the mounment is breathakingly beautiful.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Bali Island',
    location: 'Indonesian',
    grade: 'CULTURAL RELAXED',
    fees: '$1200',
    description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesia archipelago.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Bench',
    location: 'New Zealand',
    grade: 'CULTURAL RELAXED',
    fees: '$550',
    description: 'The epitome of romance, Bora Bora is on of the best travel destinations in the World. This place is know for its luxurious stays and adventurous activities.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Hawai',
    location: 'America',
    grade: 'CULTURAL RELAXED',
    fees: '$2350',
    description: 'The epitome of romance, Bora Bora is on of the best travel destinations in the World. This place is know for its luxurious stays and adventurous activities.'
  }
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>
                
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
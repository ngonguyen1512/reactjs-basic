import React, {useEffect} from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Enail Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
               <MdOutlineTravelExplore className='icon'/> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsun dolor sit amet, consecttur adipisicing elit. Ullam inventore eos fuga hic cum voluptaem minia, tempore non odio provident nobis ispam at, doloremque sed cupiditate ipsum in atque soluat?
            </div>

            <div data-aos="fade-up" className="footerScocials">
              <AiOutlineTwitter className='icon'/>
              <AiOutlineYoutube className='icon'/>
              <AiOutlineInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">

            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>

            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNER</span>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>

            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                London
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                California
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Indonesia
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Europe
              </li>

              <li className="footerListst flex">
                <FiChevronRight className='icon'/>
                Oceania
              </li>

            </div>

          </div>
          
          <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
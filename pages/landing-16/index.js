
import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon
import { AiOutlineShoppingCart, AiOutlineInstagram} from 'react-icons/ai';
import { IoCallOutline,CallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";

// Common 

import Order from '@/components/LandingPage/Common/Order/Order';
import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';
import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';
import Video from '@/components/LandingPage/Common/Video/Video';
import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';
import landingImageUrl from "../../public//images/landing-16/logo.png";
import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"




const index = () => {

  return (

    <div className='Landing__16'>

        {/* ---------------------------------------------------------------------------------------------------------------
              Banner
        -------------------------------------------------------------------------------------------------------------------*/}
        
        <div className='Landing__16__bg_div'>

          <Container>

             <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

            <Row>

              <Col md={12} lg={6}>

                <div className='Landing__16__Banner_div'>

                  <h4>পুরুষ এবং মহিলাদের জন্য ডেনিম জিন্স</h4>

                  <h1>স্টাইলিশ ন্যারো ফিটিং সেমি স্টিচড ডেনিম জিন্স প্যান্ট.</h1>

                  <h5>সর্বমোট মূল্য:</h5>

                  <h3> <span>৳ 750.00</span>৳ 550.00</h3>

                  <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                  <h6>ঢাকার বাহিরে থেকে অর্ডার করতে চাইলে ১৫০ টাকা অগ্রিম ডেলিভারি পরিশোধ করুন</h6>

                </div>

              </Col>

              <Col md={12} lg={6}>

                  <div>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            loop={true}
                            breakpoints={{
                                240: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 0,
                                }
                            }}
                            >

                            {/* item */}
                            <SwiperSlide className="Landing__16__SliderImg">

                                <Link href="#">

                                <img src="/images/landing-16/img.png" alt="img"></img>

                                </Link>

                            </SwiperSlide>

                            {/* item */}
                            <SwiperSlide className="Landing__16__SliderImg">

                                <Link href="#">

                                <img src="/images/landing-16/img.png" alt="img"></img>

                                </Link>

                            </SwiperSlide>

                        </Swiper>

                  </div>

              </Col>

            </Row>

          </Container>

        </div>



        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}





        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}
        



        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}





        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}
        



        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}





        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}
        



        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}





        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}
        



        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}





        {/* ---------------------------------------------------------------------------------------------------------------
            
        -------------------------------------------------------------------------------------------------------------------*/}

        

        

        

    
    
    </div>

  )
}

export default index;
import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart} from 'react-icons/ai';


// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import { useRef } from 'react';

// Common 

import Order from '@/components/LandingPage/Common/Order/Order';
import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';
import Video from '@/components/LandingPage/Common/Video/Video';
import landingImageUrl from "../../public/images/landing-18/logo.png";
import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"
import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';
import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';

// ShippingAddress Img

import DelivaryImgUrl1 from '../../public/images/landing-18/img29.png'
import DelivaryImgUrl2 from '../../public/images/landing-18/img30.png'
import DelivaryImgUrl3 from '../../public/images/landing-18/img31.png'
import DelivaryImgUrl4 from '../../public/images/landing-18/img32.png'




const index = () => {

  return (

    <div className='Landing__18'>

        {/* =======================================================================================
                    Banner
        ============================================================================================*/}

        <section >

            <div className='Landing__18__bg_div'>

                <Container>

                    <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                    <Row>

                        <Col md={6}>
                        
                            <div className='Landing__18__BannerTxt'>

                                <h1>স্টাইলিস্ট লেদার ব্যাগ বা পার্স মহিলাদের জন্য ফ্যাশন একটা বড় অংশ।</h1>

                                <h4>সেরা মানের চামড়ার ব্যাগগুলির জন্য আমাদের সাইট থেকে ক্রয় করুন।</h4>

                                <h3>মূল্যঃ  ১৬৫০ টাকা</h3>

                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>এখনই কিনুন</Link>

                                <div className='Landing__18__RelText'>

                                    <div className='Landing__18__AbsB_Box'>

                                        <img src="/images/landing-18/img28.png" alt="" />

                                        <h5>01894844452</h5>

                                    </div>

                               </div>

                            </div>

                        </Col>

                        <Col md={6}>

                            
                           <div className='Landing__18__Col_2Rel'>

                                <img className='Landing__18__img1DisAbs' src="/images/landing-18/img1.png" alt="" />

                                <img  className='Landing__18__img2BagAbs' src="/images/landing-18/img2.png" alt="" />

                            </div>
                        
                        </Col>

                    </Row>

                </Container>

            </div>

        </section>
                
        
        {/* =======================================================================================
                    Shipping
        ============================================================================================*/}

        <section>

            <Container>
                
                    <div className='Landing__18__ShippingDiv'>

                        <ShippingAddress
                            DelivaryImage1={DelivaryImgUrl1}
                            DelivaryImage2={DelivaryImgUrl2}
                            DelivaryImage3={DelivaryImgUrl3}
                            DelivaryImage4={DelivaryImgUrl4}
                            DelivaryTitle1="বিনামূল্যে 2 দিনের শিপিং " 
                            DelivaryTitle2="100 ভাগ খাটিঁ চামড়া ব্যাগ" 
                            DelivaryTitle3="30 দিনে মানি ব্যাক গ্যারান্টি" 
                            DelivaryTitle4="24/7 গ্রাহক সহায়তা" 
                        />

                    </div>

            </Container>

        </section>

        <div className='Landing__18_section_gaps'></div>
        
        {/* =======================================================================================
                    Banner
        ============================================================================================*/}



        {/* =======================================================================================
                    Banner
        ============================================================================================*/}



        {/* =======================================================================================
                    Banner
        ============================================================================================*/}


        {/* =======================================================================================
                    Banner
        ============================================================================================*/}


        {/* =======================================================================================
                    Banner
        ============================================================================================*/}


        {/* =======================================================================================
                    Banner
        ============================================================================================*/}


        {/* =======================================================================================
                    Banner
        ============================================================================================*/}


        {/* =======================================================================================
                    Banner
        ============================================================================================*/}


        {/* =======================================================================================
                    Banner
        ============================================================================================*/}


        {/* =======================================================================================
                    Banner
        ============================================================================================*/}


        {/* =======================================================================================
                    Banner
        ============================================================================================*/}




    </div>

  )
}

export default index
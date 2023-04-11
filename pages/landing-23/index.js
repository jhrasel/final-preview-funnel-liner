import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart, AiOutlineMail} from 'react-icons/ai';
import { IoCallOutline} from "react-icons/io5";
import {IoLocationSharp} from "react-icons/io5";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";


// Common 

import Order from '@/components/LandingPage/Common/Order/Order';
import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';
import Video from '@/components/LandingPage/Common/Video/Video';
import landingImageUrl from "../../public/images/landing-23/logo.png";
import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"
import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';
import Menubar from '@/components/LandingPage/Common/Menubar/Menubar';

// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import { useRef } from 'react';

// ShippingAddress Img

import DelivaryImgUrl1 from '../../public/images/landing-24/img16.png'
import DelivaryImgUrl2 from '../../public/images/landing-24/img17.png'
import DelivaryImgUrl3 from '../../public/images/landing-24/img18.png'
import DelivaryImgUrl4 from '../../public/images/landing-24/img19.png'





const index = () => {

  return (

    <div className='Landing__23'>
    
        {/* =======================================================================================
                    Banner
        ============================================================================================*/}

        <section>

            <div className='Landing__23__bg_div'>

                <Container>

                    <Menubar logoImage={landingImageUrl}></Menubar>

                    <Row className='Landing__23__Reverce'>

                        <Col lg={6} >

                            <div className='Landing__23__BannerTxt'>

                                <h1>স্মার্ট ওয়াচের সংগা পাল্টে দিতে বাংলাদেশের বাজারে এলো</h1>

                                <div className="Landing__23__HrBanner"></div>

                                <h4>SMARTWATCH</h4>

                                <h3>SW100</h3>

                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </div>

        </section>

        <div className="Landing__23__section_gaps"></div>

        {/* =======================================================================================
                   Shipping Icon
        ============================================================================================*/}

        <section>

            <Container>

                <Row>

                    <Col>

                         <div className='Landing__23__ShippingIcon'>

                            <img className='Landing__23__ShipImg2' src="/images/landing-23/img2.png" alt="" />

                            <img className='Landing__23__ShipImg1' src="/images/landing-23/img1.png" alt="" />

                            <h4>১০০+ ওয়াচ ফেস<br/> কালেকশন</h4>

                         </div>

                    </Col>

                    <Col>

                         <div className='Landing__23__ShippingIcon'>

                            <img className='Landing__23__ShipImg2' src="/images/landing-23/img2.png" alt="" />

                            <img className='Landing__23__ShipImg1' src="/images/landing-23/img1.png" alt="" />

                            <h4>২৪/৭ হার্ট <br/>রেট মনিটর</h4>

                         </div>

                    </Col>

                    <Col>

                         <div className='Landing__23__ShippingIcon'>

                            <img className='Landing__23__ShipImg2' src="/images/landing-23/img2.png" alt="" />

                            <img className='Landing__23__ShipImg1' src="/images/landing-23/img1.png" alt="" />

                            <h4>ব্লাড অক্সিজেন <br/>মনিটর</h4>

                         </div>

                    </Col>

                    <Col>

                         <div className='Landing__23__ShippingIcon'>

                            <img className='Landing__23__ShipImg2' src="/images/landing-23/img2.png" alt="" />

                            <img className='Landing__23__ShipImg1' src="/images/landing-23/img1.png" alt="" />

                            <h4>৫০+ স্পোর্টস <br/>মোড</h4>

                         </div>

                    </Col>

                </Row>

            </Container>

        </section>

        <div className="Landing__23__section_gaps"></div>

        {/* =======================================================================================
                    Special Features
        ============================================================================================*/}

        <section>

            <Container>

                <Row>

                    <Col lg={6}>

                        <div className="Landing__23__Features">

                            <h4>স্পেশাল ফিচার</h4>

                            <div className="Landing__23__Hr2"></div>

                            <ul>

                                <li> <img src="/images/landing-23/img3.png" alt="" /> 

                                     <h5>হিউজ কালেকশন ওফ ১০০+ ওয়াচ ফেস</h5> 

                                </li>

                                <li> <img src="/images/landing-23/img3.png" alt="" /> 

                                     <h5>২৪/৭ হার্ট রেট মনিটর</h5> 

                                </li>

                                <li> <img src="/images/landing-23/img3.png" alt="" /> 

                                     <h5>ব্লাড অক্সিজেন মনিটর</h5> 

                                </li>

                                <li> <img src="/images/landing-23/img3.png" alt="" /> 

                                     <h5>৫০+ স্পোর্টস মোড ফর এক্সারসাইজ</h5> 

                                </li>

                                <li> <img src="/images/landing-23/img3.png" alt="" /> 

                                     <h5>বেজেললেস সুপার অ্যামোলেড ডিসপ্লে</h5> 

                                </li>

                                <li> <img src="/images/landing-23/img3.png" alt="" /> 

                                     <h5>ব্লুটুথ কল রিসিভ ফিচার</h5> 

                                </li>

                            </ul>

                        </div>

                    </Col>

                    <Col lg={6}>

                        <div className="Landing__23__FeaturesImgDiv">

                            <img src="/images/landing-23/img4.png" alt="" />

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

        <div className="Landing__23__section_gaps"></div>

        {/* =======================================================================================
                    Video
        ============================================================================================*/}

        <section>

            <Container>

                <Row>

                    <Col lg={6}>

                        <Video></Video>

                    </Col>

                    <Col lg={6}>

                        <div className="Landing__23__VideoTxtDiv Landing__23__Features">

                            <h4>স্মার্ট ওয়াচ এস ডব্লিউ ১০০</h4>

                            <div className="Landing__23__Hr2"></div>

                            <p>
                                স্কুটার মডেলগুলি এখানে বৈশিষ্ট্য, সর্বশেষ ডিজাইন, বাজারের খ্যাতি, জনপ্রিয়তা, নির্ভরযোগ্যতা,
                                 কর্মক্ষমতা, ব্র্যান্ড ইমেজ, বিক্রয়োত্তর পরিষেবা ইত্যাদি বিবেচনা করে কালানুক্রমিকভাবে
                                 সাজানো হয়েছে৷ বাংলাদেশের এই সেরা স্কুটার পৃষ্ঠায়, আমরা বিভিন্ন দামের রেঞ্জের গাড়িগুলিকে রেখেছি৷
                            </p>

                            <Link href='#placeAnOrder' className="bg2"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>
                            <Link href='#placeAnOrder' className="bg3"> যোগাযোগ করুন </Link>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

       <div className="Landing__23__section_gaps"></div>

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
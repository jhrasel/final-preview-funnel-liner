import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart,AiOutlineMail} from 'react-icons/ai';
import { IoCallOutline} from "react-icons/io5";
import {IoLocationSharp} from "react-icons/io5";
import { HiOutlineArrowSmallLeft,HiOutlineArrowSmallRight } from "react-icons/hi2";


// Common 

import Order from '@/components/LandingPage/Common/Order/Order';
import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';
import Video from '@/components/LandingPage/Common/Video/Video';
import landingImageUrl from "../../public/images/landing-22/logo.png";
import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"
import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';
import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';

// ShippingAddress Img

import DelivaryImgUrl1 from '../../public/images/landing-24/img16.png'
import DelivaryImgUrl2 from '../../public/images/landing-24/img17.png'
import DelivaryImgUrl3 from '../../public/images/landing-24/img18.png'
import DelivaryImgUrl4 from '../../public/images/landing-24/img19.png'

const index = () => {

  return (

    <div className='Landing__22'>

         {/* =======================================================================================
                    Banner
        ============================================================================================*/}

        
        <section>

            <div className='Landing__22__bg_div'>

                <Container>

                    <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                    <Row className='Landing__22__Reverce'>

                        <Col md={6}>

                            <div className='Landing__22__BannerTxt'>

                                <p>সারা দেশে ফ্রি হোম ডেলিভারি</p>

                                <img  className='Landing__22__BannerTxtimg1' src="/images/landing-22/img4.png" alt="" />

                                <h1>গরুর ঘানি ভাঙ্গা ১০০% পিউর  সরিষার তৈল পুষ্টিমান এবং গুণাগুণ অক্ষুন্ন</h1>

                                <h3>মুল্য-৪৫০ টাকা</h3>

                                <div className='Landing__22__BannerLinkimgBox'>

                                    <img className='Landing__22__LinkAbs' src="/images/landing-22/img19.png" alt="" />

                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                                </div>


                                <div className='Landing__22__RelText'>

                                    <div className='Landing__22__AbsB_Box'>

                                        <img src="/images/landing-22/img3.png" alt="" />

                                        <h5>01894844452</h5>

                                    </div>

                                </div>

                            </div>

                        </Col>

                        <Col md={6}> 
                        
                            <div className='Landing__22__DisImgDiv'>

                                <img className='Landing__22__DisImg' src='/images/landing-22/img.png'></img>

                            </div>
                        </Col>
                     

                    </Row>

                </Container>

            </div>

        </section>


        <div className="Landing__22__section_gaps"></div>

        {/* =======================================================================================
            Oil details
        ============================================================================================*/}
        <section>

            <h2 className='Landing__22__Oilh2'>আমাদের সরিষার তেলের পুষ্টির তথ্য</h2>

            <div className='Landing__22__Oildetails'>

                
            </div>

        </section>

        <div className="Landing__22__section_gaps"></div>

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
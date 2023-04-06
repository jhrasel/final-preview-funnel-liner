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
import landingImageUrl from "../../public/images/landing-24/logo.png";
import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"
import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';
import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';

// ShippingAddress Img

import DelivaryImgUrl1 from '../../public/images/landing-21/img18.png'
import DelivaryImgUrl2 from '../../public/images/landing-21/img19.png'
import DelivaryImgUrl3 from '../../public/images/landing-21/img20.png'
import DelivaryImgUrl4 from '../../public/images/landing-21/img21.png'


const index = () => {

  return (

    <div className='Landing__24'>

        {/* =======================================================================================
                    Banner
        ============================================================================================*/}
        
        <section>

            <div className='Landing__24__bg_div'>

                <Container>

                    <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                    <Row>

                        <Col sm={12} md={6}>

                            <div className='Landing__24__BannerTxt'>

                                 <h6>আমরা হয়তো রঙিন কাপড়ে দেখতে চাই বাবাকে</h6>

                                <img className='Landing__24__BannerTxtAbs1' src="/images/landing-24/img20.png" alt="" />

                                <img className='Landing__24__BannerTxtAbs2' src="/images/landing-24/img2.png" alt="" />

                                <h1>তাই এবার ঈদে বাবাকে উপহার হিসেবে পাঞ্জাবির দিতে পারেন আমাদের  পাঞ্জাবি গুলা .</h1>

                                <h3>৯০০ <span>টাকা থেকে শুরু</span></h3>
                                
                                <img className='Landing__24__BannerTxtAbs3' src="/images/landing-24/img3.png" alt="" />

                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                            </div>

                        </Col>

                        <Col sm={12} md={6}>

                            <div className='Landing__24__Col2'>
                                
                                <img className='Landing__24__BannerTxtAbs4' src="/images/landing-24/img1.png" alt="" />

                            </div>

                        </Col>

                    </Row>

                </Container>
            </div>

        </section>


        <div className="Landing__24__section_gaps"></div>

        {/* =======================================================================================
                    Size
        ============================================================================================*/}

        <section>

            <Container>

                <Row>

                    <Col md={3}>

                            <div className='Landing__24__SizeImgdiv'>

                                <img className='Landing__24__SizeImgdivAbs' src="/images/landing-24/img4.png" alt="" />

                            </div>
                    </Col>

                    <Col md={9}>


                    </Col>

                </Row>

            </Container>

        </section>


        <div className="Landing__24__section_gaps"></div>
        
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
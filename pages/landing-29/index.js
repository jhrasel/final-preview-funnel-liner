import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Order from '@/components/LandingPage/Common/Order/Order';
import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';
import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
import Menubar from '@/components/LandingPage/Common/Menubar/Menubar';
import landingImageUrl from "../../public/images/landing-29/logo.svg";
import Video from '@/components/LandingPage/Common/Video/Video';


// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

// icon

import { FaShippingFast } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram,AiOutlineWhatsApp } from "react-icons/ai";
import { RiYoutubeLine } from "react-icons/ri";



const StudentPackage = () => {


    return (

        <div className="Landing__29">
            
            <div className='StudentPackage'>
            
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                Logo
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className='Logo'>

                    <Menubar logoImage={landingImageUrl}></Menubar>

                </section>


                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Banner
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className='Banner'>

                    <div className="BannerLeft1">
                        <img src="/images/landing-29/banner_left1.png" alt="" />
                    </div>

                    <div className="BannerLeft2">
                        <img src="/images/landing-29/banner_left2.png" alt="" />
                    </div>

                    <div className="BannerRight1">
                        <img src="/images/landing-29/banner_right1.png" alt="" />
                    </div>

                    <div className="BannerRight2">
                        <img src="/images/landing-29/banner_right2.png" alt="" />
                    </div>

                    <Container>

                        <Row className="d_flex">

                            <Col lg={6}>

                                <div className="BannerText">
                                    <h3>Valentne Day এর ৭ দিনের কমপ্লিট প্যাকেজ <br /> প্রি অর্ডার বুকিং চলছে । </h3>
                                    <h2>ভালোবাসার সেলিব্রেশনে <br /> বাজেটের মধ্যে সলিউশন !</h2>

                                    <h4>বর্তমান মূল্যঃ <span>১৯৯৯</span> টাকা</h4>
                                    <del>পূর্বের মূল্যঃ ২২০০ টাকা</del>

                                    <div className="OrderNow d_flex">

                                        <div className="CallForOrder">
                                            <Link href='#order'>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Order Now
                                            </Link>
                                        </div>

                                        <div className="BannerNumber">

                                            <Link href='tel:01894844456'>+8801894844456</Link>
                                            <p>অর্ডার করতে কল করুন এই নাম্বারে</p>

                                        </div>



                                    </div>

                                </div>

                            </Col>

                            <Col lg={6}>

                                <div className="BannerImg">
                                    <img src="/images/landing-29/student-package.png" alt="" />
                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>


                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Video
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className="Video">

                    <Container>

                        <Row>

                            <Col lg={12}>

                                <div className="VideoItem">

                                   <Video/>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>


                {/* section_gaps */}
                <div className="section_gaps"></div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    WhyBuy
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className="WhyBuy">

                    <div className="WhyBuyLeft">
                        <img src="/images/landing-29/why_left.png" alt="" />
                    </div>

                    <div className="WhyBuyRight">
                        <img src="/images/landing-29/why_right.png" alt="" />
                    </div>

                    <Container>

                        <Row>

                            <Col lg={12}>
                                <div className="Header text-center">
                                    <h2>ভালোবাসার মানুষের জন্য আপনি কেন এই গিফট বক্সটি উপহার দিবেন ?</h2>
                                </div>
                            </Col>

                            <Col lg={12}>

                                <div className="WhyBuyContent">

                                    {/* item */}
                                    <div className="WhyBuyItem">
                                        <div className="img">
                                            <img src="/images/landing-29/why1.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h3>টেডি বেয়ার</h3>
                                        </div>
                                    </div>

                                    {/* item */}
                                    <div className="WhyBuyItem">
                                        <div className="img">
                                            <img src="/images/landing-29/why2.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h3>প্রিমিয়াম চকোলেট</h3>
                                        </div>
                                    </div>

                                    {/* item */}
                                    <div className="WhyBuyItem">
                                        <div className="img">
                                            <img src="/images/landing-29/why3.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h3>কাপল শো পিস</h3>
                                        </div>
                                    </div>

                                    {/* item */}
                                    <div className="WhyBuyItem">
                                        <div className="img">
                                            <img src="/images/landing-29/why4.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h3>আংটি</h3>
                                        </div>
                                    </div>

                                    {/* item */}
                                    <div className="WhyBuyItem">
                                        <div className="img">
                                            <img src="/images/landing-29/why5.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h3>গোল্ডেন রোজ</h3>
                                        </div>
                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>
                
                {/* section_gaps */}
                <div className="section_gaps"></div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    StudentSlider
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className="StudentSlider">

                    <img src="/images/landing-29/StudentSlider_bg.png" alt="" />

                    <div className="SliderOverlay">

                        <Container>

                            <Row>

                                <Col lg={12}>

                                    <div className="Header text-center">
                                        
                                        <h2>কি কি থাকছে আমাদের এই <br /> স্টুডেন্ট প্যাকেজে ?</h2>                        

                                    </div>    

                                </Col>

                                <Col lg={12}>

                                    <Swiper navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Navigation]} className="mySwiper">

                                        {/* Item */}
                                        <SwiperSlide>
                                            <div className="SliderOverlayItem">
                                                <img src="/images/landing-29/teddy.png" alt="" />
                                            </div>
                                        </SwiperSlide>

                                        {/* Item */}
                                        <SwiperSlide>
                                            <div className="SliderOverlayItem">
                                                <img src="/images/landing-29/rose.png" alt="" />
                                            </div>
                                        </SwiperSlide>

                                        {/* Item */}
                                        <SwiperSlide>
                                            <div className="SliderOverlayItem">
                                                <img src="/images/landing-29/ring.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        {/* Item */}
                                        <SwiperSlide>
                                            <div className="SliderOverlayItem">
                                                <img src="/images/landing-29/silk.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        {/* Item */}
                                        <SwiperSlide>
                                            <div className="SliderOverlayItem">
                                                <img src="/images/landing-29/light.png" alt="" />
                                            </div>
                                        </SwiperSlide>

                                    </Swiper>

                                </Col>

                            </Row>

                        </Container>

                    </div>

                </section>

                {/* section_gaps */}
                <div className="section_gaps"></div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                CustomerReview
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className="CustomerReview">

                    <Container>

                          <CustomerReview/>  

                    </Container>

                </section>

                {/* section_gaps */}
                <div className="section_gaps"></div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    OrderConfirmFrom
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className="OrderConfirmFrom" id="order">

                   <Order></Order>

                </section>

                {/* section_gaps */}
                <div className="section_gaps"></div>

                            
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Delivary
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
             
                <section className="Delivary">

                    <Container>

                        <Row>

                            <Col lg={12}>

                                <div className="DelivaryContent">

                                    {/* item */}
                                    <div className="DelivaryItem d_flex">

                                        <div className="img">
                                            <FaShippingFast></FaShippingFast>
                                        </div>

                                        <div className="text">
                                            <h3>Fastest Delivery</h3>
                                            <p>100% Free for all orders</p>
                                        </div>

                                    </div>

                                    {/* item */}
                                    <div className="DelivaryItem d_flex">

                                        <div className="img">
                                            <MdAvTimer></MdAvTimer>
                                        </div>

                                        <div className="text">
                                            <h3>Great Support 24/7</h3>
                                            <p>We care your experiences</p>
                                        </div>

                                    </div>

                                    {/* item */}
                                    <div className="DelivaryItem d_flex">

                                        <div className="img">
                                            <RiShieldCheckLine></RiShieldCheckLine>
                                        </div>

                                        <div className="text">
                                            <h3>secure Payment</h3>
                                            <p>100% Secure Payment Method</p>
                                        </div>

                                    </div>


                                </div>

                            </Col>

                        </Row>

                    </Container>

                    </section>


                    {/* section_gaps */}
                    <div className="section_gaps"></div>

                    {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    FollowUs
                    -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section className="FollowUs">

                    <Container>

                        <Row>

                            <Col lg='12'>

                                <div className="Header">
                                    <h2>Follow Us On Social Media</h2>
                                </div>

                                <div className="SocialIcon d_flex d_center">

                                    <Link href='https://www.facebook.com/GiftValyShop/' className="fb"><FaFacebookF></FaFacebookF></Link>
                                    <Link href='' className="instagram"><AiOutlineInstagram></AiOutlineInstagram></Link>
                                    <Link href='https://www.youtube.com/@giftvaly8386' className="youtube"><RiYoutubeLine></RiYoutubeLine></Link>
                                    <Link href='https://wa.me/01894844456' className="whatsapp"><AiOutlineWhatsApp ></AiOutlineWhatsApp></Link>

                                </div>

                            </Col>
                            

                        </Row>

                    </Container>

                    </section>


                    {/* section_gaps */}
                    <div className="section_gaps"></div>

                    {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Footer
                    -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section className="StudentFooter">

                    <Container>

                        <Row className="d_flex d_justify">

                            <Col sm={4} xs={12}>

                                <div className="FooterItem">

                                    <ul>
                                        <li> <Link href=''>Terms & Conditions</Link> </li>
                                        <li> <Link href=''>Privacy Policy</Link> </li>
                                    </ul>
                                    
                                </div>

                            </Col>

                            <Col sm={4} xs={12}>

                                <div className="FooterLogo">
                                    <img src="images/landing-1/logo.svg" alt="" />
                                </div>

                            </Col>

                            <Col sm={4} xs={12}>

                                    <TinyFooter></TinyFooter>

                            </Col>

                        </Row>

                    </Container>

                    </section>


                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Logo
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}


            </div>
        
        </div>


    )

}

export default StudentPackage
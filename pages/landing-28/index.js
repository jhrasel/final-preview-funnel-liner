import { useRef, useState } from "react";
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';

import Order from '@/components/LandingPage/Common/Order/Order';
import Menubar from '@/components/LandingPage/Common/Menubar/Menubar';
import landingImageUrl from "../../public/images/landing-28/logo.svg";
import Video from '@/components/LandingPage/Common/Video/Video';
import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';



// icon
import { BsArrowDown } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram,AiOutlineWhatsApp } from "react-icons/ai";
import { RiYoutubeLine } from "react-icons/ri";




// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";

const StandardPackage = () => {

  return (

    <div className='Landing__28'>

        <div className='StandardPackage StudentPackage'>
            
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

                    <div className="BannerBg">
                        <img src="/images/landing-28/banner_bg.png" alt="" />
                    </div>

                    <div className="BannerContent">

                        <Container>

                            <Row className="justify-content-md-center">

                                <Col lg={8}>

                                    <div className="BannerText">

                                        <h2>এই ভ্যালেন্টাইনে আপনার  <br /> ভালোবাসার মানুষের জন্য নিন </h2>
                                        <h1>বিশেষ ভালোবাসা <br /> গিফট বক্স !</h1>

                                        <div className="Arrow">
                                            <BsArrowDown/>
                                        </div>

                                        <ul>
                                            <li className="d_flex"> <img src="/images/landing-28/banner1.png" alt="" /> প্রিমিয়াম চকোলেট বক্স </li>
                                            <li className="d_flex"> <img src="/images/landing-28/banner2.png" alt="" /> স্পেশাল টেডি</li>
                                            <li className="d_flex"> <img src="/images/landing-28/banner3.png" alt="" /> হাই কোয়ালিটি শাড়ি</li>
                                            <li className="d_flex"> <img src="/images/landing-28/banner4.png" alt="" /> স্পেশাল হার্ট শেপ লাক্সারি বক্স</li>
                                        </ul>

                                    </div>

                                </Col>

                            </Row>

                        </Container>

                    </div>

                </section>

                {/* section_gaps */}
                <div className="section_gaps"></div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Video
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
               
                <section className="Video">

                    <Container>

                        <Row>

                            <Col lg={12}>

                                <div className="VideoItem">

                                   <Video></Video>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>

                
                {/* section_gaps */}
                <div className="section_gaps"></div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Price
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className="Price">

                    <Container>

                        <Row>

                            <Col lg={12}>

                                <div className="PriceContent">

                                    <img src="/images/landing-28/price.png" alt="" />

                                    <div className="PriceItem">
                                        <h2>মুল্য-১৫০০০ টাকা</h2>
                                        <h3>সারা দেশে ফ্রি হোম ডেলিভারি</h3>
                                        <Link href=''>অর্ডার করতে এখানে ক্লিক করুন</Link>
                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>


                {/* section_gaps */}
                <div className="section_gaps"></div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    SariAbout
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section className="SariAbout">

                    <Container>

                        <Row className="d_flex">

                            <Col lg={6}>

                                <div className="SariAboutText">

                                    <h2>ভালোবাসার দিনে প্রিয়জনকে দিন <br /> আমাদের এই বিশেষ উপহার</h2>
                                    <p> কোটি টাকার বাড়ির চেয়েও একটি জামদানিতেই অনেক বেশি খুশি হন বেশিরভাগ নারী। প্রিয় পোশাকের নাম জানতে চাইলে, সব বাঙালি নারী মূহুর্তেই উত্তর দেবেন ‘শাড়ি’। 
                                        প্রতিটি শাড়িই নারীর কাছে অনেক অনেক প্রিয়। তাই তো বেশ কয়েক বছরও যদি পরা না হয়, তবুও শাড়িটি ফেলে দিতে মন চায় না কারোই। হবেই বা না কেন, প্রতিটি 
                                        শাড়ির সঙ্গে যে জড়িয়ে থাকে উপলক্ষ, উৎসব, প্রিয় মানুষের ভালোবাসা, অনেক অনেক স্মৃতি। তাই তো নারীর এত প্রিয় শাড়ি।
                                    </p>

                                    <p>প্রতিটি শাড়ির সঙ্গে যে জড়িয়ে থাকে উপলক্ষ, উৎসব, প্রিয় মানুষের ভালোবাসা, অনেক অনেক স্মৃতি। তাই তো নারীর এত প্রিয় শাড়ি।</p>

                                    <div className="CallForOrder">
                                        <Link href='#order'>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                                অর্ডার করুন <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={6}>
                                
                                <div className="SariAboutSlider">

                                    <div className="BannerSlider">

                                        <Swiper
                                        effect={"cube"}
                                        grabCursor={true}
                                        cubeEffect={{
                                            shadow: true,
                                            slideShadows: true,
                                            shadowOffset: 20,
                                            shadowScale: 0.94,
                                        }}
                                        pagination={true}
                                        modules={[EffectCube, Pagination]}
                                        className="mySwiper"
                                        >

                                            <SwiperSlide>

                                                <div className="BannerItem">
                                                    <div className="img">
                                                        <img src="/images/landing-28/about_slider.png" alt="" />
                                                    </div>
                                                </div>
                                                
                                            </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="BannerItem">
                                                    <div className="img">
                                                        <img src="/images/landing-28/about_slider.png" alt="" />
                                                    </div>
                                                </div>
                                                
                                            </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="BannerItem">
                                                    <div className="img">
                                                        <img src="/images/landing-28/about_slider.png" alt="" />
                                                    </div>
                                                </div>
                                                
                                            </SwiperSlide>

                                        </Swiper>

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

                    <img src="/images/landing-28/StudentSlider_bg.png" alt="" />

                    <div className="SliderOverlay">

                        <Container>

                            <Row>

                                <Col lg={12}>

                                    <div className="Header text-center">
                                        
                                        <h2>কি কি থাকছে আমাদের এই <br /> স্ট্যান্ডার্ড প্যাকেজে ?</h2>                        

                                    </div>    

                                </Col>

                                <Col lg={12}>

                                    <Swiper navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Navigation]} className="mySwiper">

                                        {/* Item */}
                                        <SwiperSlide>
                                            <div className="SliderOverlayItem">
                                                <img src="/images/landing-28/package.png" alt="" />
                                            </div>
                                        </SwiperSlide>

                                        {/* Item */}
                                        <SwiperSlide>
                                            <div className="SliderOverlayItem">
                                                <img src="/images/landing-28/package.png" alt="" />
                                            </div>
                                        </SwiperSlide>

                                        {/* Item */}
                                        <SwiperSlide>
                                            <div className="SliderOverlayItem">
                                                <img src="/images/landing-28/package.png" alt="" />
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
                <section >

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


            </div>
            
            <div className="section_gaps"></div>

    </div>

  )

}

export default StandardPackage
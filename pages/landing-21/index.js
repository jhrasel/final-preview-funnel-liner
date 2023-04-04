import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart,AiOutlineMail} from 'react-icons/ai';
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineArrowSmallLeft,HiOutlineArrowSmallRight } from "react-icons/hi2";


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
import landingImageUrl from "../../public/images/landing-21/logo.png";
import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"
import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';
import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';

// ShippingAddress Img

import DelivaryImgUrl1 from '../../public/images/landing-20/img9.png'
import DelivaryImgUrl2 from '../../public/images/landing-20/img10.png'
import DelivaryImgUrl3 from '../../public/images/landing-20/img11.png'
import DelivaryImgUrl4 from '../../public/images/landing-20/img12.png'


const index = () => {

    const swiperRef = useRef();

  return (

    <div className='Landing__21'>

        {/* =======================================================================================
                    Banner
        ============================================================================================*/}

        <section>

        <div className='Landing__21__bg_div'>

            <Container>

                <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                <Row className='Landing__21__Reverce'>

                    <Col md={6}>

                        <div className='Landing__21__BannerTxt'>

                             <p>2021 NEW COLLECTION</p>

                            <h1>উজ্জ্বল, আকর্ষণীয় ও দীর্ঘস্থায়ী গহনা আংটি কিনুন বাংলাদেশের সেরা দামে</h1>

                            <h3>মুল্য-৩০৫০.00 টাকা</h3>

                            <h4>সারা দেশে ফ্রি হোম ডেলিভারি</h4>

                            <div className='Landing__21__BannerLinkimgBox'>

                                <img  className='Landing__21__BannerTxtimg1' src="/images/landing-21/img3.png" alt="" />

                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                            </div>


                            <div className='Landing__21__RelText'>

                                <div className='Landing__21__AbsB_Box'>

                                    <img src="/images/landing-21/img2.png" alt="" />

                                    <h5>01894844452</h5>

                                </div>

                            </div>

                        </div>

                    </Col>

                    <Col md={6}>

                            
                        <div className='Landing__21__Col_2Rel'>

                                <img  className='Landing__21__img2BagAbs' src="/images/landing-21/img1.png" alt="" />

                                <img  className='Landing__21__img2BagAbs2' src="/images/landing-21/img.png" alt="" />

                        </div>

                    </Col>

                </Row>

            </Container>

        </div>

        </section>


        <div className='Landing__21__section_gaps'></div>     


        {/* =======================================================================================
                    Product Details
        ============================================================================================*/}
        
        <section>

            <Container>

            <div className='Landing__21__ProductDetails'>

        
                <h2>আমাদের কাছে আপনি পাবেন নানা ধরনের সোনার  আংটি এবং গয়না</h2>

                <img src="/images/landing-21/img4.png" alt="" />

                <p>আমাদের কাছে আপনি পাবেন  নানা ধরনের গয়নার মধ্যে সোনা, রুপা, হীরা, রুবি, পান্নার মতো দামি গয়না যেমন আছে।
                     তেমনি নানা রকম পাথর, তামা, পিতল, পুঁতি, মাটির গয়নাও বেশ জনপ্রিয়। জুয়েলারি কিংবা গহনা নামটা শুনলেই আনন্দে
                      নেচে উঠে সাজগোজপ্রিয় নারীদের মন। গহনা পছন্দ করে না এমন মেয়ের সংখ্যা খুবই কম। পোশাকের সঙ্গে তাল মিলিয়ে 
                      চলছে গয়নার ফ্যাশন। অনুষ্ঠানভেদে কিংবা রুচিভেদে একেকজন একেক রকমের গহনা পরতে পছন্দ করেন।
                 </p>

            </div>

            </Container>

        </section>


        <div className='Landing__21__section_gaps'></div>     

        {/* =======================================================================================
                    Order Template One
        ============================================================================================*/}

        <section>

            <Container>
                
                <div className='Landing__21__Order1'>

                    <img className='Landing__21__Order1Img' src="/images/landing-21/img5.png" alt="" />

                    <div className='Landing__21__Order1Abs'>

                        <h4>মূল্যঃ  ৩০৫০ টাকা</h4>

                        <h5>সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</h5>

                        <div className='Landing__21__BannerLinkimgBox'>

                            <img  className='Landing__21__BannerTxtimg1 Landing__21__BannerTxtimg2' src="/images/landing-21/img3.png" alt="" />

                            <Link href='#placeAnOrder' className="bg bg1"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                        </div>

                    </div>

                </div>

            </Container>

        </section>


        {/* =======================================================================================
                    Banner Big Img
        ============================================================================================*/}

        <section>

            <Container fluid>
                
                <img className='Landing__21__BannerBigImg' src="/images/landing-21/img6.png" alt="" />

            </Container>

        </section>

        <div className='Landing__21__section_gaps'></div>  

        {/* =======================================================================================
                    Card
        ============================================================================================*/}

        <section className='Landing__21__CardSec'>

            <Container fluid>

                <div className='Landing__21__CardUpTxt'>

                    <h2>
                          যেকোনো মডেলের আংটি সবচেয়ে কম দামে ও আকষর্ণীয় ছাড়ে পাওয়া যাচ্ছে
                          আমাদের অন্যতম বিশ্বস্ত জুয়েলারি প্রতিষ্ঠান 
                    </h2>

                    <img src="/images/landing-21/img4.png" alt="" />

                </div>

                
                <div className='Landing__21__CardDiv'>

                    <img className='Landing__21__CardDivAb1' src="/images/landing-21/img11.png" alt="" />

                    <img  className='Landing__21__CardDivAb2' src="/images/landing-21/img10.png" alt="" />

                    <Row>

                        <Col xs={12} sm={6} md={4}>
                            
                            <div className='Landing__21__CardDivRel1'>

                                <div className='Landing__21__CardDivAbs1'></div>

                                <div  className='Landing__21__Card'>

                                    <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />
                                    
                                    <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                    <h4>সোনার কানের দুল</h4>

                                    <img src="/images/landing-21/img9.png" alt="" />

                                    <p>এটি বিশ্বাস করা হয় যে এটি শরীরের প্রবাহ বজায় রাখে। কানের স্নায়ু চোখের সাথে সংযুক্ত রয়েছে।</p>

                                </div>

                            </div>

                        </Col>

                        
                        <Col xs={12} sm={6} md={4}>
                            
                            <div className='Landing__21__CardDivRel1'>

                                <div className='Landing__21__CardDivAbs1'></div>

                                <div  className='Landing__21__Card'>

                                    <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />
                                    
                                    <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                    <h4>সোনার আংটি</h4>

                                    <img src="/images/landing-21/img9.png" alt="" />

                                    <p>এটি বিশ্বাস করা হয় যে এটি শরীরের প্রবাহ বজায় রাখে। কানের স্নায়ু চোখের সাথে সংযুক্ত রয়েছে।</p>

                                </div>

                            </div>

                        </Col>

                        
                        <Col xs={12} sm={6} md={4}>
                            
                            <div className='Landing__21__CardDivRel1'>

                                <div className='Landing__21__CardDivAbs1'></div>

                                <div  className='Landing__21__Card'>

                                    <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />
                                    
                                    <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                    <h4>সোনার চুড়ি</h4>

                                    <img src="/images/landing-21/img9.png" alt="" />

                                    <p>এটি বিশ্বাস করা হয় যে এটি শরীরের প্রবাহ বজায় রাখে। কানের স্নায়ু চোখের সাথে সংযুক্ত রয়েছে।</p>

                                </div>

                            </div>

                        </Col>

                        
                        <Col xs={12} sm={6} md={4}>
                            
                            <div className='Landing__21__CardDivRel1'>

                                <div className='Landing__21__CardDivAbs1'></div>

                                <div  className='Landing__21__Card'>

                                    <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />
                                    
                                    <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                    <h4>সোনার নেকলেস </h4>

                                    <img src="/images/landing-21/img9.png" alt="" />

                                    <p>এটি বিশ্বাস করা হয় যে এটি শরীরের প্রবাহ বজায় রাখে। কানের স্নায়ু চোখের সাথে সংযুক্ত রয়েছে।</p>

                                </div>

                            </div>

                        </Col>

                        
                        <Col xs={12} sm={6} md={4}>
                            
                            <div className='Landing__21__CardDivRel1'>

                                <div className='Landing__21__CardDivAbs1'></div>

                                <div  className='Landing__21__Card'>

                                    <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />
                                    
                                    <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                    <h4>সোনার টিকলি</h4>

                                    <img src="/images/landing-21/img9.png" alt="" />

                                    <p>এটি বিশ্বাস করা হয় যে এটি শরীরের প্রবাহ বজায় রাখে। কানের স্নায়ু চোখের সাথে সংযুক্ত রয়েছে।</p>

                                </div>

                            </div>

                        </Col>

                        
                        <Col xs={12} sm={6} md={4}>
                            
                            <div className='Landing__21__CardDivRel1'>

                                <div className='Landing__21__CardDivAbs1'></div>

                                <div  className='Landing__21__Card'>

                                    <img className='Landing__21__CardAbs1' src="/images/landing-21/img7.png" alt="" />
                                    
                                    <img className='Landing__21__CardAbs2' src="/images/landing-21/img8.png" alt="" />

                                    <h4>সোনার নোজ পিন</h4>

                                    <img src="/images/landing-21/img9.png" alt="" />

                                    <p>এটি বিশ্বাস করা হয় যে এটি শরীরের প্রবাহ বজায় রাখে। কানের স্নায়ু চোখের সাথে সংযুক্ত রয়েছে।</p>

                                </div>

                            </div>

                        </Col>

                        
                    </Row>

                </div>


            </Container>

        </section>

        <div className='Landing__21__section_gaps'></div>     

        {/* =======================================================================================
                    Slider
        ============================================================================================*/}

        <section>
            
            <Container>

                 <div className='Landing__21__CardUpTxt Landing__21__CardUpTxt2'>

                    <h2> আমাদের নতুন কিছু গহনা সোনার </h2>

                    <img src="/images/landing-21/img4.png" alt="" />

                </div>


                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="mySwiper"
                    loop={true}

                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;}}

                    breakpoints={{
                            240: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 10,
                            },
                            768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                            },
                            1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 30,
                            },
                        }}
                >

                    <SwiperSlide className="Landing__21__SliderImg">

                        <Link href="#">

                            <div className="Landing__21__Slider_CardDiv">

                                <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img12.png" alt="img"></img>

                            </div>

                        </Link>

                    </SwiperSlide>

                    <SwiperSlide className="Landing__21__SliderImg">

                        <Link href="#">

                            <div className="Landing__21__Slider_CardDiv">

                                <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img13.png" alt="img"></img>

                            </div>

                        </Link>

                    </SwiperSlide>

                    <SwiperSlide className="Landing__21__SliderImg">

                        <Link href="#">

                            <div className="Landing__21__Slider_CardDiv">

                                <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img14.png" alt="img"></img>

                            </div>

                        </Link>

                    </SwiperSlide>

                    <SwiperSlide className="Landing__21__SliderImg">

                        <Link href="#">

                            <div className="Landing__21__Slider_CardDiv">

                                <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img15.png" alt="img"></img>

                            </div>

                        </Link>

                    </SwiperSlide>

                    <SwiperSlide className="Landing__21__SliderImg">

                        <Link href="#">

                            <div className="Landing__21__Slider_CardDiv">

                                <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img12.png" alt="img"></img>

                            </div>

                        </Link>

                    </SwiperSlide>

                    <SwiperSlide className="Landing__21__SliderImg">

                        <Link href="#">

                            <div className="Landing__21__Slider_CardDiv">

                                <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img13.png" alt="img"></img>

                            </div>

                        </Link>

                    </SwiperSlide>

                    <SwiperSlide className="Landing__21__SliderImg">

                        <Link href="#">

                            <div className="Landing__21__Slider_CardDiv">

                                <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img14.png" alt="img"></img>

                            </div>

                        </Link>

                    </SwiperSlide>

                    <SwiperSlide className="Landing__21__SliderImg">

                        <Link href="#">

                            <div className="Landing__21__Slider_CardDiv">

                                <img className="Landing__21__Slider_CardDivImg" src="/images/landing-21/img15.png" alt="img"></img>

                            </div>

                        </Link>

                    </SwiperSlide>

                </Swiper>


                <div className="Landing__21__SliderIconDiv">

                    <div className="Landing__21__SliderIconDiv2">    

                        <button className="Landing__21__SliderIcon1" onClick={() => swiperRef.current?.slidePrev()}><HiOutlineArrowSmallLeft></HiOutlineArrowSmallLeft></button>

                        <button className="Landing__21__SliderIcon2" onClick={() => swiperRef.current?.slideNext()}><HiOutlineArrowSmallRight/></button>

                    </div>  

                </div>

            </Container>

        </section>


        <div className='Landing__21__section_gaps'></div>  

        {/* =======================================================================================
                    Banner
        ============================================================================================*/}

            <section className='Landing__21__Video'>

                <Container>

                        <Video></Video>

                </Container>

            </section>


            <div className='Landing__21__section_gaps'></div>  

        {/* =======================================================================================
                    Order Template 2
        ============================================================================================*/}

        <section>

            <Container>

            <div className='Landing__21__Order2'>

                <img className='Landing__21__Order2Img' src="/images/landing-21/img16.png" alt="" />

                <div className='Landing__21__Order2Abs'>

                    <h6>+8801799733234</h6>

                    <h4>মূল্যঃ  ৩০৫০ টাকা</h4>

                    <h5>সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</h5>

                        <div className='Landing__21__BannerLinkimgBox'>

                            <img  className='Landing__21__BannerTxtimg1' src="/images/landing-21/img3.png" alt="" />

                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                        </div>

                </div>

            </div>

            </Container>

        </section>


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
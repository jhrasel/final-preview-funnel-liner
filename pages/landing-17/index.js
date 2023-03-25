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
import { FreeMode, Autoplay, Pagination, Navigation} from "swiper";
import { useRef } from 'react';

// Common 

import Order from '@/components/LandingPage/Common/Order/Order';
import Menubar from '@/components/LandingPage/Common/Menubar/Menubar';
import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';
import Video from '@/components/LandingPage/Common/Video/Video';
import landingImageUrl from "../../public//images/landing-17/logo.png";
import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"
import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';

// ShippingAddress Img

import DelivaryImgUrl1 from '../../public/images/landing-17/img23.png'
import DelivaryImgUrl2 from '../../public/images/landing-17/img24.png'
import DelivaryImgUrl3 from '../../public/images/landing-17/img25.png'
import DelivaryImgUrl4 from '../../public/images/landing-17/img26.png'


const index = () => {

  return (

    <div className='Landing__17'>

        {/* =======================================================================================
                    Banner
        ============================================================================================*/}

        <section>

            <div className='Landing__17__bg_div'>
            
                <Container>

                    <div className='Landing__17__MenuDiv'>

                        <div className='Landing__17__MenuMid'>

                            <Menubar logoImage={landingImageUrl}></Menubar>

                        </div>

                    </div>


                    <Row className='Landing__17__RowPad'>

                        <Col sm={12} md={6}>

                            <div className='Landing__17__Banner1'>

                                <img src="/images/landing-17/img22.png" alt="Img"/>

                                <h4>স্নিকার  উপর 60% পর্যন্ত ছাড়।</h4>

                                <h1>ছেলেদের ফ্যাশনেবল রেগুলার মেনস ক্যাজুয়াল স্নিকার্স.</h1>

                                <h3>৳ ৩৭৯.00 <span>৳ ৯৯৯</span></h3>

                                    <div className='Landing__17__RelText'>

                                        <div className='Landing__17__AbsB_Box'>

                                            <h5>01894844452</h5>

                                            <img src="/images/landing-17/img1.png" alt="" />

                                        </div>

                                    </div>

                                <div className='Landing__17__RelButton'>

                                    <button className='Landing__17__Button1'></button>

                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>এখনই কিনুন</Link>

                                    <button className='Landing__17__Button2'></button>

                                </div>

                            </div>
                        
                        </Col>

                        <Col sm={12} md={6}>

                           <div className='Landing__17__Col_2Rel'>

                                <img className='Landing__17__img3' src="/images/landing-17/img2.png" alt="" />

                                <img  className='Landing__17__img2Abs' src="/images/landing-17/img3.png" alt="" />

                           </div>
                        
                        </Col>

                    </Row>

                </Container>

            </div>

        </section>
        
        {/* =======================================================================================
                    Card
        ============================================================================================*/}

        <section  className='Landing__17__CardSec' >

            <Container>

                    <Row>
                        
                        <Col lg={3}>

                            <div className='Landing__17__Card'>

                                <div className='Landing__17__CardImgHei'>

                                     <img src="/images/landing-17/img4.png" alt="" />

                                </div>     

                                <h4> জেন্টস স্যান্ডেল <br/>ক্যাজুয়াল সুজ</h4>

                            </div>

                        </Col>


                        <Col lg={3}>

                            <div className='Landing__17__Card'>

                                <div className='Landing__17__CardImgHei' >

                                    <img src="/images/landing-17/img5.png" alt="" />

                                </div>

                                <h4> জেন্টস স্যান্ডেল <br/>ক্যাজুয়াল সুজ</h4>

                            </div>

                        </Col>


                        <Col lg={3}>

                            <div className='Landing__17__Card'>

                                <div className='Landing__17__CardImgHei' >

                                    <img src="/images/landing-17/img6.png" alt="" />

                                </div>

                                <h4> জেন্টস স্যান্ডেল <br/>ক্যাজুয়াল সুজ</h4>

                            </div>

                        </Col>


                        <Col lg={3}>

                            <div className='Landing__17__Card'>

                                <div className='Landing__17__CardImgHei' >

                                    <img src="/images/landing-17/img7.png" alt="" />

                                </div>

                                <h4> জেন্টস স্যান্ডেল <br/>ক্যাজুয়াল সুজ</h4>

                            </div>

                        </Col>


                    </Row>

            </Container>

        </section>


        {/* =======================================================================================
                    Shipping
        ============================================================================================*/}

        <section>

            <Container>
                
                    <div className='Landing__17__ShippingDiv'>

                        <ShippingAddress
                            DelivaryImage1={DelivaryImgUrl1}
                            DelivaryImage2={DelivaryImgUrl2}
                            DelivaryImage3={DelivaryImgUrl3}
                            DelivaryImage4={DelivaryImgUrl4}
                            DelivaryTitle1="স্ট্যান্ডার্ড ২-৩ দিনের ডেলিভারি " 
                            DelivaryTitle2="মানি ব্যাক গ্যারান্টি" 
                            DelivaryTitle3="৭ দিনে রিটার্ন" 
                            DelivaryTitle4="24/7 গ্রাহক সহায়তা" 
                        />

                    </div>

            </Container>

        </section>

        <div className='Landing__17_section_gaps'></div>

        {/* =======================================================================================
                    Order Template 1
        ============================================================================================*/}

        <section>

            <Container>

                <div className='Landing__17__Order2'>

                    <img src="/images/landing-17/img9.png" alt="" />

                    <div className='Landing__17__Order2Abs'>

                        <h4>মুল্য-550.00 টাকা</h4>

                        <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                        <div className='Landing__17__RelButton'>

                            <button className='Landing__17__Button1'></button>

                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>এখনই কিনুন</Link>

                            <button className='Landing__17__Button2'></button>

                        </div>

                    </div>

                </div>


            </Container>

        </section>

        {/* =======================================================================================
                    Video
        ============================================================================================*/}

        <section >

                <div className='Landing__17__VideoH2Sec'>

                    <h2>কিভাবে  আমাদের ফ্যাশনেবল রেগুলার ওয়্যার জেনুইন লেদার সু ব্যবহার দেখুন ভিডিও </h2>

                </div>


                <div className='Landing__17__Video_div'>

                    <Container>

                    <Video></Video>

                    <div className='Landing__17__Order3 '>

                        <img src="/images/landing-17/img10.png" alt="" />

                        <div className='Landing__17__Order2Abs2'>

                            <h5>অর্ডার করতে কল করুন</h5>

                            <h4>01894844452</h4>

                        </div>

                    </div>


                    </Container>

                </div>


        </section>


        <div className='Landing__17_section_gaps'></div>
        
        {/* =======================================================================================
                    Table
        ============================================================================================*/}

        <section >

            <Container className='Landing__17__TableSec'>

                <div>
                    
                    <h2>পুরুষদের জন্য ফ্যাশনেবল এক্সক্লুসিভ স্নিকার কনভারস</h2>

                    <Row>

                        <Col xs={12} sm={6}>

                            <div className='Landing__17__Ul_div'>

                                <ul>

                                    <li>

                                        <img src="/images/landing-17/img16.png" alt="" /> 
                                        <p>লাইটওয়েট এবং টেকসই সোয়েড/ক্যানভাস উপরের</p> 

                                    </li>

                                    <li>

                                        <img src="/images/landing-17/img16.png" alt="" /> 
                                        <p>নিরাপদ লেস আপ বন্ধ সঙ্গে Eyelets</p> 
                                        
                                    </li>

                                    <li>

                                        <img src="/images/landing-17/img16.png" alt="" /> 
                                        <p>উপরের উপাদান  ক্যানভাস ধারা তৈরি </p> 

                                    </li>

                                </ul>

                            </div>
                      
                        </Col>

                      <Col xs={12} sm={6}>

                        <div className='Landing__17__Ul_div'>

                          <ul>

                            <li><img src="/images/landing-17/img16.png" alt="" /> <p>রাবার আউটসোল উপাদান দিয়ে তৈরি  </p> </li>

                            <li><img src="/images/landing-17/img16.png" alt="" /> <p>বাড়তি আরামের জন্য কুশনযুক্ত ফুটবেড</p> </li>

                            <li><img src="/images/landing-17/img16.png" alt="" /> <p>স্লিপ প্রতিরোধী, Breathable</p> </li>

                          </ul>

                        </div>
                      
                      </Col>

                    </Row>

                    {/* table */}

                    <div className='Landing__17__TableBox'>

                        <h4>আমাদের এই জুতাগুলার সাইজ</h4>

                        <Row className='Landing__17__TableRow'>
                            <Col>6.5 </Col>
                            <Col>7</Col>
                            <Col>8</Col>
                            <Col>8.5</Col>
                            <Col>9</Col>
                        </Row>

                        <Row className='Landing__17__TableRow'>
                            <Col>9.5 </Col>
                            <Col>10</Col>
                            <Col>10.5</Col>
                            <Col>11</Col>
                            <Col>11.5</Col>
                        </Row>

                        <Row className='Landing__17__TableRow'>
                            <Col>12 </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>

                    </div>

                </div>

            </Container>

        </section>

        {/* =======================================================================================
                    Order template 4
        ============================================================================================*/}

        <section className='Landing__17__Order4Sec'>

            <Container>

                <div className='Landing__17__Order4'>

                    <img src="/images/landing-17/img11.png" alt="" />

                    <div className='Landing__17__Order4Abs'>

                        <h4>মুল্য-550.00 টাকা</h4>

                        <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>

                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                    </div>

                </div>

            </Container>

        </section>

        {/* =======================================================================================
                    Slider
        ============================================================================================*/}

        <section>

            <Container>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true} 
                    modules={[Navigation]}
                    className="mySwiper"
                    loop={true}

                    breakpoints={{
                            240: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 0,
                            },
                            768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 0,
                            },
                            1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 0,
                            },
                        }}
                >

                    <SwiperSlide className="SliderImg">

                    <Link href="#">

                        <img src="/images/landing-17/img12.png" alt="img"></img>

                    </Link>

                    </SwiperSlide>

                </Swiper>


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
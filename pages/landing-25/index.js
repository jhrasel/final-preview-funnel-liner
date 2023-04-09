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
import landingImageUrl from "../../public/images/landing-25/logo.png";
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

    const swiperRef = useRef();

  return (

    <div className='Landing__25'>

        {/* =======================================================================================
                    Banner
        ============================================================================================*/}

        <section>

            <div className='Landing__25__bg_div'>

                <img className='BannertxtAbs3' src="images/landing-25/img2.png" alt="" />

                <img className='BannertxtAbs4' src="images/landing-25/img2.png" alt="" />

                <Container>

                    <Menubar logoImage={landingImageUrl}></Menubar>

                    <Row className='Landing__25__Reverce'>

                        <Col sm={12} >

                            <div className='Landing__25__BannerTxt'>

                                <h1>মদিনার রসালো স্বাদ ও পুষ্টিতে ভরপুর ন্যাচারালস সুপার প্রিমিয়াম খেজুর।</h1>

                                <div className='BannertxtRelDiv'>

                                    <div  className='BannertxtAbs1'>

                                        <h4>সরাসরি কিনতে ফোন করুন</h4>

                                            <div className='BannertxtAbs1D-f'>

                                                <img src="images/landing-25/img32.png" alt="" /> <span>01810045255</span>

                                            </div>

                                            <img className='BannertxtAbs2' src="images/landing-25/img1.png" alt="" />
                                    </div>

                                </div>

                                <img className='Landing__25__Bannerimg1' src="images/landing-25/img.png" alt="" />

                            </div>

                        </Col>

                    </Row>

                </Container>

            </div>

        </section>

        

        {/* =======================================================================================
                    Gift Box
        ============================================================================================*/}

        <section>

            <div className='GiftBoxDiv'>

                <img className='GiftBoxDivAbs1Img' src="images/landing-25/bg2.png" alt="" />

                <Container>

                    <div className='GiftBoxDivTxt'>

                        <h2>কি কি থাকছে আমাদের এই Corporate Gift Box এ! </h2>

                        <Row>

                           <div className='GiftImgBox'>

                                <div className='GiftImgItems'>

                                    <div className="img">
                                        <img className='GiftBoxImg1' src="images/landing-25/img3.png" alt="" />
                                    </div>

                                    <h4>মরিয়ম খেজুর</h4>

                                </div>

                                <div className='GiftImgItems'>

                                    <img className='GiftBoxImg2' src="images/landing-25/img4.png" alt="" />

                                    <h4>মাবরুম খেজুর</h4>

                                </div>

                                <div className='GiftImgItems'>

                                    <img className='GiftBoxImg3' src="images/landing-25/img5.png" alt="" />

                                    <h4>আজওয়া খেজুর</h4>

                                </div>
                           </div>

                        </Row>

                    </div>

                </Container>

            </div>

        </section>

        <div className="Landing__25__section_gaps"></div>

        {/* =======================================================================================
                    Order1
        ============================================================================================*/}

        <scetion>

            <Container>

                <div className='Landing__25__Order1'>

                    <div className='Landing__25__Order1Abs'>

                    <h4>মুল্য-৬০০ টাকা</h4>

                    <h5>বক্সটির ওজন ১ কেজি </h5>

                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করতে এখানে ক্লিক করুন</Link>

                    <h6>মদিনার আরেক খেজুরের নাম সাফাওয়ি। দেখতে প্রায় মরিয়ম খেজুরের মত। গাঢ় বাদামি রঙের লম্বাটে। খেতে মোটামুটি মিষ্টি।
                         সাফওয়ি খেজুর মদিনা অঞ্চলের যেকোনো অন্য অঞ্চলের খেজুরের চেয়ে বেশি ফজিলতপূর্ণ
                    </h6>

                    </div>

                </div>

            </Container>

        </scetion>

        <div className="Landing__25__section_gaps"></div>

        {/* =======================================================================================
                   Video
        ============================================================================================*/}
        <section>

            <Container>

                 <Video></Video>

            </Container>

        </section>

        <div className="Landing__25__section_gaps"></div>

        {/* =======================================================================================
                    Card
        ============================================================================================*/}
        <section>

            <Container>

                <h2 className='Landing__25__CardH2'>আমাদের এই মরিয়ম, সাফওয়ি, আজওয়া খেজুর বক্সগুলো কেন উপহার দিবেন </h2>

                <Row>

                    <Col md={6} lg={4}>

                        <div className='Landing__25__Card'>

                           <div className='Landing__25__CardImgDiv'> 
                                 <img src="images/landing-25/img11.png" alt="" />
                            </div>

                            <h4>সম্পর্ক স্থাপন </h4>
                            
                            <p>
                                আমাদের দেশে এখন আরবের বিভিন্ন নামি দামি খেজুর পাওয়া যায়। আগে আমরা ছোটবেলায় শুধু এক ধরনের খেজুর 
                                ই দেখতাম তাও রমজান মাস ছাড়া অন্য মাসে দেখাও যেত না তেমন।
                            </p>

                        </div>

                    </Col>

                    <Col md={6} lg={4}>

                        <div className='Landing__25__Card'>

                           <div className='Landing__25__CardImgDiv'> 
                                 <img src="images/landing-25/img12.png" alt="" />
                            </div>

                            <h4>উপহার</h4>
                            
                            <p>আমাদের দেশে এখন আরবের বিভিন্ন নামি দামি খেজুর পাওয়া যায়। আগে আমরা ছোটবেলায় 
                                শুধু এক ধরনের খেজুর ই দেখতাম তাও রমজান মাস ছাড়া অন্য মাসে দেখাও যেত না তেমন।
                            </p>

                        </div>

                    </Col>

                    <Col md={6} lg={4}>

                        <div className='Landing__25__Card'>

                           <div className='Landing__25__CardImgDiv'> 
                                 <img src="images/landing-25/img13.png" alt="" />
                            </div>

                            <h4>রমজানের উপহার  </h4>
                            
                            <p>
                                আমাদের দেশে এখন আরবের বিভিন্ন নামি দামি খেজুর পাওয়া যায়। আগে আমরা ছোটবেলায় 
                                শুধু এক ধরনের খেজুর ই দেখতাম তাও রমজান মাস ছাড়া অন্য মাসে দেখাও যেত না তেমন।
                            </p>

                        </div>

                    </Col>

                    <Col md={6} lg={4}>

                        <div className='Landing__25__Card'>

                           <div className='Landing__25__CardImgDiv'> 
                                 <img src="images/landing-25/img14.png" alt="" />
                            </div>

                            <h4>পারস্পরিক উপহার  </h4>
                            
                            <p>
                                আমাদের দেশে এখন আরবের বিভিন্ন নামি দামি খেজুর পাওয়া যায়। আগে আমরা ছোটবেলায় শুধু এক 
                                ধরনের খেজুর ই দেখতাম তাও রমজান মাস ছাড়া অন্য মাসে দেখাও যেত না তেমন।
                            </p>

                        </div>

                    </Col>

                    <Col md={6} lg={4}>

                        <div className='Landing__25__Card'>

                           <div className='Landing__25__CardImgDiv'> 
                                 <img src="images/landing-25/img15.png" alt="" />
                            </div>

                            <h4>ইফতারের খেজুর  </h4>
                            
                            <p>
                                আমাদের দেশে এখন আরবের বিভিন্ন নামি দামি খেজুর পাওয়া যায়। আগে আমরা ছোটবেলায় শুধু এক 
                                ধরনের খেজুর ই দেখতাম তাও রমজান মাস ছাড়া অন্য মাসে দেখাও যেত না তেমন।
                            </p>

                        </div>

                    </Col>

                    <Col md={6} lg={4}>

                        <div className='Landing__25__Card'>

                           <div className='Landing__25__CardImgDiv'> 
                                 <img src="images/landing-25/img16.png" alt="" />
                            </div>

                            <h4>সাস্থসমত্ত খেজুর </h4>
                            
                            <p>
                                আমাদের দেশে এখন আরবের বিভিন্ন নামি দামি খেজুর পাওয়া যায়। আগে আমরা ছোটবেলায় শুধু এক
                                ধরনের খেজুর ই দেখতাম তাও রমজান মাস ছাড়া অন্য মাসে দেখাও যেত না তেমন।
                            </p>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

        <div className="Landing__25__section_gaps"></div>

        {/* =======================================================================================
                    Slider Div
        ============================================================================================*/}

        <section className='Landing__25__SliderDivSec'>

           <Container fluid>

                    <h2 className='Landing__25__Sliderh2'> প্রতিটি ১ কেজি ওজনের খেজুর <br/> বক্সের দাম ৬৫০ টাকা </h2>

                <div className='Landing__25__SliderDiv'>

                        
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
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                                spaceBetween: 30,
                                },

                            }}
                    >

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img17.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img18.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img19.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img20.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img21.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img17.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img18.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img19.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img20.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>

                        <SwiperSlide className="Landing__25__SliderImg">

                            <Link href="#">

                                <div className="Landing__25__Slider_CardDiv">

                                    <img className="Landing__25__Slider_CardDivImg" src="/images/landing-25/img21.png" alt="img"></img>

                                </div>

                            </Link>

                        </SwiperSlide>


                    </Swiper>


                    
                    <div className="Landing__25__SliderIconDiv">

                        <div className="Landing__25__SliderIconDiv2">    

                            <button className="Landing__25__SliderIcon1" onClick={() => swiperRef.current?.slidePrev()}><IoIosArrowBack></IoIosArrowBack></button>

                            <button className="Landing__25__SliderIcon2" onClick={() => swiperRef.current?.slideNext()}><IoIosArrowForward/></button>

                        </div>  

                    </div>


                </div>

           </Container>

        </section>

        <div className="Landing__25__section_gaps"></div>

        {/* =======================================================================================
                    Order2
        ============================================================================================*/}

        <section>

            <Container>
                
                <div className='Landing__25__Order2'>

                    <img className='Landing__25__Order2Img' src="/images/landing-25/img24.png" alt="" />

                    <div className='Landing__25__Order2Abs'>

                        <h6>সরাসরি কিনতে ফোন করুন</h6>

                        <div className='BannertxtAbs1D-f2'>

                            <img src="images/landing-25/img32.png" alt="" /> <span>01810045255</span>

                        </div>

                        <div className='Landing__25__Hr'></div>

                        <h5>বক্সটির ওজন ১ কেজি </h5>

                         <h4>মুল্য-৬০০ টাকা </h4>

                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করতে এখানে ক্লিক করুন </Link>

                    </div>

                </div>

            </Container>

        </section>

        <div className="Landing__25__section_gaps"></div>

        {/* =======================================================================================
                    Place In Order
        ============================================================================================*/}
            <section>

                <div className='Landing__25__PlaceIn__OrderBg'>

                <Container>

                    <div className='Landing__25__PlaseInOdr'>

                        <div id="placeAnOrder">
                        
                            <Order></Order>

                        </div>

                    </div>

                </Container>

                </div>

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
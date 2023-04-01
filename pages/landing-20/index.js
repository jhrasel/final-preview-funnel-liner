import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart} from 'react-icons/ai';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
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
import landingImageUrl from "../../public/images/landing-20/logo.png";
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

    <div className='Landing__20'>

        {/* =======================================================================================
                    Banner
        ============================================================================================*/}
        <section>

            <div className='Landing__20__bg_div'>

                <Container>

                    <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                    <Row className='Landing__20__Reverce'>

                        <Col md={6}>

                            <div className='Landing__20__BannerTxt'>

                                <h1>আপনার গার্লফ্রেন্ডকে মিডিয়াম বাজেটের একটি ঘড়ি গিফট করতে চান তাহলে আমাদের  ঘড়িটি খুবই দারুণ</h1>

                                <h4>ছিল: ৳১৯৯৯</h4>

                                <h3>মূল্যঃ  ১,৫৮৭ টাকা</h3>

                                <div className='Landing__20__BannerLinkimgBox'>

                                    <img  className='Landing__20__BannerTxtimg1' src="/images/landing-20/img24.png" alt="" />

                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                                </div>


                                <div className='Landing__20__RelText'>

                                    <div className='Landing__20__AbsB_Box'>

                                        <img src="/images/landing-20/img1.png" alt="" />

                                        <h5>01894844452</h5>

                                    </div>

                                </div>

                            </div>

                        </Col>

                        <Col md={6}>

                                
                            <div className='Landing__20__Col_2Rel'>

                                    <img  className='Landing__20__img2BagAbs' src="/images/landing-20/img.png" alt="" />

                            </div>

                        </Col>

                    </Row>


                    
                </Container>

            </div>

        </section>
        

           <div className='Landing__20__section_gaps'></div>     

        {/* =======================================================================================
                    Product Details
        ============================================================================================*/}

        <section>

            <Container>
                
                <div className='ProductDetails'>
               
                     <h2>আমাদের YAZOLE ঘড়ি গুলো কেন নিবেন আপনারা </h2>

                     <img src="/images/landing-20/img2.png" alt="" />

                     <p>
                        আমরা চীনের শীর্ষস্থানীয় ফ্যাশন মহিলা ঘড়ি নির্মাতারা এবং সরবরাহকারীদের একজন হিসাবে সুপরিচিত। 
                        আমাদের কারখানাটি প্রতিযোগিতামূলক দামের সাথে চীনায় তৈরি কাস্টমাইজড ফ্যাশন মহিলাদের ঘড়ি সরবরাহ 
                        করে। পাইকারি পরিষেবার জন্য আমাদের সাথে যোগাযোগ করতে স্বাগতম। লেডিস ঘড়ি ডিজাইন আপনি যদি 
                        আপনার গার্লফ্রেন্ডকে মিডিয়াম বাজেটের একটি ঘড়ি গিফট করতে চান তাহলে আমাদের  ঘড়িটি খুবই দারুণ।
                         অত্যন্ত সাশ্রয়ী দামে এই ঘড়িটি আপনি কিন্তু আপনার গার্লফ্রেন্ডকে গিফট করতে পারেন। ঘড়িটি মহিলাদের জন্য 
                         পুরোপুরি মানানসই। ঘড়ির কেস স্টেইনলেস স্টিলের তৈরি। ঘড়িটির পুরুত্ব এবং ব্যাস মানক। ঘড়িটি আধুনিক নারীদের 
                         জন্য তৈরি করা হয়েছে যারা ভদ্রতা এবং ইলানের সাথে ভূমিকা অতিক্রম করে
                    </p>

                </div>

            </Container>

        </section>

        <div className='Landing__20__section_gaps'></div>   

        {/* =======================================================================================
                    price Template 1
        ============================================================================================*/}

        <section>

            <div className='priceTemplate1'>

                
            <Container>

                <div className='Landing__20__Order'>

                    <img className='Landing__20__OrderImg' src="/images/landing-20/img4.png" alt="" />

                    <div className='Landing__20__OrderAbs'>

                        <h4>মুল্য-550.00 টাকা</h4>

                        <h5>সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</h5>

                            <div className='Landing__20__BannerLinkimgBox'>

                                <img  className='Landing__20__BannerTxtimg1' src="/images/landing-20/img24.png" alt="" />

                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                            </div>

                    </div>

                </div>

            </Container>

            </div>

        </section>
        
        <div className='Landing__20__section_gaps'></div>  

        {/* =======================================================================================
                      Watch Factors
        ============================================================================================*/}

        <section>

            <div className='WatchFactors'>

                <Container>

                    <Row>

                        <Col sm={12} lg={6}>
                            
                            <div className='WatchFactorsTxt'>

                                <h2>ঘড়িটির ফীচার গুলো !</h2>

                                <img src="/images/landing-20/img13.png" alt="" />

                                <ul>

                                    <li> 
                                        <img src="/images/landing-20/img14.png" alt="" /> 
                                        <p>পানি সহ্য করার ক্ষমতা ৩ বার করতে পারবে </p>
                                    </li>

                                    <li> 
                                        <img src="/images/landing-20/img14.png" alt="" /> 
                                        <p>চামড়া ব্যান্ড উপাদান & স্টেইনলেস স্টিলের তৈরি </p>
                                    </li>

                                    <li> 
                                        <img src="/images/landing-20/img14.png" alt="" /> 
                                        <p>কালো সাদা লাল বাদামী রঙ এই ঘড়ি গুলো  </p>
                                    </li>

                                    <li> 
                                        <img src="/images/landing-20/img14.png" alt="" /> 
                                        <p>দৈর্ঘ্য 24 সেমি </p>
                                    </li>

                                    <li> 
                                        <img src="/images/landing-20/img14.png" alt="" /> 
                                        <p>ঘড়িগুলি 30M ওয়াটারপ্রুফ </p>
                                    </li>

                                    <li> 
                                        <img src="/images/landing-20/img14.png" alt="" /> 
                                        <p>অ্যান্টি-গ্লায়ার স্যাফায়ার ক্রিস্টাল </p>
                                    </li>
                                    
                                    <li> 
                                        <img src="/images/landing-20/img14.png" alt="" /> 
                                        <p>দুই বছরের ওয়ারেন্টি </p>
                                    </li>

                                </ul>   

                            </div>

                        </Col>

                        <Col sm={12} lg={6}>

                            <div className='WatchFactorsImgBox'>

                                <img src="/images/landing-20/img5.png" alt="" />

                                <div className='WatchFactorsLinkDiv'>

                                     <Link href="">DIOR BLACK ULTRAMATTE</Link>

                                </div>
                               


                            </div>

                        </Col>

                    </Row>

                </Container>

            </div>

        </section>
        

        <div className='Landing__20__section_gaps'></div> 

        {/* =======================================================================================
                    Slider
        ============================================================================================*/}
      
        <section className='Landing__20__SliderSec'>

            <Container>
                    
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
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30,
                            },
                        }}
                >

                    <SwiperSlide className="Landing__20__SliderImg">

                        <Link href="#">

                            <div className="Landing__20__Slider_CardDiv">

                                <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img6.png" alt="img"></img>

                                <h4>GEM DIOR</h4>

                            </div>

                        </Link>

                    </SwiperSlide>


                    <SwiperSlide className="Landing__20__SliderImg">

                        <Link href="#">

                            <div className="Landing__20__Slider_CardDiv">

                                <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img7.png" alt="img"></img>

                                <h4>LA D DE DIOR SATINE</h4>

                            </div>

                        </Link>

                    </SwiperSlide>


                    <SwiperSlide className="Landing__20__SliderImg">

                        <Link href="#">

                            <div className="Landing__20__Slider_CardDiv">

                                <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img8.png" alt="img"></img>

                                <h4>LA MINI D DE DIOR SATINE</h4>

                            </div>

                        </Link>

                    </SwiperSlide>

                    <SwiperSlide className="Landing__20__SliderImg">

                        <Link href="#">

                            <div className="Landing__20__Slider_CardDiv">

                                <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img6.png" alt="img"></img>

                                <h4>GEM DIOR</h4>

                            </div>

                        </Link>

                    </SwiperSlide>


                    <SwiperSlide className="Landing__20__SliderImg">

                        <Link href="#">

                            <div className="Landing__20__Slider_CardDiv">

                                <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img7.png" alt="img"></img>

                                <h4>LA D DE DIOR SATINE</h4>

                            </div>

                        </Link>

                    </SwiperSlide>


                    <SwiperSlide className="Landing__20__SliderImg">

                        <Link href="#">

                            <div className="Landing__20__Slider_CardDiv">

                                <img className="Landing__20__Slider_CardDivImg" src="/images/landing-20/img8.png" alt="img"></img>

                                <h4>LA MINI D DE DIOR SATINE</h4>

                            </div>

                        </Link>

                    </SwiperSlide>

                </Swiper>

                <div className="Landing__20__SliderIconDiv">

                    <div className="Landing__20__SliderIconDiv2">    

                            <button className="Landing__20__SliderIcon1" onClick={() => swiperRef.current?.slidePrev()}><HiOutlineArrowSmallLeft></HiOutlineArrowSmallLeft></button>

                            <button className="Landing__20__SliderIcon2" onClick={() => swiperRef.current?.slideNext()}><HiOutlineArrowSmallRight/></button>

                    </div>  

                </div>

            </Container>

        </section>

        
        <div className='Landing__20__section_gaps'></div> 

        {/* =======================================================================================
                    Shipping
        ============================================================================================*/}
                
        <section>

            <Container fluid className='Landing__20__ShippingCon'>
                
                    <div className='Landing__20__ShippingDiv'>

                        <ShippingAddress
                            DelivaryImage1={DelivaryImgUrl1}
                            DelivaryImage2={DelivaryImgUrl2}
                            DelivaryImage3={DelivaryImgUrl3}
                            DelivaryImage4={DelivaryImgUrl4}
                            DelivaryTitle1="বিশ্বব্যাপী ফ্রি শিপিং। " 
                            DelivaryTitle2="100 ভাগ খাটিঁ " 
                            DelivaryTitle3="শ্রেষ্ঠ মূল্য গ্যারান্টি।" 
                            DelivaryTitle4="24/7 গ্রাহক সহায়তা" 
                        />

                    </div>

            </Container>

        </section>

        
         {/* =======================================================================================
                    Video
        ============================================================================================*/}

       <section className='Landing__20__Video'>

            <Container>

                    <Video></Video>

            </Container>

        </section>

        <div className='Landing__20__section_gaps'></div> 
        {/* =======================================================================================
                    Order Template 2
        ============================================================================================*/}

        <section>

            <div className='OrderTemplate2'>

                 <div className='Landing__20__Order2'>

                    <div className='Landing__20__Order2Abs'>

                        <h4>মুল্য-550.00 টাকা</h4>

                        <h5>সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</h5>

                            <div className='Landing__20__BannerLinkimgBox'>

                                <img  className='Landing__20__BannerTxtimg1' src="/images/landing-20/img24.png" alt="" />

                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                            </div>

                    </div>

                </div>

            </div>


        </section>

        

        {/* =======================================================================================
                    watch Type
        ============================================================================================*/}

        <section className='watchType '>

            <Container>
                
                <div className='watchTypeTxtDiv'>

                    <h2>বিভিন্ন ধরণের সাশ্রয়ী মূল্যে ঘড়ি গুলোর ধরন</h2>

                    <img src="/images/landing-20/img2.png" alt="" />

                </div>

                <Row>
                    
                    <Col sm={12} md={4}>
                    
                        <div className='watchTypeUlDiv'>

                            <ul>
                                        <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>স্মার্ট ওয়াচ </p>
                                        </li>

                                        <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>ওভাল ডায়াল মহিলাদের ঘড়ি </p>
                                        </li>

                                        <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>ফ্যাশন কাপল ওয়াচ</p>
                                        </li>       
                                    
                            </ul>

                        </div>

                    </Col>

                    <Col sm={12} md={4}>
                    
                        <div className='watchTypeUlDiv'>

                            <ul>
                                    <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>মাল্টিকালার স্ট্র্যাপ ঘড়ি </p>
                                        </li>

                                        <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>বিজনেস উইমেন ওয়াচ </p>
                                        </li>

                                        <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>প্রাইভেট লেবেল উইমেন ওয়াচ</p>
                                        </li>       
                                    
                            </ul>

                        </div>

                    </Col>

                    <Col sm={12} md={4}>
                    
                        <div className='watchTypeUlDiv'>

                            <ul>
                                    <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>ডায়মন্ড কোয়ার্টজ মুভমেন্ট ঘড়ি </p>
                                        </li>

                                        <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>স্টেইনলেস স্টিল কাপল ওয়াচ </p>
                                        </li>

                                        <li> 
                                            <img src="/images/landing-20/img14.png" alt="" /> 
                                            <p>পকেট ওয়াচ এবং নার্স ওয়াচ</p>
                                        </li>       
                                    
                            </ul>

                        </div>

                    </Col>

                </Row>

                <div className='watchTypeImgwatch'>

                    <img src="/images/landing-20/img23.png" alt="" />

                </div>

            </Container>

        </section>
        
        <div className='Landing__20__section_gaps'></div> 

        {/* =======================================================================================
                  CustomerReview
        ============================================================================================*/}

        <CustomerReview></CustomerReview>    

        <div className='Landing__20__section_gaps'></div> 
        {/* =======================================================================================
                    Banner
        ============================================================================================*/}

        

    </div>


  )
}

export default index
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
import landingImageUrl from "../../public/images/landing-26/logo.png";
import SocialMedia from "../../components/LandingPage/Common/SocialMedia/SocialMedia"
import ShippingAddress from '@/components/LandingPage/Common/ShippingAddress/ShippingAddress';
import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';



const index = () => {

  return (

    <div className='Landing__26'>

           {/* =======================================================================================
            Logo
            ============================================================================================*/}

            <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>
            
        {/* =======================================================================================
                    Banner
        ============================================================================================*/}
        
        <section className='Landing__26__Banner'>

            <img className='Landing__26__Banner__bg' src="/images/landing-26/bg.png" alt="" />

                <div className='Landing__26__Banner__bg__bottom'>

                     <img className='Landing__26__Banner__bg__bottom1' src="/images/landing-26/img5.png" alt="" />

                     <ul>

                        <li>100% HERBAL</li>

                        <li>INCREASE STAMINA</li>

                        <li>BUILD MUSCLE</li>

                        <li>NO SIDE EFFECTS</li>

                     </ul>

                </div>
                

            {/* Landing__26__Banner__Content */}

            <div className="Landing__26__Banner__Content">

                <Container>

                    <Row className='d_flex Landing__26__collumnRev'>

                        <Col lg={6}>

                            <div className="Landing__26__Banner__TextContent">

                                <img src="images/landing-26/img2.png" alt="" />

                                <h5>100% Natural Ingredients</h5>

                                <h1>বাংলাদেশে সেরা বেস্ট ফুড <span>সেলিং সাপ্লিমেন্ট</span></h1>

                                <h2>৳৫,৯৯০.০০ <span>৳৭,৩০০.০০</span></h2>

                                <img className="Landing__26__BannerImgwhite" src="images/landing-26/img4.png" alt="" />
                                <br/>

                                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                                <div className='Landing__26__RelText'>

                                    <div className='Landing__26__AbsB_Box'>
                                    
                                        <span>ফোনে অর্ডার করতে </span>  

                                        <h6>01894844452</h6>

                                    </div>

                                </div>

                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className="Landing__26__Banner__Img">

                                <img className="Landing__26__Banner__Img1" src="/images/landing-26/img6.png" alt="" />

                                <img className="Landing__26__Banner__Img2" src="/images/landing-26/img1.png" alt="" />
                                <img className="Landing__26__Banner__Img3" src="/images/landing-26/img3.png" alt="" />

                            </div>



                        </Col>

                    </Row>

                </Container>

                

            </div>


        </section>

        <div className="Landing__26__section_gaps"></div>

        {/* =======================================================================================
                    Details
        ============================================================================================*/}

        <section>
          
          <Container>

              <div className="Landing__26__Details">

                <h2>আমাদের এই ফুড সাপ্লিমেন্ট খেয়ে কারা উপকৃত হতে পারেন?</h2>

                <div className="Landing__26__DetailsDiv">
                    <div></div>
                    <div className="Landing__26__DetailsDiv2"></div>
                    <div className="Landing__26__DetailsDiv2"></div>
                    <div></div>
                </div>

                <p>
                     আপনি জিমে ঘন্টার পর ঘন্টা ব্যয় করেন, শুধুমাত্র স্বাস্থ্যকর খাবার খাচ্ছেন, এবং এখনও আপনার 
                     পছন্দসই ফলাফল পাচ্ছেন না? বাজারে অনেক বিভিন্ন সম্পূরক আছে, কিন্তু তাদের মধ্যে কিছু অন্যদের
                     তুলনায় ভাল কাজ করে এই কারণেই optimumnutrition.com-এ আমরা বাংলাদেশে আমাদের সবচেয়ে বেশি 
                     বিক্রি হওয়া সম্পূরকগুলির একটি তালিকা সংকলন করেছি যা আপনার পেশীগুলিকে বড় এবং শক্তিশালী 
                     হতে সাহায্য করবে!
                </p>


                <img className="Landing__26__DetailsImg" src="/images/landing-26/img7.png" alt="" />

              </div>

          </Container>

        </section>


        {/* =======================================================================================
                   List Details
        ============================================================================================*/}

        <section>

            <div className="Landing__26__ListDetails">

                <img className="Landing__26__ListDetails__bg" src="/images/landing-26/img24.png" alt="" />
                
                <div className="Landing__26__Contant__Box">

                    <div className="Landing__26__Contant__Ul">

                                <div>প্রোটিন পাউডার</div>
                                <div>প্রোটিন হাইড্রোলাইজড</div>
                                <div>ওজন বৃদ্ধিকারী</div>
                                <div>প্রি-ওয়ার্কআউটস</div>
                                <div>ভিটামিন</div>
                    </div>

                </div>

            </div>

        </section>   

        <div className="Landing__26__section_gaps"></div>

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
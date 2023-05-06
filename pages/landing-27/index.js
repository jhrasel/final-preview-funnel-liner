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
import landingImageUrl from "../../public/images/landing-27/logo.png";
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

    <div className='Landing__27'>


        {/* =======================================================================================
                    Logo
        ============================================================================================*/}

        <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

        {/* =======================================================================================
                    Banner
        ============================================================================================*/}

        <section className='Landing__27__Banner'>

        <img className='Landing__27__Banner__bg' src="/images/landing-27/bg.png" alt="" />
            

        {/* Landing__27__Banner__Content */}

        <div className="Landing__27__Banner__Content">

            <Container>

                <Row className='d_flex Landing__27__collumnRev'>

                    <Col lg={6}>

                        <div className="Landing__27__Banner__TextContent">

                            <h5>স্মার্ট লুঙ্গি অনলাইন শপ</h5>

                            <h1>গুণমান আমাদের প্রথম অগ্রাধিকার নতুন লুঙ্গির বাংলাদেশে </h1>

                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/>অর্ডার করুন</Link>

                            <div className='Landing__27__RelText'>

                                <div className='Landing__27__AbsB_Box'>

                                    <img src="images/landing-27/img3.png" alt="" />

                                    <h6>01894844452</h6>

                                </div>

                            </div>

                            <h2>ডিস্কাউন্ট মূল্যঃ  ১৬৫০ টাকা</h2>

                        </div>

                    </Col>

                    <Col lg={6}>

                        <div className="Landing__27__Banner__Img">

                            <img className="Landing__27__Banner__Img1" src="/images/landing-27/img2.png" alt="" />

                            <img className="Landing__27__Banner__Img2" src="/images/landing-27/img1.png" alt="" />

                            <div className="Landing__27__Banner__H4__Div">

                                 <h4>স্টাইলিশ পুরুষদের 100% খাঁটি তুলা লুঙ্গি</h4>

                            </div>
                               
                        </div>

                    </Col>

                </Row>

            </Container>

        </div>

        </section>

        <div className="Landing__27__section_gaps"></div>


        {/* =======================================================================================
                    Card
        ============================================================================================*/}

        <section>

            <Container>

                <div className="Landing__27__CardH2">

                    <h2 >পুরুষদের জন্য সাশ্রয়ী মূল্যে উচ্চ মানের  আমাদের ৬ টি লুঙ্গি</h2>
                </div>

                <Row>

                    <Col lg={4}>

                        <div className="Landing__27__Card">

                            <img src="/images/landing-27/img4.png" alt="" />

                            <h4>স্টাইলিশ পুরুষদের স্ট্রাইপ লুঙ্গি</h4>

                        </div>

                    </Col>

                    <Col lg={4}>

                        <div className="Landing__27__Card">

                            <img src="/images/landing-27/img5.png" alt="" />

                            <h4>স্টাইলিশ পুরুষের পাঠশালা লুঙ্গি</h4>

                        </div>

                    </Col>

                    <Col lg={4}>

                        <div className="Landing__27__Card">

                            <img src="/images/landing-27/img6.png" alt="" />

                            <h4>ফ্যাশনেবল পুরুষের স্ট্রাইপ লুঙ্গি</h4>

                        </div>

                    </Col>

                    <Col lg={4}>

                        <div className="Landing__27__Card">

                            <img src="/images/landing-27/img7.png" alt="" />

                            <h4>একদম স্টাইলিশ লুঙ্গি পুরুষদের</h4>

                        </div>

                    </Col>

                    <Col lg={4}>

                        <div className="Landing__27__Card">

                            <img src="/images/landing-27/img8.png" alt="" />

                            <h4>আকর্ষণীয় স্ট্রাইপ লুঙ্গি পুরুষের</h4>

                        </div>

                    </Col>

                    <Col lg={4}>

                        <div className="Landing__27__Card">

                            <img src="/images/landing-27/img9.png" alt="" />

                            <h4>স্টাইল বাণিজ্যে লুঙ্গি পুরুষদের</h4>

                        </div>

                    </Col>

                </Row>


            </Container>

        </section>


        <div className="Landing__27__section_gaps"></div>

        {/* =======================================================================================
                    Lungi Details
        ============================================================================================*/}

        <section>

            <Container>

                <div className="Landing__27__Lungi_Details">

                    <div className="Landing__27__Lungi_DetailsH2">

                        <h2>আমাদের লুঙ্গি গুলা সম্পর্কে আরো বেশি কিছু  আলোচনা করা হল </h2>

                    </div>

                    <p>

                        আমাদের লুঙ্গি গুলা  অফার, 3 কিনুন 1টি বিনামূল্যে! আমাদের এই লুঙ্গি গুলা খুব স্টান্ডার্ট মানের 
                        স্টাইলিশ পুরুষদের জন্য  বাংলাদেশে বেশির ভাগ লুঙ্গি উৎপাদন হয় নরসিংদী, পাবনা ও সিরাজগঞ্জ 
                        জেলায়। লুঙ্গির সবচেয়ে বড় পাইকারি বাজার বসে নরসিংদীর বাবুরহাট, সিরাগঞ্জের শাহজাদপুর ও টাঙ্গাইলের
                         করটিয়ায়। মূলত এসব বাজার থেকেই আমরা ভালো স্ট্যান্ডার্ড মানের  ব্যবসায়ীরা জন্য লুঙ্গি কিনে তা 
                         ক্রেতাদের নিকট সরবরাহ করে থাকি ।

                     </p>

                </div>

            </Container>

        </section>


        <div className="Landing__27__section_gaps"></div>

        {/* =======================================================================================
                     Lungi Details2
        ============================================================================================*/}

        <scetion>

            <Container fluid>

                <div className="Landing__27__LungiDetails2">

                    <img className="Landing__27__LungiImg" src="/images/landing-27/bg2.png" alt="" />

                    <div className="Landing__27__LungiDetails2Abs">

                        <div className="Landing__27__LungiDetails2AbsImgDiv">

                            <img src="/images/landing-27/img10.png" alt="" />

                        </div>
                        

                        <div className="Landing__27__LungiDetails2Img6Div">

                            <div>
                                <img src="/images/landing-27/img11.png" alt="" />
                                <h4>মিনি চেক প্যাটার্ন</h4>
                            </div>

                            <div>
                                <img src="/images/landing-27/img12.png" alt="" />
                                <h4>মিনি চেক প্যাটার্ন</h4>
                            </div>
                            <div>
                                <img src="/images/landing-27/img13.png" alt="" />
                                <h4>মিনি চেক প্যাটার্ন</h4>
                            </div>
                            <div>
                                <img src="/images/landing-27/img14.png" alt="" />
                                <h4>মিনি চেক প্যাটার্ন</h4>
                            </div>
                            <div>
                                <img src="/images/landing-27/img15.png" alt="" />
                                <h4>মিনি চেক প্যাটার্ন</h4>
                            </div>
                            <div>
                                <img src="/images/landing-27/img16.png" alt="" />
                                <h4>মিনি চেক প্যাটার্ন</h4>
                            </div>

                        </div>

                    </div>

                </div>

            </Container>

        </scetion>

        

        {/* =======================================================================================
                   Details Table
        ============================================================================================*/}
        <section className="Landing__27__DetailsTable">

        <Container>

            <h2>আরো কিছু তথ্য আমাদের এই ব্র্যান্ড লুঙ্গির </h2>

            <div>
                

            </div>


        </Container>

        </section>

        <div className="Landing__27__section_gaps"></div>

        {/* =======================================================================================
                  CustomerReview
        ============================================================================================*/}
        <Container>

            <Video></Video>

            <div className="Landing__27__section_gaps"></div>

            <CustomerReview></CustomerReview>

        </Container>


       <div className="Landing__27__section_gaps"></div>

        {/* =======================================================================================
                    Details-3
        ============================================================================================*/}

        <section>

            <div className="Landing__27__Details-3">
                
                <Container fluid>

                    <img src="/images/landing-27/img19.png" alt="" />

                </Container>

            </div>

        </section>


        <div className="Landing__27__section_gaps"></div>
        
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
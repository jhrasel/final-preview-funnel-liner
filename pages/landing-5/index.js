import Link from 'next/link';
import React, { useEffect, useState } from "react";

//Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// Icon

import { AiFillInstagram, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsInstagram, BsPlayFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import landingImageUrl from "../../public/images/landing-5/bike_logo.svg";
import landingImageUrl2 from "../../public/images/landing-5/logo-2.svg";



import Order from '@/components/LandingPage/Common/Order/Order';
import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';


const index = () => {

    const today = new Date();
    const year = today.getFullYear();       
  
  return (

    <div className='Landing__5'>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Banner
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section className="Banner">
            <Container>

                <div className="imgBlack">
                    <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>
                </div>

                <div className="imgWhite">
                    <MenubarLeft logoImageLeft={landingImageUrl2}></MenubarLeft>
                </div>

                <Row>

                    <Col lg={6}>

                        <div className="BannerContent">

                            <div className="Logo">

                                {/* <img className="imgBlack} src="/images/landing-5/bike_logo.svg" alt="" /> */}
                                {/* <img className="imgWhite} src="/images/landing-5/logo-2.svg" alt="" /> */}
                                

                            </div>

                            <div className="text">

                                <h3>পৃথিবী সেরা ইলেক্ট্রিক স্কুটার <br /> এখন বাংলাদেশে</h3>


                                <div className="titleHeader">

                                    <h1>Electrica </h1>

                                    <h1 className='text-white'> Sc<span>oo</span>ter</h1>

                                </div>

                                <div className="btnBox">
                                    
                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                                </div>
                               

                            </div>

                        </div>

                    
                    </Col>

                </Row>

            </Container>

        </section>

        

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Specifications
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className="Specification">
            <Container>

            <Row>

                <Col lg={12}>

                    <div className="Spec">

                        <ul>
                            <li>
                                <div className="item">

                                    <img src="/images/landing-5/cil_bike.svg" alt="" />
                                    <p>Semi-Auto Pilot <br /> Technology</p>

                                </div>
                            </li>

                            <li>
                                <div className="item">

                                    <img className='mb-1' src="/images/landing-5/battery_charge.svg" alt="" />
                                    <p>Two-way port <br /> charging options</p>

                                </div>
                            </li>

                            <li>

                                <div className="item">

                                        <img src="/images/landing-5/cloud.svg" alt="" />
                                        <p>Segway Function <br /> Cloud System</p>

                                </div>

                            </li>
                            <li>

                                <div className="item">

                                        <img src="/images/landing-5/ep_setting.svg" alt="" />
                                        <p>Low operation & <br /> maintenance</p>

                                </div>

                            </li>
                            <li>

                                <div className="item">

                                        <img className='mb-xl-3' src="/images/landing-5/charge_battery.svg" alt="" />
                                        <p>Day Long Battery <br /> Performance</p>

                                </div>

                            </li>
                            
                        </ul>

                    </div>

                </Col>

                </Row>
            </Container>


        </section>
        
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Feature
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


        {/* Section Gaps */}
        <div className="section_gaps"></div>


        <section className="Features">

            <Container>

                <Row>

                    <Col lg={6}>

                        <div className="imageScooter">

                            <img src="/images/landing-5/scooty_img.png" alt="" />

                        </div>

                    </Col>

                    <Col lg={6}>

                        <h2>স্কুটারের বিশেষ ফিচার</h2>
                        <div className="hLine"></div>

                        <div className="text">

                            <p>স্কুটার মডেলগুলি এখানে বৈশিষ্ট্য, সর্বশেষ ডিজাইন, বাজারের খ্যাতি,
                                জনপ্রিয়তা, নির্ভরযোগ্যতা, কর্মক্ষমতা, ব্র্যান্ড ইমেজ, বিক্রয়োত্তর পরিষেবা
                                ইত্যাদি বিবেচনা করে কালানুক্রমিকভাবে সাজানো হয়েছে৷ বাংলাদেশের এই
                                সেরা স্কুটার পৃষ্ঠায়, আমরা বিভিন্ন দামের রেঞ্জের গাড়িগুলিকে রেখেছি৷</p>

                        </div>

                        <div className="FeatureList">

                            <ul>
                                <li><p><BsPlayFill/> বর্তমানে বাংলাদেশের সবচেয়ে শক্তিশালী স্কুটার</p></li>
                                <li><p><BsPlayFill/> ২ বছরের ওয়ারেন্টি (পার্টস ও ইঞ্জিন)</p></li>
                                <li><p><BsPlayFill/> দেশজুড়ে ৩০+ সার্ভিস সেন্টার</p></li>
                                <li><p><BsPlayFill/> স্পেয়ার পার্টস এভেইলেবল গ্যারান্টি</p></li>
                                <li><p><BsPlayFill/> ২৫ টি দেশে সুনামের সাথে চলছে</p></li>
                                <li><p><BsPlayFill/> মানিব্যাক গ্যারান্টি</p></li>
                            </ul>

                        </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            OurStories
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        {/* Section Gaps */}
        <div className="section_gaps"></div>

        <section className="OurStories">

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={9}>

                        <h2>স্কুটারের বিশেষ ফিচার</h2>
                        <div className="hLine"></div>

                        <p>স্কুটার মডেলগুলি এখানে বৈশিষ্ট্য, সর্বশেষ ডিজাইন, বাজারের খ্যাতি, জনপ্রিয়তা, নির্ভরযোগ্যতা, কর্মক্ষমতা, ব্র্যান্ড ইমেজ, বিক্রয়োত্তর পরিষেবা ইত্যাদি বিবেচনা করে কালানুক্রমিকভাবে সাজানো হয়েছে৷ বাংলাদেশের এই সেরা স্কুটার পৃষ্ঠায়, আমরা বিভিন্ন দামের রেঞ্জের গাড়িগুলিকে রেখেছি৷</p>
                    
                    </Col>

                </Row>

            </Container>

        </section>


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            YouTube Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
 
        {/* Section Gaps */}
        <div className="section_gaps"></div>

        <section className="YouTubeVid">

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={12}>

                        <img src="/images/landing-5/youtube.png" alt="" />

                    
                    </Col>

                </Row>

                <Row className='justify-content-center'>

                    <Col lg={12}>

                        <div className="buttonGroup">

                            <Link href='#placeAnOrder' className="bg">  অর্ডার করুন</Link>
                            <Link href='#placeAnOrder' className="bg">  যোগাযোগ করুন</Link>

                        </div>

                        

            
                    </Col>

                </Row>

            </Container>

        </section>
 
 
 
 
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Checkout Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        {/* Section Gaps */}
        <div className="section_gaps"></div>

        <section className="OrderSection">

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className="OrderDiv">

                            <h1 className='text-white'>অর্ডার করতে নিচের ফর্মটি পূরণ করে সাবমিট করুন !</h1>



                        </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

 
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Checkout Form
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {/* Section Gaps */}
        <div className="section_gaps"></div>

        <section id="placeAnOrder">
        
             <Order></Order>

         </section>

        {/* Section Gaps */}
        <div className="section_gaps"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer Widget
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className="SocialIcons">

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={12}>

                        <div className="SocialIconsList">
                            <Link href='' className="Fb" > <FaFacebookF/></Link>
                            <Link href='' className="Yt" > <FaYoutube/></Link>
                            <Link href='' className="InS" > <AiFillInstagram/></Link>
                            <Link href='' className="Tw" > <FaTwitter/></Link>


                        </div>

                    
                    </Col>
                </Row>
            </Container>
        </section>


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* Section Gaps */}
        <div className="section_gaps"></div>

        <section className="FooterSection">

            <Container>

                <Row>

                    <Col md={6}>

                        <div className="Logo">

                            <img src="/images/landing-5/bike_logo.svg" alt="" />

                        </div>
                    
                    </Col>

                    <Col md={6}>

                        <div className="FooterMenu">
                            <ul>
                                <li>
                                    <Link href=' ' className=''>Terms & Condition</Link>
                                </li>
                                <li>
                                    <Link href=' ' className=''>Privacy Policy</Link>
                                </li>
                            </ul>

                        </div>

                        

                    
                    </Col>



                </Row>

                                       {/* Tiny Footer */}
                       
                            <div className="tinyFooter">
                            
                            <p>@ {year} All Rights Reserved </p>
                            <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

                        </div>

            </Container>

        </section>

        

        

    
    
    </div>

  )
}

export default index;
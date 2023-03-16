
import Link from 'next/link';
import React, { useEffect, useState } from "react";

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// Icon

import { AiOutlineShoppingCart, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';

// Logo Img
import landingImageUrl from "../../public//images/landing-3/logo.svg";

// Common 

import Order from '@/components/LandingPage/Common/Order/Order';
import MenubarLeft from '@/components/LandingPage/Common/Menubar/MenubarLeft';
import CustomerReview from '@/components/LandingPage/Common/CustomerReview/CustomerReview';
import TinyFooter from '@/components/LandingPage/Common/TinyFooter/TinyFooter';
import Video from '@/components/LandingPage/Common/Video/Video';



// import { useForm } from "react-hook-form";
// import axios from "axios";
// import swal from "sweetalert";




const index = () => {

  const [product, setProduct] = useState({});
  const [shopID, setShopID] = useState();
  const [quantity, setQuantity] = useState(1);

  // async function fetchProducts(headers) {
  //   const response = await fetch(`${process.env.API_URL}v1/customer/products`, {
  //     headers: headers,
  //   });
  //   const data = await response.json();

  //   setProduct(data.data[data.data?.length - 1]);
  // }

  // useEffect(() => {
  //   const headers = {
  //    "shop-id": localStorage.getItem("shop_id"),
  //   };
  //   fetchProducts(headers).then((r) => console.log());
  //   setShopID(localStorage.getItem("shop_id"));
  // }, []);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  //order submit

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

  const onSubmit = (data) => {
    console.log("postBody", data)
    const postBody = {
      customer_name: data.customerName,
      customer_phone: data.customerMobile,
      customer_address: data.customerAddress,
      product_id: [product.id],
      product_qty: [quantity],
    };


    axios
      .post(`${process.env.API_URL}v1/customer/order/store`, postBody, {
        headers: { "shop-id": shopID },
      })
      .then((res) => {
        if (res.status === 200) {
          swal(
            "Thank you!",
            "Your order has been successfully placed",
            "success"
          );
        }
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "Sorry",
          text: "Something went wrong",
          icon: "warning",
        });
      });
  };


  const today = new Date();
  const year = today.getFullYear();   

  return (


    <div className='Landing__3'>


      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <section className="Banner">

        <Container>

        <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

          <Row>

            <Col lg={6}>

              <div className="BannerContent">
               

                <div className="text">

                  <h1>শত  ভেজাল  ভিড়ে একমাত্র আমরাই আপনাকে দিচ্ছি খাঁটি ফরমালীন মুক্ত আম</h1>
                  <h3>বাজারে আমের দাম উঠা-নামা করতে পারে, <br /> তাই ফোন করে আমের দাম কনফার্ম হোন</h3>

                  <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                </div>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* Section Gaps */}
      <div className="section_gaps"></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        About
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className="About">

        <div className="AboutText_left">
          <img src="/images/landing-3/About_left.png" alt="" />
        </div>

        <div className="AboutText_right">
          <img src="/images/landing-3/About_right.png" alt="" />
        </div>

        <Container>

          <Row className="justify-content-md-center">

            <Col lg={6}>

              <div className="AboutContent">

                <div className="AboutLogo">

                  <img src="/images/landing-3/about.svg" alt="" />

                  <div className="AboutOverlay">

                    <h3>গোপালভোগ - ৫ মন </h3>
                    <h4>পূর্বের মূল্যঃ ১০৫০ টাকা</h4>
                    <h2>মূল্যঃ ১০০০ টাকা</h2>

                  </div>

                </div>

              </div>

            </Col>

            <Col lg={8}>

              {/* whyBuy */}
              <div className="AboutText">

                <h2>আমাদের এই আম কেন খাবেন?</h2>
                <p>আমরা হলাম কেমিক্যাল মুক্ত, উৎকৃষ্ট মানের রকমারি আমের একটি জায়গা।আমরা বিশেষত রাজশাহীর আমাদের নিজেস্ব বাগানের উৎকৃষ্ট মানের সম্পূর্ণ কেমিক্যাল মুক্ত আম। আম খেতে ভালোবাসেন না, এমন মানুষ পাওয়া খুব কম আছে। আমাদের এই আম স্বাদে ও গন্ধে অতুলনীয় পাকা ও কাঁচা আমে রয়েছে অনেক পুষ্টিগুণ তা শরীরের জন্য ভালো। গ্রাহকরা ভাল অবিশ্বাস্যভাবে আশ্বস্ত হয়ে ১০০% আস্থার সাথে আমাদের থেকে কাঁচা বা পাকা আম ক্রয় করতে পারেন । আমরা পাইকারি বিক্রয় সেবাও দিয়ে থাকি। আমরা সরাসরি গ্রাহকদের হোম ডেলিভারী দিয়ে থাকি এবং গ্রাহকদের হাতে পৌছে দেয়ার চেষ্টা অব্যাহত আছে, আপনি ও নিয়ে দেখতে পারেন।</p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>


      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        WhyUs
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className="WhyUs">

        <div className="WhyUsImg">

          <img src="/images/landing-3/why_us.png" alt="" />

          <div className="WhyOverlay">

            <Container>

              <Row>

                {/* header */}
                <Col lg={12}>
                  <h2>আমের উপকারিতা  ও পুষ্টিগুণ কি কি?</h2>
                </Col>

                {/* item */}
                <Col lg={4} sm={6}>

                  <div className="WhyUsItem">

                    <div className="img">
                      <img src="/images/landing-3/why_us_img.png" alt="" />
                    </div>

                    <div className="text">
                      <p>প্রাকৃতিক ফলে বিদ্যমান ক্যারোটিন গ্রহণ করলে সেগুলো ফুসফুস ও মুখের ক্যানসারের ঝুঁকি কমায়।</p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4} sm={6}>

                  <div className="WhyUsItem">

                    <div className="img">
                      <img src="/images/landing-3/why_us_img.png" alt="" />
                    </div>

                    <div className="text">

                      <p>তাজা আম পটাশিয়ামের ভালো কাজ করে যা মানবদেহের কোষ ও তরলের উপাদান, যা রক্তচাপ ও হৃৎস্পন্দন নিয়ন্ত্রণে রাখতে সাহায্য করে।</p>
                   
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4} sm={6}>

                  <div className="WhyUsItem">

                    <div className="img">
                      <img src="/images/landing-3/why_us_img.png" alt="" />
                    </div>

                    <div className="text">
                      <p>ভিটামিন সি ও বিভিন্ন অ্যান্টি-অক্সিডেন্ট পাওয়া যায়, যা দেহের রোগ প্রতিরোধক্ষমতা বৃদ্ধি করে।</p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4} sm={6}>

                  <div className="WhyUsItem">

                    <div className="img">
                      <img src="/images/landing-3/why_us_img.png" alt="" />
                    </div>

                    <div className="text">
                      <p>পাকা আম আমাদের ত্বক কে সুন্দর, উজ্জ্বল ও মসৃণ করে আম তারুণ্য ধরে রাখতে কার্যকর। </p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4} sm={6}>

                  <div className="WhyUsItem">

                    <div className="img">
                      <img src="/images/landing-3/why_us_img.png" alt="" />
                    </div>

                    <div className="text">
                      <p>গাছপাকা আমে পর্যাপ্ত পরিমাণে খনিজ লবণের উপস্থিতিও রয়েছে যা শরীরের দাঁত, নখ, চুল ইত্যাদি মজবুত করে।</p>
                    </div>

                  </div>

                </Col>

                {/* item */}
                <Col lg={4} sm={6}>

                  <div className="WhyUsItem">

                    <div className="img">
                      <img src="/images/landing-3/why_us_img.png" alt="" />
                    </div>

                    <div className="text">
                      <p>আমে থাকা বিভিন্ন উপাদান কোলেস্টেরলের ক্ষতিকর মাত্রা কমাতে সাহায্য করে হৃদ্‌রোগ ও স্ট্রোকের ঝুঁকি কমাতে কার্যকর।</p>
                    </div>

                  </div>

                </Col>

              </Row>

            </Container>

          </div>

        </div>

      </section>

      {/* Section Gaps */}
      <div className="section_gaps"></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        FreeDelivary
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className="FreeDelivary">

        <Container>

          <Row className='d_flex'>

            <Col lg={6} className="first_child">

              <div className="FreeDelivaryText">

                <ul>

                  <li> <img src="/images/landing-3/tick.svg" alt="" /> ঐতিহ্যবাহী রাজশাহীর আমাদের নিজেস্ব বাগানের আসল সেরা আম</li>
                  <li> <img src="/images/landing-3/tick.svg" alt="" /> কীটনাশক  ও কেমিক্যাল মুক্ত  আমের নির্ভরযোগ্য জায়গা</li>
                  <li> <img src="/images/landing-3/tick.svg" alt="" /> বাছাইকৃত বাগানের সেরা মানের সুস্বাধু আম</li>
                  <li> <img src="/images/landing-3/tick.svg" alt="" /> হাতের নিকটে ঘরে বসে পাচ্ছেন ভেজাল মুক্ত আম</li>

                </ul>

                <h3>সারাদেশে ফ্রি ডেলিভারি পেতে এখনি</h3>

                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

              </div>

            </Col>

            <Col lg={6}>


                 <Video></Video>

           
            </Col>

          </Row>

        </Container>

      </section>

      {/* Section Gaps */}
      <div className="section_gaps"></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Client
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className="Client">

        <Container>

          <Row>
            <Col lg={12}>
              <div className='header text-center'>
                <h2>
                  আমাদের মূল্যবান গ্রাহকদের <br /> মতামত গুলো জানুন
                </h2>
              </div>
            </Col>
          </Row>

          {/* ClientContent */}
          <div className="ClientContent">

            <Row>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className="ClientImg">
                  <img src='/images/landing_2/client_review.png' alt='' />
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='ClientImg'>
                  <img src='/images/landing_2/client_review.png' alt='' />
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='ClientImg'>
                  <img src='/images/landing_2/client_review.png' alt='' />
                </div>
              </Col>

              {/* item */}
              <Col lg={6} sm={6}>
                <div className='ClientImg'>
                  <img src='/images/landing_2/client_review.png' alt='' />
                </div>
              </Col>

            </Row>

          </div>

        </Container>

      </section>

      {/* Section Gaps */}
      <div className="section_gaps"></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


      {/* Section Gaps */}
      <div className="section_gaps"></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        OrderNow
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className="OrderNow">

        <div className="OrderLeft">
          <img src='/images/landing-3/order_left.png' alt='' />
        </div>

        <div className="OrderRight">
          <img src='/images/landing-3/order_right.png' alt='' />
        </div>

        <Container>

          <Row className="justify-content-md-center">

            <Col lg={8}>

              <div className="OrderNowtext">

                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                <Link href='tel:8801799733234'> +8801799733234 </Link>

                <h3>অর্ডার পেতে কল করুন এই নাম্বারে</h3>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* Section Gaps */}
      <div className="section_gaps"></div>

         {/* -------------------------------------------------------------------------------------------
                CustomerReview
        -----------------------------------------------------------------------------------------------*/}


        <CustomerReview></CustomerReview>    



      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        FormPart
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <section id="placeAnOrder">
        
        <Order></Order>

      </section>
      
      

      {/* Section Gaps */}
      <div className="section_gaps"></div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Footer
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section className="Footer">

        <div className="FooterLeft">
          <img src="/images/landing-3/footer_left.png" alt="" />
        </div>

        <div className="FooterRight">
          <img src="/images/landing-3/footer_right.png" alt="" />
        </div>

        <Container>

          <Row>

            <Col lg={4} sm={4}>

              <div className="FooterItem">

                <div className="Logo">
                  <img src="/images/landing-3/logo.svg" alt="" />
                </div>

                <div className="SocialLink">

                  <Link href=''> <FaFacebookF/> </Link>
                  <Link href=''> <AiOutlineTwitter/> </Link>
                  <Link href=''> <FaLinkedinIn/> </Link>
                  <Link href=''> <FaInstagram/> </Link>
                  <Link href=''> <AiFillYoutube/> </Link>

                </div>

              </div>

            </Col>

            <Col lg={4} sm={4}>

              <div className="FooterItem">

                <h3>Contact Us</h3>

                <ul>

                  <li> <Link href='tel:+8801894844452'> <FiPhoneCall /> +8801894844452 </Link> </li>
                  <li> <Link href='mailto:contact@softitcare.com'> <BsEnvelope /> contact@softitcare.com </Link> </li>

                </ul>

              </div>

            </Col>

            <Col lg={4} sm={4}>

              <div className="FooterItem">

                <h3>Contact Us</h3>

                <ul>

                  <li> <Link href=''>Refund Policy </Link> </li>
                  <li> <Link href=''>Privacy Policy</Link> </li>
                  <li> <Link href=''>Terms and Conditions</Link> </li>

                </ul>

              </div>

            </Col>


          </Row>


          <TinyFooter></TinyFooter>

        </Container>

      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



    </div>


  )
}

export default index

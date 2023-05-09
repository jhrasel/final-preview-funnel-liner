import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Cookies from "js-cookie";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

//landing pages


const Page = () => {
  const router = useRouter();
  const shopDomainName = router.query.shopName;
  const { page } = router.query;
  const [pageInfo, setPageInfo] = useState({});
  const getPageInfo = async (page) => {
    // debugger;
    const pageInformation = await axios.get(
      `${process.env.API_URL}v1/page/${page}`
    );
    setPageInfo(pageInformation.data.data);
  };


  const headers = {
    domain: shopDomainName,
  };

  const getShopInfo = async () => {
    try {
      const shopInfo = await axios.post(
        `${process.env.API_URL}v1/shops/info`,
        {},
        { headers: headers }
      );
      const shopData = shopInfo?.data?.data;

      localStorage.setItem("shop_id", shopData.shop_id);
      // localStorage.setItem("shop_name", shopData.name);
      localStorage.setItem("shop_name", shopData.domain);
      localStorage.setItem("theme_id", shopData.theme_id);
      localStorage.setItem("landing", shopData.landing);
      Cookies.set("shop_id", shopData.shop_id);
      Cookies.set("shop_title", shopData.shop_meta_title);
      Cookies.set("shop_meta_description", shopData.shop_meta_description);
      Cookies.set("shop_logo", shopData?.shop_logo?.name);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if (shopDomainName) {
      getShopInfo();
    }
  }, [shopDomainName]);

  useEffect(() => {
    if (shopDomainName) {
      getShopInfo();
    }
    if (page !== undefined) {
      getPageInfo(page);
    }
  }, [page]);
  const [shop_meta_title, setShop_meta_title] = useState("");
  const [shop_meta_description, setShop_meta_description] = useState("");
  const [shop_logo, setShop_logo] = useState("");

 useEffect(()=>{
  setShop_meta_title(Cookies.get('shop_title'))
  setShop_meta_description(Cookies.get('shop_meta_description'))
  setShop_logo(Cookies.get('shop_logo'))
  setTimeout(() => {
    setShop_meta_title(Cookies.get('shop_title'))
    setShop_meta_description(Cookies.get('shop_meta_description'))
    setShop_logo(Cookies.get('shop_logo'))
  }, 1000);
 },[shop_meta_title, shop_meta_description, shop_logo])

   //visitor id generate
   const [visitorID, setVisitorID] = useState('');
   const setFp = async () => {
     const fp = await FingerprintJS.load();
     const { visitorId } = await fp.get();
     setVisitorID(visitorId);
   };
   useEffect(() => {
     setFp();
   }, []);

  return pageInfo?.theme === null ? (
    <>
      <Header />
      <section className='MiddleBanner'>
        <Container>
          <div className='overlay_text'>
            <h1>{pageInfo?.title}</h1>
            <p>{pageInfo?.page_content}</p>
          </div>
        </Container>
      </section>
      <Footer />
      <SocialMedia />
      <TinyFooter />
    </>
  ) : (
    <>
      <Head>
        <title>{shop_meta_title}</title>
        <meta name='description' content={shop_meta_description} />
        <meta name='viewport' content='width=device-width, user-scalable=no' />
        <link rel='icon' href={shop_logo} />
      </Head>
      {pageInfo.theme !== null && pageInfo?.theme?.name == 1 && <LandingOne visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 2 && <LandingTwo visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 3 && <LandingThree visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 4 && <LandingFour visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 5 && <LandingFive visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 6 && <LandingSix visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 7 &&  <LandingSeven visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 8 && <LandingEight visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 9 && <LandingNine visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 10 && <LandingTen visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 11 && <LandingEleven visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 12 && <LandingTwelve visitorID={visitorID}/>}
      {pageInfo.theme !== null && pageInfo?.theme?.name == 13 && <LandingThirteen visitorID={visitorID}/>}
    </>
  );
};
export default Page;

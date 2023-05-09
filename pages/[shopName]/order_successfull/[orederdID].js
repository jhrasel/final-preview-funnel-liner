import Head from "next/head";

// Common CSS
import Header from "../../../Components/theme_1/Common/Header";
import MenuBar from "../../../Components/theme_1/Common/Menubar";
import Delivary from "../../../Components/theme_1/Common/Delivary";
import Footer from "../../../Components/theme_1/Common/Footer";
import SocialMedia from "../../../Components/theme_1/Common/SocialMedia";
import TinyFooter from "../../../Components/theme_1/Common/TinyFooter";
import ChoosePayment from "../../../Components/theme_1/ChoosePayment/ChoosePayment";
import OrderSuccessfull from "../../../Components/theme_1/OrderSuccessfull/OrderSuccessfull";

import { useRouter } from "next/router";
import { Editor, Frame } from "@craftjs/core";
import Cookies from "js-cookie";

const index = () => {
  const shop_meta_title = Cookies.get('shop_title')
  const shop_meta_description = Cookies.get('shop_meta_description')
  const shop_logo = Cookies.get('shop_logo')

  return (
    <>
      <Head>
        <title>{shop_meta_title}</title>
        <meta name='description' content={shop_meta_description} />
        <link rel='icon' href='frontend_asset/images/Logo.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link rel="icon" href={shop_logo} />
        {shop_meta_description}
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main>
        {/* <Header></Header>
			<Editor resolver={{ MenuBar }}>
				<Frame>
					<MenuBar menu1={'Home'} menu2={'Shop'} menu3={'About Us'} menu4={'Contact Us'} fontSize={'15'} />
				</Frame>
			</Editor> */}

        <OrderSuccessfull></OrderSuccessfull>

        {/* <Delivary></Delivary>
        <Footer></Footer>
        <SocialMedia></SocialMedia>
        <TinyFooter></TinyFooter> */}
      </main>

      <footer></footer>
    </>
  );
};

export default index;

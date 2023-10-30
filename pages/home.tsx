import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import FirstSection from '../components/FirstSection'
import Carousel from '../components/Carousel'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ProductCarousel from '../components/ProductCarousel'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* mobile metas */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
          {/* site metas */}
          <title>Paraíso Dsitribuidora</title>
          <meta name="keywords" content="" />
          <meta name="deScription" content="" />
          <meta name="author" content="" />
          {/* bootstrap css */}
          <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
          {/* style css */}
          <link rel="stylesheet" type="text/css" href="css/style.css" />
          {/* Responsive*/}
          <link rel="stylesheet" href="css/responsive.css" />
          {/* fevicon */}
          <link rel="icon" href="images/fevicon.png" type="image/gif" />
          {/* Scrollbar Custom CSS */}
          <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
          {/* Tweaks for older IEs*/}
          <link
            rel="stylesheet"
            href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
          />
          {/* fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,700|Raleway:400,700&display=swap"
            rel="stylesheet"
          />
          {/* owl stylesheets */}
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
            media="screen"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />
          
        </>

      </Head>
      

        <FirstSection />
        <ProductCarousel />
        <About />
        <ContactForm />
        <Footer />
      <Script src="js/jquery.min.js"></Script>
      <Script src="js/popper.min.js"></Script>
      <Script src="js/bootstrap.bundle.min.js"></Script>

      <Script src="js/plugin.js"></Script>

      <Script src="js/jquery.mCustomScrollbar.concat.min.js"></Script>
      <Script src="js/custom.js"></Script>

      <Script src="js/owl.carousel.js"></Script>
      <Script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></Script>
    </div>
  )
}

export default Home

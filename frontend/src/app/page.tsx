import Image from "next/image";
import { Avatar, Box, Container, InputAdornment, TextField, Typography } from "@mui/material";
import {
  Search as SearchIcon,
  QuestionAnswer as QuestionAnswerIcon,
  CheckCircle as CheckCircleIcon,
  Person as PersonIcon,
  LocationOn as LocationIcon,
  Favorite as HeartIcon,
} from "@mui/icons-material";
import { rubik } from '@/app/fonts'
import Link from "next/link";
import FazzButton from "@/components/Button/Button";


import BrandIcon from '@/app/icon.png'
import PeoplePlaceholder from '@/assets/images/people-placeholder.png'
import HeroBanner from '@/assets/images/hero-banner.jpg'
import TeamWorkDoodle from '@/assets/images/teamwork-doodle.png'
import Milkshake1 from '@/assets/images/milkshake-1.jpg'
import Milkshake2 from '@/assets/images/milkshake-2.jpg'
import Milkshake3 from '@/assets/images/milkshake-3.jpg'
import StoreMapImage from '@/assets/images/store-map.png'

import netflix from '@/assets/images/netflix.png'
import reddit from '@/assets/images/reddit.png'
import amazon from '@/assets/images/amazon.png'
import discord from '@/assets/images/discord.png'
import spotify from '@/assets/images/spotify.png'
import Footer from "@/components/Footer/Footer";
import CustomerTestimonies from "@/components/CustomerTestimonies/CustomerTestimonies";

const partners = [netflix, reddit, amazon, discord, spotify]

const products = [
  {
    img: Milkshake1,
    name: 'Hazelnut Latte',
    materials: [
      'Hazelnut Syrup',
      'Wanilla Whipped Cream',
      'Ice / Hot',
      'Sliced Banana on Top'
    ],
    price: 'IDR 25.000'
  },
  {
    img: Milkshake2,
    name: 'Pinky Promise',
    materials: [
      '1 Shot of Coffee',
      'Vanilla Whipped Cream',
      'Chocolate Biscuits',
      'Strawberry Syrup',
      'Sliced strawberry on Top'
    ],
    price: 'IDR 30.000'
  },
  {
    img: Milkshake3,
    name: 'Chicken Wings',
    materials: [
      'Wings',
      'Drum Sticks',
      'Mayonaise and Lemon',
      'Hot Fried',
      'Secret Recipe',
      'Buy 1 Get 1 only for Dine in'
    ],
    price: 'IDR 40.000'
  },
]

export default function Home() {
  return (
    <Box sx={{ fontFamily: rubik.style.fontFamily }}>
      {/* Navbar */}
      <Navbar />


      {/* Hero */}
      <Hero />

      {/* Services */}
      <Service />

      {/* Products */}
      <Products />

      {/* Store Map */}
      <StoreMap />

      {/* Partner */}
      <Partner />

      {/* Customer Testimoni */}
      <CustomerTestimonies />

      {/* Promo Card */}
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'absolute', left: '15%', top: '-8rem', display: { lg: 'flex', xs: 'none' }, alignItems: 'center', gap: '20rem', width: 'fit-content', paddingInline: '70px', paddingBlock: '2.5rem', borderRadius: '10px', bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, color: '#0B132A', fontSize: '33.18px', fontWeight: '500', width: '18rem' }}>
              Check our promo today!
            </Typography>
            <Typography component='p' sx={{ color: '#4F5665', fontFamily: rubik.style.fontFamily }}>
              Let&apos;s see the deals and pick yours!
            </Typography>
          </Box>
          <FazzButton style={{ borderRadius: '10px', paddingInline: '82px' }}>
            See Promo
          </FazzButton>
        </Box >
      </Box>


      <Footer />
    </Box >
  );
}

const Navbar = () => {
  return (
    <Box component='nav' sx={{ width: '100%', backgroundColor: '#fff', position: 'fixed', zIndex: '100' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', marginInline: 'auto', paddingBlock: '29px' }}>
        {/* Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Box position='relative'>
            <Image
              alt="Fazz Coffee Icon"
              src={BrandIcon}
              width={30}
              height={33}
            />
          </Box>

          <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, fontWeight: '700', fontSize: '20px', color: '#0B132A' }}>
            Fazz Coffee
          </Typography>
        </Box>

        {/* Menus */}
        <Box sx={{ display: 'flex', gap: '38px' }}>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665', ':hover': { textDecorationLine: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665', ':hover': { textDecorationLine: 'underline' } }}>
              Product
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665', ':hover': { textDecorationLine: 'underline' } }}>
              Your Cart
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665', ':hover': { textDecorationLine: 'underline' } }}>
              History
            </Typography>
          </Link>
        </Box>

        {/* Others */}
        <Box sx={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <TextField
            id="search-product-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ marginBottom: '-3px', marginLeft: '-0.2rem' }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            // variant="filled"
            placeholder="Search"
            sx={{ '.MuiInputBase-input': { paddingBlock: '8px', paddingLeft: '0' }, '.MuiInputBase-root': { borderRadius: '30px' }, maxWidth: '178px', backgroundColor: '#EFEEEE', borderRadius: '30px' }}
            inputProps={{ sx: { fontFamily: rubik.style.fontFamily } }}
          />

          {/* Chat */}
          <Box>
            <QuestionAnswerIcon sx={{ color: '#4F5665', cursor: 'pointer' }} />
          </Box>

          {/* Profile */}
          <Avatar alt="Remy Sharp" src={PeoplePlaceholder.src} sx={{ cursor: 'pointer' }} />

          {/* Login Button */}
          {/* <FazzButton style={{ paddingBlock: '9px', margin: '0', maxWidth: '150px' }}>
            Sign In
          </FazzButton> */}
        </Box>
      </Box>
    </Box>
  )
}

const Hero = () => {
  return (
    <Box position='relative' sx={{ paddingTop: '98px' }}>
      <Box sx={{ position: 'relative', width: '100%', height: '85vh', backgroundColor: 'black' }} >
        <Image src={HeroBanner} alt="Hero Banner" fill style={{ objectFit: 'cover', filter: 'brightness(60%)' }} />
      </Box>

      <Box position={'absolute'} sx={{ top: '27%', left: '10%', color: 'white', width: '100%', maxWidth: '1200px' }}>
        <Typography component='p' sx={{ fontWeight: 700, fontSize: 46, maxWidth: 570, lineHeight: '70px', marginBottom: '19px' }}>
          Start Your Day with Coffee and Good Meals
        </Typography>
        <Typography component='p' sx={{ fontWeight: 700, maxWidth: 450, lineHeight: '30px' }}>
          We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
        </Typography>
        <FazzButton style={{ paddingBlock: '1rem', borderRadius: '10px', maxWidth: '250px', fontWeight: 700 }}>
          Get Started
        </FazzButton>
      </Box>
    </Box>
  )
}

const Service = () => {
  return (
    <Box sx={{ background: '#FFF', paddingBottom: '82px', paddingTop: '193px', position: 'relative' }}>
      <Container sx={{ display: 'flex', gap: '139px', alignItems: 'center' }}>
        <Box position='relative' sx={{ height: 457, width: 573 }}>
          <Image src={TeamWorkDoodle} alt="TeamWork Doodle" style={{ objectFit: 'cover' }} fill />
        </Box>
        <Box>
          <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B132A', maxWidth: '432px' }}>
            We Provide Good Coffee and Healthy Meals
          </Typography>
          <Typography sx={{ color: '#4F5665', marginTop: '1.12rem', maxWidth: '428px' }}>
            You can explore the menu that we provide with fun and have their own taste and make your day better.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.94rem', marginTop: '20px' }}>
            {
              [
                "High quality beans",
                "Healthy meals, you can request the ingredients",
                "Chat with our staff to get better experience for ordering",
                "Free member card with a minimum purchase of IDR 200.000."
              ].map((text) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircleIcon sx={{ width: '24px', height: '24px', color: '#2FAB73' }} />
                  <Typography component='span' sx={{ color: '#4F5665', fontSize: '14px' }}>
                    {text}
                  </Typography>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Container>

      <Box className='count-testimoni' sx={{ display: 'flex', justifyContent: 'space-between', padding: '67px 3rem', maxWidth: '1200px', background: '#ffff', boxShadow: '0px 7px 13px 0px #e7e7e7', borderRadius: '10px', position: 'absolute', top: '-55px', left: '16%', zIndex: '20' }}>
        {/* Staff */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', minWidth: '300px' }}>
          <Box sx={{ color: '#6A4029', background: '#FFBA33', maxWidth: 'fit-content', padding: '0.88rem 1rem', borderRadius: '100%' }}>
            <PersonIcon />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#0B132A' }}>90+</Typography>
            <Typography sx={{ fontSize: '1.12rem', color: '#4F5665' }}>Staff</Typography>
          </Box>
        </Box>

        {/* Stores */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', minWidth: '300px', borderInline: '2px solid #EEEFF2' }}>
          <Box sx={{ color: '#6A4029', background: '#FFBA33', maxWidth: 'fit-content', padding: '0.88rem 1rem', borderRadius: '100%' }}>
            <LocationIcon />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#0B132A' }}>30+</Typography>
            <Typography sx={{ fontSize: '1.12rem', color: '#4F5665' }}>Stores</Typography>
          </Box>
        </Box>

        {/* Customer */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', minWidth: '300px' }}>
          <Box sx={{ color: '#6A4029', background: '#FFBA33', maxWidth: 'fit-content', padding: '1rem 1rem 0.8rem 1rem', borderRadius: '100%' }}>
            <HeartIcon />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#0B132A' }}>900+</Typography>
            <Typography sx={{ fontSize: '1.12rem', color: '#4F5665' }}>Customers</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Products = () => {
  return (
    <Box sx={{ background: '#FBFBFB', paddingBlock: '5rem' }}>
      <Container>
        {/* Heading */}
        <Box>
          <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B332A', width: '100%', textAlign: 'center' }}>
            Here is People&apos;s Favorite
          </Typography>

          <Typography sx={{ color: '#4F5665', marginTop: '1.2rem', width: '100%', textAlign: 'center' }}>
            Let&apos;s choose and have a bit taste of poeple&apos;s favorite. It might be yours too!
          </Typography>
        </Box>

        {/* Products */}
        <Box className="product-container" sx={{ display: 'flex', gap: '50px', justifyContent: 'center', marginTop: `${183 + 65}px` }}>

          {
            products.map((item) => (
              <Box key={item.name} className="product" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '50px', width: '330px', border: '2px solid #DDDDDD', borderRadius: '10px', }}>

                <Box className="image-wrapper" sx={{ position: 'relative', width: '129px', height: '129px', marginBottom: '20px', marginTop: '-65px' }}>
                  <Image
                    alt="milkshake-pict"
                    src={item.img}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '100%' }}
                  />
                </Box>

                <Box className="product-name">
                  <Typography component='h3' sx={{ fontSize: "18px", fontWeight: 500, textAlign: 'center', color: '#0B132A' }}>
                    {item.name}
                  </Typography>
                </Box>

                <Box className="product-materials" sx={{ marginTop: '1.8rem', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                  {
                    item.materials.map((material, index) => (

                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircleIcon sx={{ width: '24px', height: '24px', color: '#2FAB73' }} />
                        <Typography component='span' sx={{ color: '#4F5665', fontSize: '14px' }}>
                          {material}
                        </Typography>
                      </Box>
                    ))
                  }
                </Box>

                <Box className="product-price-buy-act" sx={{ marginTop: '50px' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: 25, color: '#0B332A', width: '100%', textAlign: 'center' }}>
                    {item.price}
                  </Typography>
                  <FazzButton style={{ border: '2px solid #FFBA33', padding: '13px 47px', maxWidth: 'fit-content', boxShadow: '0', marginTop: '20px', backgroundColor: '#ffff' }}>
                    Order Now
                  </FazzButton>
                </Box>
              </Box>
            ))
          }
        </Box>
      </Container>
    </Box>
  )
}

const StoreMap = () => {
  return (
    <Box className="store-map" sx={{ background: '#FBFBFB', paddingBlock: '80px' }}>
      <Container>
        <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B332A', width: '100%', textAlign: 'center', maxWidth: '383px', marginInline: 'auto' }}>
          Visit Our Store in the Spot on the Map Below
        </Typography>

        <Typography sx={{ color: '#4F5665', marginTop: '1.2rem', width: '100%', textAlign: 'center' }}>
          See our store in every city on the spot and spen your good day there. See you soon!
        </Typography>

        <Box className="map-wrapper" sx={{ position: 'relative', maxWidth: '89%', marginInline: 'auto', height: '538px', marginTop: '10rem' }}>
          <Image
            alt="map-store-pict"
            src={StoreMapImage}
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Container>
    </Box>
  )
}

const Partner = () => {
  return (
    <Box className="partner" sx={{ background: '#FBFBFB', paddingBlock: '50px' }}>
      <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B332A', width: '100%', textAlign: 'center', marginInline: 'auto' }}>
        Our Partner
      </Typography>

      <Box className="partners" sx={{ marginTop: '48px', display: 'flex', gap: '60px', justifyContent: 'center' }}>
        {
          partners.map((item) => (
            <Box key={item.src} className="partner" sx={{ position: 'relative', height: '113px', width: '200px', opacity: '20%' }}>
              <Image
                alt='product'
                src={item}
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}

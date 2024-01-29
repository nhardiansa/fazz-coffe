import Image from "next/image";
import { Avatar, Box, Container, InputAdornment, TextField, Typography } from "@mui/material";
import {
  Search as SearchIcon,
  QuestionAnswer as QuestionAnswerIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { rubik } from '@/app/fonts'
import Link from "next/link";
import FazzButton from "@/components/Button/Button";


import BrandIcon from '@/app/icon.png'
import PeoplePlaceholder from '@/assets/images/people-placeholder.png'
import HeroBanner from '@/assets/images/hero-banner.jpg'
import TeamWorkDoodle from '@/assets/images/teamwork-doodle.png'


export default function Home() {
  return (
    <Box sx={{ fontFamily: rubik.style.fontFamily }}>
      {/* Navbar */}
      <Navbar />


      {/* Hero */}
      <Hero />

      {/* Services */}
      <Box sx={{ background: '#FFF', paddingBottom: '82px', paddingTop: '193px' }}>
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
      </Box>
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

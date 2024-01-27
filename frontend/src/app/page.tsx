import Image from "next/image";
import { Avatar, Box, InputAdornment, TextField, Typography } from "@mui/material";
import { Search as SearchIcon, QuestionAnswer as QuestionAnswerIcon } from '@mui/icons-material';
import { rubik } from '@/app/fonts'
import Link from "next/link";


import BrandIcon from '@/app/icon.png'
import PeoplePlaceholder from '@/assets/images/people-placeholder.png'
import HeroBanner from '@/assets/images/hero-banner.jpg'
import FazzButton from "@/components/Button/Button";


export default function Home() {
  return (
    <Box sx={{ fontFamily: rubik.style.fontFamily }}>
      {/* Navbar */}
      <Navbar />


      {/* Hero */}
      <Hero />
    </Box>
  );
}

const Navbar = () => {
  return (
    <Box component='nav' sx={{ width: '100%', backgroundColor: 'white' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', marginInline: 'auto', paddingBlock: '29px' }}>
        {/* Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Box position='relative'>
            <Image
              alt="Fazz Coffe Icon"
              src={BrandIcon}
              width={30}
              height={33}
            />
          </Box>

          <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, fontWeight: '700', fontSize: '20px', color: '#0B132A' }}>
            Fazz Coffe
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

          <Box>
            <QuestionAnswerIcon sx={{ color: '#4F5665' }} />
          </Box>

          <Avatar alt="Remy Sharp" src={PeoplePlaceholder.src} />
        </Box>
      </Box>
    </Box>
  )
}

const Hero = () => {
  return (
    <Box position='relative'>
      <Box sx={{ position: 'relative', width: '100%', height: '85vh', backgroundColor: 'black' }} >
        <Image src={HeroBanner} alt="Hero Banner" fill style={{ objectFit: 'cover', filter: 'brightness(60%)' }} />
      </Box>

      <Box position={'absolute'} sx={{ top: '20%', left: '10%', color: 'white', width: '100%', maxWidth: '1200px' }}>
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

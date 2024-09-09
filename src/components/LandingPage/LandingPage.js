import React from 'react';
import { Box, Container, Typography,Grid, Paper} from '@mui/material';
import Navbar from './Navbar';
import SplineRobot from './SplineRobot';
import GetStartedButton from '../GetStartedButton';
import SkillsHubImg from '../../images/SkillsHub.png';
import personIcon from '../../images/person-icon.png';
import Footer from './Footer';

import HubLogo from '../../images/glphubLogo.png'; // Import your hub logo image

function LandingHero() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: '100vh', background: 'transparent', paddingBottom: 20, pt:5 }} // Gradient Background
    >
      <Grid
        item
        xs={12}
        md={6}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: { sm: '80px', xs: '50px' },
            }}
          >
            UNLOCK
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'light',
              color: 'white',
              fontSize: { sm: '40px', xs: '30px' },
            }}
          >
            YOUR BRILLIANCE
          </Typography>

          {/* Replace the "HUB" text with an image */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, marginBottom: '20px' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'light',
                color: 'white',
                fontSize: { sm: '40px', xs: '30px' },
                marginRight: '10px', // Add some space before the logo
              }}
            >
              WITH
            </Typography>
            <Box
              component="img"
              src={HubLogo}
              alt="Hub Logo"
              sx={{
                height: { xs: '40px', sm: '50px' }, // Adjust the size based on screen size
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <GetStartedButton />
          </Box>
        </Box>
      </Grid>
  

      <Grid
        item
        xs={12}
        md={6}
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <SplineRobot />
      </Grid>
    </Grid>
  );
}

function FeatureSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#F2F2F2',
        padding: '40px 20px',
        maxWidth: '1100px',
        margin: { xs: '20px auto 0', sm: '20px auto 0', md: '-150px auto 0' },
        borderRadius: '16px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 3,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          alignItems: 'center',
          gap: 4,
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        {/* Left Column - Text */}
        <Box>
          <Typography
            variant="h1"
            sx={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '30px', marginBottom: '10px' }}
          >
            The ultimate library for your career progression
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', maxWidth: '600px', mx: 'auto' }}>
            Our course recommendation tool is designed to help you navigate the complex world of career planning.
          </Typography>
        </Box>

        {/* Right Column - Skills Hub Image */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box component="img" src={SkillsHubImg} alt="Skills Hub" sx={{ height: { xs: '100px', md: '250px' } }} />
        </Box>
      </Container>

      {/* Tab with Learners Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#7856E2',
          borderRadius: '20px',
          padding: '15px 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ color: '#fff', fontSize: '12px', marginRight: '8px' }}>
            Over <span style={{ fontWeight: 'bold', color: '#00FEBE' }}>1,000 learners</span> already signed up
          </Typography>
          <Box
            component="img"
            alt="Learners Icon"
            src={personIcon}
            sx={{ width: 36, height: 36, position: 'absolute', top: '-36px', right: '-24px' }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function LandingPage() {
  return (
    <Box>
      {/* Navbar */}
      <Box sx={{ background: 'linear-gradient(to bottom, #A59AED, #7856E2)' }}>
        <Navbar />

        {/* Hero Section */}
        <LandingHero />
      </Box>

      {/* Feature Section */}
      <FeatureSection />

      {/* Footer */}
      <Footer />
    </Box>
  );
}
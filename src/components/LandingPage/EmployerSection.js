import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Logo1 from '../../images/logo1.png'; // Example logos
import Logo2 from '../../images/logo2.png';
import Logo3 from '../../images/logo3.png';
// Add all the logos you want to display

const logos = [
  { src: Logo1, alt: 'Logo 1' },
  { src: Logo2, alt: 'Logo 2' },
  { src: Logo3, alt: 'Logo 3' },
  // Add more logos here
];

function EmployersSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        py: 8, // Padding for the section
        overflow: 'hidden', // Hide overflow for scrolling effect
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          We are proud to work with
        </Typography>
      </Container>

      {/* Scrolling Wrapper */}
      <Box
        sx={{
          display: 'flex',
          animation: 'scroll 30s linear infinite', // Add scrolling animation
          '&:hover': {
            animationPlayState: 'paused', // Pause scrolling on hover
          },
        }}
      >
        {/* Logos Container */}
        {logos.map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={logo.src}
            alt={logo.alt}
            sx={{
              height: { xs: '50px', sm: '80px' }, // Adjust the height of the logos
              mx: 2, // Add some margin between logos
            }}
          />
        ))}
      </Box>

      {/* Keyframes for the scrolling animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default EmployersSection;

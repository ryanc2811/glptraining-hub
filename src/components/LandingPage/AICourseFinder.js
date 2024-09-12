import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import backgroundImage from '../../images/Ai-coursefinder.png'; // Background image
import greenIcon from '../../images/btnicon.png'; 
import GetStartedButton from '../GetStartedButton';

function AICourseFinder() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: {xs:'100%',sm:'800px'},
        maxHeight:{sm:'1150px'},
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pb: { xs: 0, md: 20 }
      }}
    >
      {/* Grid Layout for Icon, Text, and Image */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        
        sx={{ height: '100%' }} // Ensures content stays above the background
      >
        {/* Image for Mobile (Hidden on Desktop) */}
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: 'block', md: 'none' }, // Show image only on mobile
          }}
        >
          <Box
            component="img"
            src={backgroundImage}
            alt="Background"
            sx={{
              width: '100%',
              height: 'auto',
              
            }}
          />
        </Grid>

        {/* Content for Desktop and Mobile */}
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            position: { md: 'absolute' }, // Make the content absolutely positioned on desktop
            bottom: { md: '1%' }, // Position the content towards the bottom-right on desktop
            right: { md: '14%' },
            zIndex: 2, // Ensure content is on top of the background
            mt: { xs: 2, md: 0 }, // Add margin on mobile, none on desktop
            px: { xs: 2, md: 0 },// Padding for mobile to center properly
            pb: 5,
          }}
        >
          <Box
            component="img"
            src={greenIcon}
            alt="Green arrow icon"
            sx={{
              height: { xs: '20px', sm: '25px' }, // Adjust the size based on screen size
              mb: 2, // Add some spacing below the icon
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { lg: '50px', xs: '30px' },
              color: '#001A54',
            }}
          >
            ADAPTIVE{' '}
            <Box component="span" sx={{ color: '#00FEBE' }}>
              AI
            </Box>
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 'light',
              fontSize: { lg: '50px', xs: '30px' },
              color: '#7856E2',
            }}
          >
            Course Finder
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#001A54',
              fontSize: { lg: '20px', xs: '16px' },
              mt: 2,
            }}
          >
            A Tool That Adapts To Your Needs
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#001A54',
              maxWidth: {xs:'90%',sm:'500px'},
              mb: 4,
            }}
          >
            Our course recommendation tool is designed to help you navigate the complex world of career planning and find a path that’s right for you.
          </Typography>

          <GetStartedButton />
        </Grid>

        {/* Background for Desktop */}
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: { xs: 'none', md: 'block' }, // Show background only on desktop
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`, // Use as background for desktop
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1, // Ensure background is behind the content
          }}
        />
      </Grid>
    </Box>
  );
}

export default AICourseFinder;

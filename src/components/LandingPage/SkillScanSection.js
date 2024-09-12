import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import backgroundImage from '../../images/skillscanphone.png'; // Example image for the skill scan phone (add your own image)
import GetStartedButton from '../GetStartedButton';
import SkillScanPhone from './SkillScanPhone'
function SkillScansSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center',
        alignItems: 'center',
        py: 5,
        px: { xs: 0, sm: 2 },
      }}
    >
      {/* Centered Text Above the Rectangle */}
      <Box sx={{ textAlign: 'center', mb: 4 }}> {/* Margin below the text */}
        <Typography
          variant="h4"
          sx={{
            color: '#001A54', // Adjust color as needed
            fontWeight: 'bold',
          }}
        >
          Start your enrolment process with our Skill Scans today
        </Typography>
      </Box>

      {/* Rectangle with Content */}
      <Container
        sx={{
          width: '100%',
          maxWidth: '1100px', // Increase the width for more space
          minHeight: '650px', // Increase the height for a bigger card
          borderRadius: { xs: 0, sm: '24px' },
          backgroundColor: '#7856E2', // Purple background color
          color: 'white',
          padding: {xs:0, sm:'40px 20px'},
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
          position: 'relative',
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ height: '100%', background: 'transparent', px: 3, mt:{xs:15,sm:20}}} // Gradient Background
        >
          <Grid
            item
            xs={12}
            md={6}
            container
            direction="column"
            sx={{
              textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile
            }}
          >
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'light',
                  color: 'white',
                  fontSize: { sm: '50px', xs: '30px' },
                }}
              >
                Enrolment
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'light',
                  color: 'white',
                  fontSize: { sm: '50px', xs: '30px' },
                }}
              >
                is as easy as{' '}
                <Box component="span" sx={{ color: '#00FEBE', fontWeight: 'bold' }}>
                  123
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, maxWidth: {xs:'100%', sm:'400px'}, mt: 2 }} // Add more padding to the left of the text
              >
                Our course recommendation tool is designed to help you navigate the complex world of career planning and find a path that’s right for you.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                }}
              >
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
            sx={{ height: '100%',}}
            
          >
            
            {/*<SkillScanPhone/>*/}
            
            <Box
              component="img"
              src={backgroundImage}
              alt="Skill Scan"
              sx={{
                width: 'auto',
                height: {xs:'250px', sm:'100%'},
                px: 5,
               
                mt:{xs:5,sm:0},
                maxHeight: '80%', // Ensure the image occupies the card’s bottom space
                position: {xs:'flex',sm:'absolute'},
                bottom: 0, // Align the image to the bottom of the card
                right: 0, // Keep it right-aligned
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SkillScansSection;

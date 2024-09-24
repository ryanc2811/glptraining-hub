import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Avatar, Button, IconButton, Drawer, Card } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GetStartedButton from '../GetStartedButton';
import backgroundImage from '../../images/young-man-using-laptop-front-sign-that-says-word.jpg'; // Replace with your image path
import ActivityProgressSection from './ActivityProgressSection';
import OurToolsSection from './OurToolsSection';
import ProfileSection from './ProfileSection';
import CurrentActivitiesSection from './CurrentActivitiesSection';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        backgroundColor: '#f4f6f8',
        
      }}
    ><IconButton
    onClick={toggleSidebar}
    sx={{
      position: 'fixed',
      top: 16,
      left: 16,
      zIndex: 1301, // Ensures it remains above the drawer
      color: '#001A54',
      backgroundColor: sidebarOpen ? 'transparent' : 'rgba(255, 255, 255, 0.5)', // Change background when drawer is open
      display: { xs: 'block' },
      width: '56px',
      height: '56px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s', // Smooth transition
      '&:hover': {
        backgroundColor: sidebarOpen ? 'transparent' : '#f0f0f0', // Same hover effect conditionally
      },
    }}
  >
    <MenuIcon fontSize="large" />
  </IconButton>
  
  {/* Sidebar (Drawer) */}
  <Drawer
    anchor="left"
    open={sidebarOpen}
    onClose={toggleSidebar}
    sx={{
      zIndex: 1300,
      '& .MuiDrawer-paper': {
        width: '250px',
        backgroundColor: '#001A54',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    }}
  >
    <Typography variant="h5" sx={{ mt: 4, mb: 4 }}>
      Dashboard
    </Typography>
    <Button sx={{ color: 'white', mb: 3 }} onClick={toggleSidebar}>
      <AccountCircleIcon />
      Dashboard
    </Button>
  </Drawer>
  

      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          py: { sm: 3, xs: 0 },
          pl: { xs: 0, sm: '100px' }, // Remove left padding on mobile
          width: '100%', // Full width
          boxSizing: 'border-box', // Ensure padding and borders are included in width
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, sm: 3 }} // Remove gap between cards on mobile
          sx={{ width: '100%', maxWidth: '100%' }} // Ensure grid stays within the screen
        >
          {/* First Column - Our Tools and Adaptive AI Course Finder */}
          <Grid item xs={12} md={6}>
            {/* Our Tools */}
            <Box
              sx={{
                mb: { sm: 3, xs: 0 },
                p: { sm: 3, xs: 0 },
                py: {  sm:0, xs: 3 },
                backgroundColor: 'white',
                width: '100%',
                borderRadius: { xs: 0, sm: '12px' }, // No border radius on mobile
                boxSizing: 'border-box',
              }}
            >
              <OurToolsSection />
            </Box>

            {/* Adaptive AI Course Finder */}
            <Box
              sx={{
                position: 'relative',
                height: '350px',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: { xs: 0, sm: '12px' }, // No border radius on mobile
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '20px',
                color: 'white',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              {/* Dark Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with opacity
                  zIndex: 1,
                }}
              />
              {/* Content Overlay */}
              <Box sx={{ zIndex: 2, position: 'relative' }}>
                <Typography variant="h5" gutterBottom>
                  Adaptive AI Course Finder
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Our course recommendation tool is designed to help you navigate the complex world
                  of career planning and find a path that's right for you.
                </Typography>
                <GetStartedButton />
              </Box>
            </Box>
          </Grid>

          {/* Second Column - My Current Activities */}
          <Grid item xs={12} md={3}>
            <CurrentActivitiesSection/>
          </Grid>

          {/* Third Column - Profile Section */}
          <Grid item xs={12} md={3} sx={{ order: { xs: -1, md: 'inherit' } }}>
  <ProfileSection />
</Grid>


          {/* Activity Progress Section */}
          <Grid item xs={12} md={6}>
            <ActivityProgressSection />
          </Grid>

          {/* Courses with your skills */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                height: { sm: '402px' },
                borderRadius: { xs: 0, sm: '12px' }, // No border radius on mobile
                width: '100%',
                boxSizing: 'border-box', // Prevent overflow
                boxShadow:0
              }}
            >
              <Typography sx={{color:'#001A54'}}variant="h3" gutterBottom>
                Courses with your skills
              </Typography>
              {/* Add skills overview, chart, or list */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;

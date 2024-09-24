import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ProfileSection() {
  return (
    <Card
      sx={{
        boxShadow:0,
        p: 3,
        borderRadius: { xs: 0, sm: '12px' }, // No border radius on mobile
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#001A54',
        color: 'white',
        width: '100%', // Full width on mobile
        maxWidth: '100%', // Prevent overflow
        boxSizing: 'border-box', // Ensure padding and borders are included in width
        height: { sm: '600px', xs: 'auto' }, // Adjust height for mobile and desktop
      }}
    >
      <Avatar
        sx={{
          width: 100,
          height: 100,
          mb: 2,
          borderRadius: '24px',
          backgroundColor: '#7856E2',
        }}
      >
        <AccountCircleIcon sx={{ fontSize: 80 }} />
      </Avatar>
      <Typography variant="h5">Ryan Coles</Typography>
      <Typography>Data Specialist | GLP Training</Typography>

      {/* Stats 2x2 Grid on Desktop and 1x4 on Mobile */}
      <Box sx={{ mt: 4, width: '100%' }}>
        <Grid container spacing={2}>
          {/* First Box */}
          <Grid item xs={12} sm={6}> {/* Full width on mobile, half width on desktop */}
          <Paper
              sx={{
                p: 2,
                alignContent:'center',
                backgroundColor: '#022858',
                color: 'white',
                textAlign: 'center',
                height: { sm: '130px', xs: 'auto' }, // Adjust height for mobile
                borderRadius: '12px',
              }}
            >
              <Typography variant="h1" sx={{ color: 'white' }}>12</Typography>
              <Typography sx= {{fontSize:14}}>minutes spent learning this week</Typography>
            </Paper>
          </Grid>

          {/* Second Box */}
          <Grid item xs={12} sm={6}>
          <Paper
              sx={{
                p: 2,
                alignContent:'center',
                backgroundColor: '#022858',
                color: 'white',
                textAlign: 'center',
                height: { sm: '130px', xs: 'auto' }, // Adjust height for mobile
                borderRadius: '12px',
              }}
            >
              <Typography variant="h1" sx={{ color: 'white' }}>12</Typography>
              <Typography sx= {{fontSize:14}}>minutes spent learning this week</Typography>
            </Paper>
          </Grid>

          {/* Third Box */}
          <Grid item xs={12} sm={6}>
          <Paper
              sx={{
                p: 2,
                alignContent:'center',
                backgroundColor: '#022858',
                color: 'white',
                textAlign: 'center',
                height: { sm: '130px', xs: 'auto' }, // Adjust height for mobile
                borderRadius: '12px',
              }}
            >
              <Typography variant="h1" sx={{ color: 'white' }}>12</Typography>
              <Typography sx= {{fontSize:14}}>minutes spent learning this week</Typography>
            </Paper>
          </Grid>

          {/* Fourth Box */}
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{
                p: 2,
                alignContent:'center',
                backgroundColor: '#022858',
                color: 'white',
                textAlign: 'center',
                height: { sm: '130px', xs: 'auto' }, // Adjust height for mobile
                borderRadius: '12px',
              }}
            >
              <Typography variant="h1" sx={{ color: 'white' }}>12</Typography>
              <Typography  sx= {{fontSize:14}}>minutes spent learning this week</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default ProfileSection;

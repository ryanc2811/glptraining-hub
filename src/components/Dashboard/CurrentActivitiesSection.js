import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const activities = [
  { label: 'PMO Skill scan', imageUrl: 'https://via.placeholder.com/50' },
  { label: 'PMO Skill scan', imageUrl: 'https://via.placeholder.com/50' },
  { label: 'PMO Skill scan', imageUrl: 'https://via.placeholder.com/50' },
  { label: 'PMO Skill scan', imageUrl: 'https://via.placeholder.com/50' },
];

function CurrentActivitiesSection() {
  return (
    <Paper sx={{ p: 3, borderRadius: '12px',boxShadow:0}}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        My current activities
      </Typography>
      <Grid container spacing={2} direction="column">
        {activities.map((activity, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
              }}
            >
              {/* Left: Image */}
              <Avatar src={activity.imageUrl} alt={activity.label} sx={{ width: 50, height: 50,borderRadius: '12px' }} />

              {/* Center: Activity Text */}
              <Box sx={{ flexGrow: 1, ml: 2 }}>
                <Typography variant="body1" sx={{ fontSize:12,fontWeight: 'bold', color: '#001A54' }}>
                  {activity.label}
                </Typography>
              </Box>

              {/* Right: Arrow Icon */}
              <IconButton sx={{ color: '#00FEBE' }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default CurrentActivitiesSection;

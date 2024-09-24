import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import Wavify from 'react-wavify';

const WaveProgress = ({ percentage, label, total, completed }) => {
  // Adjust wave height scaling
  const waveHeight = (100 - percentage) / 0.35;

  return (
    <Box sx={{ position: 'relative', height: '350px', overflow: 'hidden',}}>
      <Paper
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          backgroundColor: '#F2F2F2',
          
        }}
      >
        {/* Conditional rendering for wave animation */}
        {percentage < 100 ? (
          <>
            <Wavify
              fill="#00FEBE"
              paused={false}
              options={{
                height: waveHeight, // Adjust wave height dynamically
                amplitude: 20,
                speed: 0.25,
                points: 3, // Adjust wave smoothness
              }}
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
              }}
            />

            <Wavify
              fill="#00FEBE"
              paused={false}
              options={{
                height: waveHeight, // Adjust wave height dynamically
                amplitude: 20,
                speed: 0.5,
                points: 3,
              }}
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                opacity: 0.5,
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', p: 2, color: '#fff' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {label}
              </Typography>
            </Box>
          </>
        ) : (
          <Box>
            <Box
              sx={{
                backgroundColor: '#7856E2', // Purple background for 100% completion
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                borderRadius: '12px',
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', p: 2, color: '#fff' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                {label}
              </Typography>
            </Box>
          </Box>
        )}

        {/* Percentage and completed tasks */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            textAlign: 'center',
            p: 2,
            color: '#fff',
            bottom: 0,
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white' }}>
            {percentage}%
          </Typography>
          <Typography variant="body2">
            {completed}/{total}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

const ActivityProgressSection = () => {
  const activities = [
    { percentage: 65, label: 'HR Level 3 Skill Scan', total: 36, completed: 23 },
    { percentage: 47, label: 'HR Level 3 Skill Scan', total: 40, completed: 19 },
    { percentage: 100, label: 'HR Level 3 Skill Scan', total: 36, completed: 36 },
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: '12px' }}>
      {/* Activity Progress Title and View All Button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#001A54' }}>
          Activity Progress
        </Typography>
        <Button variant="text" sx={{ color: '#001A54' }}>
          View all
        </Button>
      </Box>

      {/* Progress Bars */}
      <Grid container spacing={2}> {/* Reduced spacing */}
        {activities.map((activity, index) => (
          <Grid item xs={6} md={4} key={index}>
            <WaveProgress
              percentage={activity.percentage}
              label={activity.label}
              total={activity.total}
              completed={activity.completed}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ActivityProgressSection;

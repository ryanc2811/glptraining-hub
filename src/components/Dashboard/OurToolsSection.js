import React from 'react';
import { Box, Typography, Grid, Avatar, IconButton } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build'; 
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School'; 
import SearchIcon from '@mui/icons-material/Search'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function OurToolsSection() {
  const tools = [
    { icon: <AutoAwesomeIcon fontSize="large" />, label: 'Adaptive course finder' },
    { icon: <GroupsIcon fontSize="large" />, label: 'Management course finder' },
    { icon: <SchoolIcon fontSize="large" />, label: 'Skill Scans' },
    { icon: <CheckCircleIcon fontSize="large" />, label: 'Suitability overviews' },
  ];

  return (
    <Box sx={{ py: 2 }}>
      {/* Title */}
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center',  }}>
            <Avatar
              sx={{
                margin: '0 auto',
                backgroundColor: '#F2F2F2',
                width: 64,
                height: 64,
              }}
            >
              <BuildIcon sx={{ color: '#001A54' }} fontSize="large" />
            </Avatar>
            <Typography
              variant="h6"
              sx={{ color: '#001A54', fontWeight: 'bold', mt: 1 }}
            >
              Our Tools
            </Typography>
          </Box>
        </Grid>
        {/* Tools Grid */}
        <Grid item xs={12} sm={6} md={9}>
          <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: '100%' }}>
            {tools.map((tool, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: '#7856E2',
                      color: '#fff',
                      width: 64,
                      height: 64,
                      mb: 2,
                      '&:hover': {
                        backgroundColor: '#7856E2',
                      },
                    }}
                  >
                    {tool.icon}
                  </IconButton>
                  <Typography sx={{ fontSize:14 ,color: '#001A54',}}>
                    {tool.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurToolsSection;

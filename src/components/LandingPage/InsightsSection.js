import React from 'react';
import { Box, Typography, Grid, Container, Card } from '@mui/material';

function InsightsSection() {
  const insights = [
    { number: '92%', text: 'of learners complete a skill scan in under 5 minutes' },
    { number: '+30%', text: 'of learners complete a skill scan in under 5 minutes' },
    { number: '500k', text: 'of learners complete a skill scan in under 5 minutes' },
    { number: '>90%', text: 'of learners complete a skill scan in under 5 minutes' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pb: 5,
        px: { xs: 2, sm: 5 },
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {insights.map((insight, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: '16px',
                  px:5,
                  py: 5,
                  backgroundColor: '#F2F2F2',
                  textAlign: 'center',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 'bold',
                    color: '#001A54',
                    fontSize: { xs: '2.5rem', md: '3.5rem' }, // Responsive font size
                  }}
                >
                  {insight.number}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#001A54',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    mt: 1,
                  }}
                >
                  {insight.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default InsightsSection;

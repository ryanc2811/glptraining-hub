import React from 'react';
import { Button,Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Icon
import buttonIcon from '../images/btnicon.png'
function GetStartedButton() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#7856E2',
        color: '#fff',
        padding: '10px 30px',
        borderRadius: '30px',
        textTransform: 'none', // To remove uppercase transformation
        fontWeight: 'bold',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
          backgroundColor: '#6749c6',
        },
      }}
      
    >
      Get Started
      {/* Right Icon as Image */}
      <Box
        component="img"
        src={buttonIcon}
        alt="Arrow Icon"
        sx={{ width: '20px', height: 'auto', marginLeft: '8px' }} // Adjust size and spacing as needed
      />
    </Button>
  );
}

export default GetStartedButton;

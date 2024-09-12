import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Aldi from '../../images/EmployerLogos/ALDI.png'; // Example logos
import Primark from '../../images/EmployerLogos/Primark.png';
import GXO from '../../images/EmployerLogos/GXO.png';
import aatom from '../../images/EmployerLogos/aatom.png';
import AdvancedMedicalSolutions from '../../images/EmployerLogos/AdvancedMedicalSolutions.png';
import Allhallows from '../../images/EmployerLogos/Allhallows.png';
import Argos from '../../images/EmployerLogos/Argos.png';
import ASCAirSeaContainers from '../../images/EmployerLogos/ASC AirSeaContainers.png';
import BnQ from '../../images/EmployerLogos/BnQ.png';
import BidvestNoonan from '../../images/EmployerLogos/BidvestNoonan.png';
import BourneLeisureLimited from '../../images/EmployerLogos/BourneLeisureLimited.png';
import Brakes from '../../images/EmployerLogos/Brakes.png';
import BritishTransportPolice from '../../images/EmployerLogos/BritishTransportPolice.png';
import Butlins from '../../images/EmployerLogos/Butlins.png';
import Cordant_recruitment from '../../images/EmployerLogos/Cordant_recruitment.png';
import CostaCoffee from '../../images/EmployerLogos/CostaCoffee.png';
import DavidLloyd from '../../images/EmployerLogos/DavidLloyd.png';
import EACT from '../../images/EmployerLogos/E-ACT.png';
import Elysium from '../../images/EmployerLogos/Elysium.png';
import FE_Fincancial_Express from '../../images/EmployerLogos/FE Fincancial Express.png';
import FirstUtility from '../../images/EmployerLogos/FirstUtility.png';
import GlenDimplexHV from '../../images/EmployerLogos/GlenDimplexHV.png';
import GoApe from '../../images/EmployerLogos/GoApe.png';
import Greystar from '../../images/EmployerLogos/Greystar.png';
import Haven from '../../images/EmployerLogos/Haven.png';
import healthcareathome from '../../images/EmployerLogos/healthcareathome.png';
import Hilton from '../../images/EmployerLogos/Hilton.png';
import Holiday_Inn from '../../images/EmployerLogos/Holiday Inn.png';
import IncentiveFM from '../../images/EmployerLogos/IncentiveFM.png';
import JohnsonControls from '../../images/EmployerLogos/JohnsonControls.png';
import DHL from '../../images/EmployerLogos/DHL.png';
import Entain from '../../images/EmployerLogos/Entain.png';
import HomeForStudents from '../../images/EmployerLogos/HomeForStudents.png';
import Kaplan from '../../images/EmployerLogos/Kaplan.png';
import KFC from '../../images/EmployerLogos/KFC.png';
import Kingfisher from '../../images/EmployerLogos/Kingfisher.png';
import leonardoHotels from '../../images/EmployerLogos/leonardoHotels.png';
import Liberty_Living from '../../images/EmployerLogos/Liberty Living.png';
import LIDL from '../../images/EmployerLogos/LIDL.png';
import Mazak from '../../images/EmployerLogos/Mazak.png';
import mencap from '../../images/EmployerLogos/mencap.png';
import Mercure_Hotels from '../../images/EmployerLogos/Mercure Hotels.png';
import Mitie from '../../images/EmployerLogos/Mitie.png';
import MoneySM from '../../images/EmployerLogos/MoneySM.png';
import NewhamCollegeLondon from '../../images/EmployerLogos/Newham College London.png';
import NHS from '../../images/EmployerLogos/NHS.png';
import NSC from '../../images/EmployerLogos/NSC.png';
import NuffieldHealth from '../../images/EmployerLogos/NuffieldHealth.png';
import OxfordUni from '../../images/EmployerLogos/OxfordUni.png';
import ParkdeanResorts from '../../images/EmployerLogos/ParkdeanResorts.png';
import PellcompSoftware from '../../images/EmployerLogos/Pellcomp Software.png';
import primafruit from '../../images/EmployerLogos/primafruit.png';
import Princes from '../../images/EmployerLogos/Princes.png';
import RadissonHotels from '../../images/EmployerLogos/RadissonHotels.png';
import RoyalMail from '../../images/EmployerLogos/RoyalMail.png';
import RSPCA from '../../images/EmployerLogos/RSPCA.png';
import Sainsburys from '../../images/EmployerLogos/Sainsburys.png';
import serco from '../../images/EmployerLogos/serco.png';
import Shell from '../../images/EmployerLogos/Shell.png';
import Stepbystep from '../../images/EmployerLogos/Stepbystep.png';
import Sugraman from '../../images/EmployerLogos/Sugraman.png';
import TheOMNIgroup from '../../images/EmployerLogos/TheOMNIgroup.png';
import TheRoyalBritishLegion from '../../images/EmployerLogos/TheRoyalBritishLegion.png';
import UK_Parliament from '../../images/EmployerLogos/UK Parliament.png';
import Velux from '../../images/EmployerLogos/Velux.png';
import Worcester_CC from '../../images/EmployerLogos/Worcester CC.png';
import WrenK from '../../images/EmployerLogos/WrenK.png';
import Yaxham_Waters from '../../images/EmployerLogos/Yaxham Waters.png';
import Yugo from '../../images/EmployerLogos/Yugo.png';
import Antolin from '../../images/EmployerLogos/Antolin.png';
import Bouygues from '../../images/EmployerLogos/Bouygues.png';
import Cineworld from '../../images/EmployerLogos/Cineworld.png';
import FridayMediaGroup from '../../images/EmployerLogos/FridayMediaGroup.png';
import ISS from '../../images/EmployerLogos/ISS.png';
import Marks_n_Spen from '../../images/EmployerLogos/Marks&Spen.png';
import Nandos from '../../images/EmployerLogos/Nandos.png';
import OCS from '../../images/EmployerLogos/OCS.png';
import Platformhousing from '../../images/EmployerLogos/Platformhousing.png';
import Sanctuary from '../../images/EmployerLogos/Sanctuary.png';
import TopGolf from '../../images/EmployerLogos/TopGolf.png';

const logos = [
  { src: Aldi, alt: 'ALDI' },
  { src: Primark, alt: 'Primark' },
  { src: GXO, alt: 'GXO' },
  { src: aatom, alt: 'aatom recruitment' },
  { src: AdvancedMedicalSolutions, alt: 'AdvancedMedicalSolutions' },
  { src: Allhallows, alt: 'Allhallows' },
  { src: Argos, alt: 'Argos' },
  { src: ASCAirSeaContainers, alt: 'ASCAirSeaContainers' },
  { src: BnQ, alt: 'B&Q' },
  { src: BidvestNoonan, alt: 'BidvestNoonan' },
  { src: BourneLeisureLimited, alt: 'BourneLeisureLimited' },
  { src: Brakes, alt: 'Brakes' },
  { src: BritishTransportPolice, alt: 'BritishTransportPolice' },
  { src: Butlins, alt: 'Butlins' },
  { src: Cordant_recruitment, alt: 'Cordant recruitment' },
  { src: CostaCoffee, alt: 'Costa Coffee' },
  { src: DavidLloyd, alt: 'DavidLloyd' },
  { src: EACT, alt: 'EACT' },
  { src: Elysium, alt: 'Elysium' },
  { src: FE_Fincancial_Express, alt: 'FE Fincancial Express' },
  { src: FirstUtility, alt: 'FirstUtility' },
  { src: GlenDimplexHV, alt: 'GlenDimplexHV' },
  { src: GoApe, alt: 'GoApe' },
  { src: Greystar, alt: 'Greystar' },
  { src: Haven, alt: 'Haven' },
  { src: healthcareathome, alt: 'healthcareathome' },
  { src: Hilton, alt: 'Hilton' },
  { src: Holiday_Inn, alt: 'Holiday_Inn' },
  { src: IncentiveFM, alt: 'IncentiveFM' },
  { src: JohnsonControls, alt: 'JohnsonControls' },
  { src: Kingfisher, alt: 'Kingfisher' },
  { src: Entain, alt: 'Entain' },
  { src: HomeForStudents, alt: 'HomeForStudents' },
  { src: Kaplan, alt: 'Kaplan' },
  { src: KFC, alt: 'KFC' },
  { src: DHL, alt: 'DHL' },
  { src: leonardoHotels, alt: 'leonardoHotels' },
  { src: Liberty_Living, alt: 'Liberty_Living' },
  { src: LIDL, alt: 'LIDL' },
  { src: Mazak, alt: 'Mazak' },
  { src: mencap, alt: 'mencap' },
  { src: Mercure_Hotels, alt: 'Mercure_Hotels' },
  { src: Mitie, alt: 'Mitie' },
  { src: MoneySM, alt: 'MoneySM' },
  { src: NewhamCollegeLondon, alt: 'NewhamCollegeLondon' },
  { src: NHS, alt: 'NHS' },
  { src: NSC, alt: 'NSC' },
  { src: NuffieldHealth, alt: 'NuffieldHealth' },
  { src: OxfordUni, alt: 'OxfordUni' },
  { src: ParkdeanResorts, alt: 'ParkdeanResorts' },
  { src: PellcompSoftware, alt: 'PellcompSoftware' },
  { src: primafruit, alt: 'primafruit' },
  { src: Princes, alt: 'Princes' },
  { src: RadissonHotels, alt: 'RadissonHotels' },
  { src: RoyalMail, alt: 'RoyalMail' },
  { src: RSPCA, alt: 'RSPCA' },
  { src: Sainsburys, alt: 'Sainsburys' },
  { src: serco, alt: 'serco' },
  { src: Shell, alt: 'Shell' },
  { src: Stepbystep, alt: 'Stepbystep' },
  { src: Sugraman, alt: 'Sugraman' },
  { src: TheOMNIgroup, alt: 'TheOMNIgroup' },
  { src: TheRoyalBritishLegion, alt: 'TheRoyalBritishLegion' },
  { src: UK_Parliament, alt: 'UK Parliament' },
  { src: Velux, alt: 'Velux' },
  { src: Worcester_CC, alt: 'Worcester City Council' },
  { src: WrenK, alt: 'WrenK' },
  { src: Yaxham_Waters, alt: 'Yaxham Waters' },
  { src: Yugo, alt: 'Yugo' },
  { src: Antolin, alt: 'Antolin' },
  { src: Bouygues, alt: 'Bouygues' },
  { src: Cineworld, alt: 'Cineworld' },
  { src: FridayMediaGroup, alt: 'FridayMediaGroup' },
  { src: ISS, alt: 'ISS' },
  { src: Marks_n_Spen, alt: 'Marks and Spencers' },
  { src: Nandos, alt: 'Nandos' },
  { src: OCS, alt: 'OCS' },
  { src: Platformhousing, alt: 'Platformhousing' },
  { src: Sanctuary, alt: 'Sanctuary' },
  { src: TopGolf, alt: 'TopGolf' },


  // Add all 84 logos here
];

function EmployersSection() {

  // Split logos into two rows
  const halfwayPoint = Math.ceil(logos.length / 2);
  const firstRowLogos = logos.slice(0, halfwayPoint);
  const secondRowLogos = logos.slice(halfwayPoint);

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        py: 8, // Padding for the section
        overflow: 'hidden', // Hide overflow for scrolling effect
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#001A54'}}>
          We are proud to work with
        </Typography>
      </Container>

      {/* First Row of Logos */}
      <Box
        sx={{
          display: 'flex',
          animation: 'scroll 30s linear infinite', // Add scrolling animation
         
          mb: 4,
        }}
      >
        {firstRowLogos.map((logo, index) => (
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

      {/* Second Row of Logos */}
      <Box
        sx={{
          display: 'flex',
          animation: 'scroll 30s linear infinite', // Add scrolling animation
          animationDirection: 'reverse', // Scroll in the opposite direction
          
        }}
      >
        {secondRowLogos.map((logo, index) => (
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
              transform: translateX(0); /* Start with logos visible */
            }
            100% {
              transform: translateX(-100%); /* Scroll the logos off the screen */
            }
          }
        `}
      </style>
    </Box>
  );
}

export default EmployersSection;

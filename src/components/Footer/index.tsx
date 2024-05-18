import Image from "next/image"
import { Container, Box, Heading, Flex, Text, Button, Input, Divider } from "theme-ui";

const Footer = () => {
  return (
    <Container sx={{
      width: '100%',
      height: '464px'
    }}>
      <Divider />
      <Flex sx={{
        flexDirection: ['column',null,null,'row'], 
        display: ['grid', null, null, 'flex'],
        justifyContent: ['left', null, null, 'space-evenly'],
        marginTop: '50px',
        marginBottom: '70px',
        gap: ['40px', null, null, 'null']
      }}>
        <Box sx={{
          
        }}>
          <Image src="/assets/Logo.svg" alt="img" width={200} height={100} />
        </Box>
        <Box sx={{
          display: 'grid',
          textAlign: 'left',
          color: '#252627',
          height: '100px',
          fontSize: '13px',
          gap: '10px'
        }}>
          <h2><b>CONTACT</b></h2>
          <h4>info@sabiwork.com</h4>
          <h4>+234 900 566 712 300</h4>
        </Box>
        <Box sx={{
          display: 'grid',
          textAlign: 'left',
          color: '#252627',
          height: '100px',
          fontSize: '13px',
          gap: '10px'
        }}>
          <h2><b>SUPPORT</b></h2>
          <h4>Help</h4>
          <h4>Terms of Use</h4>
          <h4>Privacy Policy</h4>
        </Box>
        <Box>
          <Image src="/assets/social icons.svg" alt="img" width={140} height={20} />
        </Box>
      </Flex>
      <Divider />
      <Box sx={{
        marginTop: '20px',
        fontSize: '13px',
        textAlign: 'center',
        color: '#252627',
        
      }}
      >&copy; 2024 Sabiwork. All rights reserved</Box>
    </Container>
    
  );
}

export default Footer;
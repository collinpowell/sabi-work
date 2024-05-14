import Image from "next/image"
import { Container, Box, Heading, Flex, Text, Button, Input, Label } from "theme-ui";

const Footer = () => {
  return (
    <Container sx={{
      width: '100%',
      height: '464px'
    }}>
      <Flex sx={{
        flexDirection: ['column',null,null,'row'],
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '250px',
      }}>
        <Box>
          <Image src="/assets/Logo.svg" alt="img" width={327} height={100} />
        </Box>
        <Box sx={{
          display: 'grid',
          textAlign: 'left',
          color: '#252627',
          height: '134px',
          fontSize: '20px',
          gap: '25px'
        }}>
          <Heading>CONTACT</Heading>
          <Text>hello@sabiwork.com</Text>
          <Text>+234 900 566 712 300</Text>
        </Box>
        <Box sx={{
          display: 'grid',
          textAlign: 'left',
          color: '#252627',
          height: '134px',
          fontSize: '20px',
          gap: '25px',
        }}>
          <Heading>SUPPORT</Heading>
          <Text>Help</Text>
          <Text>Terms of Use</Text>
          <Text>Privacy Policy</Text>
        </Box>
        <Box>
          <Image src="/assets/social icons.svg" alt="img" width={224} height={32} />
        </Box>
      </Flex>
      <Box sx={{
        marginTop: '200px',
        fontSize: '20px',
        textAlign: 'center',
        color: '#252627',
        
      }}
      >2024 Sabiwork. All rights reserved</Box>
    </Container>
    
  );
}

export default Footer;
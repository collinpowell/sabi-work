import Image from "next/image"
import { Box, Container, Heading, Flex, Text, Button, Input } from "theme-ui";
import style from './style.module.css'
import JoinWaitlist from "../JoinWaitlist";

const About = () => {
  return (
    <Container>

      <Flex sx={{
        flexDirection: ['column', null, null, 'row'],
        width: '100%',
        mx: 'auto'
      }}>
        <Box sx={{
          width: ['100%', null, null, '55%'],
          textAlign: ['center', null, null, 'left'],

          p: {
            my: '20px'
          }


        }}>
          <Heading sx={{
            marginTop: '85px',
            pt: '60px',
            marginBottom: '20px',
            maxWidth: ['100%', null, null, '500px'],
            textAlign: ['left', null, null, 'left']
          }} >Hire pros from your home</Heading>
          <Text as='p' sx={{
            maxWidth: '517px',
            textAlign: ['left', null, null, 'left']
          }}>Access top-tier professionals remotely, revolutionizing the way you hire and collaborate, all from the comfort of your home.</Text>
          <Box sx={{
            width: 'fit-content',
            mr: 'auto'
          }}>
            <JoinWaitlist blue={true} />
          </Box>
        </Box>
        <Box sx={{
          width: ['100%', null, null, '55%'],
          display: 'flex',
          justifyContent: 'end',
          img:{
            ':nth-of-type(1)': {
              display: ['none', null, null, 'block']
            },
            ':nth-of-type(2)': {
              display: ['block', null, null, 'none']
            }
          }
        
        }}>
          <Image className={style.hero} src={'/assets/Hero2.png'} alt="img" width={600} height={700} />
          <Image className={style.hero} src={'/assets/mobile-yello.png'} alt="img" width={600} height={700} />
        </Box>
      </Flex>
    </Container>

  );
}

export default About;
import Image from "next/image"
import { Box, Heading, Container, Flex, Text } from "theme-ui";
import style from './style.module.css'
import JoinWaitlist from "../JoinWaitlist";
const Hero = () => {
  return (
    <Box sx={{
      background: '#1741CC',
    }}>

      <Container>
        <Flex sx={{
          flexDirection: ['column', null, null, 'row'],
          width: '100%',
        }}>
          <Box sx={{
            width: ['100%', null, null, '55%'],
            textAlign: ['center', null, null, 'left'],
            p: {
              my: '30px'
            },
            '.faces': {
              my: '15px',
              mx: ['auto', null, null, 'initial'],
              justifyContent: ['center', null, null, 'left']
            }

          }}>
            <Heading sx={{
              marginTop: '85px',
              color: 'white',
              pt: '40px',
              marginBottom: '30px'
            }}>Find & hire the best skilled professionals
            </Heading>
            <Text as='p' sx={{
              maxWidth: '580px',
              color: 'white',
              mx: ['auto', null, null, 'initial'],
              opacity: '0.8'
            }}>Changing the hiring landscape by seamlessly connecting skilled professionals with prospective clients, enhancing opportunities for both parties to collaborate and succeed.
            </Text>
            <Image className="faces" src={'/assets/Faces.svg'} alt="img" width={120} height={50} />
            <JoinWaitlist />
          </Box>

          <Image className={style.hero} src={'/assets/Hero.png'} alt="img" width={500} height={900} />
        </Flex>
      </Container>

    </Box>


  );
}

export default Hero;
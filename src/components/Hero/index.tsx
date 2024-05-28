import Image from "next/image"
import { Box, Heading, Container, Flex, Text,Button } from "theme-ui";
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
              marginTop: ['45px',null,null,'85px'],
              color: 'white',
              pt: '40px',
              marginBottom: '30px'
            }}>Find & hire the best skilled professionals
            </Heading>
            <Text as='p' sx={{
              maxWidth: '580px',
              color: 'white',
              mx: ['auto', null, null, 'initial'],
            }}>Changing the hiring landscape by seamlessly connecting skilled professionals with prospective clients, enhancing opportunities for both parties to collaborate and succeed.
            </Text>
            <Image className="faces" src={'/assets/Faces.svg'} alt="img" width={120} height={50} />
            <Flex sx={{
              justifyContent:['center',null,null,'left'],
              gap:'5px',
              a:{
                display:['block',null,null,'none']
              }
            }}>
            <JoinWaitlist />

            <a href="https://chat.whatsapp.com/IUnx7f1AwJWGqkQj1F5wex" target="_blank" rel="noopener noreferrer">
                <Button sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#EDF0FD',
                  display: 'flex',
                  borderRadius: '30px',
                  border: '1px solid #EDF0FD',
                  
                }}>
                  Join our community
                </Button>
              </a>
            </Flex>
          </Box>

          <Image className={style.hero} src={'/assets/Hero.png'} alt="img" width={500} height={900} />
        </Flex>
      </Container>

    </Box>


  );
}

export default Hero;
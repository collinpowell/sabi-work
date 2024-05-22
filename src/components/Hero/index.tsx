import Image from "next/image"
import { Box, Heading, Container, Flex, Text, Button, Input } from "theme-ui";
import style from './style.module.css'

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
            width: ['100%',null,null,'55%'],
            textAlign: ['center',null,null,'left'],
            p: {
              my: '30px'
            },
            '.faces': {
              my: '15px', 
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
              maxWidth: '517px',
              color:'white'
            }}>Changing the hiring landscape by seamlessly connecting skilled professionals with prospective clients, enhancing opportunities for both parties to collaborate and succeed.
            </Text>
            <Image className="faces" src={'/assets/Faces.png'} alt="img" width={120} height={50} />
            <Flex sx={{
              display: 'flex',
              gap: '13px',

            }}>
              <Box sx={{
                gap: '13px',
                my: '15px',
                width: 'fit-content',
                display: 'flex',
                fontSize: '12px',
                position: 'relative',
                input: {
                  width: '270px',
                  color: '#5E80ED',
                  background: '#D1DBFA',
                  pl: '35px',
                  py: '15px',
                  borderRadius: '5px',
                  '::placeholder': {
                    color: '#5E80ED',
                    fontWeight: '600'
                  },
                  display: ['none', null, null, 'flex']
                },
                img: {
                  position: 'absolute',
                  my: 'auto',
                  top: 0,
                  bottom: 0,
                  ml: '5px',
                  opacity: '1'
                }
              }}>
                <Input id="phone number" name="phone number" placeholder="Enter your phone number" />
                <Image src="/assets/phone.svg" alt="img" width={22} height={22} />
              </Box>
              <Button sx={{
                gap: '10px',
                display: ['flex'],
                my: 'auto',
                borderRadius: '7px',
                background: 'white',
                color: '#1741CC',
                height: 'fit-content',
                py: '15px',
                fontSize: '12px',
                fontWeight: '600',
                
              }}>
                Join the waiting list
              </Button>
            </Flex>

          </Box>
          <Box sx={{
            mt: '-30px'
          }}>
            <Image className={style.hero} src={'/assets/Hero.png'} alt="img" width={500} height={900} />
          </Box>
        </Flex>
      </Container>

    </Box>


  );
}

export default Hero;
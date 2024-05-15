import Image from "next/image"
import { Box, Container,Heading, Flex, Text, Button, Input } from "theme-ui";
import style from './style.module.css'

const Download = () => {
  return (
    <Container sx={{
      background: 'url(/assets/download-bg.svg) no-repeat',
      backgroundSize:'cover',
      borderRadius: '50px'
    }}>
      <Flex sx={{
        flexDirection: ['column', null, null, 'row'],
        width: '100%',
        display: 'grid',
        justifyContent: 'center',

        my: '50px'
      }}>
        <Box sx={{
          width: '100%',
          p: {
            my: '30px',
            maxWidth: '370px',

          },
          textAlign: 'center'

        }}>
          <Heading sx={{
            marginTop: '80px',
            color: 'white'
          }} className={style.title}>Download the App
          </Heading>
          <Text as='p' sx={{
            marginBottom: '100px',
            color: 'white',
            display: 'inline-block',
          }}>The best place where you can find and hire skilled professionals within your proximity.
          </Text>

          <Flex sx={{
              display: 'flex',
              gap: '13px',
              justifyContent: 'center'

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
                  }
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
                <Image src="/assets/phone.svg" alt="img" width={22.67} height={22.67} />
              </Box>
              <Button sx={{
                gap: '10px',
                display: 'flex',
                my: 'auto',
                borderRadius: '7px',
                background: 'white',
                color: '#1741CC',
                height: 'fit-content',
                py: '15px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                Join the waiting list
              </Button>
            </Flex>
          <Image src={'/assets/phone pic.png'} alt="img" width={905} height={799} />
        </Box>
      </Flex>
    </Container>

  );
}

export default Download;
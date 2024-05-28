import Image from "next/image"
import { Box, Container, Heading, Flex, Text, Button, Input } from "theme-ui";
import style from './style.module.css'
import JoinWaitlist from "../JoinWaitlist";

const Download = () => {
  return (
    <Container sx={{
      background: 'url(/assets/download-bg.svg) no-repeat',
      backgroundSize: 'cover',
      borderRadius: '50px',
      img:{
        ':nth-of-type(1)': {
          display: ['none', null, null, 'block']
        },
        ':nth-of-type(2)': {
          display: ['block', null, null, 'none']
        }
      }
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

          },
          textAlign: 'center'

        }}>
          <Heading sx={{
            marginTop: '80px',
            color: 'white',
            maxWidth:['310px',null,null,'initial'],
            px:['10px',null,null,'initial'],
            mx:'auto'
          }} className={style.title}>Download the App
          </Heading>
          <Text as='p' sx={{
            marginBottom: '100px',
            maxWidth:['310px',null,null,'initial'],
            mx:'auto',
            px:['10px',null,null,'initial'],
            color: 'white',
            display: 'inline-block',
          }}>The best place where you can find and hire skilled professionals within your proximity.
          </Text>
          <Box sx={{
            width: 'fit-content',
            mx: 'auto'
          }}>
            <JoinWaitlist />

          </Box>
          <Image src={'/assets/phone pic.png'} alt="img" width={905} height={799} />
          <Image src={'/assets/mobile-phone.png'} alt="img" width={905} height={799} />
        </Box>
      </Flex>
    </Container>

  );
}

export default Download;
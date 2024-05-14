import Image from "next/image"
import { Box, Heading, Flex, Text, Button } from "theme-ui";
import style from './style.module.css'

const Download = () => {
  return (
    <Box sx={{
      background: '#490A99',
      mx: '100px',
      borderRadius: '50px'
    }}>
      <Flex sx={{
        flexDirection: ['column', null, null, 'row'],
        width:'100%',
        display: 'grid',
        justifyContent: 'center',
        
        my: '50px'
      }}>
        <Box sx={{
          width: '100%',
          p:{
            my:'60px',
            width: '580px',
            
          },
          textAlign: 'center'

        }}>
          <Heading sx={{
            fontSize: '80px',
            lineHeight: '88px',
            marginTop: '80px',
            fontWeight: '800'
          }} className={style.title}>Download the App
          </Heading>
          <Text as='p' sx={{
            marginBottom: '100px',
            color: 'white',
            fontSize: '28px',
            fontWeight: '400px',
            lineHeight: '39.2px',
            display: 'inline-block'
            
          }}>The best place where you can find and hire skilled professionals within your proximity.
          </Text>
          
          <Flex sx={{
            gap:'25px',
            my: '30px',
            button:{
              height:'fit-content',
              p:'20px 25px',
            },
            justifyContent: 'center'
          }}>
            <Button sx={{
              gap: '10px',
              display: 'flex',
              borderRadius: '7px',
              width: '406px',
              background: '#D1DBFA',
              color: '#5E80ED'
            }}>
              <Image src="/assets/phone.svg" alt="img" width={22.67} height={22.67} />
              Enter your phone number</Button>
            <Button sx={{
              gap: '10px',
              display: 'flex',
              borderRadius: '7px',
              background: 'white',
              color: '#1741CC'
            }}>
              Join the waiting list
            </Button>
          </Flex>
          <Image src={'/assets/phone pic.png'} alt="img" width={905} height={799}/>
        </Box>
      </Flex>
    </Box>

  );
}

export default Download;
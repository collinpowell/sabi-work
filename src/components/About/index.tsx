import Image from "next/image"
import { Box, Heading, Flex, Text, Button, Input } from "theme-ui";
import style from './style.module.css'

const About = () => {
  return (
    <Box sx={{
      background: 'white'
    }}>
      <Flex sx={{
        flexDirection: ['column', null, null, 'row'],
        width:'100%',
        mx: '100px',
        gap: '100px'
        
      }}>
        <Box sx={{
          width: '50%',
          p:{
            my:'50px'
          }

        }}>
          <Heading sx={{
            fontSize: '80px',
            lineHeight: '88px',
            marginTop: '169px',
            fontWeight: '800'
          }} className={style.title}>Hire pros from your home</Heading>
          <Text as='p' sx={{
            marginBottom: '100px',
            color: '#252627',
            fontSize: '28px',
            fontWeight: '400px',
            lineHeight: '39.2px',
            
          }}>Access top-tier professionals remotely, revolutionizing the way you hire and collaborate, all from the comfort of your home.</Text>
          
          <Box sx={{
            gap:'25px',
            my: '30px',
            display: 'flex',
            Input: {
              display: 'flex',
              width: '406px',
              color: '#5E80ED',
              background: '#D1DBFA',
              px: '50px',
              borderRadius: '10px',
              border: 'none',
              
            }
          }}>
            <Input className={style.Input} name="phone number" placeholder="Enter your phone number"/>
              <Image src="/assets/phone.svg" alt="img" width={22.67} height={22.67} />
              <Button sx={{
              gap: '10px',
              display: 'flex',
              borderRadius: '7px',
              background: '#1741CC',
              color: 'white',
              height:'fit-content',
              p:'20px 25px'
            }}>
              Join the waiting list
            </Button>
          </Box>
        </Box>
        <Box sx={{
          width: '1200px'
        }}>
          <Image className={style.hero} src={'/assets/Hero2.png'} alt="img" width={732} height={942} />
        </Box>
      </Flex>
    </Box>

  );
}

export default About;
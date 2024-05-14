import Image from "next/image"
import { Box, Heading, Flex, Text, Button, Input } from "theme-ui";
import style from './style.module.css'

const Hero = () => {
  return (
    <Box sx={{
      background: 'blue',
    }}>
      <Flex sx={{
        flexDirection: ['column', null, null, 'row'],
        width:'100%',
        mx: '100px'
      }}>
        <Box sx={{
          width: '50%',
          p:{
            my:'60px'
          }

        }}>
          <Heading sx={{
            fontSize: '80px',
            lineHeight: '88px',
            marginTop: '169px',
            fontWeight: 'bold',
            color: 'white'
          }}>Find & Hire the best skilled professionals
          </Heading>
          <Text as='p' sx={{
            marginBottom: '100px',
            color: 'white',
            fontSize: '28px',
            fontWeight: '400px',
            lineHeight: '39.2px',
            
          }}>Revolutionizing the hiring landscape by seamlessly connecting skilled professionals with prospective clients, enhancing opportunities for both parties to collaborate and succeed.
          </Text>
          <Image src={'/assets/Faces.png'} alt="img" width={176} height={40}/>
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
              borderRadius: '10px'
            }
          }}>
            <Input id="phone number" name="phone number" placeholder="Enter your phone number"/>
              <Image src="/assets/phone.svg" alt="img" width={22.67} height={22.67} />
              <Button sx={{
              gap: '10px',
              display: 'flex',
              borderRadius: '7px',
              background: 'white',
              color: '#1741CC',
              height:'fit-content',
              p:'20px 25px'
            }}>
              Join the waiting list
            </Button>
          </Box>
        </Box>
        <Box>
          <Image className={style.hero} src={'/assets/hero.png'} alt="img" width={732} height={942} />
        </Box>
      </Flex>
    </Box>

  );
}

export default Hero;
import Image from "next/image"
import { Box,Container, Heading, Flex, Text, Button, Input } from "theme-ui";
import style from './style.module.css'

const About = () => {
  return (
    <Container>

      <Flex sx={{
        flexDirection: ['column', null, null, 'row'],
        width:'100%',
        mx:'auto'
      }}>
        <Box sx={{
          width: ['100%',null,null,'55%'],
          textAlign: ['center',null,null,'left'],
          
          p:{
            my: '20px'
          }
          

        }}>
          <Heading sx={{
           marginTop: '85px',
           pt: '60px',
           marginBottom: '20px',
           maxWidth: ['100%', null, null, '400px'],
           textAlign: ['left', null, null, 'left']
          }} >Hire pros from your home</Heading>
          <Text as='p' sx={{
            maxWidth: '517px',
            textAlign: ['left', null, null, 'left']
          }}>Access top-tier professionals remotely, revolutionizing the way you hire and collaborate, all from the comfort of your home.</Text>
          
          <Flex sx={{
            display: 'flex',
            gap: '13px',
            
          }}>
            <Box sx={{
              gap: '13px',
              my: '15px',
              width:'fit-content',
              display: 'flex',
              fontSize: '12px',
              position: 'relative',
              input: {
                width: '270px',
                color: '#5E80ED',
                background: '#D1DBFA',
                pl:'35px',
                py: '15px',
                borderRadius: '5px',
                '::placeholder':{
                  color:'#5E80ED',
                  fontWeight: '600'
                },
                display: ['none', null, null, 'flex']
              },
              img:{
                position:'absolute',
                my:'auto',
                top:0,
                bottom:0,
                ml:'5px',
                opacity: '1'
              }
            }}>
              <Input id="phone number" name="phone number" placeholder="Enter your phone number" />
              <Image src="/assets/phone.svg" alt="img" width={22.67} height={22.67} />
            </Box>
            <Button sx={{
              gap: '10px',
              display: ['block', null, null, 'flex'],
              my:'auto',
              borderRadius: '7px',
              background: '#1741CC',
              color: 'white',
              height: 'fit-content',
              py: '15px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Join the waiting list
            </Button>
          </Flex>
        </Box>
        <Box sx={{
          width: ['100%', null, null, '55%'],
          display:'flex',
          justifyContent:'end'
        }}>
          <Image className={style.hero} src={'/assets/Hero2.png'} alt="img" width={600} height={700} />
        </Box>
      </Flex>
    </Container>

  );
}

export default About;
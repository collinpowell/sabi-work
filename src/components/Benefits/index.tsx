import Image from "next/image"
import { Box, Container,Heading, Flex, Text, Button } from "theme-ui";
import style from './style.module.css'

const Benefits = () => {
  return (
    <Container sx={{
      background: 'white',
      width: '100%',
      color: '#252627'
    }}>

        <Box sx={{
          width: '100%',
          p:{
            my:'60px',
          },

        }}>
          <Heading sx={{
            marginTop: '169px',
          }} className={style.title}>Safe & Transparent</Heading>
          <Text as='p' sx={{
            marginBottom: '100px',
            color: '#252627',
            width: ['100%', null, null, '50%'],
            textAlign: ['left', null, null, 'left']
            
          }}><b>Empowering trust and confidence</b>, our unwavering dedication to safety and transparency ensures peace of mind with every hire you make, fostering strong and secure professional relationships.
          </Text>
          <Box sx={{
            display: 'flex',
            gap: '30px',
            width: '100%',
            flexDirection: ['column', null, null, 'row'],
            img:{
              ':nth-of-type(1)':{
                width: ['100%', null, null, '60%'],
              },
              ':nth-of-type(2)':{
                width: ['100%', null, null, '40%'],
              },
              objectFit:'cover',
              borderRadius:'50px',
            },
            
          }}>
            <Image src={'/assets/Man.png'} alt="img" width={972} height={857}/>
            <Image src={'/assets/Escrow.png'} alt="img" width={676} height={857} />
          </Box>
        </Box>
    </Container>

  );
}

export default Benefits;
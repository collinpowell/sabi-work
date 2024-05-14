import Image from "next/image"
import { Box, Heading, Flex, Text, Button } from "theme-ui";
import style from './style.module.css'

const Benefits = () => {
  return (
    <Box sx={{
      background: 'white',
      width: '100%',
      color: '#252627'
    }}>
      <Flex sx={{
        flexDirection: ['column', null, null, 'row'],
        width:'100%',
        marginLeft: '100px'
      }}>
        <Box sx={{
          width: '100%',
          p:{
            my:'60px',
          },

        }}>
          <Heading sx={{
            fontSize: '80px',
            lineHeight: '88px',
            marginTop: '169px',
            fontWeight: '800'
          }} className={style.title}>Safe & Transparent</Heading>
          <Text as='p' sx={{
            marginBottom: '100px',
            color: '#252627',
            fontSize: '28px',
            width: '50%',
            
          }}>Empowering trust and confidence, our unwavering dedication to safety and transparency ensures peace of mind with every hire you make, fostering strong and secure professional relationships.
          </Text>
          <Box sx={{
            display: 'flex',
            gap: '30px',
            width: '100%'
          }}>
            <Image src={'/assets/Man.png'} alt="img" width={972} height={857}/>
            <Image src={'/assets/Escrow.png'} alt="img" width={676} height={857} />
          </Box>
        </Box>
      </Flex>
    </Box>

  );
}

export default Benefits;
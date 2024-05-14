import Image from "next/image"
import { Box, Heading, Flex } from "theme-ui";
import style from './style.module.css'

const Items = () => {
  return (
    <Box sx={{
      background: 'white'
    }}>
      <Flex sx={{
        flexDirection: ['column', null, null, 'row'],
        width:'100%',
        gap: '50px',
        display: 'grid',
      }}>
        <Box sx={{
          width: '100%',
          marginLeft: '120px',
          h2:{
            my:'80px',
          }

        }}>
          <Heading sx={{
            fontSize: '80px',
            lineHeight: '88px',
            marginTop: '169px',
            fontWeight: '800'
          }} className={style.title}>Buy quality & affordable second-hand household items
          </Heading>
          <Box sx={{
            padding: '0px',
            margin: '0px',
            display: 'flex',
            size: '700px',
            gap: '20px'
          }}>
            <Image src="/assets/Washing machine.png" alt="img" width={600} height={200} />
            <Image src="/assets/AC.png" alt="img" width={600} height={200} />
            <Image src="/assets/TV.png" alt="img" width={600} height={200} />
            
          </Box>
        </Box>
      </Flex> 
    </Box>
  );
}

export default Items;
import Image from "next/image"
import { Box, Heading, Flex, Text, Button } from "theme-ui";


const Header = () => {
  return (
    <Box sx={{
      background: 'white',
      width: '100%',
      height: '120px',
      display: 'flex'
    }}>
      <Flex sx={{
        flexDirection: ['column',null,null,'row'],
        justifyContent:'space-between',
        width: '100%',
        px: '80px'
      }}>
          <Image src={'/assets/Logo.svg'} alt="img" width={173} height={64}/>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
            button:{
              width: 'fit-content',
              height: 'fit-content',
              padding: '20px 32px',

              
            }
            
          }}>
    
          <Button sx={{
            background: 'blue',
            color: 'white',
            display: 'flex',
            gap: '10px',
            borderRadius: '30px'

          }}>
            Join the waiting list
            <Image src="/assets/App google.svg" alt="img" width={60} height={24} />
            </Button>
         
          

        </Box>

      </Flex>
    </Box>
    
  );
}

export default Header;
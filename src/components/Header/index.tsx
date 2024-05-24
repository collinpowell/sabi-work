import Image from "next/image"
import { Box, Flex, Text, Container } from "theme-ui";
import ButtonM from "../ButtonM";

const Header = () => {
  return (
    <Box sx={{
      background: ['rgba(255, 255, 255, 0.6)', null, null, 'white'],
      backdropFilter: ['blur(10px)'],
      width: '100%',
      height: '80px',
      display: ['flex', null, null, 'flex'],
      position: ['fixed', null, null, 'sticky'],
      top: ['initial', null, null, 0],
      bottom: [0, null, null, 'initial'],
      zIndex: 200,
    }}>
      <Container sx={{ my: 'auto' }}>
        <Flex sx={{
          flexDirection: ['row', null, null, 'row'],
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <Image src={'/assets/Logo.svg'} alt="img" width={87} height={32} />
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '15px',
            button: {
              width: 'fit-content',
              height: 'fit-content',
              padding: '10px 16px',
            }
          }}>
            <ButtonM sx={{
              background: '#1741CC',
              color: 'white',
              display: 'flex',
              gap: '10px',
              borderRadius: '30px',

              border: '1px solid black',
              p: {
                my: 'auto',
                color: 'white',
                fontSize: '12px',
                fontWeight: '600',
              },
              img: {
                my: 'auto'
              }
            }}
              modal={true}>
              <Text as='p'>Join the waiting list</Text>

              <Image src="/assets/App google.svg" alt="img" width={30} height={12} />
            </ButtonM>
          </Box>

        </Flex>
      </Container >

    </Box>

  );
}

export default Header;
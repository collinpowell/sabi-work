import Image from "next/image"
import { Box, Flex, Text, Container, Button } from "theme-ui";
import ButtonM from "../ButtonM";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{
      position: ['fixed', null, null, 'sticky'],
      top: ['initial', null, null, 0],
      bottom: [0, null, null, 'initial'],
        zIndex: 200,
        width: '100%',
    }}>
      <Box sx={{
        background: isOpen ? ['white'] : ['rgba(255, 255, 255, 0.6)', null, null, 'white'],
        backdropFilter: ['blur(10px)'],
        boxShadow: ['initial', null, null, '0px 4px 4px rgba(0, 0, 0, 0.08)'],
        width: '100%',
        height: ['85px', null, null, '90px'],
        display: ['flex', null, null, 'flex'],
      }}>
        <Container sx={{ my: 'auto' }}>
          <Flex sx={{
            flexDirection: ['row', null, null, 'row'],
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Image src={'/assets/Logo.svg'} alt="img" width={150} height={65} />
            <Box sx={{
              display: ['none', null, null, 'flex'],
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '15px',
              button: {
                width: 'fit-content',
                height: 'fit-content',
                padding: '15px 20px',
              }
            }}>
              <a href="https://chat.whatsapp.com/IUnx7f1AwJWGqkQj1F5wex" target="_blank" rel="noopener noreferrer">
                <Button sx={{
                  background: '#EDF0FD',
                  color: '#1741CC',
                  display: 'flex',
                  borderRadius: '30px',
                  border: '1px solid #1741CC',
                  
                }}>
                  Join our community
                </Button>
              </a>
              <ButtonM sx={{
                background: '#1741CC',
                color: 'white',
                display: 'flex',
                borderRadius: '30px',
                border: '1px solid black',
                p: {
                  my: 'auto',
                  color: 'white',
                  
                },
                img: {
                  my: 'auto',
                  ml: '5px',
                  display: ['none', null, null, 'block']
                }
              }}
                modal={true}>
                <Text as='p'>Join the waiting list</Text>

                <Image src="/assets/App google.svg" alt="img" width={40} height={15} />
              </ButtonM>
            </Box>

            <Box sx={{
              display: ['flex', null, null, 'none'],
              justifyContent: 'space-between',
              alignItems: 'center',
              button: {
                width: 'fit-content',
                height: 'fit-content',
                padding: '15px 20px',
              }
            }}>
              <Button onClick={toggleMenu} sx={{
                background: '#1741CC',
                color: 'white',
                display: 'flex',
                borderRadius: '30px',
                border: '1px solid black',
                padding: '4px 13px !important',
                position: 'relative',
                svg: {
                  my: 'auto',
                },
              }}
              >
                <Box
                  sx={{
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    opacity: isOpen ? 0 : 1,
                    position: isOpen ? 'absolute' : 'static',
                  }}
                >
                  {/* Hamburger Icon SVG */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 11H32M8 20H32M8 29H32" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Box>
                <Box
                  sx={{
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    opacity: isOpen ? 1 : 0,
                    position: isOpen ? 'static' : 'absolute',
                  }}
                >
                  {/* Cancel Icon SVG */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 14L14 26M26 26L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>


                </Box>


              </Button>
            </Box>


          </Flex>

        </Container >

      </Box>
      {isOpen && <Box sx={{
        background: isOpen ? ['white'] : ['rgba(255, 255, 255, 0.6)', null, null, 'white'],
        backdropFilter: ['blur(10px)'],
        boxShadow: ['0px -4px 4px 2px rgba(0, 0, 0, 0.04)'],
        width: '100%',
        height: ['85px', null, null, '90px'],
        display: ['flex', null, null, 'none'],
        zIndex: 200,
      }}>
        <Container sx={{ my: 'auto' }}>
          <Flex sx={{
            flexDirection: ['row', null, null, 'row'],
            justifyContent: 'space-between',
            width: '100%',
          }}>
     
              <a href="https://chat.whatsapp.com/IUnx7f1AwJWGqkQj1F5wex" target="_blank" rel="noopener noreferrer">
                <Button sx={{
                  background: '#EDF0FD',
                  color: '#1741CC',
                  display: 'flex',
                  borderRadius: '30px',
                  border: '1px solid #1741CC',
                  
                }}>
                  Join our community
                </Button>
              </a>
              <ButtonM sx={{
                background: '#1741CC',
                color: 'white',
                display: 'flex',
                borderRadius: '30px',
                border: '1px solid black',
              }}
                modal={true}>
                Join the waiting list
              </ButtonM>
          </Flex>

        </Container >

      </Box>}
    </Box>


  );
}

export default Header;
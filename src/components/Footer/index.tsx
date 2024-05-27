import Image from "next/image"
import { Container, Box, Flex, Divider } from "theme-ui";

const footerContacts = ["info@sabiwork.com", "+234 900 566 712 300"];


export const footerSocials = [
  {
    title: "Facebook",
    href: "https://web.facebook.com/sabiworkapp",
    image: "/facebook.svg",
  },
  {
    title: "Twitter",
    href: "https://x.com/sabiworkapp",
    image: "/twitter.svg",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/sabiworkapp/",
    image: "/instagram.svg",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/company/sabiwork-ng/",
    image: "/linkedIn.svg",
  },
];

/**
 * 
 * @returns 
 * 

box-sizing: border-box;

position: absolute;
width: 1920px;
height: 464px;
left: 0px;
bottom: 0px;

background: #FFFFFF;
border-top: 1px solid #E5E5E5;

 */

const Footer = () => {
  return (
    <>
      <Divider sx={{
        border:'none',
        height:'1px',
        background:'#E5E5E5'
      }}/>
      <Container sx={{
        width: '100%',
      }}>
        <Flex sx={{
          flexDirection: ['column', null, null, 'row'],
          display: ['grid', null, null, 'flex'],
          justifyContent: ['left', null, null, 'space-evenly'],
          marginTop: '50px',
          marginBottom: '70px',
          h2:{fontSize:'18px'},
          gap: ['40px', null, null, 'null']
        }}>
          <Box sx={{

          }}>
            <Image src="/assets/Logo.svg" alt="img" width={200} height={100} />
          </Box>
          <Box sx={{
            display: 'grid',
            textAlign: 'left',
            color: '#252627',
            height: '100px',
            fontSize: '13px',
            gap: '10px'
          }}>
            <h2><b>CONTACT</b></h2>
            <div className="flex flex-col gap-y-2">
                {footerContacts.map((contact, i) => (
                  <a
                    key={i}
                    href={
                      i === 0
                        ? `mailto:${contact}`
                        : `tel:${contact.split(" ").join("")}`
                    }
                    className="text-brand-foreground text-[13px] mb-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact}
                  </a>
                ))}
              </div>
          </Box>
          <Box sx={{
            display: 'grid',
            textAlign: 'left',
            color: '#252627',
            height: '100px',
            fontSize: '13px',
            gap: '10px'
          }}>
            <h2><b>SUPPORT</b></h2>
            <a href="#">Help</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </Box>
          {/* socials */}
          <div className="flex items-center justify-items-end gap-x-4 md:ml-20 mb-auto">
            {footerSocials.map(({ title, href, image }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-brand-foreground hover:text-brand"
              >
                <Image
                  src={image}
                  alt={title}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </Flex>
        <Divider sx={{
           border:'none',
           height:'1px',
           background:'#E5E5E5'
        }}/>
        <Box sx={{
          marginTop: '20px',
          fontSize: '13px',
          textAlign: 'center',
          color: '#252627',

        }}
        >&copy; 2024 Sabiwork. All rights reserved</Box>
      </Container>
    </>


  );
}

export default Footer;
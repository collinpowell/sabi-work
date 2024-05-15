import Image from "next/image"
import { Box, Heading, Container } from "theme-ui";

const Items = () => {
  return (
    <Box>
      <Container>
        <Heading sx={{
          marginTop: '169px',
        }}>Buy quality & affordable second-hand household items
        </Heading>
      </Container>

      <Box sx={{
        width: '100%',
        h2: {
          my: '80px',
        }

      }}>

        <Box sx={{
          padding: '0px',
          margin: '0px',
          display: 'flex',
          width: '100%',
          overflow: 'hidden',
          gap: '20px',
          img: {
            height: '700px',
          }
        }}>
          <Image src="/assets/Washing machine.png" alt="img" width={600} height={200} />
          <Image src="/assets/AC.png" alt="img" width={600} height={200} />
          <Image src="/assets/TV.png" alt="img" width={600} height={200} />

        </Box>
      </Box>
    </Box>
  );
}

export default Items;
import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: 'TTF, sans-serif',
    heading: 'TTFBoldExtra, sans-serif',
    monospace: 'TTF, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
  text: {
    heading: {
      fontSize: ['45px', null, null, '50px'],
      lineHeight: '55px',
      letterSpacing: '-0.5px',
      fontWeight: '800',
      color: '#252627',
    }
  },
  styles: {
    root: {

      p: {
        fontSize: ['15px', null, null, '18px'],
        color: '#252627',
      }
    }
  },
  layout: {
    container: {
      maxWidth: ['90%', null,null, '1150px', '1150px']
    }
  }
}
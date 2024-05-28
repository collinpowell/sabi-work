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
    primary: 'rgba(23, 65, 204, 1)',
  },
  text: {
    heading: {
      fontSize: ['40px', null, null, '58px'],
      lineHeight: ['50px', null, null, '70px'],
      letterSpacing: '.4px',
      fontWeight: '800',
      color: '#252627',
    }
  },
  buttons: {
    primary: {
      py: ['11px !important', null, null, '15px !important'],
      fontSize: ['13px', null, null, '14px'],
      fontWeight: '600', p: {
        fontSize: ['13px', null, null, '14px'],
        fontWeight: '600'
      }
    }
  },
  styles: {
    root: {
      p: {
        fontSize: ['15px', null, null, '20px'],
        color: '#252627',
        letterSpacing: '0.5px',
        lineHeight: '140%',
        fontWeight: '400'
      }
    }
  },
  layout: {
    container: {
      maxWidth: ['90%', null, null, '1200px', '1200px']
    }
  }
}
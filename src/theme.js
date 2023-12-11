export const theme = {
  colors: {
    blue: '#3867d6',
    text: '#4f4f4f',
    offWhite: '#FBFBFB',
    lightGrey: '#c3c3c3',
    darkGrey: '#747474',
    borderGrey: '#c7c7c7',
  },
  selectInput: {
    border: '1px solid',
    borderColor: 'borderGrey',
    backgroundColor: 'offWhite',
    fontSize: '12px',
    outline: 'none',
    transition: '0.2s',
    ':hover, :focus': {
      border: '1px solid',
      borderColor: 'text',
    },
  },
  links: {
    footer: {
      cursor: 'pointer',
      color: 'darkGrey',
      textDecoration: 'none',
      transition: '0.2s',
      ':hover': {
        textDecoration: 'underline',
        color: 'text',
      },
    },
  },
}

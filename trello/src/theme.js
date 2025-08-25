import { teal, lightBlue } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '88px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[300],
          secondary: teal[600]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: lightBlue[300],
          secondary: lightBlue[600]
        }
      }
    }
  }
})

export default theme

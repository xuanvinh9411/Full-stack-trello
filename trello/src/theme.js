import { deepOrange, teal, lightBlue, purple } from '@mui/material/colors'
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
          main: teal[500],
          secondary: deepOrange[500]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: lightBlue[300],
          secondary: purple[300]
        }
      }
    }
  }
})

export default theme

import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { purple, cyan } from '@material-ui/core/colors'

const theme: Theme = createMuiTheme({
  palette: {
    primary: { main: purple[800], contrastText: '#ffffff' },
    secondary: { main: cyan.A400 }
  },
  overrides: {
    MuiButton: {
      text: {
        color: '#ffffff'
      }
    }
  }
})

export default theme

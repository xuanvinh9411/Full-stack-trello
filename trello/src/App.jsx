import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import { Box, Container } from '@mui/material'
function App() {

  function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    const handleChange = (event) => {
      setMode(event.target.value)
    }

    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ alignItems: 'left' }}>
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value={'light'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} >
              <DarkModeIcon fontSize='small' />
              dark
            </div>
          </MenuItem>
          <MenuItem value={'light'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LightModeIcon />
              light
            </Box>
          </MenuItem>
          <MenuItem value={'system'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SettingsSuggestIcon />
              system
            </Box>
          </MenuItem>
        </Select>
      </FormControl >
    )
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        padding: '5px'
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.secondary',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }} >
        Board Bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
      }} >
        Board Content
      </Box>
    </Container>
  )
}

export default App

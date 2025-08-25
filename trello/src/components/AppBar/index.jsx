import { Box } from '@mui/material'
import { ModeSelect } from '../ModeSelect'

function AppBar() {
  return (
    <div>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        padding: '5px'
      }}>
        <ModeSelect />
      </Box>
    </div>
  )
}

export default AppBar
import type { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: grey[100]
      }}
    >
      <Typography>
        {'Hello World'}
      </Typography>
    </Box>
  )
}

export default Home

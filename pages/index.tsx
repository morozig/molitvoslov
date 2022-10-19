import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import App from '../src/app'

const Home: NextPage = () => {
  return (
    <App>
      <Box>
        <Typography>
          Православный молитвослов для новоначальных с
          параллельным переводом
        </Typography>
      </Box>
    </App>
  )
}

export default Home

import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import App from '../src/app'

const Home: NextPage = () => {
  return (
    <App>
      <Box>
        <p>
          <Typography>
            Online православный молитвослов для новоначальных с
            параллельным переводом
          </Typography>
        </p>
        <p>
          <Typography>
            Переводы на современный русский язык
            располагаются справа от текста на
            церковнославянском языке
          </Typography>
        </p>
      </Box>
    </App>
  )
}

export default Home

import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import App from '../src/app'

const Home: NextPage = () => {
  return (
    <App>
      <Box>
        <Typography
          sx={{
            m: 2,
          }}
        >
          Online православный молитвослов для новоначальных с
          параллельным переводом
        </Typography>
        <Typography
          sx={{
            m: 2,
          }}
        >
          Переводы на современный русский язык
          располагаются справа от текста на
          церковнославянском языке
        </Typography>
      </Box>
    </App>
  )
}

export default Home

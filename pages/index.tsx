import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
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
      <Box
        sx={{
          display: { md: 'none' },
        }}
      >
        <Typography
          variant='h5'
          component='div'
          textAlign='center'
        >
          Содержание:
        </Typography>
        <List>
          <ListItem
            key='/utrennie'
          >
            <ListItemButton
              LinkComponent={Link}
              href='/molitvoslov/utrennie'
            >
              <ListItemText>
                Молитвы утренние
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            key='/vechernie'
          >
            <ListItemButton
              LinkComponent={Link}
              href='/molitvoslov/vechernie'
            >
              <ListItemText>
                Молитвы вечерние
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            key='/kanoniisusu'
          >
            <ListItemButton
              LinkComponent={Link}
              href='/molitvoslov/kanoniisusu'
            >
              <ListItemText>
                Канон Иисусу Христу
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            key='/kanonbogoroditse'
          >
            <ListItemButton
              LinkComponent={Link}
              href='/molitvoslov/kanonbogoroditse'
            >
              <ListItemText>
                Канон Богородице
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            key='/kanonangeluhranitelyu'
          >
            <ListItemButton
              LinkComponent={Link}
              href='/molitvoslov/kanonangeluhranitelyu'
            >
              <ListItemText>
                Канон Ангелу Хранителю
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </App>
  )
}

export default Home

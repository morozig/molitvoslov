import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <>
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
              href='/utrennie'
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
              href='/vechernie'
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
              href='/kanoniisusu'
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
              href='/kanonbogoroditse'
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
              href='/kanonangeluhranitelyu'
            >
              <ListItemText>
                Канон Ангелу Хранителю
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            key='/kosvyatomuprichascheniyu'
          >
            <ListItemButton
              LinkComponent={Link}
              href='/kosvyatomuprichascheniyu'
            >
              <ListItemText>
                Ко Святому Причащению
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            key='/posvyatomprichaschenii'
          >
            <ListItemButton
              LinkComponent={Link}
              href='/posvyatomprichaschenii'
            >
              <ListItemText>
                По Святом Причащении
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}

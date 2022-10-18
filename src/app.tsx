import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { useIsSmallScreen } from './hooks';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import Link from 'next/link';

const drawerWidth = 260;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface AppProps {
  title?: string;
  children?: React.ReactNode;
}

const App: React.FC<AppProps> = (props) => {
  const {
    title = 'Молитвослов',
    children,
  } = props;
  const [
    isMobileDrawerOpen,
    setMobileDrawerOpen
  ] = useState(false);
  const handleDrawerToggle = useCallback(
    () => setMobileDrawerOpen(current => !current),
    []
  );
  const isSmallScreen = useIsSmallScreen();

  const drawerContent = (
    <List>
      <ListItem
        key='утренние'
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
        key='вечерние'
      >
        <ListItemButton
          LinkComponent={Link}
          href='/vechernie'
        >
          <ListItemText>
            Молитвы на сон грядущим
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <Box
      sx={{ display: 'flex' }}
    >
      <AppBar
        position='fixed'
        sx={{
          width: {
            xs: '100%',
            md: `calc(100% - ${drawerWidth}px)`
          },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component={'nav'}
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 }
        }}
        aria-label='contents'
      >
        {isSmallScreen ?
          <Drawer
            variant='temporary'
            open={isMobileDrawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth
              },
            }}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerToggle}>
                <ChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            {drawerContent}
          </Drawer> :
          <Drawer
            variant='permanent'
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth
              },
            }}
          >
            {drawerContent}
          </Drawer>
        }
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            xs: '100%',
            md: `calc(100% - ${drawerWidth}px)`
          },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default App;

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
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
import Reader from './components/Reader';

const drawerWidth = 260;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const App: React.FC = () => {
  const [
    isMobileDrawerOpen,
    setMobileDrawerOpen
  ] = useState(false);
  const handleDrawerToggle = useCallback(
    () => setMobileDrawerOpen(current => !current),
    []
  );
  const isSmallScreen = useIsSmallScreen();

  return (
    <Box
      sx={{ display: 'flex' }}
    >
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component={'nav'}
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 }
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
              display: { xs: 'block', sm: 'none' },
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
          </Drawer> :
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth
              },
            }}
          >
          </Drawer>
        }
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Reader />
      </Box>
    </Box>
  );
};

export default App;

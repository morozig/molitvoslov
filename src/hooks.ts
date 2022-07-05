import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system'


const useIsSmallScreen = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return isSmallScreen;
};

export {
  useIsSmallScreen,
}

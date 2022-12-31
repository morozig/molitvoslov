import {
  Box,
} from '@mui/material'

interface ReaderProps {
  children?: React.ReactNode;
}

const Reader: React.FC<ReaderProps> = (props) => {
  const {
    children,
  } = props;
  
  return (
    <Box
      // className={styles.Reader}
      sx={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        overflowX: 'auto',

        'section h2': {
          margin: '0 0 16px 0',
          fontSize: '1.75rem',
          lineHeight: 1.2,
          letterSpacing: '-0.00833em',
        },
        'section h3': {
          margin: '0 0 8px 0',
          padding: '0 20px',
          fontSize: '1.1rem',
          lineHeight: 1.167,
          letterSpacing: '0em',
          fontWeight: 500,
        },
        'section i': {
          fontWeight: 300,
        },

        'section header': {
          textAlign: 'center',
        },
        
        'section header p': {
          margin: '-4px 0 8px 0',
          fontSize: '0.875rem',
          lineHeight: 1.57,
          letterSpacing: '0.00714em',
        },
        
        'section > p': {
          textAlign: 'justify',
          hyphens: 'auto',
        },

        'section footer': {
          margin: '-4px 0 8px 0',
          fontSize: '0.875rem',
          lineHeight: 1.43,
          letterSpacing: '0.01071em',
          textAlign: 'left',

          borderWidth: 0,
          borderStyle: 'solid',
          borderTopWidth: 'thin',
          borderImage: '100% 0 0 linear-gradient(90deg, currentColor 5em, transparent 0)',
        },
      }}
    >
      <Box
        lang='cu'
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '100% 100%',
            md: '1fr 1fr'
          },
          gap: '12px 24px',
          textAlign: 'justify',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Reader;

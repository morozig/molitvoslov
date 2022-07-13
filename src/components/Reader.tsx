import {
  Box,
} from '@mui/material'
import Utrennie from '../prayers/utro/cs/Utrennie';
import UtrennieAlt from '../prayers/utro/ru/Utrennie';
import Miitarya from '../prayers/utro/cs/Miitarya';
import MiitaryaAlt from '../prayers/utro/ru/Miitarya';
import Prednachinatelnaya from '../prayers/utro/cs/Prednachinatelnaya';
import PrednachinatelnayaAlt from '../prayers/utro/ru/Prednachinatelnaya';
import SvyatomuDuhu from '../prayers/utro/cs/SvyatomuDuhu';
import SvyatomuDuhuAlt from '../prayers/utro/ru/SvyatomuDuhu';
import Trisvyatoe from '../prayers/utro/cs/Trisvyatoe';
import TrisvyatoeAlt from '../prayers/utro/ru/Trisvyatoe';
import KoPresvyatoyTroitse from '../prayers/utro/cs/KoPresvyatoyTroitse';
import KoPresvyatoyTroitseAlt from '../prayers/utro/ru/KoPresvyatoyTroitse';
import Gospodnya from '../prayers/utro/cs/Gospodnya';
import GospodnyaAlt from '../prayers/utro/ru/Gospodnya';
import TropariTroichnie from '../prayers/utro/cs/TropariTroichnie';
import TropariTroichnieAlt from '../prayers/utro/ru/TropariTroichnie';
import OtSna from '../prayers/utro/cs/OtSna';
import OtSnaAlt from '../prayers/utro/ru/OtSna';
import Psalom50 from '../prayers/utro/cs/Psalom50';
import Psalom50Alt from '../prayers/utro/ru/Psalom50';
import SimvolVerii from '../prayers/utro/cs/SimvolVerii';
import SimvolVeriiAlt from '../prayers/utro/ru/SimvolVerii';
import M1 from '../prayers/utro/cs/M1';
import M1Alt from '../prayers/utro/ru/M1';
import M2 from '../prayers/utro/cs/M2';
import M2Alt from '../prayers/utro/ru/M2';

const Reader: React.FC = () => {
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
        <Utrennie/>
        <UtrennieAlt/>
        <Miitarya/>
        <MiitaryaAlt/>
        <Prednachinatelnaya/>
        <PrednachinatelnayaAlt/>
        <SvyatomuDuhu/>
        <SvyatomuDuhuAlt/>
        <Trisvyatoe/>
        <TrisvyatoeAlt/>
        <KoPresvyatoyTroitse/>
        <KoPresvyatoyTroitseAlt/>
        <Gospodnya/>
        <GospodnyaAlt/>
        <TropariTroichnie/>
        <TropariTroichnieAlt/>
        <OtSna/>
        <OtSnaAlt/>
        <Psalom50/>
        <Psalom50Alt/>
        <SimvolVerii/>
        <SimvolVeriiAlt/>
        <M1/>
        <M1Alt/>
        <M2/>
        <M2Alt/>
      </Box>
    </Box>
  );
};

export default Reader;
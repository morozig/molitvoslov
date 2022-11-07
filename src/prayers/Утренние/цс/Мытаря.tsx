import {
  Box,
} from '@mui/material';

const Мытаря: React.FC = () => {
  return (
    <section>
      <header>
        <h3>
          Молитва мытаря
        </h3>
        <p>
          <i>
            (Евангелие от Луки, глава 18, стих 13)
          </i>
        </p>
      </header>

      <p>
        Бóже, ми́лостив бу́ди мне грéшному. <i>(Поклон.)</i>
      </p>

      <footer>
        <p>
          Примечание. Напечатанное{' '}
          <Box
            component={'span'}
            sx={{
              fontWeight: 500,
            }}
          >
            полужирным прямым
          </Box>{' '}
          шрифтом и <i>курсивом</i>{' '}
          (названия молитв и пояснения){' '}
          не читается во время молитвы.
        </p>
      </footer>
    </section>
  );
};

export default Мытаря;

import type { NextPage } from 'next'
import App from '../src/app'
import Reader from '../src/components/Reader'
import КанонАнгелуХранителю from '../src/prayers/КанонАнгелуХранителю';

const Vechernie: NextPage = () => {
  return (
    <App
      title='Канон Ангелу Хранителю'
    >
      <Reader>
        <КанонАнгелуХранителю/>
      </Reader>
    </App>
  )
}

export default Vechernie;

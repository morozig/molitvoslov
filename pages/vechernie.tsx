import type { NextPage } from 'next'
import App from '../src/app'
import Reader from '../src/components/Reader'
import Вечерние from '../src/prayers/Вечерние';

const Vechernie: NextPage = () => {
  return (
    <App
      title='Молитвы вечерние'
    >
      <Reader>
        <Вечерние/>
      </Reader>
    </App>
  )
}

export default Vechernie;

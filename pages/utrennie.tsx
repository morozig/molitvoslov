import type { NextPage } from 'next'
import App from '../src/app'
import Reader from '../src/components/Reader'
import Утренние from '../src/prayers/Утренние';

const Utrennie: NextPage = () => {
  return (
    <App
      title='Молитвы утренние'
    >
      <Reader>
        <Утренние/>
      </Reader>
    </App>
  )
}

export default Utrennie;

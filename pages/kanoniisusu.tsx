import type { NextPage } from 'next'
import App from '../src/app'
import Reader from '../src/components/Reader'
import КанонИисусуХристу from '../src/prayers/КанонИисусуХристу';

const Vechernie: NextPage = () => {
  return (
    <App
      title='Канон Иисусу Христу'
    >
      <Reader>
        <КанонИисусуХристу/>
      </Reader>
    </App>
  )
}

export default Vechernie;

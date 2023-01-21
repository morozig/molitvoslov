import type { NextPage } from 'next'
import App from '../src/app'
import Reader from '../src/components/Reader'
import КоСвятомуПричащению from '../src/prayers/КоСвятомуПричащению';

const Vechernie: NextPage = () => {
  return (
    <App
      title='Ко Святому Причащению'
    >
      <Reader>
        <КоСвятомуПричащению/>
      </Reader>
    </App>
  )
}

export default Vechernie;

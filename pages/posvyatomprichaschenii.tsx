import type { NextPage } from 'next'
import App from '../src/app'
import Reader from '../src/components/Reader'
import ПоСвятомПричащении from '../src/prayers/ПоСвятомПричащении';

const Vechernie: NextPage = () => {
  return (
    <App
      title='По Святом Причащении'
    >
      <Reader>
        <ПоСвятомПричащении/>
      </Reader>
    </App>
  )
}

export default Vechernie;

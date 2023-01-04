import type { NextPage } from 'next'
import App from '../src/app'
import Reader from '../src/components/Reader'
import КанонБогородице from '../src/prayers/КанонБогородице';

const Vechernie: NextPage = () => {
  return (
    <App
      title='Канон Богородице'
    >
      <Reader>
        <КанонБогородице/>
      </Reader>
    </App>
  )
}

export default Vechernie;

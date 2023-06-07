// Write your JS code here
import './index.css'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div className="home">
    <Header />
    <div className="home">
      <h1> Home Route </h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home

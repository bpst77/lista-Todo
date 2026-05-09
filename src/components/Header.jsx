import '/src/App.css'
import logo from './assets/logo.png'

const Header = () => (
    <section>
      <div>
        <img src={logo} alt="logo" />
        <h1>Lista to-do</h1>
      </div>
    </section>
)

export default Header;
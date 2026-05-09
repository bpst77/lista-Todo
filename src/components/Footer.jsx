import '/src/App.css'
import fim from './assets/footer-fim.png'
import importe from './assets/importe.png'
import feedback from './assets/feedback.png'
import logo from './assets/footer-logo.png'

const Footer = () => (
    <section>
        <div>
            <div><img src={importe} alt="importar" />
            <h4>importar/Exportar</h4></div>

            <div><img src={feedback} alt="feedback" />
            <h4>Feedback</h4></div>
        </div>
        <div>
            <img src={logo} alt="logo-nome" />
            <p>O passo a passo é simples.</p>
        </div>
        <div>
            <p><b>Dupla:</b></p>
            <p>Bruno</p>
            <p>Gean</p>
        </div>
        <img src={fim} alt="fim-pagina" />
    </section>
)

export default Footer;
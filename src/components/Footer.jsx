import imgImporte from './assets/importe.png'
import imgFeedback from './assets/feedback.png'
import imgLogo from './assets/footer-logo.png'
import "../App.css"

const Footer = () => (
  <section className="max-w-2xl mx-auto corrigirM px-4 mt-12 border-t border-gray-200 pt-8 grid gap-6 text-center md:text-left justify-center pb-28">
    {/* Ações */}
    <div className="flex flex-col justify-center gap-3">
      <div className="flex gap-2 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-all cursor-pointer w-50">
        <img src={imgImporte} alt="importar" className="w-5 h-5" />
        <span className="text-sm text-gray-700 font-bold">Importar/Exportar</span>
      </div>
      
      <div className="flex gap-2 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-all cursor-pointer w-50">
        <img src={imgFeedback} alt="feedback" className="w-5 h-5" />
        <span className="text-sm text-gray-700 font-bold">Feedback</span>
      </div>
    </div>

    {/* Branding */}
    <div className="flex flex-col items-center text-center corrigirM">
      <img src={imgLogo} alt="logo-nome" className="h-15 mb-1" />
      <p className="text-xs text-gray-400"><b>O passo a passo é simples</b></p>
    </div>

    <footer className="fixed bottom-0 left-0 right-0 bg-white/80 border-t border-gray-100 py-4 text-center text-xs text-gray-400 backdrop-blur-md z-50">
      <p>© 2026 - Desenvolvido por <strong>Bruno & Gean</strong> | CRUD Completo</p>
    </footer>
  </section>
)

export default Footer;
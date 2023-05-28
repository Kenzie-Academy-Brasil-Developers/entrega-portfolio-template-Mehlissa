import imageWhats from '../../assets/whatsapp-icon.png'
import imageLinkedin from '../../assets/linkedin-icon.png'
import imageGithub from '../../assets/github-icon.png'
import { user } from '../../data/user.js'

import '../Footer/style.css'

export const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer__divPrimary'>
                <h1>Contato</h1>
                <div className='footer__images'>
                    <img className='fotter__images--img' src={imageWhats} alt="" />
                    <img className='fotter__images--img' src={imageLinkedin} alt="" />
                    <img className='fotter__images--img' src={imageGithub} alt="" />
                </div>
            </div>

            <div className='footer__divSegundary'>
                <p className='footer__text'>Todos os direitos reservados -</p>
                <p>{user}</p>
            </div>
        </footer>
    )
}
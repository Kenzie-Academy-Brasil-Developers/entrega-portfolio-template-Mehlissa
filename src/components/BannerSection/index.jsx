import '../BannerSection/style.css'
import { username } from '../../data/user'

export const Section = () => {
    return(
        <section className="section__Primary">
            <p className='section__Primary--Username'>{username}</p>
            
            <h1 className='section__Primary--Title'>
                Bem vindo ao meu portfólio
            </h1>

            <p className='section__Primary--Text'>Uma frase interessante sobre mim</p>

            <div>
                <button className='section__Primary--button'>Saiba mais</button>
            </div>
        </section>
    )
}
 
import { CardsProjectList } from '../CardsProjectList s'
import { projects } from '../../data/projects'

import '../ProjectsSection/style.css'

export const ProjectSection = () => {
    return(
        <section>
            <h1 className='section__Title'>Projetos</h1>

            <ul className='section__list'>
                <CardsProjectList 
                    name={projects[0].name} 
                    descriptions={projects[0].description}
                />

                <CardsProjectList 
                    name={projects[1].name} 
                    descriptions={projects[1].description}
                />

                <CardsProjectList 
                    name={projects[2].name} 
                    descriptions={projects[2].description}
                />

                <CardsProjectList 
                    name={projects[3].name} 
                    descriptions={projects[3].description}
                />
            </ul>
        </section>
    )
}

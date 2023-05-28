import { CardsTechList } from "../CardsTechList"
import { technologies } from "../../data/technologies"
import '../TechSection/style.css'

export const TechSection = () => {
    return(
        <section className="section__TechList">
            <h1>Tecnologias</h1>
            <ul className="section__TechList--Cards">
                <CardsTechList 
                    name={technologies[0].name} 
                    image={technologies[0].img}
                />

                <CardsTechList 
                    name={technologies[1].name} 
                    image={technologies[1].img}
                />

                <CardsTechList 
                    name={technologies[2].name} 
                    image={technologies[2].img}
                />

                <CardsTechList 
                    name={technologies[3].name} 
                    image={technologies[3].img}
                />
            </ul>
        </section>
    )
}
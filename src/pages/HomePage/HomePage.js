import { Component } from "react";
import './HomePage.scss';
import ProjectCard from "../../components/ProjectCard/ProjectCard";

class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='home-page__about'>
                    <h1 className='home-page__about-title'>ENGINEER + DESIGNER</h1>
                    <p className='home-page__about-paragraph'>
                        I'm baby craft beer lo-fi single-origin coffee, lomo vexillologist vinyl vaporware hella organic tousled selfies godard raclette. Pour-over echo park pinterest, farm-to-table JOMO poutine mumblecore. Fanny pack bodega boys letterpress butcher art party bespoke drinking vinegar post-ironic readymade bicycle rights vice green juice mustache man bun wolf. Knausgaard fit offal leggings ascot jianbing humblebrag microdosing.
                    </p>
                </div>
                <div className='home-page__projects'>
                    <h2 className='home-page__projects-title'>Projects</h2>
                    <div className='home-page__projects-cards'>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
                <div className='home-page__contact'>
                    <h2 className='home-page__contact-title'>Contact</h2>

                </div>
                <footer className='home-page__footer'>

                </footer>
            </div>
        )
    }
}

export default HomePage
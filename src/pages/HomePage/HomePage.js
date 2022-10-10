import { Component } from "react";
import './HomePage.scss';
import ProjectCard from "../../components/ProjectCard/ProjectCard";

class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='home-page__about'>
                    <h1 className='home-page__about-title'>WEB DEVELOPER</h1>
                    <div className="home-page__about-split">
                        <p className='home-page__about-paragraph'>
                            I'm baby craft beer lo-fi single-origin coffee, lomo vexillologist vinyl vaporware hella organic tousled selfies godard raclette. Pour-over echo park pinterest, farm-to-table JOMO poutine mumblecore. Fanny pack bodega boys letterpress butcher art party.
                        </p>
                        <p className="home-page__about-paragraph">
                        Fanny pack bodega boys letterpress butcher art party bespoke drinking vinegar post-ironic readymade bicycle rights vice green juice mustache man bun wolf. Praxis iceland heirloom tilde fam. Adaptogen flexitarian mlkshk, twee same mukbang try-hard.
                        </p>
                    </div>
                </div>
                <div className='home-page__projects'>
                    <h2 className='home-page__projects-title'>Projects</h2>
                    <div className='home-page__projects-cards'>
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
import { Component } from "react";
import './HomePage.scss';
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ContactLink from "../../components/ContactLinks/ContactLink";

class HomePage extends Component {
    render() {
        const devSkills = ['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'DOM', 'REACT.JS', 'JSX', 'NODE.JS', 'EXPRESS.JS', 'REST APIS', 'AXIOS', 'GIT', 'GITHUB', 'MYSQL', 'JIRA', 'AGILE METHODOLOGIES', 'FIGMA', 'ILLUSTRATOR', 'PHOTOSHOP', 'INDESIGN'];

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
                    <div className="home-page__about-dev-skills">
                        {
                            devSkills.map(skill => 
                                <h3 className='home-page__about-dev-skill'>{skill}</h3>
                            )
                        }
                    </div>
                </div>
                <div className='home-page__projects'>
                    <h2 className='home-page__projects-title'>PROJECTS</h2>
                    <div className='home-page__projects-cards'>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
                <div className='home-page__contact'>
                    <h2 className='home-page__contact-title'>CONTACT</h2>
                    <div className="home-page__contact__links">
                        <ContactLink />
                        <ContactLink />
                        <ContactLink />
                        <ContactLink />
                    </div>

                </div>
                <footer className='home-page__footer'>
                    {/* create current year funciton for footer */}
                    <p className="home-page__footer-text">©AUDUN YOUNG 2022</p>
                </footer>
            </div>
        )
    }
}

export default HomePage
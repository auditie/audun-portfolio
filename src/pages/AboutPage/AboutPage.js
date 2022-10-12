import './AboutPage.scss';
import { Component } from "react";

class AboutPage extends Component {
    render() {
        const aboutTags =['GAMER', 'DOG-MOM', 'YOUTUBE-ADDICT', 'ASMR ENTHUSIAST', 'PHOTOGRAPHER', 'RUNNER', 'DISCORD ADMIN', 'ENJOYER OF RAMEN', 'HOTD FAN', 'INTROVERT', 'OCCASIONAL EXTROVERT', 'DESIGNER', 'ENGINEER', 'IKEA BUILDER']

        return (
            <div className='about-page'>
                <div className='about-page__overview'>
                    <h1 className='about-page__title'>AUDUN LOLA YOUNG</h1>
                    <p className='about-page__paragraph'>Praxis iceland heirloom tilde fam. Adaptogen flexitarian mlkshk, twee same mukbang try-hard leggings gatekeep poutine activated charcoal flannel. Taxidermy cray direct trade literally, distillery waistcoat pop-up vexillologist four loko. </p>
                    <p className='about-page__paragraph'>Praxis iceland heirloom tilde fam. Adaptogen flexitarian mlkshk, twee same mukbang try-hard leggings gatekeep poutine activated charcoal flannel. Taxidermy cray direct trade literally, distillery waistcoat pop-up vexillologist four loko.</p>
                    <div className='about-page__picture'/>
                </div>
                <div className='about-page__tags'>
                {
                    aboutTags.map(tag => 
                        <h3 className='about-page__tags-name'>{tag}</h3>
                        )
                 }
                </div>
            </div>
        )
    }
}

export default AboutPage;
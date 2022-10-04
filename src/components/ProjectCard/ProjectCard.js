import './ProjectCard.scss';


const ProjectCard = () => {
    return (
        <div className='project'>
            <div className='project-overview'>
                <h4 className='project__title'>Project Title</h4>
                <div className='project__image'></div>
            </div>
            <div className='project-about'>
                <p className='project__descrip'>I'm baby poke kinfolk la croix offal direct trade cliche, palo santo deep v bicycle rights live-edge af yes plz sustainable cornhole hot chicken. Lomo hot chicken church-key big mood venmo.</p>
                <div className='project__links'>
                    <a href='/'>Github</a>
                    <a href='/'>Website</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
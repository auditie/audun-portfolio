import './ProjectCard.scss';


const ProjectCard = ({ project }) => {
    return (
        <div className='project'>
            <div className='project__about'>
                <h3 className='project__title'>{project.title}</h3>
                <h4 className='project__date'>{project.date}</h4>
            </div>
            <p className='project__description'>{project.description} </p>
            <div className='project__links'>
                <a href={project.github} className='project__links-direct'>GITHUB</a>
                <a href={project.website} className='project__links-direct'>WEBSITE</a>
            </div>
        </div>
    )
}

export default ProjectCard;
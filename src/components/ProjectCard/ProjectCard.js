import './ProjectCard.scss';


const ProjectCard = () => {
    return (
        <div className='project'>
            <h3 className='project__title'>PROJECT NAME</h3>
            <h4 className='project__date'>MO/DAY/YEAR</h4>
            <p className='project__description'>Praxis iceland heirloom tilde fam. Adaptogen flexitarian mlkshk, twee same mukbang try-hard leggings gatekeep poutine activated charcoal flannel. </p>
            <div className='project__links'>
                <a href='/' className='project__links-direct'>GITHUB</a>
                <a href='/' className='project__links-direct'>WEBSITE</a>
            </div>
        </div>
    )
}

export default ProjectCard;
import './ContactLink.scss';

const ContactLink = ({ contact }) => {
    return (
        <div className='contact-link'>
            <a href={contact.link} target="_blank" rel="noreferrer" className='contact-link__direct'>{contact.title}</a>
        </div>
    )
}

export default ContactLink;
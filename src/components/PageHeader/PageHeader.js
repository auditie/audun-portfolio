import './PageHeader.scss';
import { Link } from 'react-router-dom';

const PageHeader = () => {
    return (
        <div className='header'>
            <Link to='/' className='header__logo'>AUDUN LOLA</Link>
            <div className='header__nav'>
                <a href='#projects' className='header__nav-page'>PROJECTS</a>
                <a href='#contact' className='header__nav-page'>CONTACT</a>
                <Link to='/about' className='header__nav-page'>ABOUT</Link>
            </div>
        </div>
    )
}

export default PageHeader;
import './PageHeader.scss';
//import { Link } from 'react-router-dom';

const PageHeader = () => {
    return (
        <div className='header'>
            <h1 className='header__logo'>AUDUN LOLA</h1>
            <div className='header__nav'>
                <h3 className='header__nav-page'>PROJECTS</h3>
                <h3 className='header__nav-page'>CONTACT</h3>
                <h3 className='header__nav-page'>ABOUT</h3>
            </div>
        </div>
    )
}

export default PageHeader;
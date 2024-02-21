import './ErrorPage.css';
import errorPicture from '../../assets/image/errorPicture.jpg';

const ErrorPage = () => {
    return (
        <div className='Error-page'>
            <div className='error-text'>
                Sorry this page not found.
                Try the links below &#11015;
            </div>
            <div>
                <img src={errorPicture} alt="Error 404. Page not found."/>
            </div>
        </div>
    )
}

export default ErrorPage;
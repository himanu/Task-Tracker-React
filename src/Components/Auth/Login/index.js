import { GoogleLogin } from 'react-google-login';
import WelcomeImg from '../../../images/Welcome.jpg';
import BlurWelcomeImg from '../../../images/Welcome_blur.jpg';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import BlurredImg from '../../Blurred-Image';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { signInUser } = useContext(UserContext);

    const handleSuccess = async (authObj) => {
        try {
            const { tokenId } = authObj;
            await signInUser(tokenId);
            const onSuccess = (new URLSearchParams(window.location.search)).get('onSuccess');
            if (onSuccess) {
                navigate(onSuccess);
            }
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div style={{ margin: 'auto', background: '#fff', padding: '1rem', borderRadius: '0.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', border: '1px solid #ccc' }}>
            <BlurredImg origImgSrc={WelcomeImg} blurImgSrc={BlurWelcomeImg} style={{ height: '80px', width: '80px', borderRadius: '50%' }} alt="Website icon" />
            <h3>Welcome to the Todoist</h3>
            <p>Please sign in to continue</p>
            <div style={{ position: 'absolute', top: '50%' }}>
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    onSuccess={handleSuccess}
                    onFailure={(obj) => console.log("Failure ", obj)}
                />
            </div>
            <div style={{ color: "red" }}>
                {error}
            </div>
        </div>
    )
}
export default Login;
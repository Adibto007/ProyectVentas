import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'universal-cookie';


function Google() {
    const cookies = new Cookies()
    cookies.remove('apellido');
    cookies.remove('nombre');
    cookies.remove('email');
    return (
        <div>

            <GoogleLogin
                onSuccess={credentialResponse => {
                    const credentialResponseDescode = jwtDecode(credentialResponse.credential)
                    cookies.set('email', credentialResponseDescode.email, {
                        secure: true,
                        sameSite: 'None',
                        path: '/'
                    })

                    cookies.set('nombre', credentialResponseDescode.name, {
                        secure: true,
                        sameSite: 'None',
                        path: '/'
                    })


                    window.location.hash = '/usuarioRegistrado'



                    console.log(credentialResponseDescode.email);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />

        </div>
    )
}

export default Google
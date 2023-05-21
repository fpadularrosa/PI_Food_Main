import { React } from 'react';
import "../css/footer.css";

const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <div className='container-footer'>
                    <a target="_blank" rel="noreferrer" href='https://padularrosa-franco.vercel.app/'>Portfolio Full Stack</a>
                    <p>
                        Desarrollado con ❤ por Franco Padularrosa
                        <br/>
                        ©2022
                    </p>
                    <div className='contact'>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/padularrosa-franco-fullstack'>LinkedIn </a>
                    <a href='mailto:fpadularrosa22@gmail.com'>fpadularrosa22@gmail.com</a>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/francorrosa'>Facebook</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
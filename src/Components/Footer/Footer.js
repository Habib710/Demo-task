import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className=' p-5 footer-div'>
            <div className='row py-5'>

            <div className='col-lg-3  footer-div-1 text-white'>
                <h1><span className='f-cs'>d</span>EMO</h1>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ducimus animi veritatis tenetur delectus fugiat nihil modi sunt incidunt eaque natus hic, optio odio dolorem quia blanditiis perferendis id nesciunt!</p>
                <FontAwesomeIcon className='fs-1 pe-3' icon={faFacebook} />
                <FontAwesomeIcon className='fs-1 pe-3' icon={faTwitter} />
                <FontAwesomeIcon className='fs-1 pe-3' icon={faInstagram} />



                <h5 className='mt-5' >@2022</h5>
             
              

            </div>

            <div className='col-lg-8 ps-lg-5 ms-5 footer-div-2'>
                <div>
                    <h4 className='text-white py-3'>SERVICE</h4>
                    <p>Consulting</p>
                    <p>Human RESOURCE</p>
                    <p>Accounting</p>
                    <p>Marketing & SEO</p>
                    
                </div>
                <div>
                    <h4 className='text-white py-3'>ABOUT</h4>
                    <p>About us</p>
                    <p>Our service</p>
                    <p>Our Blog</p>
                    <p>Contract Us</p>
                    
                </div>
                <div>
                    <h4 className='text-white py-3'>CONTACT</h4>
                    <p>+646467167497</p>
                    <p>++53464313734</p>
                    <p>mdhabib71024@gmail.com</p>
                   
                </div>

            </div>




            </div>
            
        </div>
    );
};

export default Footer;
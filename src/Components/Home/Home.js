import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* section - 1 ......... */}

            <section className='py-5 mt-5 container' >
                <div className='section-div py-5'>
                    <img className='' src="https://www.zdnet.com/a/img/resize/ebc9be88d6bd0153d92b7c6111f848884f852e12/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?width=1200&height=900&fit=crop&auto=webp" alt="img" />

                    <div className='ps-4'>
                        <h1>Our demo website <br /> and Freatures</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae voluptatibus exercitationem. At, veritatis. Adipisci, dolore ab porro ullam fugiat nostrum consequuntur optio ea inventore, molestias, esse voluptate nemo quo.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae voluptatibus exercitationem. At, veritatis. Adipisci, dolore ab porro ullam fugiat nostrum consequuntur optio ea inventore, molestias, esse voluptate nemo quo.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae voluptatibus exercitationem. At, veritatis. Adipisci, dolore ab porro ullam fugiat nostrum consequuntur optio ea inventore, molestias, esse voluptate nemo quo.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae voluptatibus exercitationem. At, veritatis. Adipisci, dolore ab porro ullam fugiat nostrum consequuntur optio ea inventore, molestias, esse voluptate nemo quo.
                        </p>
                        <Link className='read' to='/read'> <h4 > Read More</h4></Link>
                    </div>
                </div>




            </section>
            <section className='py-5 container' >
                <div className='section-div2 py-5'>
                    

                    <div className='p-2'>
                        <h1>Our Activity with <br /> World </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae voluptatibus exercitationem. At, veritatis. Adipisci, dolore ab porro ullam fugiat nostrum consequuntur optio ea inventore, molestias, esse voluptate nemo quo.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae voluptatibus exercitationem. At, veritatis. Adipisci, dolore ab porro ullam fugiat nostrum consequuntur optio ea inventore, molestias, esse voluptate nemo quo.
                        </p>
                        <Link className='read' to='/read'> <h4 > Read More</h4></Link>
                    </div>
                    <img className='ps-4' src="https://www.indusos.com/wp-content/uploads/2022/03/Developer-world-930x584.png" alt="img" />
                </div>




            </section>

            {/* Our team Section............ */}

            <section className='container py-5 '>
                <h1 className='text-center my-5 pb-5'>Our Team</h1>

                <div className='all-card py-5 my-5'>
                    <div className='card-dev text-center'>
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/1842/2021/11/02140414/VIT-1.jpeg" alt="img" />
                        <h1 className='py-3'>Jhon Doe</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat itaque consequuntur sit asperiores tenetur soluta error a illum doloremque</p>
                    </div>
                    <div className='card-dev text-center'>
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/1842/2021/11/02140414/VIT-1.jpeg" alt="img" />
                        <h1 className='py-3'>Jhon Doe</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat itaque consequuntur sit asperiores tenetur soluta error a illum doloremque</p>
                    </div>
                    <div className='card-dev text-center'>
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/1842/2021/11/02140414/VIT-1.jpeg" alt="img" />
                        <h1 className='py-3'>Jhon Doe</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat itaque consequuntur sit asperiores tenetur soluta error a illum doloremque</p>
                    </div>
                    <div className='card-dev text-center'>
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/1842/2021/11/02140414/VIT-1.jpeg" alt="img" />
                        <h1 className='py-3'>Jhon Doe</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat itaque consequuntur sit asperiores tenetur soluta error a illum doloremque</p>
                    </div>
                    <div className='card-dev text-center'>
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/1842/2021/11/02140414/VIT-1.jpeg" alt="img" />
                        <h1 className='py-3'>Jhon Doe</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat itaque consequuntur sit asperiores tenetur soluta error a illum doloremque</p>
                    </div>
                    <div className='card-dev text-center'>
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/1842/2021/11/02140414/VIT-1.jpeg" alt="img" />
                        <h1 className='py-3'>Jhon Doe</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat itaque consequuntur sit asperiores tenetur soluta error a illum doloremque</p>
                    </div>



                </div>



            </section>
            {/*............ last section............. */}
            <section className='container py-5 my-5'>
                <div className='check-css'>

                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>
                    <div className='d-flex'>
                    <FontAwesomeIcon className='fs-3 colors-icon' icon={faCheckCircle} />  <h6 className='px-2'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing. </h6>
                    </div>



                </div>



            </section>
            
        </div>
    );
};

export default Home;
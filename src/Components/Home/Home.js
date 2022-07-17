import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import './Home.css';

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

            <section className='container py-5 mt-5'>
                <h1 className='text-center'>Our Team</h1>

                <div>
                    



                </div>



            </section>
            
        </div>
    );
};

export default Home;
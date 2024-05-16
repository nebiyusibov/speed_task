import React, { useEffect, useState } from 'react'
import "./HomePages.scss"

function HomePages() {
    const [user,setuser]=useState([])

   async function getUser() {
        const res= await fetch("http://localhost:3000/user")
        const data=await res.json()
        setuser(data)
    }
    useEffect(()=>{
        getUser()
    },[])
    return (
        <main>
            <section className='img_section'>
                <div className='img_main_div'>
                    <p>Hygienic Food.</p>
                    <span>By Chef Francis Smith</span>
                </div>
            </section>
            <section className='year_section'>
                    <div className='div_top'><p>Welcome</p></div>
                    <div className='div_bottom'>
                        <div>
                            <p>2002</p>
                            <span>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</span>
                        </div>
                        <div>
                            <p>2002</p>
                            <span>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</span>
                        </div>
                        <div>
                            <p>2002</p>
                            <span>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</span>
                        </div>
                        
                    </div>
            </section>
            <section className='testimon_section'>
                <div className='testimon_main_div'>    
                    <p className='first_p'>Testimonials</p>
                    <p className='second_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum in enim eos aspernatur inventore impedit ad cupiditate quam nemo nulla? Et voluptatibus harum quisquam placeat odit, incidunt quaerat nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia expedita aspernatur sit earum dolores hic voluptate eaque quidem consectetur rerum recusandae quis, magnam nihil esse atque. Aperiam, animi a.</p>
                    <p className='third_p'>Ted Chapman,Client</p>
                </div>
            </section>

            <section className='services_section'>
                    <div className='services_top'><p>Our Services</p></div>
                    <div className='services_bottom'>
                        <div>
                            <p>Breakfast</p>
                            <span>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</span>
                        </div>
                        <div>
                            <p>Brunch</p>
                            <span>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</span>
                        </div>
                        <div>
                            <p>Lunch</p>
                            <span>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</span>
                        </div>
                        <div>
                            <p>Dinner</p>
                            <span>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</span>
                        </div>
                        
                    </div>
            </section>
            <section className='fetch_section'>
                    <div className='container'>
                        {user.map((x)=>(
                            <div className='user'>
                                <p>{x.name}</p>..................
                                <p>{x.price}Azn</p>
                            </div>
                        ))}
                    </div>
            </section>
        </main>
    )
}

export default HomePages
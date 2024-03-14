import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slide as Menu } from 'react-burger-menu'





export const Navbar = ({cart}) => {
    
    
  return (
    <div>

        <div className="navbarsection">
        <div className="topheader">
                
                    <div className="call">
                        <div className="callimage">
                            <img src={require('./images/callbutton.png')} alt="" />
                        </div>
                        <div className="callnumber">
                        <p>5678904322</p>

                        </div>
    
                    </div>
                    <div className="mail">
                        <div className="mailimage">
                            <img src={require('./images/mailbutton.png')} alt="" />
                        </div>
                        <div className="mailid">
                        <p>example@gmail.com</p>

                        </div>
    
                    </div>
                
                <div className="socialmedia">
                    <img src={require('./images/SOCIAL ICONS (4).png')} alt="" />
                </div>
            </div>
        </div>

        
        <div className="navbar">
            <div className="logo">
                <img src={require('./images/logospice.png')} alt="" />
            </div>
        <div className="mainnav">
        <Link to='/' className='link'>Home</Link>
        <Link to='/aboutus' className='link'>About</Link>
        <Link to='/spices' className='link'>Spices</Link>
        <Link to='/cart' className='link'>Cart 
        <div className='cartr'>
        {cart.length}
            
            </div></Link>
        

        </div>
        
    
        <Outlet/>
        <div className="search">
        <img src={require('./images/ic_round-search.png')} alt="" />
    </div>

        </div>
        <div className="herosection">
            <div className="heroimage">
                <div className="herocontent">
                <h4>
                SPICES
                </h4>
                <h1>GET THE AUTHENTIC TASTE</h1>
                <h6>WE EXPORT AUTHETIC SPICES FROM INDIA</h6>
                <button className='herobutton'>ENQUIRE NOW</button>

                </div>
            
            </div>
        </div>
        <div className="sectionone">
            <div className="subsectionone">
                <img src={require('./images/lemon banner.png')} alt="" />
                <img src={require('./images/coffee banner.png')} alt="" />
            </div>
        </div>
        <div className="aboutussection">
                    <div className="aboutheading">
                        <h1>KNOW ABOUT US!</h1>
                    </div>
                    <div className="mainaboutus">
                        <div className="aboutimage">
                            <img src={require('./images/AVOUT US IMAGE.png')} alt="" />
                        </div>
                        <div className="abouttcontent">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing 
Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing 
Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing 





                            </p>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing 
Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore






                                    
                                    
                            
                                
                                
                            </p>
                            <div className="aboutbutton">
                                <button type="button" className='aboutbuttonn'>KNOW MORE</button>
                            </div>
                            
                                
                            
                        </div>
                        
                    </div>
                </div>
                <br />
                <div className="sectionthree">
                <div className="freshfruitsheading">
                        <h1>OUR FRESH FRUITS</h1>
    
                    </div>
                    <div className="mainfreshfruits">
                        <div className="ff1">
                        <img src={require('./images/Rectangle 12.png')} alt="" />

    
                        </div>
                        <div className="ff2">
                        <img src={require('./images/image 6.png')} alt="" />
    
                        </div>
                        <div className="ff3">
                        <img src={require('./images/image 7.png')} alt="" />

    
                        </div>
                        <div className="ff4">
                        <img src={require('./images/image 8.png')} alt="" />
    
                        </div>
                    </div>
                    <div className="knowmorebutton">
                        <button type="button">KNOW MORE</button>
                    </div>
                </div>
                <br />


                <div className="sectionfour">
                <div className="spicesheading">
                        <h1>OUR SPICES COLLECTIONS</h1>
    
                    </div>
                    <div className="mainspices">
                        <div className="s1">
                        <img src={require('./images/Rectangle 12 (1).png')} alt="" />

    
                        </div>
                        <div className="s2">
                        <img src={require('./images/image 6 (1).png')} alt="" />
    
                        </div>
                        <div className="s3">
                        <img src={require('./images/image 7 (2).png')} alt="" />

    
                        </div>
                        <div className="s4">
                        <img src={require('./images/image 8 (1).png')} alt="" />
    
                        </div>
                    </div>
                    <div className="knowmorebutton">
                        <button type="button">KNOW MORE</button>
                    </div>
                </div>

                <br />




                <div className="sectionfive">
                <div className="blogsection">
                    <div className="blogheading">
                        <h1>OUR LATEST BLOGS</h1>
                    </div>
                    <div className="blogmainsection">
                        <div className="blog1">
                            <div className="blog1img">
                                <img src={require('./images/image 12.png')} alt="" />
                                {/* <img src="./images/image 12.png" alt=""> */}
                            </div>
                            <div className="blog1content">
                                <h3>
                                    MIXED PEEL
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE</button>
                                    <img src={require('./images/ph_arrow-up.png')} alt="" />

                                    {/* <img src="./images/ph_arrow-up.png" alt=""> */}
    
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog1">
                            <div className="blog1img">
                            <img src={require('./images/image 12.png')} alt="" />


                                {/* <img src="./images/image 12.png" alt=""> */}
                            </div>
                            <div className="blog1content">
                                <h3>
                                    MIXED PEEL
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE</button>
                                    <img src={require('./images/ph_arrow-up.png')} alt="" />
                                    {/* <img src="./images/ph_arrow-up.png" alt=""> */}
    
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog1">
                            <div className="blog1img">
                            <img src={require('./images/image 12.png')} alt="" />
                                {/* <img src="./images/image 12.png" alt=""> */}
                            </div>
                            <div className="blog1content">
                                <h3>
                                    MIXED PEEL
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE</button>
                                    <img src={require('./images/ph_arrow-up.png')} alt="" />

                                    {/* <img src="./images/ph_arrow-up.png" alt=""> */}
    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="sectionsix">
                <div className="newsletter">
                <div className="mainnewssection">
                    <h1>SUBSCRIBE TO OUR NEWSLETTERS</h1>
                    <p>GET THE LATEST NEWS ABOUT OUR PRODUCTS AND DISCOUNTS!</p>
                    <div className="emailsection">
                        <input type="email" placeholder="ENTER YOUR EMAIL" className='emailinput'/>
                        <button type="submit">SUBSCRIBE</button>

                    </div>

                    

                </div>
            </div>
                </div>
                <div className="sectionseven">
                <div className="footermainsection">
                <div className="footer">
                    <div className="mainfooter">
                        <div className="mainfoot">
                            <div className="mainfoot1">
                                <div className="logo">
                                <img src={require('./images/image 2.png')} alt="" />

                                    {/* <img src="./images/image 2.png" alt=""> */}
                                </div>
                                <div className="footertopic1">
                                    <p>HOME</p>
                                    <p>ABOUT US</p>
                                    <p>SPICES</p>
                                </div>
                                <div className="footertopic2">
                                    <p>FRUITS</p>
                                    <p>CONTACT US</p>
                                    <p>NEWSLETTER</p>
                                </div>
                                <div className="footertopic3">
                                    <p>CONNECT</p>
                                    <p>BLOGS</p>
                                    <p>ENQUIRE</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="bottom">
                                <div className="socialicon">
                                    <img src={require('./images/SOCIAL ICONS (4).png')} alt="" />
                                    {/* <img src="./images/SOCIAL ICONS (1).png" alt=""> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>

    </div>
  )
}

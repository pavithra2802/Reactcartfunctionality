import React, { useState } from 'react'
import Productdetails from './Productdetails'
import { Link, Outlet } from 'react-router-dom'
import './Spices.css'

export const Spices = ({cart,setCart}) => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart= (product)=>{
        setCart([...cart.product]);
        setCartCount(prevCount => prevCount+1);
    }
    console.log(Productdetails);
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
        {/* <Link to='/fruits' className='link'>Fruits</Link> */}
        <Link to='/cart' className='link'>Cart

        <div className='cartr'>
        {cart.length}
            
            </div>
            
        
        </Link>

        </div>
        <Outlet></Outlet>
    
        <div className="search">
        <img src={require('./images/ic_round-search.png')} alt="" />
    </div>

        </div>
        <div className="sectionone">
        <div className="herosection">
            <div className="mainhero">
                <div className="heroimg">
                    <div className="herocontent">
                      <h1>SPICES</h1>
                        <h5>HOME {'>'}SPICES</h5>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        <div className="row">
            
                <div className="sectiontwo">
        <div className="productsection">
                <div className="products1">
                    {
                        Productdetails.map((dd,index)=>
                        
                        <div className="product1" key={index}>

                          <img src={dd.productimage} alt="" width={'400px'} height={'400px'}/>


                        <div className="producttext">
                            <h4>{dd.productname}</h4>
                            <h5>{dd.amount}</h5>
                        </div>
                        <div className="productbutton">
                        <button className='addcart' onClick={()=> setCart([...cart,dd])}>ADD TO CART</button>
                        {/* <button className='addcart' onClick={() => addToCart(product)}>ADD TO CART</button> */}


                        </div>
                    </div>
                    
                    
                    
                        )
                        
                    }
                    
                    
                </div>
                
                
                

               

            </div>
        </div>
                
                
            
        </div>
        
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

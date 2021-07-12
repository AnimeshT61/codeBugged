import React,{useState} from 'react'  
function Navbar() {
    
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="navbar-container">  
                    <a className="navbar-brand" href="/"><img src="https://img.icons8.com/color/96/000000/video-call--v1.png"/></a>
                    <a className="navbar-brand text-white" href="/">100ms</a>
                    
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link"  href="#">We're Hiring!</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SDK Documentation</a>
                        </li>
                    </ul>    
                </div> 
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link"  href="#">Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link-try btn btn-large" href="#">Try it now</a>
                        </li>
                    </ul>    
                </div>          
            </nav>
        </div>
    )
}

export default Navbar;
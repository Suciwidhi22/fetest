import React from 'react'
import Button from '../elements/Button'
import BrandIcon from './IconText'
import Fade from "react-reveal/Fade";

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    }
        

    if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Cinta<span className="text-gray-900"> Coding</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <header className='spacing-sm'>
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar.light'>
                <BrandIcon />
           
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className={`nav-item${getNavLinkClass("/loginpage")}`}>
                        <Button className='btn px-5 rounded-pill' hasShadow isPrimary type='link' href='/loginpage'>
                            Login
                        </Button>
                    </li>
                </ul> 
            </div>
            </nav>
        </div>

    </header>
  )
}

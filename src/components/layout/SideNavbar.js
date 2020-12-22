// This component is the Sidenav Bar

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false); 
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />; {/* displays either logged in or logged out links for right side navigation */}
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}> 
        <div className='navbar'>
          <span className='SideMenu'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} /> {/* Pulls up the sidebar from clicking on Hamburger Menu Icon */}
            </Link>
            </span> 
            <span className='logo'> {/* Calls the Logo Image and uses as redirect to home on all pages */}
              <a href='/'>
                <img src="./images/logo.png" alt=""></img>
              </a></span>
            <span class='UserNav'> { links } </span>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> {/* Decides whether or not to show entire side bar or only Hamburger Menu Icon */}
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => { {/* Uses the icons displayed in SideNavbar when active to redirect to the links listed in SidebarData */}
              return (
                <li key={index} className={item.cName}> 
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection: 'users'}
  ])
  )(Navbar)
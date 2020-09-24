// This component creates a navigation bar
import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect} from 'react-redux'
import styles from '../../styles/NavbarStyles.module.css'

export function Navbar(props) {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return(
        <nav className={`nav-wrapper ${ styles.background }`}>
            <div className="container">
                <Link to = '/' className = {`left ${ styles.title }`} > 
                    <div className = {`left ${ styles.icon }`} ></div>
                    Atlas Life Systems
                </Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { firestoreConnect } from 'react-redux-firebase'

function quizdirectory(props) {
    const [quizdirectory, setQuizdirectory] = useState(false);
    const { auth, profile } = props;
  
    return (
    
    <div className="dashboard container">

    <div className="welcomedate">
        <div class="welcome"> <h4>Hello! Welcome { profile.firstName }!</h4></div>
        <div class="date"> 
            <p><b>Report:</b> {new Date().toLocaleDateString(navigator.language, {year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
    </div>

    <div class="row">
        <div class="col s3 l4">{ engagement }</div> 
        <div class="col s3 l4"></div>
        <div class="col s3 l4"></div>
    </div>
}

export default 
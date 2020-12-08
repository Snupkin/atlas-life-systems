import React from 'react';
import Grid from '@material-ui/core/Grid';
import PHQ9 from './PHQ9/PHQ9';
import GAD7 from './GAD7/GAD7';
import { NavLink } from 'react-router-dom';

class quizdirectory extends React.Component {
    render() {
      return (
        <div class="row">
            <div class="container">
                <div class="col s12 m6">
                    <div class="card z-depth-1">
                        <div class="card-content white-text">
                            <span class="card-title blue-text text-darken-3">GAD-7 Anxiety Test Questionnaire</span>
                            <p class='grey-text'>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <NavLink class='waves-effect waves-light btn white-text' to="/GAD-7"> Take the Quiz</NavLink>  
                        </div>
                    </div>
                </div>

                <div class="col s12 m6">
                    <div class="card z-depth-1">
                        <div class="card-content white-text">
                            <span class="card-title blue-text text-darken-3">PHQ-9 Depression Test Questionnaire</span>
                            <p class='grey-text'>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <NavLink class='waves-effect waves-light btn white-text' to="/PHQ9"> Take the Quiz</NavLink>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            )
        }
    }

export default quizdirectory
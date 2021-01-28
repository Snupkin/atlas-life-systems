// This component is the quiz directory - There are 2 quizzes currently in this directory (GAD-7 & PHQ-9)

import React from 'react';
import { NavLink } from 'react-router-dom';
import './quizdirectory.css';

class quizdirectory extends React.Component {
    render() {
      return (
        <div class="row">
            <div class="container"> 
                <div class="col s12 m6"> {/* Creates a card that redirects to GAD-7 */}
                    <div class="card z-depth-1">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="./images/logo.png" alt="this is a test" />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Generalized Anxiety Disorder 7<i class="material-icons right">more_vert</i></span>
                            <NavLink class='waves-effect waves-light btn white-text' to="/GAD7">Take the Quiz</NavLink>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><h5>Generalized Anxiety Disorder 7</h5><i class="material-icons right">close</i></span>
                            <h7><i>7 Question Screening Quiz to Measure Anxiety Levels</i></h7>
                            <p>The Generalized Anxiety Disorder 7 quiz is a rapid screening questionnaire 
                            designed to quickly and effectively detect the presence of various anxiety disorders (e.g. GAD, SP, PTSD)..</p>
                        </div>
                    </div>
                </div>
                
                <div class="col s12 m6"> {/* Creates a card that redirects to GAD-7 */}
                    <div class="card z-depth-1">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="./images/logo.png" alt="this is a test" />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Patient Health Questionnaire 9<i class="material-icons right">more_vert</i></span>
                            <NavLink class='waves-effect waves-light btn white-text' to="/PHQ9">Take the Quiz</NavLink>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4"><h5>Patient Health Questionnaire 9</h5><i class="material-icons right">close</i></span>
                            <h7><i>Screening quiz measuring the severity and progression of depression symptoms</i></h7>
                            <p>The Patient Health Questionnaire 9 measures depression symptoms using the DSM-5 criteria and scores each 
                            symptom by presence in the past two weeks ranging from 0 (not at all) to 3 (nearly everyday).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            )
        }
    }

export default quizdirectory
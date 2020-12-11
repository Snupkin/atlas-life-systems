import React from 'react';
import { NavLink } from 'react-router-dom';

class quizdirectory extends React.Component {
    render() {
      return (
        <div class="row">
            <div class="container">
                <div class="col s12 m6">
                    <div class="card z-depth-1">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="./src/images/Quiz1.png" alt="this is a test" />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Generalized Anxiety Disorder 7<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Generalized Anxiety Disorder 7<i class="material-icons right">close</i></span>
                            <p>The Patient Health Questionnaire 9 measures depression symptoms using the DSM-5 criteria and scores each symptom by presence in the past two weeks ranging from 0 (not at all) to 3 (nearly everyday).</p>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6">
                    <div class="card z-depth-1">
                        <div class="card-content white-text">
                            <span class="card-title blue-text text-darken-3">Patient Health Questionnaire 9</span>
                            <h5 class='grey-text'>Screening quiz to measure anxiety levels</h5>
                            <p class='grey-text'>The Generalized Anxiety Disorder 7 quiz is a rapid screening questionnaire 
                            designed to quickly and effectively detect the presence of various anxiety disorders (e.g. GAD, SP, PTSD).</p>
                        </div>
                        <div class="card-action">
                            <NavLink class='waves-effect waves-light btn white-text' to="/PHQ9">Take the Quiz</NavLink>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            )
        }
    }

export default quizdirectory
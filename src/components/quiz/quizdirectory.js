import React from 'react';
import { NavLink } from 'react-router-dom';

class quizdirectory extends React.Component {
    render() {
      return (
        <div class="row">
            <div class="container">
                <div class="col s12 m6">
                    <div class="card z-depth-1">
                        <div class="card-content white-text">
                            <span class="card-title blue-text text-darken-3">Generalized Anxiety Disorder 7</span>
                            <h5 class='grey-text'>Screening and monitoring quiz to measure the severity and progression of depression symptoms</h5>
                            <p class='grey-text'>The Patient Health Questionnaire 9 measures depression symptoms using the DSM-5 criteria and scores 
                            each symptom by presence in the past two weeks ranging from 0 (not at all) to 3 (nearly everyday. </p>
                        </div>
                        <div class="card-action">
                            <NavLink class='waves-effect waves-light btn white-text' to="/GAD-7">Take the Quiz</NavLink>  
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
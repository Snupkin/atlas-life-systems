// This component is currently the homepage of the application
import React, { Component } from 'react';
import ArticleLibrary from '../articles/ArticleLibrary';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { dot, random } from 'mathjs';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styles from '../../styles/DashboardStyles.module.css'

class Dashboard extends Component { 

    quizExists = (quizBitmaps) => { // function checks if quiz was taken - if not: redirects you to a quiz and locks dashboard
        if ((quizBitmaps !== undefined || !quizBitmaps) || quizBitmaps.length  < 1) {
            return false
        } else {
            return true
        }
    }
    
    getMostRecentQuizBitmap = (quizBitmaps) => { // gets bitmap of most recent quiz - needs updating for multiple quiz types
        // variable declaration - var since these are dynamic? can change over time
        var mostRecentQuiz = [];
        var orderedMostRecentQuiz = [];

        if (quizBitmaps !== undefined && quizBitmaps.length > 0) {
            // **** quizBitmaps is an OBJECT not an ARRAY - can not use .map functionality
            mostRecentQuiz = quizBitmaps[quizBitmaps.length - 1]; // pops top quiz
            // these deletes do NOT change data stored in firebase
            delete mostRecentQuiz.date; // delete date object property *locally
            delete mostRecentQuiz.quizName; // delete quizName object *locally
            Object.keys(mostRecentQuiz).sort().forEach((key) => { // This orders the bitmaps into proper question order
                orderedMostRecentQuiz[key] = mostRecentQuiz[key];
              }); 
            return Object.values(orderedMostRecentQuiz);
        } else { // invalid bitmap conditional
            mostRecentQuiz = [];
            return orderedMostRecentQuiz = [];
        }
    }

    sortArticles = (articles, mostRecentQuizBitmap, filteredLibrarySize) => { // ranks and sorts articles based on bitmaps dot product
        // variable declaration
        var articleRank;
        var rankedArticles = [];
        var sortedArticles = [];

        if (articles !== undefined && articles.length > 0 && mostRecentQuizBitmap !== undefined && mostRecentQuizBitmap.length > 0) {
            rankedArticles = articles.map(article => { // needs updating. awaiting article.bitmap rework
                if (mostRecentQuizBitmap.length === article.bitmap.length) { // phq9 filtering; article.bitmap needs to be split into gad7bitmap and phq9bitmap
                    articleRank = dot(mostRecentQuizBitmap, article.bitmap); // dot product of bitmaps
                    let rankedArticle = Object.assign({}, {article: article}, {articleRank: articleRank}); // creates new array with object "ranked article" with object properties "article" and "articleRank"
                    return { rankedArticle }
                } else if (mostRecentQuizBitmap.length === 7) { // gad7 filtering; needs to be updated
                    articleRank = dot(mostRecentQuizBitmap, article.bitmap.slice(0, 7)); // slice is temporary to take first 7 indices of bitmap (size 9)
                    let rankedArticle = Object.assign({}, {article: article}, {articleRank: articleRank});
                    return { rankedArticle }
                } else { // invalid source bitmap conditional
                    let rankedArticle = Object.assign({}, {article: article}, {articleRank: random(0,10).floor});
                    return { rankedArticle }
                }
            })
            if (rankedArticles.length > 0 && rankedArticles !== undefined){ // compares article ranks and sorts the array
                sortedArticles = rankedArticles
                .sort((b, a) => a.rankedArticle.articleRank - b.rankedArticle.articleRank)
                .slice(0, filteredLibrarySize);
            }
        }
        if (sortedArticles.length > 0) { // returns article object from ranked articles
            sortedArticles = sortedArticles.map(article => {
                return article.rankedArticle.article
            })
        }
        return sortedArticles;
    }

    combineBitmaps = (...args) => {
        console.log('still need to develop combineBitmaps')
    }

    render () { 
        // authentication protocol
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />;

        // variable declarations
        const { phq9Bitmaps } = this.props;
        const { gad7Bitmaps } = this.props;
        // quiz redirects if not taken - seems to work backwards?
        if (this.quizExists(phq9Bitmaps)) { return <Redirect to = '/phq9' /> };
        if (this.quizExists(gad7Bitmaps)) { return <Redirect to = '/gad7' /> };

        const filteredLibrarySize = 10; // arbitrary dashboard max # of articles
        const { articles } = this.props;
        // method calls
        var mostRecentPHQ9Bitmap = this.getMostRecentQuizBitmap(phq9Bitmaps);
        var mostRecentGAD7Bitmap = this.getMostRecentQuizBitmap(gad7Bitmaps);
        // var combineBitmaps = this.combineArticles(phq9SortedArticles, gad7SortedArticles);


        // var allSortedArticles = 
        var phq9SortedArticles = this.sortArticles(articles, mostRecentPHQ9Bitmap, filteredLibrarySize);
        var gad7SortedArticles = this.sortArticles(articles, mostRecentGAD7Bitmap, filteredLibrarySize);
        // var combinedSortedArticles = this.sortArticles();

        var filteredSelection; // dropdown variable

        return (
            <div className="dashboard container">
                <DropdownButton 
                className={`right ${ styles.dropDown }`} // moves button to top right
                id="dropdown-basic-button" // dropdown type
                title = "Filter By">
                    {/* <Dropdown.Item href={allSortedArticles}>All Quizzes</Dropdown.Item> */}
                    <Dropdown.Item as="button" href={ filteredSelection=articles }>None</Dropdown.Item>
                    <Dropdown.Item as="button" href={ filteredSelection=phq9SortedArticles }>PHQ-9</Dropdown.Item>
                    <Dropdown.Item as="button" href={ filteredSelection=gad7SortedArticles }>GAD-7</Dropdown.Item>
                </DropdownButton>
                <div>
                    <ArticleLibrary articles = { filteredSelection }/>
                </div>
            </div>
        )
     }
}

const mapStateToProps = (state) => {
    return { 
        articles: state.firestore.ordered.articles,
        phq9Bitmaps: state.firebase.profile.phq9Bitmaps,
        gad7Bitmaps: state.firebase.profile.gad7Bitmaps,
        auth: state.firebase.auth
     }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'},
        {collection: 'users'}
    ])
)(Dashboard)
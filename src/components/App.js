import React, { Component } from 'react';
import CreateComment from '../containers/Comments/CreateComment';
import CommentsList from '../containers/Comments/CommentsList';

import '../app.css';

class App extends Component {

    render() {
        return (
            <div className="app">
                <div className="comments">
                    <div className="comments__items"><CommentsList /></div>
                    <div className="comments__form"><CreateComment/></div>
                </div>
            </div>
        );
    }
}

export default App;

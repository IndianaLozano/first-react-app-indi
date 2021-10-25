import React from 'react';
import { dumpLogs } from './Utils';
//import './BlogCard.css';
import classes from './BlogCard.module.css'
import { Component } from 'react';

/* class BlogCard extends Component {

    state = {
        likeCount: 0
    }

    onLikeBtnClick = () => {
        this.setState((prevState, prevProp) => {
        return {likeCount : prevState.likeCount + 1}
        });
    }

    render(){
        dumpLogs(this.props);

    return(
        <div className={classes.BlogCard}>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <p>Like count: <span className={classes.likeCount}>{this.state.likeCount}</span></p>
            <button onClick={this.onLikeBtnClick}>Like</button>
        </div>
    )};
} */

const BlogCard = (props) => {
    dumpLogs(props);

    return(
        <div className={classes.BlogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Like count: <span className={classes.likeCount}>{props.likeCount}</span></p>
            <button onClick={null}>Like</button>
        </div>
    )
}

export default BlogCard;
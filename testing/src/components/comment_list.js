import React, { Component } from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
    const list = props.comments.map(comment => <li className="list-group-item" key={comment}>{comment}</li>);

    return (
        <div className="comment-list">
            <ul className="list-group">{list}</ul>
        </div>
    );
};

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
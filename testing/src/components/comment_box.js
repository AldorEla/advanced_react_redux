import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {comment: ''};
    }
    handleChange(event) {
        this.setState({comment: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }
    render() {
        return (
            <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
                <h4>Add comment</h4>
                <div className="form-group">
                    <textarea 
                        className="form-control"
                        value={this.state.comment} 
                        onChange={this.handleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <button action="submit" className="btn btn-primary">Submit comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);

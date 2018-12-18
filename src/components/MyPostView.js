import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import * as postsSelectors from '../store/posts/reducer';

class MyPostView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        if (!this.props.postsById) return this.renderLoading();
        return (
            <div>
                <div>
                    {this.props.postsById}
                </div>
            </div>
        );
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }
}

function mapStateToProps(state) {
    const [postsById, postsIdArray] = postsSelectors.getPosts(state);
    return {
        postsById,
        postsIdArray,
        // topicsByUrl: topicsSelectors.getSelectedTopicsByUrl(state),
        currentFilter: postsSelectors.getCurrentFilter(state),
        currentPost: postsSelectors.getCurrentPost(state)
    };
}

export default connect(mapStateToProps)(MyPostView);

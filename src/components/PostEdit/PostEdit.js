import React, {Component} from 'react';
import './PostEdit.scss';
import {createPost, resetPost, updatePostField} from "../../actions/postActions";
import {connect} from "react-redux";

class PostEdit extends React.PureComponent {

    render() {
        const {createPost, resetPost, post, updatePostField} = this.props;
        const {title, id, body} = post;

        return (
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title post-edit-title">Post
                        <div>
                            <button onClick={() => resetPost()} type="submit"
                                    className="btn btn-primary">New
                                post
                            </button>
                            <button onClick={() => createPost()} type="submit" className="btn btn-primary">Save
                            </button>
                        </div>
                    </h5>
                    <div className="form-group">
                        <input type="text" className="form-control" id="title"
                               aria-describedby="title"
                               onChange={e => updatePostField({field: 'title', value: e.currentTarget.value})}
                               placeholder="Title" value={title}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="body"
                               placeholder="Description"
                               aria-describedby="description"
                               onChange={e => updatePostField({field: 'body', value: e.currentTarget.value})}
                               value={body}/>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    post: state.posts.item
});

const mapDispatchToProps = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post)),
        editPost: (post) => dispatch(createPost(post)),
        resetPost: () => dispatch(resetPost()),
        updatePostField: (postField) => {
            dispatch(updatePostField(postField))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);


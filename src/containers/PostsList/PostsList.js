import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styles from './PostsList.scss';
import {editPost, deletePost} from '../../actions/postActions';
import uuid from 'react-uuid';

class PostsList extends React.PureComponent {

    render() {
        const {posts, editPost, deletePost} = this.props;

        return (
            <div className='posts-list'>
                <h5 className="card-title">Todo list</h5>
                {posts.map((post) =>
                    <div key={uuid()}>

                        <div className='list-item card' >
                            <div>
                                <h5 className="card-title">{post.title}</h5>
                                <div>{post.body}</div>
                            </div>
                            <div className='btns-block'>
                                <button type="button" className="btn btn-dark" onClick={()=>editPost(post)}>Edit</button>
                                <button type="button" className="btn btn-danger" onClick={()=>deletePost(post.id)}  >Delete</button>
                            </div>
                        </div>
                    </div>
                   )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

const mapDispatchToProps = {editPost, deletePost};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);

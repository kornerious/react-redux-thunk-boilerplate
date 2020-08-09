import React, {useEffect} from 'react';
import PostEdit from '../../components/PostEdit/PostEdit';
import PostsList from '../PostsList/PostsList';
import './Posts.scss';
import {fetchPosts} from '../../actions/postActions';
import {useDispatch} from 'react-redux';
import FlipMove from "react-flip-move";

export default function Posts(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return <>
            <br/>
            <PostEdit/>
            <br/>
            <PostsList testProp={11}/>
    </>
}

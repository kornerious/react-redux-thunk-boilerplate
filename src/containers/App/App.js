import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../../store';
import Posts from '../Posts/Posts';
import './App.scss';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.StrictMode>
                    <div className='container'>
                    <Posts/>
                    </div>
                </React.StrictMode>
            </Provider>
        )
    }
}

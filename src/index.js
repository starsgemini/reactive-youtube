import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import initialState from './Store/Store';
import { Provider } from 'react-redux';
import videoListReducer from './VideoListComponent/Video.List.Reducers';
import actualVideoReducer from './ActualVideoComponent/Actual.Video.Reducer';
import RelatedReducer from './RelatedToActualComponent/Related.Reducer';
import LoginReducer from './LoginComponent/Login.Reducer';
import UserSettingsReducer from './ShowUserSettingsComponent/ShowUserSettings.Reducer.js';
import ShowUserSettingsComponent from './ShowUserSettingsComponent/ShowUserSettings.Component';
import VideoList from './VideoListComponent/Video.List.Component';
import ActualVideo from './ActualVideoComponent/Actual.Video';
import SearchComponent from './SearchComponent/Search.Component';
import RelatedComponent from './RelatedToActualComponent/Related.Component';

import ShowUserListComponent from './ShowUserListComponent/ShowUserList.Component';
import { applyMiddleware } from 'redux';

class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();

        store.subscribe(() => {
            console.log(store.getState());
            this.setState(store.getState());
            console.log('set state');
        });
    }

    render() {
        return (
            <div className="main-window">
                <SearchComponent />
                <div className="main-window-wrapper">
                    <ActualVideo />
                    <VideoList />
                    <div id="side-nav-id" className="side-nav">
                        <RelatedComponent />
                        <ShowUserListComponent />
                        <ShowUserSettingsComponent />
                    </div>
                </div>
            </div>
        )
    }
}

const reducers = combineReducers({
    "videos": videoListReducer,
    "actualVideo": actualVideoReducer,
    "related": RelatedReducer,
    "user_login": LoginReducer,
    "user_settings": UserSettingsReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><MainComponent /></Provider>
    , document.getElementById('App'));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {   
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDPm2IQZSv5sUwogUEUwcNHl7_hEnt2yt4",
            authDomain: "latmanager-cb65f.firebaseapp.com",
            databaseURL: "https://latmanager-cb65f.firebaseio.com",
            projectId: "latmanager-cb65f",
            storageBucket: "latmanager-cb65f.appspot.com",
            messagingSenderId: "912924158296",
            appId: "1:912924158296:web:947b227ebf5582fac71d2d",
            measurementId: "G-4FTX2S5ZT2"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            } else {
                this.props.notLoginYet();
            }
        });
    }
    render() {
        return (
            <Main />
        );
    }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);

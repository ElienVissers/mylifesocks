import React from 'react';
import axios from './axios';

import {Uploader} from './uploader';
import {Header} from './header';
import {Profile} from './profile';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            uploaderIsVisible: false
        };
        this.openUploader = this.openUploader.bind(this);
        this.closeUploader = this.closeUploader.bind(this);
        this.changePictureUrl = this.changePictureUrl.bind(this);
        this.updateBio = this.updateBio.bind(this);
    }
    componentDidMount() {
        axios.get('./user').then(results => {
            this.setState({
                first: results.data.rows[0].first,
                last: results.data.rows[0].last,
                pictureUrl: results.data.rows[0].url,
                bio: results.data.rows[0].bio
            });
        }).catch(err => {
            console.log('error in mount app: ', err);
        });
    }
    closeUploader() {
        this.setState({
            uploaderIsVisible: false
        });
    }
    openUploader() {
        this.setState({
            uploaderIsVisible: true
        });
    }
    changePictureUrl(url) {
        this.setState({
            pictureUrl: url,
            uploaderIsVisible: false
        });
    }
    updateBio(bio) {
        this.setState({
            bio: bio
        });
    }
    render() {
        return (
            <div id="app">
                <Header
                    first={this.state.first}
                    last={this.state.last}
                    pictureUrl={this.state.pictureUrl}
                    openUploader={this.openUploader}
                />
                <Profile
                    first={this.state.first}
                    last={this.state.last}
                    pictureUrl={this.state.pictureUrl}
                    openUploader={this.openUploader}
                    bio={this.state.bio}
                    updateBio={this.updateBio}
                />
                <footer><h6>www.mylifesocks.com</h6></footer>
                {this.state.uploaderIsVisible && <Uploader
                    first={this.state.first}
                    last={this.state.last}
                    pictureUrl={this.state.pictureUrl}
                    closeUploader={this.closeUploader}
                    changePictureUrl={this.changePictureUrl}
                />}
            </div>
        );
    }
}

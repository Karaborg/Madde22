import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getSongQuery} from '../queries/queries';

class SongDetails extends Component {
    render() {
        console.log(this.props);
        return (
            <div id="song-details">
                <p>Output song details here</p>
            </div>
        );
    }
}

export default graphql(getSongQuery)(SongDetails);
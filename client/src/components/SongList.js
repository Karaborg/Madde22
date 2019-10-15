import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getSongsQuery = gql`
    {
        songs {
            title
            artist
            duration
            genres
            album
        }
    }
`;

class SongList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="song-list">
                    <li>Song name</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getSongsQuery)(SongList);


import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getSongQuery} from '../queries/queries';

class SongDetails extends Component {
    displaySongDetails(){
        const {song} = this.props.data;
        if (song){
            return(
                <div>
                    <h2>{song.title}</h2>
                    <p>{song.artist}</p>
                    <p>{song.duration}</p>
                    <p>{song.album}</p>
                    <p>{song.genres}</p>
                </div>
            )
        }else {
            return(
                <div>No song Selected</div>
            )
        }
    }
    render() {
        return(
            <div id="song-details">
                {this.displaySongDetails()}
            </div>
        )
    }
}

export default graphql(getSongQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.songId
            }
        }
    }
})(SongDetails);
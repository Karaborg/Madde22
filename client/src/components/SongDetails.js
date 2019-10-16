import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getSongQuery} from '../queries/queries';

class SongDetails extends Component {
    displaySongDetails(){
        const {song} = this.props.data;
        if (song){
            return(
                <div>
                    <h2 id="titleA">{song.title}</h2>
                    <p id="titleB">Artist: {song.artist}</p>
                    <p id="titleB">Duration: {song.duration} minutes</p>
                    <p id="titleB">Album: {song.album}</p>
                    <p id="titleB">Genre: {song.genres}</p>
                </div>
            )
        }else {
            return(
                <div id="titleA">No song Selected...</div>
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
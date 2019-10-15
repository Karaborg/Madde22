import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import SongDetails from "./SongDetails";

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
    displaySongs(){
        var data = this.props.data;
        if (data.loading){
            return(<div>Loading Songs...</div>)
        } else{
            return data.songs.map(song => {
                return(
                    <li key={song.title}>{song.title}</li>
                );
            })
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="song-list">
                    {this.displaySongs()}
                </ul>
                <SongDetails/>
            </div>
        );
    }
}

export default graphql(getSongsQuery)(SongList);


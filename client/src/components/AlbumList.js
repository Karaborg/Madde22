import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import SongDetails from "./SongDetails";

const getSongsQuery = gql`
    {
        songs {
            id
            title
            artist
            duration
            genres
            album
        }
    }
`;

class AlbumList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displaySongs(){
        var data = this.props.data;
        if (data.loading){
            return(<div>Loading Albums...</div>)
        } else{
            return data.songs.map(song => {
                return(
                    <li id="title" key={song.id} onClick={(e) => {this.setState({selected: song.id})}}>{song.album}</li>
                );
            })
        }
    }
    render() {
        //console.log(this.props);
        return (
            <div>
                <ul id="album-list">
                    {this.displaySongs()}
                </ul>
                <SongDetails songId={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getSongsQuery)(AlbumList);


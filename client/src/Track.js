import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import SongList from './components/SongList';

//apollo client setup
const client = new ApolloClient({
    uri:'http://localhost:4000/graphql'
})

class Track extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <SongList/>
                </div>
            </ApolloProvider>
        );
    }
}

export default Track;

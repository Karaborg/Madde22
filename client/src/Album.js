import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import AlbumList from "./components/AlbumList";

//apollo client setup
const client = new ApolloClient({
    uri:'http://localhost:4000/graphql'
})

class Album extends Component {
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
                    <AlbumList/>
                </div>
            </ApolloProvider>
        );
    }
}

export default Album;

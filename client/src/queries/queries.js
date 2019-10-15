import {gql} from 'apollo-boost';

const getSongQuery = gql`
    query($id: ID){
        song(id: $id){
            title
            artist
            duration
            album
            genres
        }
    } 
`;

export {getSongQuery};
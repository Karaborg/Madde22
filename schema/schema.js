const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
var songs = [
    {title: 'Big Smoke Pt1 - Live', artist: 'Tash Sultana', id: '1'},
    {title: 'Army of Me', artist: 'Björk', id: '2'},
    {title: 'Dear Mama', artist: '2Pac', id: '3'},
];

const SongType = new GraphQLObjectType({
    name: 'Song',
    fields: ( ) => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        artist: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        song: {
            type: SongType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(songs, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
const graphql = require('graphql');
const _ = require('lodash');
const Song = require("../core/Model/music.js");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLFloat, GraphQLList, GraphQLInt, GraphQLNonNull } = graphql;

const SongType = new GraphQLObjectType({
    name: 'Song',
    fields: ( ) => ({
        title: {type: GraphQLString},
        artist: {type: GraphQLString},
        duration: {type: GraphQLFloat},
        genres: {type: GraphQLString},
        album: {type: GraphQLString},
        clicked: {type: GraphQLInt},
        liked: {type: GraphQLInt},
        downloaded: {type: GraphQLInt},
        shared: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        song: {
            type: SongType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // code to get data from db / other source
                //return _.find(songs, { id: args.id });
                return Song.findById(args.id);
            }
        },
        songs: {
            type: new GraphQLList(SongType),
            resolve(parents, args){
                //return songs
                return Song.find({})
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addSong: {
            type: SongType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                artist: {type: new GraphQLNonNull(GraphQLString)},
                duration: {type: new GraphQLNonNull(GraphQLFloat)},
                genres: {type: new GraphQLNonNull(GraphQLString)},
                album: {type: new GraphQLNonNull(GraphQLString)},
                clicked: {type: GraphQLInt},
                liked: {type: GraphQLInt},
                downloaded: {type: GraphQLInt},
                shared: {type: GraphQLInt}
            },
            resolve(parents, args){
                let song = new Song({
                    title: args.title,
                    artist: args.artist,
                    duration: args.duration,
                    genres: args.genres,
                    album: args.album,
                    clicked: args.clicked,
                    liked: args.liked,
                    downloaded: args.downloaded,
                    shared: args.shared
                });
                return song.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
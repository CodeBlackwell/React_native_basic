import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { get } from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {

        return (
        <View>
            {this.renderAlbums()}
        </View>
        );
    }

    renderAlbums() {
        return this.state.albums.map((album, index) =>
            <AlbumDetail key={index} album={album}/>
        )
    }
}


export default AlbumList

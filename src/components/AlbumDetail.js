import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    const {
            album: {
            thumbnail_image,
            title,
            artist
        }
    } = props;
    const {
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        headerContentStyle,
    } = styles;
    return (
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image
                    source={{ uri: thumbnail_image }}
                    style={thumbnailStyle}/>
            </View>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{ title }</Text>
                <Text>{ artist }</Text>
            </View>
        </CardSection>
    </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail
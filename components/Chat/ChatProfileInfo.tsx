import React from 'react';
import { GestureResponderEvent, ImageStyle, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatUserImage from './ChatUserImage';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';

interface Props {
    userImageSource: ImageSourcePropType;
    userName: string;
    status: string;
    onButtonPress?: (event: GestureResponderEvent) => void
};

const ChatProfileInfo: React.FunctionComponent<Props> = ({
    userImageSource,
    userName,
    status,
    onButtonPress
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View>
        <View style={style.container}>
            <TouchableOpacity onPress={onButtonPress}>
                <Icon name="ios-arrow-back" size={40} color={theme.textColor} style={style.backButton}/>
            </TouchableOpacity> 
        </View>
        <View style={style.contentContainer}>
            <ChatUserImage
                source={userImageSource}
                containerStyle={style.userImageContainer}
                imageStyle={{width: 100, height: 100, borderRadius: 50}}
            />
        </View>
        <View style={style.contentContainer}>
            <ThemedText styleKey="textColor" style={style.userNameStyle}>{userName}</ThemedText>
        </View>
        <View style={style.contentContainer}>
            <ThemedText styleKey="textColor" style={{fontStyle: "italic"}}>{status}</ThemedText>
        </View>
        </View>
    );
};

export default ChatProfileInfo;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    backButton: ViewStyle;
    userImageContainer: ImageStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 10,
    },
    backButton: {
        padding: 10,
    },
    userImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userNameStyle: {
        fontWeight: "bold",
        fontSize: 18,
    }
})
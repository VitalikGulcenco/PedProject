import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AppStyles } from '../../../styles/App.styles';

const Link = ({ click, children }) => {
    const styles = AppStyles();

    return (
        <>
            <TouchableOpacity
                onPress={click}
            >
                <Text
                    style={styles.LinkText}
                >
                    {children}
                </Text>
            </TouchableOpacity>

        </>
    );
};

export default Link;
import React from 'react';
import { View } from 'react-native';
import { AppStyles } from '../../../styles/App.styles';

const Card = ({ children }) => {
    const styles = AppStyles();

    return (
        <>
            <View style={styles.Card}>
                {children}
            </View>
        </>
    );
};

export default Card;
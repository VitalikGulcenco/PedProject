import React from 'react';
import { Text } from 'react-native';
import { AppStyles } from '../../../styles/App.styles';

const HText = ({ type,children }) => {
    const styles = AppStyles();


    switch (type) {
        case 'h1':return (
            <>
            <Text style={styles.H1}>
                {children}
            </Text>
            </>
        );


        default: return (
            <>
            </>
        );
    }
};

export default HText;
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AppStyles } from '../../../styles/App.styles';

const Button = ({ click, children }) => {
    const styles = AppStyles();

    return (
        <>
            <TouchableOpacity
                onPress={click}
                style={styles.Button}
            >
                <Text
                style={styles.ButtonText}
                
                >
                    {children}
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default Button;
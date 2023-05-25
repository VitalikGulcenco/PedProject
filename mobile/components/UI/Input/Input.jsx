import React from 'react';
import { TextInput } from 'react-native';
import { AppStyles } from '../../../styles/App.styles';

const Input = ({ placeholder, setValue, type }) => {
    const styles = AppStyles();

    return (
        <>
            <TextInput
                secureTextEntry={type}
                style={styles.Input}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};

export default Input;
import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { AppStyles } from '../../../styles/App.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const InitialView = ({ children }) => {
    const styles = AppStyles();

    return (
        <>
            <View style={styles.Container}>
                    {children}

            </View>
        </>
    );
};

export default InitialView;
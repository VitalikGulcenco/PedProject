import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { AppStyles } from '../../../styles/App.styles';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Link from '../Link/Link';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Form = ({ type, navigation }) => {
    const styles = AppStyles();
    const [username, setMail] = useState('')
    const [active, setActive] = useState(false)
    const getEmail = () => {
        axios.post(`http://localhost:5000/api/post/autorize`, { username })
            .then(r => {
                setActive(true)

            })
            .catch(e => {
                console.log(e);
            })

    }
    useEffect(() => {
        if (active) {
            navigation.navigate('Home')
        }
    }, [active])
    switch (type) {
        case 'login':
            return (
                <>
                        <View style={styles.Form} >
                            <Input setValue={setMail} placeholder={'Email'} type={false} />
                            <Input setValue={setMail} placeholder={'Password'} type={true} />
                            <Button click={getEmail}>
                                Sign In
                            </Button>
                            <Link>Forgot Password ?</Link>
                        </View>
                </>
            );
        case 'register':
            return (
                <>
                        <View style={styles.Form} >
                            <Input setValue={setMail} placeholder={'Email'} type={false} />
                            <Input setValue={setMail} placeholder={'Password'} type={true} />
                            <Input setValue={setMail} placeholder={'Confirm Password'} type={true} />
                            <Button>
                                Sign Up
                            </Button>
                        </View>
                </>
            );
        default: return (<></>);

    }
};

export default Form;
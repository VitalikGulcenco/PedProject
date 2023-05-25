import React from 'react';
import InitialView from '../UI/InitialView/InitialView';
import Card from '../UI/Card/Card';
import HText from '../UI/HText/HText';
import Form from '../UI/Form/Form';
import Link from '../UI/Link/Link';

const RegisterPage = ({ navigation }) => {
    const redirectClick = () => {
        navigation.navigate('Login')
    }
    return (
        <>
            <InitialView>
                <KeyboardAwareScrollView style={{ width: '100%' }} >
                    <Card>
                        <HText type={'h1'}>
                            Sign in
                        </HText>
                        <Form type={'register'} />
                        <Link click={redirectClick}>
                            Have an account ? Sign In
                        </Link>
                    </Card>
                </KeyboardAwareScrollView>
            </InitialView>
        </>
    );
};

export default RegisterPage;
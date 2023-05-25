import InitialView from "../UI/InitialView/InitialView";
import Card from "../UI/Card/Card";
import HText from "../UI/HText/HText";
import { TouchableWithoutFeedback } from "react-native";
import From from "../UI/Form/Form";
import Form from "../UI/Form/Form";
import Link from "../UI/Link/Link";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginPage = ({ navigation }) => {

    const redirectClick = () => {
        navigation.navigate('Register')
    }

    return (
        <>
                <InitialView>
                    <Card>
                        <HText type={'h1'}>
                            Sign in
                        </HText>
                    <Form navigation={navigation} type={'login'} />

                        <Link click={redirectClick}>
                            Don’t haven’t an account ? Sign up
                        </Link>
                    </Card>
                </InitialView>
        </>
    );
};

export default LoginPage;
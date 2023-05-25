import InitialView from "../UI/InitialView/InitialView";
import Card from "../UI/Card/Card";
import HText from "../UI/HText/HText";
import { Text, TouchableWithoutFeedback } from "react-native";
import From from "../UI/Form/Form";
import Form from "../UI/Form/Form";
import Link from "../UI/Link/Link";

const HomePage = ({navigation}) => {

    const redirectClick = ()=>{
        navigation.navigate('Register')
    }

    return (
        <>
            <InitialView>
                <Text>
                    Home
                </Text>
            </InitialView>
        </>
    );
};

export default HomePage;
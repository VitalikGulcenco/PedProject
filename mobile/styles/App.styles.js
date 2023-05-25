import { useEffect, useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";

export const AppStyles = () => {
  const colorScheme = useColorScheme();
  const lightColorScheme = {
    mainBGColor: '#3861CA',
    CardBGColor: '#6399F1',
    inputBgColor: '#fff',
    inputBorderColor: '#EAEAEA',
    buttonBgColor: '#2E4981',
    linkTextColor: '#FFFFFF',
  };

  const darkColorScheme = {
    mainBGColor: '#0F172A',
    CardBGColor: '#1E293B',
    inputBgColor: '#94A3B8',
    buttonBgColor: '#64748B',
    linkTextColor: '#CBD5E1',
  };
  const [userColor, setUserColor] = useState(darkColorScheme)
  useEffect(() => {
    if (colorScheme === 'dark') {
      setUserColor(darkColorScheme)
    }
    else {
      setUserColor(lightColorScheme)
    }
  }, [colorScheme])
 

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: userColor.mainBGColor ,
      justifyContent: 'flex-end',
    },
    Card: {
      paddingHorizontal: 20,
      paddingVertical: 34,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: userColor.CardBGColor,
      alignItems:'center'
    },
    H1: {
      fontWeight: 600,
      fontSize: 24,
      color: '#fff'
    },
    Input: {
      width: '100%',
      height: 40,
      paddingHorizontal: 12,
      backgroundColor:userColor.inputBgColor ,
      borderColor:userColor?.inputBorderColor ,
      borderWidth:1,
      borderStyle: 'solid',
      borderRadius: 4,
    },
    Form: {
      gap: 20,
      width: '100%',
      marginTop: 28,
      marginBottom:50,
    },
    Button: {
      width: '100%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      backgroundColor: userColor.buttonBgColor,
    },
    ButtonText: {
      fontWeight: 700,
      fontSize: 12,
      color: '#fff'
    },
    LinkText: {
      fontWeight: 500,
      fontSize: 12,
      color: userColor.linkTextColor,
    },
  });

  return styles;
};

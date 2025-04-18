import React from 'react';
import { Alert, Text } from 'react-native';
import {style} from './styles';

type MyTextProps = {
  yournameherefromprops: string
}

function handleOnPress(){
  Alert.alert('You just pressed the text component');
}

const MyText: React.FC<MyTextProps> = ({ yournameherefromprops = ''}) => {
  return <Text style={style.myText} onPress={handleOnPress}>{`Hello, ${yournameherefromprops}`}</Text>;
};

export default MyText;

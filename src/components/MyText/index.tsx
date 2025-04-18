import React from 'react';
import { Text } from 'react-native';
import {style} from './styles';

type MyTextProps = {
  yournameherefromprops: string
}

const MyText: React.FC<MyTextProps> = ({ yournameherefromprops = ''}) => {
  return <Text style={style.myText}>{`Hello, ${yournameherefromprops}`}</Text>;
};

export default MyText;

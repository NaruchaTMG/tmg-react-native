import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles.ts';

type Props = {
  isChecked: boolean;
  onPress: (tag: string, val: boolean) => void;
  text: string;
  tag: string;
}

export default function CustomCheckBox(props: Props) {
  return (
      <View style={styles.container}>
        <Pressable
            onPress={() => props.onPress(props.tag, props.isChecked)}
            style={styles.checkboxContainer}>
          {
            props.isChecked ? <Image source={require('../../../assets/icons/ic_check.png')}
                  style={{width: undefined, height: '100%', aspectRatio: 1}}/> : null
          }
        </Pressable>
        <Text style={styles.textStyle}>
          {props.text}
        </Text>
      </View>
  )
}

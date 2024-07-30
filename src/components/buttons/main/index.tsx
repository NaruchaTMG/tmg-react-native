
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../../GlobalStyles.ts';
import {styles} from './styles.ts';

type Props = {
  textButton: string,
  isActive: boolean,
  onPress: () => void,
}

export default function MainButton(props: Props) {
  return (
      <Pressable
          onPress={props.isActive ? props.onPress : null}
          style={[styles.buttonContainer,  {backgroundColor: props.isActive ? "red" : "#F2F2F2"}]}>
        <Text style={[globalStyles.notosanBold, {fontSize: 16},  {color: props.isActive ? "white" : "#95918C"}]}>
          {props.textButton ? props.textButton : "Submit"}
        </Text>
      </Pressable>
  )
}

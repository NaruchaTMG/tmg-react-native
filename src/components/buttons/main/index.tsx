
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../../GlobalStyles.ts';

export default function MainButton() {
  return (
      <Pressable style={globalStyles.buttonContainer}>
        <Text style={[globalStyles.notosanBold, {color: "white", fontSize: 16}]}>
          {"Submit"}
        </Text>
      </Pressable>
  )
}

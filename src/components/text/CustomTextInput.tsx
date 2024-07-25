import {styles} from './styles.ts';
import {Text, TextInput, View} from 'react-native';

type Props = {
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
}

export function  CustomTextInput(props: Props) {
  return (
      <View style={styles.container}>
        <View style={[styles.textInput, props.isError ? {borderColor: "red",} : {borderColor: "grey",}]}>
          <TextInput
              style={{flex: 1}}
              placeholder={props.placeholder}
          />
        </View>
        {
          props.isError && <Text style={styles.textError}>
              {props.errorMessage ? props.errorMessage : ""}
            </Text>
        }
      </View>
  )
}

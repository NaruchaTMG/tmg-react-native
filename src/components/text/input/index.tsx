import {Text, TextInput, View} from 'react-native';
import {globalStyles} from '../../../GlobalStyles.ts';

type Props = {
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  onChangeText?: (tag: string, value: string) => void;
  tag: string;
}

export function CustomTextInput(props: Props) {
  return (
      <View style={globalStyles.container}>
        <View style={[globalStyles.textInput, props.isError ? {borderColor: "red",} : {borderColor: "grey",}]}>
          <TextInput
              style={{flex: 1}}
              placeholder={props.placeholder}
              onChangeText={text => props.onChangeText && props.onChangeText(props.tag, text)}
          />
        </View>
        {
          props.isError && <Text style={globalStyles.textError}>
              {props.errorMessage ? props.errorMessage : ""}
            </Text>
        }
      </View>
  )
}

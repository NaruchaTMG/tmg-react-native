import {Text, TextInput, View} from 'react-native';
import {globalStyles} from '../../../GlobalStyles.ts';

type Props = {
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
}

export function CustomTextInput(props: Props) {
  return (
      <View style={globalStyles.container}>
        <View style={[globalStyles.textInput, props.isError ? {borderColor: "red",} : {borderColor: "grey",}]}>
          <TextInput
              style={{flex: 1}}
              placeholder={props.placeholder}
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

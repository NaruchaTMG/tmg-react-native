import {styles} from '../../../screens/auth/styles.ts';
import {StyleProp, Text, TextStyle} from 'react-native';
import {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  fontFamily: "Regular" | "Medium" | "SemiBold" | "Bold";
  fontSize: number,
  customStyle?:  StyleProp<TextStyle>
}>

export default function CustomText(props: Props) {
  function selectFontFamily(fontName: string) {
    switch (fontName) {
      case 'Regular':
        return styles.notosanRegular
      case 'Medium':
        return styles.notosanMedium
      case 'SemiBold':
        return styles.notosanSemiBold
      case 'Bold':
        return styles.notosanBold
      default: return styles.notosanRegular
    }
  }

  return (
      <Text
          style={[
            selectFontFamily(props.fontFamily ),
            {
              fontSize: props.fontSize ? props.fontSize : 20,
              color: 'white',
            },
            props.customStyle
          ]}
      >
        {
          props.children
        }
      </Text>
  );
}

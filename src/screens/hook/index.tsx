import {Button, Text, TextInput, View} from 'react-native';
import {styles} from './styles.ts';
import {useEffect, useState} from 'react';

export default function ReactHookScreen() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('Render View');
  const [form, setForm] = useState({
    firstname: 'Narucha',
    lastname: 'Chawpoaen',
  });

  useEffect(() => {
    console.log("FORM ::: " + JSON.stringify(form, undefined, 2))
  }, [form]);

  function onChangeVal(key: string, val: string) {
    console.log('onChange', text);
    setForm(prevState => (
        {
          ...prevState,
          [key]: val,
        }
    ));
  }

  function incrementCount() {
    setCount((prevState) => {
      return prevState + 1;
    });
    setCount(prevState => prevState + 1);
    setCount(prevState => prevState + 1);
    setCount(prevState => prevState + 1);
  }

  function decrementCount() {
    setCount(prevState => prevState - 1);
    setCount(prevState => prevState - 1);
    setCount(prevState => prevState - 1);
    setCount(prevState => prevState - 1);
  }

  console.log('Count ' + count);
  return text === 'Render View' ?
      (
          <View style={styles.container}>
            <Text style={{fontSize: 20}}>{`Loading...`}</Text>
            <Button title={'Button'} onPress={() => setText('')}/>
          </View>
      )
      : (
          <View style={styles.container}>
            <Text style={{fontSize: 20}}>{`${count} CLICK`}</Text>
            <View style={{flexDirection: 'row'}}>
              <Button title={'Increase'} onPress={() => incrementCount()}/>
              <Button title={'Decrease'} onPress={() => decrementCount()}/>
            </View>
            <Text
                style={{fontSize: 20}}>{`First Name : ${form.firstname} `}</Text>
            <TextInput onChangeText={text => onChangeVal("firstname", text)} style={{
              backgroundColor: 'grey',
              fontSize: 20,
              height: 40,
              width: 200,
            }}/>
            <Text
                style={{fontSize: 20}}>{`Last Name : ${form.lastname} `}</Text>
            <TextInput key={'lastname'} onChangeText={text => onChangeVal("lastname",text)}
                       style={{
                         backgroundColor: 'grey',
                         fontSize: 20,
                         height: 40,
                         width: 200,
                       }}/>
            {/*<TextInput />*/}
          </View>
      );
}

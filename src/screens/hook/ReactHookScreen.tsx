import {Button, Text, TextInput, View} from 'react-native';
import {styles} from './styles.ts';
import {useEffect, useState} from 'react';

type Props = {
  firstname: string,
  lastname: string,
}

export default function ReactHookScreen() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('Render View');
  const [form, setForm] = useState<Props | null | undefined>(null);
  const fullname = `${form?.firstname} ${form?.lastname}`
  const multipleCount = count * 5
  let i: any;

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(i)
    }

    console.log('FORM ::: ' + JSON.stringify(form, undefined, 2));
  }, [form]);

  function startInterval() {
    i = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }

  function onChangeVal(key: string, val: string) {
    console.log('onChange', val);
    setForm(prevState => (
        prevState ?
            {...prevState, [key]: val}
            : {
              firstname: key === 'firstname' ? val : '',
              lastname: key === 'lastname' ? val : '',
            }
        )
    );
  }

  function incrementCount() {
    setCount((prevState) => {
      return prevState + 1;
    });
  }

  function decrementCount() {
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
            <Text style={{fontSize: 20}}>
              {multipleCount}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Button title={'Increase'} onPress={() => incrementCount()}/>
              <Button title={'Decrease'} onPress={() => decrementCount()}/>
              <Button title={'Start interval'} onPress={() => startInterval()}/>
            </View>
            <Text style={{fontSize: 20, padding: 10}}>
              {fullname}
            </Text>
            <Text
                style={{fontSize: 20, padding: 10}}>{`First Name : ${form?.firstname} `}
            </Text>
            <TextInput
                onChangeText={text => onChangeVal('firstname', text)}
                style={{
                  backgroundColor: 'grey',
                  fontSize: 20,
                  height: 40,
                  width: 200,
                }}/>
            <Text
                style={{fontSize: 20}}>{`Last Name : ${form?.lastname} `}
            </Text>
            <TextInput
                key={'lastname'}
                onChangeText={text => onChangeVal('lastname', text)}
                style={{
                  backgroundColor: 'grey',
                  fontSize: 20,
                  height: 40,
                  width: 200,
                }}/>
          </View>
      );
}

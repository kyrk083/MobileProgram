import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';

import Header from './components/Header';
import TextList from './components/TextList';
import InputBtn from './components/InputBtn';

export default function App() {
  const [myTitle, setMyTitle] = useState('제목을 입력하세요.');
  const [todoTitle, setTodoTitle] = useState(['제목 1', '제목 2']);
  const [myText, setMyText] = useState('내용을 입력하세요.');
  const [todoText, setTodoText] = useState(['여기에 내용이', '표시됩니다']);
  const [myDate, setMyDate] = useState(new Date().toISOString().split('T')[0]);
  const [todoDate, setTodoDate] = useState(['2023-01-01', '2023-01-02']);

  const onChangeTitle = (text) => {
    setMyTitle(text);
  };

  const onChangeInput = (event) => {
    setMyText(event);
  };

  const onAddTextInput = () => {
    const formattedDate = `${myDate}`;

    setTodoTitle([...todoTitle, myTitle]);
    setTodoText([...todoText, myText]);
    setTodoDate([...todoDate, formattedDate]);

    setMyTitle('제목을 입력하세요.');
    setMyText('내용을 입력하세요.');
    setMyDate(new Date().toISOString().split('T')[0]);
  };

  const onTextDelete = (position) => {
    const newArrayTitle = todoTitle.filter((num, index) => {
      return position !== index;
    });
    const newArrayText = todoText.filter((num, index) => {
      return position !== index;
    });
    const newArrayDate = todoDate.filter((num, index) => {
      return position !== index;
    });

    setTodoTitle(newArrayTitle);
    setTodoText(newArrayText);
    setTodoDate(newArrayDate);
  };

  return (
    <View>
      <Header name="TO-DO List" />

      <TextInput
        style={styles.input}
        value={myTitle}
        onChangeText={onChangeTitle}
      />

      <TextInput
        style={styles.input}
        value={myText}
        onChangeText={onChangeInput}
      />

      <DatePicker
        style={styles.datePick}
        date={myDate}
        onDateChange={(date) => {
          setMyDate(date);
        }}
        mode="date"
        format="YYYY-MM-DD"
        confirmBtnText="확인"
        cancelBtnText="취소"
        customStyles={{
          dateIcon: { display: 'none' },
          dateInput: { height: 28 },
        }}
      />

      <InputBtn add={onAddTextInput} />

      <ScrollView style={{ width: '100%' }} bounce={true}>
        <TextList
          txt={todoTitle}
          txt2={todoText}
          txt3={todoDate}
          delete={onTextDelete}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    fontSize: 12,
    backgroundColor: '#F2F2F2',
    color: '#696969',
    padding: 10,
  },
  datePick: {
    width: '100%',
  },
});

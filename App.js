import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Text } from 'react-native';
import { useState } from 'react';
import DatePicker from 'react-native-datepicker';

import Header from './components/Header';
import TextList from './components/TextList';
import InputBtn from './components/InputBtn';

//기본 앱에서 제목 및 날짜 기록, DatePicker 추가
//터치 시 취소선으로 완료된 리스트 표시가능, 길게 터치 시 리스트 삭제

export default function App() {
  const [myTitle, setMyTitle] = useState('제목을 입력하세요.');
  const [todoTitle, setTodoTitle] = useState(['제목 1', '제목 2']);
  const [myText, setMyText] = useState('내용을 입력하세요.');
  const [todoText, setTodoText] = useState(['여기에 내용이', '표시됩니다']);
  const [myDate, setMyDate] = useState(new Date());
  const [todoDate, setTodoDate] = useState([
    new Date('2023-01-01').setHours(0, 0, 0, 0),
    new Date('2023-01-02').setHours(0, 0, 0, 0),
  ]);

  const onChangeTitle = (text) => {
    setMyTitle(text);
  };

  const onChangeInput = (event) => {
    setMyText(event);
  };

  const onAddTextInput = () => {
    const formattedDate = `${myDate.getFullYear()}-${String(
      myDate.getMonth() + 1
    ).padStart(2, '0')}-${String(myDate.getDate()).padStart(2, '0')}`;

    setTodoTitle([...todoTitle, myTitle]);
    setTodoText([...todoText, myText]);
    setTodoDate([...todoDate, formattedDate]);

    setMyTitle('제목을 입력하세요.');
    setMyText('내용을 입력하세요.');
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
        onDateChange={(myDate) => {
          setMyDate(myDate);
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

      <ScrollView style={{ width: '100%' }} bounce={true} />

      <TextList
        txt={todoTitle}
        txt2={todoText}
        txt3={todoDate}
        delete={onTextDelete}
      />
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

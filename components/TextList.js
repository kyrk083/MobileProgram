import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextList = (props) => {
  const [deletedItems, setDeletedItems] = React.useState([]);

  const toggleItem = (idx) => {
    if (deletedItems.includes(idx)) {
      setDeletedItems(deletedItems.filter((item) => item !== idx));
    } else {
      setDeletedItems([...deletedItems, idx]);
    }
  };

  const deleteItem = (idx) => {
    props.delete(idx);
    setDeletedItems(deletedItems.filter((item) => item !== idx));
  };

  return (
    <>
      {props.txt.map((item, idx) => (
        <TouchableOpacity
          style={[
            styles.textList,
            deletedItems.includes(idx) && styles.deletedItem,
          ]}
          key={idx}
          onPress={() => toggleItem(idx)}
          onLongPress={() => deleteItem(idx)}>
          <Text style={styles.titleStyle}>{item}</Text>
          <Text
            style={[
              styles.textStyle,
              deletedItems.includes(idx) && styles.deletedText,
            ]}>
            {props.txt2[idx]}
          </Text>
          {props.txt3[idx] && (
            <Text
              style={[
                styles.textStyle,
                deletedItems.includes(idx) && styles.deletedText,
              ]}>
              {new Date(props.txt3[idx]).toLocaleDateString()}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  textList: {
    fontSize: 15,
    backgroundColor: '#DCDCDC',
    padding: 10,
    marginBottom: 5,
  },
  deletedItem: {
    textDecorationLine: 'line-through',
    color: 'rgba(105,105,105,0.5)',
  },
  titleStyle: {
    fontWeight: 'bold',
    color: '#696969',
    marginBottom: 5,
  },
  textStyle: {
    color: '#696969',
  },
  deletedText: {
    color: 'rgba(105,105,105,0.5)',
  },
});

export default TextList;

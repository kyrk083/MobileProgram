import { View,Button, StyleSheet} from 'react-native';

const InputBtn = (props) => {
  return (
    <View style={styles.container}>
      <Button color="#696969" title="입력" onPress={() => props.add()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    margin:15
  }
})
export default InputBtn;

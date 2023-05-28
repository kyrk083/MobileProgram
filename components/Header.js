import { Text, View, StyleSheet, Button } from 'react-native';

const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.mainText}>{props.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#696969',
    padding: 12,
    width: '100%',
    justfiyContent: 'center',
    marginTop:40,
    marginBottom:15
  },
  mainText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;

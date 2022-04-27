import { StyleSheet,ScrollView } from 'react-native';
import { CreateEventScreen } from './Screens/CreateEventScreen'
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <CreateEventScreen/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    margin:20,
    height:'100%',
  },
  header:{
    backgroundColor:"red",
  }
});



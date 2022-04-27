import { StyleSheet,View  , Text} from 'react-native';

const Header = () => {
    return(
        <View style={styles.container} >
            <Text style={{fontSize:18 , color:"#4db579"}} >Cancel</Text>
            <Text style={{fontSize:18}} >New Event</Text>
            <Text style={{fontSize:18}} >Publish</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:60,        
    }
})
export { Header }
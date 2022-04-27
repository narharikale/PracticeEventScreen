import { TextInput,StyleSheet , Text, View} from 'react-native'

const NewEventInput = () => {
    return (
        <View style={styles.container} >
            <TextInput style={styles.inputContainer} placeholder='Event Name' />
            <Text style={styles.hostName} >With SOS-42</Text>
            <Text style={styles.coHostName} >Add Co-host or Guest</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f3f2e3',
        borderRadius:5,
    },
    inputContainer:{
        borderBottomWidth:1,
        borderColor:'#c4c4b4',
        fontSize:16,
        marginVertical:8,
        paddingHorizontal:20,
        paddingVertical:5
    },
    hostName:{
        borderBottomWidth:1,
        borderColor:'#c4c4b4',
        fontSize:16,
        marginVertical:8,
        paddingHorizontal:20,
        paddingVertical:5
    },
    coHostName:{
        fontSize:16,
        marginVertical:8,
        paddingHorizontal:20,
        paddingVertical:5
    }
})

export { NewEventInput }
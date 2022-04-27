import {StyleSheet , Text, View , Pressable} from 'react-native'
import { useState } from 'react'
import { SelectDate } from './SelectDate'
import { SelectTime } from './SelectTime'


const SelectDateAndTime = () => {
    const [showCalender , setShowCalender] = useState(false)
    const [showTime , setShowTime] = useState(false)
    const [date, setDate] = useState('Today');
    const [time, setTime] = useState('6:00 PM');

    const toggleCalender = () => {
        setShowCalender(!showCalender)
        setShowTime(false)
    }
    const toggleTime = () => {
        setShowTime(!showTime)
        setShowCalender(false)
    }
    return (
        <View style={styles.container} >
            <View style={styles.commonContainer}>
                <Text style={{ fontSize :16 }}> Date </Text>
                    <Pressable onPress={ toggleCalender }>
                <Text style={{ fontSize :16 , color: showCalender ? '#4db579':'black'}} >{date}</Text>
                </Pressable>
            </View>
            <View style={styles.commonContainer}>
                { showCalender && <SelectDate options= { options } setDate ={ setDate }/> }
            </View>
            <View style={styles.coHostName}>
                <Text style={{ fontSize :16 }} >Time</Text>
                <Pressable onPress={ toggleTime }>
                    <Text style={{ fontSize :16 }} >{time}</Text> 
                </Pressable>
            </View>
            <View style={styles.TimeContainer } >
                { showTime && <SelectTime options= { options } setTime = { setTime } time={ time } /> }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f3f2e3',
        borderRadius:5,
        marginTop:20,
    },
    inputContainer:{
        borderBottomWidth:1,
        borderColor:'#c4c4b4',
        fontSize:16,
        marginVertical:8,
        paddingHorizontal:20,
        paddingVertical:5
    },
    commonContainer:{
        borderColor:'#c4c4b4',
        fontSize:16,
        marginVertical:8,
        paddingHorizontal:20,
        paddingVertical:5,
        flexDirection:"row",
        justifyContent:'space-between',
    },
    coHostName:{
        fontSize:16,
        marginVertical:8,
        paddingHorizontal:20,
        paddingVertical:5,
        flexDirection:"row",
        justifyContent:'space-between',
    },
    TimeContainer:{
        alignItems:'center',
        fontSize:16
    }
})

const options = {
    backgroundColor: '#f3f2e3',  
    selectedTextColor: '#fff',
    mainColor: '#0057ff',
  
}
export { SelectDateAndTime }
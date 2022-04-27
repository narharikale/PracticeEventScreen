import { useState } from "react"
import { View, Switch, StyleSheet, Text, TextInput,KeyboardAvoidingView } from "react-native"
import { Header } from "../components/Header"
import { NewEventInput } from "../components/NewEventInput"
import { SelectDateAndTime } from "../components/SelectDateAndTime"

const CreateEventScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <Header/>
            <NewEventInput/>
            <SelectDateAndTime/>
            <View style={styles.hostName}>
                <Text style={{ fontSize: 16 }}> Replays</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#99dcb5" }}
                    thumbColor={isEnabled ? "#4db579" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={ toggleSwitch }
                    value={isEnabled}
                />
            </View>
            <View style={styles.inputContainer}>
                <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}> 
                      <TextInput
                        multiline
                        style={styles.inputContainerText}
                        placeholder='Description' />
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    hostName: {
        backgroundColor: '#f3f2e3',
        borderRadius: 5,
        fontSize: 16,
        marginVertical: 8,
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#f3f2e3',
        borderRadius: 5,
        flexBasis: 200,
        height: 200
    },
    inputContainerText: {
        marginVertical: 8,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignSelf: "stretch",
        fontSize: 16,
        width: '100%',
        alignSelf: 'flex-start'
    }
})
export { CreateEventScreen }
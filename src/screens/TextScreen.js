import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {

    const [password, setPassword] = useState('');

    return <View>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText = {newValue => {
                setPassword(newValue)
            }}
        />
        {password.length <  4 ? <Text>Passwrod at least 4 characters</Text>: null}
    </View>
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 15
    }
});

export default TextScreen;
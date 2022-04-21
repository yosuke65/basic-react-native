import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AMOUNT = 1

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increment', payload: AMOUNT })
            }} />
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrement', payload: AMOUNT })
            }} />
            <Text>Current Count: { state.count }</Text>
        </View>
    );
}

const style = StyleSheet.create({})

export default CounterScreen;
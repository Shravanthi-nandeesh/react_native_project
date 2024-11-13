import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
    return (
        <View>
            <View style={styles.searchSecion}>

                <TextInput
                    style={styles.searchField}
                    placeholder='Search'
                />
                <TouchableOpacity onPress={() => { alert("hello") }} style={styles.searchIcon}>
                    <Icon name={'search'} size={20} color="#006ffd" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchSecion: {
        position: "relative",
    },

    searchField: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        borderColor: "#E8E8E8",
        marginBottom: 16,
        backgroundColor:"#fff"
    },
    searchIcon: {
        position: "absolute", right: 10,
        top: 15,
    }
})
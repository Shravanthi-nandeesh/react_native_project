import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import Search from './Search'
import OfferSection from './OfferSection'
import Categories from './Categories'

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#FFF" }} >
            <View style={styles.projectContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Search/>
                    <OfferSection/>
                    <Categories/>

                  
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    projectContainer: {
        paddingHorizontal: 15,
        marginTop: 10,
        backgroundColor: '#8d70ee0d'

    }
})
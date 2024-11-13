import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OfferSection = () => {
    return (
        <View style={styles.offerSection}>
            <Image source={require("../../assets/offer_img.png")} resizeMode='stretch' style={styles.offerimg} />
        </View>
    )
}

export default OfferSection

const styles = StyleSheet.create({
    offerSection: {
        borderRadius: 10,
        backgroundColor: "#8d70ee",
        height: 200
    },
    offerimg: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    }
})
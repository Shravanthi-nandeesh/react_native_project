import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const Categories = () => {
    return (
        <View style={styles.CategoriesSection}>
            <View style={styles.CategoriesHeadingSection}>
                <Text style={styles.categoriesHeading}>Categories</Text>
                <TouchableNativeFeedback>
                    <Text style={styles.link}> See all</Text>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.CategoriesBlock}>
                <View style={styles.categoriesCard}>
                    <View style={styles.cardImgSec}>

                        <Image source={require("../../assets/javascript.png")} resizeMethod='resize' resizeMode='contain' style={styles.cardImg} />
                    </View>
                    <Text style={styles.cardText}>Javascript</Text>
                    <View>
                        <TouchableNativeFeedback>
                            <Text style={styles.learnProject}>View Projects</Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={styles.categoriesCard}>
                    <View style={styles.cardImgSec}>

                        <Image source={require("../../assets/react.png")} resizeMethod='resize' resizeMode='contain' style={styles.cardImg} />
                    </View>
                    <Text style={styles.cardText}>Javascript</Text>
                    <View>
                        <TouchableNativeFeedback>
                            <Text style={styles.learnProject}>View Projects</Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
            {/* Second block */}
            <View style={styles.CategoriesBlock}>
                <View style={styles.categoriesCard}>
                    <View style={styles.cardImgSec}>

                        <Image source={require("../../assets/python.png")} resizeMethod='resize' resizeMode='contain'style={styles.cardImg} />
                    </View>
                    <Text style={styles.cardText}>Javascript</Text>
                    <View>
                        <TouchableNativeFeedback>
                            <Text style={styles.learnProject}>Python</Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={styles.categoriesCard}>
                    <View style={styles.cardImgSec}>

                        <Image source={require("../../assets/react-native.png")} resizeMethod='resize' resizeMode='contain' style={styles.cardImg} />
                    </View>
                    <Text style={styles.cardText}>React-native</Text>
                    <View>
                        <TouchableNativeFeedback>
                            <Text style={styles.learnProject}>View Projects</Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    CategoriesSection: {
        marginVertical:15
    },
    CategoriesHeadingSection: {
        // marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    categoriesHeading: {
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 15
    },
    link: {
        color: "#8d70ee"
    },
    CategoriesBlock: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width:"100%"
    },
    categoriesCard: {
        borderRadius: 10,
        padding: 15,
        width: "48%",marginRight:10,
        // backgroundColor: "#3b7080",
        backgroundColor: '#ffffff',
        marginVertical: 5,
        borderColor: "#fff",
        borderWidth: 0.8,
        shadowColor: '#3b7080',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 5,
    },
    cardImgSec: {
        height: 50,
        width: 50,
    },
    cardImg: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    cardText: {
        marginVertical: 15,
        color: "#3b7080",
        fontSize: 18,
    },
    learnProject: {
        fontSize: 16,
        width: 140,
        backgroundColor: "#3b7080",
        borderRadius: 10,
        textAlign: "center",
        padding: 10,
        color:"#FFF"
    }
})
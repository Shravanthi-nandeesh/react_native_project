import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: any) => {
    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
            <View style={styles.EditprofileImageSec}>
                </View>
                <View style={styles.profileImageSec}>
                    <Image source={require("../assets/profile_icon.png")} style={styles.profileImage} />
                    <Text style={styles.userName}>Shravanthi A N</Text>

                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View>
                <Text>Footer</Text>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userName:{
        marginTop:15,
        fontSize:16
    },
    EditprofileImageSec:{
        verticalAlign: "middle",
        alignItems: "flex-end",
        marginVertical: 15,
        marginHorizontal:15
    },
    EditProfileImage:{
        width:20,
        height:20
    },

    profileImageSec: {
        width: "100%",
        verticalAlign: "middle",
        alignItems: "center",
        marginVertical: 15
    },
    profileImage: {
        width: 80,
        height: 80
    }
})
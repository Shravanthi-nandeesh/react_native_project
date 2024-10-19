import { Button, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View, Alert, Platform } from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const Profile = () => {
  const [isInputFocused, setInputFocused] = useState(false);

  const editImg=()=>{
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   console.log(image);
    // });
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          <View style={styles.editImg}>
            <Image source={require("../assets/profile_icon.png")} style={styles.profileImg} />
            <View style={styles.editIconSection}>
              <Image source={require("../assets/edit_icon.png")} style={styles.editIcon} />
            </View>
          </View>
          <Text style={styles.profileName}>Shravanthi</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.Profilelabel}>Name</Text>
          <TextInput
            placeholder='Name'
            style={styles.inputField}

          />
          <Text style={styles.Profilelabel}>Email</Text>
          <TextInput
            placeholder='Email'
            style={styles.inputField}
            keyboardType="email-address"

          />
          <Text style={styles.Profilelabel}>Phone number</Text>
          <TextInput
            placeholder='Phone number'
            style={styles.inputField}
            keyboardType='phone-pad'

          />
          <Text style={styles.Profilelabel}>Password</Text>
          <TextInput
            placeholder='Password'
            style={styles.inputField}
            secureTextEntry

          />
        </View>
        <View style={styles.buttonSection}>
          <View style={styles.button}>
            <Button
              title="Save"
              color="#2F3C7E"
              onPress={() => Alert.alert('Button pressed')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  editImg: {
    alignItems: "center",
    backgroundColor: "#FBEAEB",
    padding: 15,
    borderRadius: 100,
    justifyContent: "center",
    width: 150,
    height: 150,
  },
  profileImg: {
    width: "100%",
    height: "100%",
  },
  editIconSection: {
    width: 20,
    backgroundColor: "#2F3C7E",
    borderRadius: 100,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    position: "absolute",
    bottom: 14,
    right: 0,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  profileName: {
    fontWeight: "400",
    fontSize: 18,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 30, // Space below inputs to the button
  },
  inputField: {
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 15, // Spacing between inputs
  },
  Profilelabel: {
    marginTop: 10,
  },
  buttonSection: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: 100,
    marginBottom: 15
  },
});

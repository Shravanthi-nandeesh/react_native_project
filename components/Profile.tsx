import { Button, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View, Alert, Platform, Modal, Pressable, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropdownComponent from './Dropdown';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const editImg = () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   console.log(image);
    // }).catch(e => {
    //   alert("no image");
    // });
  }

  const profileUpdate = () => {
    alert("Profile has been updated successfully.");
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
            <TouchableOpacity onPress={editImg} style={styles.editIconSection}>
              <Image source={require("../assets/edit_icon.png")} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Shravanthi</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.Profilelabel}>Name</Text>
          <TextInput placeholder='Name' style={styles.inputField} />
          <Text style={styles.Profilelabel}>Designation</Text>
          <DropdownComponent/>
          <Text style={styles.Profilelabel}>Email</Text>
          <TextInput placeholder='Email' style={styles.inputField} keyboardType="email-address" />
          <Text style={styles.Profilelabel}>Phone number</Text>
          <TextInput placeholder='Phone number' style={styles.inputField} keyboardType='phone-pad' />
          <Text style={styles.Profilelabel}>Password</Text>
          <TextInput placeholder='Password' style={styles.inputField} secureTextEntry />
          
        </View>
        
    
        <View style={styles.buttonSection}>
          <View style={styles.button}>
            <Button title="Save" color="#2F3C7E" onPress={() => setModalVisible(true)} />
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Profile has been updated successfully.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black
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
    bottom: 0,
    right: -60
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
    marginBottom: 30,
  },
  inputField: {
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 15,
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
    marginBottom: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 45,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#2F3C7E',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

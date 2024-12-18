import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, ActivityIndicator } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../hooks/firebaseAuth';
const Login = () => {
    const [firebaseActivityLoaded, setFirebaseActivityLoaded] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const navigation = useNavigation();
    const [errorAllowLogin, setErrorAllowLogin] = useState<ErrorState>({});

    const handleSignIn = () => {
        // auth
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user, "user has logged in")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                switch (errorCode) {
                    case 'auth/invalid-email':
                        console.log("The email address is not valid.");
                        break;
                    case 'auth/user-disabled':
                        console.log("The user corresponding to the given email has been disabled.");
                        break;
                    case 'auth/user-not-found':
                        console.log("No user found with this email address.");
                        break;
                    case 'auth/wrong-password':
                        console.log("The password is invalid for the given email.");
                        break;
                    case 'auth/invalid-credential':
                        console.log("The email address you entered isn't connected to an account.");
                        setErrorAllowLogin({ ...errorAllowLogin, invalidCredential: true });
                    default:
                        console.log(errorMessage); 
                }
            });
    }

    useEffect(() => {
        // Signin connect
    }, [])

    interface ErrorState {
        email?: string;
        password?: string;
        invalidCredential?: boolean
    }
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmail = (email: string) => {
        setEmail(email);
        errorAllowLogin?.email && delete errorAllowLogin.email;
        if (email.length === 0) {
            setErrorAllowLogin((prev) => ({ ...prev, email: "Email is required." }));
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setErrorAllowLogin((prev) => ({ ...prev, email: "Invalid email address!" }));
            }
            else {
                delete errorAllowLogin.email
            }
        }
    };

    const handlePassword = (password: string) => {
        setPassword(password);
        if (password.length == 0) {
            setErrorAllowLogin({ ...errorAllowLogin, password: "Password is required!" });
        }
        else {
            delete errorAllowLogin.password
        }
    };

    const [isSecure, setIsSecure] = useState(true);

    const togglePasswordVisibility = () => {
        setIsSecure(!isSecure);
    };

    return (
        <SafeAreaView style={styles.LoginContainer}>
            {/* <ActivityIndicator size={'large'} color={'#006ffd'} /> */}
            <View style={styles.HeadingSection}>
                <Text style={styles.loginHeading}>Login</Text>
                <TouchableOpacity onPress={() => { alert("Login") }}>
                    <Text style={styles.signButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signInSection}>
                <TextInput
                    value={email}
                    onChangeText={handleEmail}
                    style={styles.inputField}
                    placeholder='Email'
                    placeholderTextColor={"#BDBDBD"}
                    keyboardType='email-address'
                />
                {errorAllowLogin?.email && <Text style={styles.errorMessages}>{errorAllowLogin?.email}</Text>}
                <View style={styles.passwordContainer}>
                    <TextInput
                        value={password}
                        onChangeText={handlePassword}
                        style={styles.inputField}
                        placeholder='Password'
                        placeholderTextColor={"#BDBDBD"}
                        secureTextEntry={isSecure}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                        <Icon name={isSecure ? 'eye-off' : 'eye'} size={20} color="#006ffd" />
                    </TouchableOpacity>
                </View>
                {errorAllowLogin?.password && <Text style={styles.errorMessages}>{errorAllowLogin?.password}</Text>}
                <View>
                    {errorAllowLogin?.invalidCredential == true &&
                        <Text style={styles.inlineSignup}>
                            The email address you entered isn't connected to an account.
                            <TouchableWithoutFeedback onPress={() => { navigation.navigate("SignUp"); }}>
                                <Text style={styles.signupText}>Sign Up</Text>
                            </TouchableWithoutFeedback>
                        </Text>
                    }
                    <Text style={styles.inlineSignup}>
                        The email address you entered isn't connected to an account.
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("SignUp"); }}>
                            <Text style={styles.signupText}> Sign Up</Text>
                        </TouchableWithoutFeedback>
                    </Text>
                    <TouchableWithoutFeedback onPress={() => { handleSignIn() }} disabled={(Object.keys(errorAllowLogin).length == 0 && (email.length != 0 && password.length != 0)) ? false : true} >
                        <Text style={[styles.loginButton, (Object.keys(errorAllowLogin).length == 0 && (email.length != 0 && password.length != 0)) ? styles.active : styles.blur]}>Login</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { alert("forgot password") }}>
                        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        </SafeAreaView>
    );
};
export default Login;

const styles = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        padding: 15,
        marginTop: 30
    },
    inlineSignup: {
        fontSize: 14
    },
    signupText: {
        textDecorationLine: "underline",
        color: "#006FFD",
        lineHeight: 20,
        marginLeft: 100,
        position: "relative"
    },

    HeadingSection: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginHeading: {
        fontSize: 30,
        fontWeight: "600",
    },
    signButton: {
        color: "#006ffd",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 80,
    },
    active: {
        backgroundColor: "#006ffd"
    },
    blur: {
        backgroundColor: "#81a8dd"
    },
    // SignIn section
    signInSection: {
        marginTop: 32,
    },
    inputField: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
        marginBottom: 16,
    },
    passwordContainer: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 15, 

    },
    loginButton: {
        width: "100%",
        paddingVertical: 16,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#006FFD",
        color: "#FFFFFF",
        fontWeight: "600",
        borderRadius: 50,
        marginTop: 167
    },
    forgotPasswordText: {
        color: "#006FFD",
        fontWeight: "600",
        textAlign: "center",
        marginTop: 16
    },
    errorMessages: {
        color: "red",
        fontSize: 14,
        marginBottom: 16,
        fontWeight: "500"

    }
});

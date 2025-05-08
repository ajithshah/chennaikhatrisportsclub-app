import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validatePhoneNumber = (text: string) => {
    // Basic validation - 10 digits
    const isValidNumber = /^[0-9]{10}$/.test(text);
    setIsValid(isValidNumber);
    setPhoneNumber(text);
  };

  const handlePress = () => {
    if (isValid) {
      router.push("/auth/otp");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#1e3c72", "#2a5298"]} style={styles.background} />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.content}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          
          <Text style={styles.title}>Login to your account</Text>
          <Text style={styles.subtitle}>
            Enter your mobile number to receive a verification code
          </Text>
          
          <View style={styles.inputContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>+91</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              keyboardType="phone-pad"
              maxLength={10}
              value={phoneNumber}
              onChangeText={validatePhoneNumber}
            />
          </View>
          
          <Pressable 
            style={({ pressed }) => [
              styles.button,
              !isValid && styles.buttonDisabled,
              pressed && isValid && styles.buttonPressed
            ]}
            disabled={!isValid}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>Send OTP</Text>
          </Pressable>

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By continuing, you agree to our{" "}
              <Text style={styles.termsLink}>Terms & Conditions</Text> and{" "}
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 40,
    textAlign: "center",
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 35,
    width: "100%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  countryCode: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRightWidth: 0,
    height: 56,
  },
  countryCodeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 18,
    color: "white",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    height: 56,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: "rgba(76, 175, 80, 0.4)",
  },
  buttonPressed: {
    backgroundColor: "#388E3C",
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  termsContainer: {
    marginTop: 20,
    alignItems: "center",
    maxWidth: 300,
  },
  termsText: {
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 18,
  },
  termsLink: {
    color: "#BBDEFB",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
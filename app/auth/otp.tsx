import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OTPScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputs = useRef<(TextInput | null)[]>([]);

  // Handle timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle OTP input change
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste of full OTP
      const otpArray = value.slice(0, 4).split("");
      const newOtp = [...otp];
      
      otpArray.forEach((digit, idx) => {
        if (idx < 4) {
          newOtp[idx] = digit;
        }
      });
      
      setOtp(newOtp);
      
      // Focus last field or submit if all filled
      if (otpArray.length === 4) {
        inputs.current[3]?.blur();
      } else {
        inputs.current[Math.min(otpArray.length, 3)]?.focus();
      }
    } else {
      // Handle single digit input
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace navigation
  const handleKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      // Focus previous input when backspace is pressed on empty input
      inputs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const verifyOtp = () => {
    const otpValue = otp.join("");
    
    // Check if OTP is complete
    if (otpValue.length !== 4) {
      Alert.alert("Error", "Please enter the complete verification code");
      return;
    }

    setIsVerifying(true);

    // Simulating verification process
    setTimeout(() => {
      // For demo purposes, any 4-digit code is accepted
      // In production, validate with your backend service
      setIsVerifying(false);
      
      // Navigate to main app
      router.replace("/(tabs)");
    }, 1500);
  };

  // Resend OTP
  const resendOtp = () => {
    // Reset the inputs
    setOtp(["", "", "", ""]);
    inputs.current[0]?.focus();
    
    // Reset timer
    setTimer(30);
    
    // Show confirmation to user
    Alert.alert("Success", "A new verification code has been sent");
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#2b5876", "#4e4376"]} style={styles.background} />
      
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
          
          <Text style={styles.title}>Verification Code</Text>
          <Text style={styles.subtitle}>
            We've sent a verification code to your phone
          </Text>
          
          <View style={styles.otpContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(input) => (inputs.current[index] = input)}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={4} // Allow pasting full OTP
                value={otp[index]}
                onChangeText={(value) => handleOtpChange(index, value)}
                onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
                selectionColor="white"
              />
            ))}
          </View>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={verifyOtp}
            disabled={isVerifying}
          >
            {isVerifying ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Verify & Continue</Text>
            )}
          </TouchableOpacity>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>
              Didn't receive the code?{" "}
            </Text>
            {timer > 0 ? (
              <Text style={styles.timerText}>Resend in {timer}s</Text>
            ) : (
              <TouchableOpacity onPress={resendOtp}>
                <Text style={styles.resendLink}>Resend Code</Text>
              </TouchableOpacity>
            )}
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
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 30,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: 280,
    marginBottom: 30,
  },
  otpInput: {
    width: 55,
    height: 55,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#36d7b7",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
  },
  resendText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 14,
  },
  timerText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 14,
  },
  resendLink: {
    color: "white",
    fontWeight: "500",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});
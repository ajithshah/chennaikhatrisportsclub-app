import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSequence,
    withTiming
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent({ onFinish }: { onFinish: () => void }) {
  // Animation values
  const logoScale = useSharedValue(0.8);
  const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const lineWidth = useSharedValue(0);

  // Start animations
  useEffect(() => {
    // Logo animation
    logoScale.value = withSequence(
      withTiming(1.2, { duration: 800, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
      withTiming(1, { duration: 500, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
    );
    logoOpacity.value = withTiming(1, { duration: 1000 });
    
    // Text animation
    textOpacity.value = withDelay(
      800, 
      withTiming(1, { duration: 800 })
    );
    
    // Line animation
    lineWidth.value = withDelay(
      1000,
      withTiming(width * 0.7, { duration: 800, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
    );
    
    // Hide splash screen after animations complete
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animated styles
  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }]
  }));
  
  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value
  }));
  
  const lineStyle = useAnimatedStyle(() => ({
    width: lineWidth.value
  }));

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#101318', '#1a1f25']}
        style={styles.background}
      />
      
      <Animated.View style={[styles.logoContainer, logoStyle]}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
      
      <Animated.View style={textStyle}>
        <Text style={styles.title}>Chennai Khatri Sports Club</Text>
      </Animated.View>
      
      <Animated.View style={[styles.line, lineStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  line: {
    height: 2,
    backgroundColor: '#36d7b7',
    marginTop: 20,
  }
});
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Alert, StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function SettingsScreen() {
  // Get text color for consistent styling
  const textColor = useThemeColor({}, 'text');
  
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => {
            // Navigate to login screen
            router.replace("/auth/login");
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient 
        colors={["#4c669f", "#3b5998", "#192f6a"]} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }} 
        style={styles.background} 
      />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, {color: "white"}]}>
            Settings
          </Text>
          <View style={styles.divider} />
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="person-circle-outline" size={22} color="white" />
            <Text style={[styles.sectionTitle, {color: "white"}]}>
              Account
            </Text>
          </View>
          
          <View style={styles.card}>
            <View style={styles.profileSection}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>CK</Text>
                </View>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.userName}>
                  User Profile
                </Text>
                <Text style={styles.userPhone}>
                  +91 9876543210
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.6)" />
            </View>
          </View>
          
          <View style={styles.settingsOptions}>
            <TouchableOpacity style={styles.settingsOption}>
              <View style={styles.settingsOptionIcon}>
                <Ionicons name="notifications-outline" size={20} color="white" />
              </View>
              <Text style={styles.settingsOptionText}>Notifications</Text>
              <Ionicons name="chevron-forward" size={18} color="rgba(255,255,255,0.6)" style={styles.chevron} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingsOption}>
              <View style={styles.settingsOptionIcon}>
                <Ionicons name="shield-checkmark-outline" size={20} color="white" />
              </View>
              <Text style={styles.settingsOptionText}>Privacy</Text>
              <Ionicons name="chevron-forward" size={18} color="rgba(255,255,255,0.6)" style={styles.chevron} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingsOption}>
              <View style={styles.settingsOptionIcon}>
                <Ionicons name="help-circle-outline" size={20} color="white" />
              </View>
              <Text style={styles.settingsOptionText}>Help & Support</Text>
              <Ionicons name="chevron-forward" size={18} color="rgba(255,255,255,0.6)" style={styles.chevron} />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={20} color="white" style={styles.logoutIcon} />
            <Text style={styles.logoutText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  divider: {
    height: 3,
    width: 40,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 2,
    marginTop: 8,
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    marginLeft: 8,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
    padding: 0,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 5,
  },
  userPhone: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.8)",
  },
  settingsOptions: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 25,
  },
  settingsOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  settingsOptionIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  settingsOptionText: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  chevron: {
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: "rgba(255, 80, 80, 0.9)",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  footerContent: {
    alignItems: "center",
  },
  footerLogo: {
    height: 30,
    width: 30,
    marginBottom: 8,
    opacity: 0.8,
  },
  version: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "500",
  },
});
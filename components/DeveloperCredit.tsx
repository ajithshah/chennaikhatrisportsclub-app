import { StyleSheet, Text, View } from 'react-native';

interface DeveloperCreditProps {
  style?: object;
}

export default function DeveloperCredit({ style }: DeveloperCreditProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>Developed by: Shanthosh Sha & Ajith Sha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
  },
});
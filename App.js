import { StyleSheet, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

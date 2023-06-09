import { View, Text, StyleSheet } from 'react-native';
import {useSearchParams} from 'expo-router';

const QuestionDetailsPage = () => {
  const {id} = useSearchParams();
  return (
    <View style={styles.container}>
      <Text>Render question with id: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default QuestionDetailsPage;

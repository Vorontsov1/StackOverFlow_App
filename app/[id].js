import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSearchParams } from 'expo-router';
import QuestionHeader from '../src/components/QuestionHeader';
import AnswerListItem from '../src/components/AnswerListItem';



import questions from "../data/questions";
import answers from "../data/answers";





const QuestionDetailsPage = () => {
  const { id } = useSearchParams();
  const question = questions.items.find((question) => question.question_id == id);
  if (!question) {
    return (
      <View style={styles.container}>
        <Text>Question not found</Text>
      </View>
    );
  }

  // return (
  //   <View style={{ backgroundColor: "#f0bf3a" , flex: 1}}>
  //     <QuestionHeader question={question} />
  //   </View>
  // );
  return (
    <View style={{ backgroundColor: "#f0bf3a", flex: 1 }}>
      <FlatList
        data={answers.items}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={() => <QuestionHeader question={question} />}
      />
    </View>
  );
 
}

const styles = StyleSheet.create({
});

export default QuestionDetailsPage;

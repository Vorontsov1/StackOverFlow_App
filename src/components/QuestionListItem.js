import { View, Text, StyleSheet } from 'react-native';
import questions from '../../data/questions';



const question = questions.items[1];


const QuestionListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.stats}>
        {question.score} votes • {question.answer_count} answers •{" "}
        {question.view_count} views
      </Text>
      <Text style={styles.title}>{question.title}</Text>
      <Text style={styles.body} numberOfLines={2}>
        {question.body_markdown}
      </Text>
      <View style={styles.tags}>
        {question.tags.map((tag) => (
          <Text style={styles.tag} key={tag}>
            {tag}
          </Text>
        ))}
        <Text style={styles.time}>
          asked {new Date(question.creation_date * 1000).toDateString()}
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lighgray",
  },
  stats: {
    fontSize: 15,
  },
  title: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "#0063bf",
    marginVertical: 5,
  },
  body: {
    fontSize: 13,
    color: "dimgray",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
      marginTop: 10,
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#e1ecf4",
    fontSize: 12,
    color: "#39739d",
    padding: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
    time: {
        marginLeft: "auto",
        fontSize: 13,
        color: "dimgray",
  },
});

export default QuestionListItem;

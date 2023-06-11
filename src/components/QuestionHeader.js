// import { useState, useEffect, useLayoutEffect } from "react";
// import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import {Link} from "expo-router"
import {decode} from "html-entities"
import Markdown from 'react-native-markdown-displayer';



const QuestionHeader = ({ question, search }) => {

  // const [searchTerm, setSearchTerm] = useState("");    
  // const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerSearchBarOptions: {
  //       onChangeText: (event) => setSearchTerm(event.nativeEvent.text),
  //       onBlur: search,
  //     },
  //   });
  // }, [navigation, searchTerm, setSearchTerm]);

  return (
    <Link href={`/${question.question_id}`}>
      <View style={styles.container}>
        <Text style={styles.title}>{decode(question.title)}</Text>
        <Text style={styles.stats}>
          {question.score} votes •{" "}
          {question.is_answered && (
            <Entypo name="check" size={12} color="limegreen" />
          )}
          {question.answer_count} answers • {question.view_count} views
        </Text>

        <View style={styles.separator} />

        <Markdown>{decode(question.body_markdown)}</Markdown>
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
    </Link>
  );
};


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
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 28,
    color: "#3b4045",
    marginVertical: 5,
  },
  body: {},
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginVertical: 10,

  },
});

export default QuestionHeader;

import { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { useQuizContext } from "~/providers/QuizProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizResult } from "~/view/Quiz/QuizResult";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { TQuestion } from "~/@types/question.types";

export default function Quiz() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const {
    dispatch,
    state,
    questions,
    setQuestions,
    setUserAnswers,
    skippedQuestions,
    setSkippedQuestions,
  } = useQuizContext();

  const correctAnswer = useMemo(
    () => questions[state.currentQuiz]?.answer === state.userAnswer?.userAnswer,
    [questions, state.currentQuiz, state.userAnswer?.userAnswer]
  );

  function onAnswerCheck(withSupport: boolean = false) {
    if (withSupport)
      dispatch({
        type: "ANSWER_TEXT",
        payload: questions[state.currentQuiz].answer,
      });

    const new_answer = {
      question: questions[state.currentQuiz],
      userAnswer: withSupport
        ? questions[state.currentQuiz].answer
        : state.answerText,
      supported: withSupport,
    };
    if (new_answer.userAnswer === questions[state.currentQuiz].answer) {
      setUserAnswers((prev) => [...prev, new_answer]);
    }
    dispatch({ type: "USER_ANSWER", payload: new_answer });
  }

  function onAnswerSubmit() {
    if (state.currentQuiz === questions.length - 1) {
      return onQuizEnd(skippedQuestions);
    }
    dispatch({ type: "CURRENT_QUIZ", payload: state.currentQuiz + 1 });
    dispatch({ type: "USER_ANSWER", payload: undefined });
    dispatch({ type: "ANSWER_TEXT", payload: "" });
  }

  function onQuizEnd(newSkippedQuestions: TQuestion[]) {
    if (skippedQuestions.length > 0) {
      setQuestions(newSkippedQuestions);
    } else {
      setQuestions([]);
      dispatch({ type: "QUIZ_FINISHED", payload: true });
    }
    dispatch({ type: "ANSWER_TEXT", payload: "" });
    dispatch({ type: "CURRENT_QUIZ", payload: 0 });
    dispatch({ type: "USER_ANSWER", payload: undefined });
    setSkippedQuestions([]);
  }

  function onSkipQuiz() {
    const newSkippedQuestions = [
      ...skippedQuestions,
      questions[state.currentQuiz],
    ];
    setSkippedQuestions(newSkippedQuestions);
    if (state.currentQuiz === questions.length - 1) {
      onQuizEnd(newSkippedQuestions);
      return;
    } else if (state.currentQuiz !== questions.length - 1) {
      dispatch({ type: "CURRENT_QUIZ", payload: state.currentQuiz + 1 });
    }
  }

  return (
    <View style={styles.container}>
      {state.quizFinished ? (
        <QuizResult />
      ) : (
        <>
          {questions?.[state.currentQuiz] && (
            <QuizQuestion
              question={questions[state.currentQuiz]}
              onSupport={() => onAnswerCheck(true)}
            />
          )}
          <QuizFooter
            correctAnswer={correctAnswer}
            onSkip={onSkipQuiz}
            onSubmit={() => {
              if (!correctAnswer) onAnswerCheck(false);
              else if (correctAnswer) onAnswerSubmit();
            }}
          />
        </>
      )}
    </View>
  );
}

function getStyleSheet({}: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
}

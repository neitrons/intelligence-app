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

  const { dispatch, state } = useQuizContext();

  const correctAnswer = useMemo(
    () =>
      state.questions[state.currentQuiz]?.answer ===
      state.userAnswer?.userAnswer,
    [state.questions, state.currentQuiz, state.userAnswer?.userAnswer]
  );

  function onAnswerCheck(withSupport: boolean = false) {
    if (withSupport)
      dispatch({
        type: "ANSWER_TEXT",
        payload: state.questions[state.currentQuiz].answer,
      });

    const new_answer = {
      question: state.questions[state.currentQuiz],
      userAnswer: withSupport
        ? state.questions[state.currentQuiz].answer
        : state.answerText,
      supported: withSupport,
    };
    if (new_answer.userAnswer === state.questions[state.currentQuiz].answer) {
      dispatch({
        type: "USER_ANSWERS",
        payload: [...state.userAnswers, new_answer],
      });
    }
    dispatch({ type: "USER_ANSWER", payload: new_answer });
  }

  function onAnswerSubmit() {
    if (state.currentQuiz === state.questions.length - 1) {
      return onQuizEnd(state.skippedQuestions);
    }
    dispatch({ type: "CURRENT_QUIZ", payload: state.currentQuiz + 1 });
    dispatch({ type: "USER_ANSWER", payload: undefined });
    dispatch({ type: "ANSWER_TEXT", payload: "" });
  }

  function onQuizEnd(newSkippedQuestions: TQuestion[]) {
    if (state.skippedQuestions.length > 0) {
      dispatch({ type: "QUESTIONS", payload: newSkippedQuestions });
    } else {
      dispatch({ type: "QUESTIONS", payload: [] });
      dispatch({ type: "QUIZ_FINISHED", payload: true });
    }
    dispatch({ type: "ANSWER_TEXT", payload: "" });
    dispatch({ type: "CURRENT_QUIZ", payload: 0 });
    dispatch({ type: "USER_ANSWER", payload: undefined });
    dispatch({ type: "SKIPPED_QUESTIONS", payload: [] });
  }

  function onSkipQuiz() {
    const newSkippedQuestions = [
      ...state.skippedQuestions,
      state.questions[state.currentQuiz],
    ];
    dispatch({ type: "SKIPPED_QUESTIONS", payload: newSkippedQuestions });
    if (state.currentQuiz === state.questions.length - 1) {
      onQuizEnd(newSkippedQuestions);
      return;
    } else if (state.currentQuiz !== state.questions.length - 1) {
      dispatch({ type: "CURRENT_QUIZ", payload: state.currentQuiz + 1 });
    }
  }

  return (
    <View style={styles.container}>
      {state.quizFinished ? (
        <QuizResult />
      ) : (
        <>
          {state.questions?.[state.currentQuiz] && (
            <QuizQuestion
              question={state.questions[state.currentQuiz]}
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

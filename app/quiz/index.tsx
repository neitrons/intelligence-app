import { useState, useMemo, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";

import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { composeRandomQuestions } from "~/view/Quiz/utils/composeRandomQuestions";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { TQuestion, TQuizAnswer } from "~/@types/question.types";
import { useQuizContext } from "~/providers/QuizProvider";

export default function Quiz() {
  const theme = useThemeProvider();
  const { quizQuestions } = useStaticData();
  const styles = getStyleSheet({ ...theme });

  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [skippedMode, setSkippedMode] = useState<boolean>(false);
  const [answerText, setAnswerText] = useState<string>("");
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [userAnswer, setUserAnswer] = useState<TQuizAnswer>();
  const [skipedQuestions, setSkipedQuestions] = useState<TQuestion[]>([]);
  const {
    currentQuiz,
    setCurrentQuiz,
    setCorrectAnswers,
    setCurrentQuizQuestion,
  } = useQuizContext();

  const correctAnswer = useMemo(
    () => questions[currentQuiz]?.answer === userAnswer?.userAnswer,
    [questions, currentQuiz, userAnswer?.userAnswer]
  );

  function onAnswerCheck() {
    const newAnswer = {
      question: questions[currentQuiz],
      userAnswer: answerText,
    };
    if (answerText === questions[currentQuiz].answer) {
      setCorrectAnswers((prev) => [...prev, newAnswer]);
    }
    setUserAnswer(newAnswer);
  }

  function onSkip() {
    if (currentQuiz === questions.length - 1) {
      onQuizFinish();
      return;
    }
    if (!skippedMode) {
      setSkipedQuestions((prev) => [...prev, questions[currentQuiz]]);
    }
    setCurrentQuiz((prev) => prev + 1);
  }

  function onAnswerSubmit() {
    if (currentQuiz === questions.length - 1) {
      onQuizFinish();
      return;
    }
    setCurrentQuiz((prev) => prev + 1);
    setUserAnswer(undefined);
    setAnswerText("");
  }

  function onQuizFinish() {
    if (skipedQuestions.length > 0) {
      setQuestions(skipedQuestions);
      setSkipedQuestions([]);
      setCurrentQuiz(0);
      setSkippedMode(true);
    } else {
      setCurrentQuiz(0);
      setSkippedMode(false);
      setQuizFinished(true);
    }
  }

  useEffect(() => {
    const randomQuestions = composeRandomQuestions(quizQuestions, 5);
    setQuestions(randomQuestions);
    setCurrentQuizQuestion(randomQuestions);
  }, [quizQuestions]);

  return (
    <View style={styles.container}>
      {quizFinished ? (
        <Text>ქივიზ დასრულებულია</Text>
      ) : (
        <>
          {questions?.[currentQuiz] && (
            <QuizQuestion
              userAnswer={userAnswer}
              answer={answerText}
              correctAnswer={correctAnswer}
              setAnswer={setAnswerText}
              question={questions[currentQuiz]}
            />
          )}
          <QuizFooter
            correctAnswer={correctAnswer}
            answerText={answerText}
            canSkip={currentQuiz !== questions.length - 1}
            onSubmit={() => {
              if (!correctAnswer) onAnswerCheck();
              else if (correctAnswer) onAnswerSubmit();
            }}
            onSkip={onSkip}
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

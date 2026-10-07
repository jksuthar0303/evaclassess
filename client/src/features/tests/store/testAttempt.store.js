import { useState } from 'react';

export function useTestAttemptStore() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(3600);

  const selectAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const toggleReview = (questionId) => {
    setMarkedForReview((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId]
    );
  };

  return {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    selectAnswer,
    markedForReview,
    toggleReview,
    timeRemaining,
    setTimeRemaining,
  };
}

export default useTestAttemptStore;

type FlashCardType = {
	question: string;
	answer: string;
	isFlipped: boolean;
}

export const FlashCard = ({ question, answer, isFlipped }: FlashCardType) => {
  return (
    <div className="flashcard">
      {isFlipped ? <div className="answer">{answer}</div> : <div className="question">{question}</div>}
    </div>
  );
}

import { useState } from 'react';
import flashcardsData from '../data/flashcards.json';
import { ProgressBar } from './ProgressBar';
import { FlashCard } from './FlashCard';

export const FlashCardContainer = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isFlipped, setIsFlipped] = useState<boolean>(false);

	const handleCardChange = (newIndex: number) => {
		setCurrentIndex(newIndex);
		setIsFlipped(false);
	};

	const handleFlip = () => setIsFlipped((prev) => !prev);

	return (
		<>
			<ProgressBar currentIndex={currentIndex} totalCards={flashcardsData.length} />
			<div className='flashcard-section'>
				<FlashCard
					question={flashcardsData[currentIndex].question}
					answer={flashcardsData[currentIndex].answer}
					isFlipped={isFlipped}
				/>

				<div className="controls">
					<div className='previous-next' onClick={() => handleCardChange((currentIndex - 1 + flashcardsData.length) % flashcardsData.length)}>
						<p>&lt; Previous</p>
					</div>
					<button className="show-hide-answer" onClick={handleFlip}>
						{
							isFlipped ? ("Hide Answer") : ("Show Answer")
						}
					</button>
					<div className='previous-next' onClick={() => handleCardChange((currentIndex + 1) % flashcardsData.length)}>
						<p>Next &gt;</p>
					</div>
				</div>
			</div>
		</>
	);
};

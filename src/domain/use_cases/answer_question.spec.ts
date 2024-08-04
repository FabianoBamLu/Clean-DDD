// -- IMPORTS

import { AnswerQuestionUseCase } from './answer_question';
import { expect, test } from 'vitest';

// -- TESTS 

test(
    'Create an answer',
    async () =>
    {
        const answerQuestion = new AnswerQuestionUseCase();

        const answer = await answerQuestion.execute(
            {
                questionId : '1',
                instructorId : '1',
                content : 'This is the correct answer.'
            }
            );

        expect( answer.content ).toEqual( 'This is the correct answer.' );
    }
    );
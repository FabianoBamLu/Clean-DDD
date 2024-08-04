// -- IMPORTS

import { AnswerRepository } from 'domain/repositories/answer_repository';
import { AnswerQuestionUseCase } from './answer_question';
import { expect, test } from 'vitest';
import { Answer } from '@entities/answer';

// -- VARIABLES

let fakeAnswerRepository : AnswerRepository =
    {
        create : async function(
            answer : Answer
            )
        {
            return;
        }
    };

// -- TESTS 

test(
    'Create an answer',
    async () =>
    {
        const answerQuestion = new AnswerQuestionUseCase( fakeAnswerRepository );

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
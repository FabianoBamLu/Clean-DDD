// -- INTERFACES

import { Answer } from '@entities/answer';

interface AnswerQuestionUseCaseRequst
{
    content : string;
    instructorId : string;
    questionId : string;
}

// -- TYPES

export class AnswerQuestionUseCase
{
    // -- CONSTRUCTORS

    constructor(
        )
    {
    }

    // -- OPERATIONS

    async execute(
        {
            content,
            instructorId,
            questionId
        } : AnswerQuestionUseCaseRequst
        )
    {
        let answer = new Answer( content );

        return answer;
    }
}
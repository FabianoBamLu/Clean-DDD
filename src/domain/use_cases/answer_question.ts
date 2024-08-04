// -- IMPORTS

import { Answer } from '../entities/answer';

// -- INTERFACES

interface AnswerQuestionUseCaseRequest
{
    content : string;
    instructorId : string;
    questionId : string;
}

// -- TYPES

export class AnswerQuestionUseCase
{
    // -- OPERATIONS

    async execute(
        {
            content,
            instructorId,
            questionId
        } : AnswerQuestionUseCaseRequest
        )
    {
        let answer = new Answer( content );

        return answer;
    }
}
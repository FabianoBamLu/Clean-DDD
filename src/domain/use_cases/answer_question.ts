// -- IMPORTS

import { Answer } from '../entities/answer';
import { AnswerRepository } from '../repositories/answer_repository';

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
    // -- CONSTRUCTORS

    constructor(
        private answerRepository: AnswerRepository
        )
    {
    }

    // -- OPERATIONS

    async execute(
        {
            content,
            instructorId,
            questionId
        } : AnswerQuestionUseCaseRequest
        )
    {
        let answer = new Answer(
            {
                authorId : instructorId,
                content,
                questionId
            }
            );
        
        await this.answerRepository.create( answer );

        return answer;
    }
}
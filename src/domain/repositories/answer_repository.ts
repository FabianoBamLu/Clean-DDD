// -- IMPORTS

import { Answer } from '@entities/answer';

// -- INTERFACES

export interface AnswerRepository
{
    create( answer: Answer ): Promise<void>;
    // find( id: number ): Promise<Answer>;
    // findAll( limit: number, offset: number ): Promise<Answer[]>;
    // update( answer: Answer ): Promise<void>;
}
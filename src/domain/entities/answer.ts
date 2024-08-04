// -- IMPORTS

import { Entity } from '../../core/entities/entity';

// -- INTERFACES

interface AnswerPropMap
{
    authorId : string;
    content : string;
    questionId : string;
}

// -- TYPES

export class Answer extends Entity< AnswerPropMap >
{
    // -- OPERATIONS

    content(
        )
    {
        return this.propMap.content;
    }
}
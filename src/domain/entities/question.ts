// -- IMPORTS

import { Entity } from '../../core/entities/entity';
import { Slug } from './value_objects/slug';

// -- INTERFACES

interface QuestionPropMap
{
    authorId : string;
    content : string;
    slug : Slug;
    title : string;
}

// -- TYPES

export class Question extends Entity< QuestionPropMap >
{
    // -- OPERATIONS
}
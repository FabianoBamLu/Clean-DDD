// -- IMPORTS

import { UniqueEntityID } from '../../domain/entities/value_objects/unique_entity_id';

// -- TYPES

export class Entity< PropMap >
{
    // -- PROPERTIES

    private _id : UniqueEntityID;
    protected propMap : PropMap;

    // -- CONSTRUCTORS

    constructor(
        propMap : PropMap,
        id ?: string
        )
    {
        this._id = new UniqueEntityID( id );

        this.propMap = propMap;
    }

    // -- OPERATIONS

    get id(
        )
    {
        return this._id;
    }
}
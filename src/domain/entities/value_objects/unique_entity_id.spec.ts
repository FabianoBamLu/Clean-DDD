// -- IMPORTS

import { expect, test } from 'vitest';
import { UniqueEntityID } from './unique_entity_id';

// -- TESTS

test(
    'It should generate a UUID when no value is provided',
    () =>
    {
        let id = new UniqueEntityID();

        expect( id.toValue() ).toMatch( /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/ );
    }
    );

// ~~

test(
    'It should use the provided value when given',
    () =>
    {
        let providedValue = '123e4567-e89b-12d3-a456-426614174000';
        let id = new UniqueEntityID( providedValue );

        expect( id.toValue() ).toBe( providedValue );
    }
    );

// ~~

test(
    'It should return the value as a string',
    () =>
    {
        let providedValue = '123e4567-e89b-12d3-a456-426614174000';
        let id = new UniqueEntityID( providedValue );

        expect( id.toString() ).toBe( providedValue );
    }
    );
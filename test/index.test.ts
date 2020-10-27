import { createUser } from '../src';
import ValidationError from '../src/utils/errors/ValidationError';

const isPropertiesInValidationError = (
    error: ValidationError,
    expectedProperties: string[],
) => {
    const errorProperties = error.errors.map(e => e.property);
    for (let i = 0; i < expectedProperties.length; i++) {
        const e = expectedProperties[i];
        if (!errorProperties.includes(e)) return false;
    }

    return true;
};

describe('createUser', () => {
    test('data ok', async () => {
        const data = { name: 'hello', surname: 'world', age: 42 };
        const result = await createUser(data);

        expect(result).toBe(data);
    });

    test('validation error required fields', async () => {
        expect.hasAssertions();

        try {
            const data = { name: 'hello' } as any;
            await createUser(data);
        } catch (error) {
            expect(error).toBeInstanceOf(ValidationError);
            expect(
                isPropertiesInValidationError(error, ['surname', 'age']),
            ).toBeTruthy();
        }
    });

    test('validation error wrong type fields', async () => {
        expect.hasAssertions();

        try {
            const data = { name: 1, age: '42' } as any;
            await createUser(data);
        } catch (error) {
            expect(error).toBeInstanceOf(ValidationError);
            expect(
                isPropertiesInValidationError(error, ['name', 'surname', 'age']),
            ).toBeTruthy();
        }
    });
});

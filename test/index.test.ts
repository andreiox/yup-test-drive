import { createUser } from '../src';
import ValidationError from '../src/utils/errors/ValidationError';

const isPropertiesInValidationError = (
    error: ValidationError,
    properties: string[],
) => {
    for (let i = 0; i < error.errors.length; i++) {
        const e = error.errors[i];
        if (!properties.includes(e.property)) return false;
    }

    return true;
};

test('createUser - data ok', async () => {
    const data = { name: 'hello', surname: 'world', age: 42 };
    const result = await createUser(data);

    expect(result).toBe(data);
});

test('createUser - validation error', async () => {
    expect.hasAssertions();

    try {
        const data = { name: 'hello', surname: 'world' } as any;
        await createUser(data);
    } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        expect(isPropertiesInValidationError(error, ['age'])).toBeTruthy();
    }
});

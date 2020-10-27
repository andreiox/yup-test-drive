import { createUser } from '../src';

test('createUser - data ok', async () => {
    const data = { name: 'hello', surname: 'world', age: 42 };
    const result = await createUser(data);

    expect(result).toBe(data);
});

test('createUser - validation error', async () => {
    const data = { name: 'hello' } as any;

    await expect(createUser(data)).rejects.toThrow('User data not valid!');
});

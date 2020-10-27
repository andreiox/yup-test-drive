import { UserInterface } from './interfaces/user';
import { validateData } from './validation';
import { userSchema } from './validation/schema/user';

export const createUser = async (data: UserInterface): Promise<UserInterface> => {
    const isValid = await validateData(data, userSchema);
    if (!isValid) throw Error('User data not valid!');

    return data;
};

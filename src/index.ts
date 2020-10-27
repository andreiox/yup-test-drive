import { UserInterface } from './interfaces/user';
import { validateData } from './validation';
import { userSchema } from './validation/schema/user';

export const createUser = async (data: UserInterface): Promise<UserInterface> => {
    await validateData(data, userSchema);

    return data;
};

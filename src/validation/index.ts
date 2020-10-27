import * as yup from 'yup';

import ValidationError from '../utils/errors/ValidationError';

export const validateData = async <T>(
    data: T,
    schema: yup.ObjectSchema,
): Promise<void | ValidationError> => {
    try {
        await schema.validate(data, { abortEarly: false });
    } catch (error) {
        throw new ValidationError(error);
    }
};

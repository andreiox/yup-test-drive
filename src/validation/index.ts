import * as yup from 'yup';

export const validateData = async <T>(data: T, schema: yup.ObjectSchema): Promise<boolean> => {
    return schema.isValid(data)
}

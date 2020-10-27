import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string().strict(true).required(),
    surname: yup.string().required(),
    age: yup.number().strict(true).required().min(0).max(130),
    email: yup.string().email(),
    website: yup.string().url(),
    birthday: yup.date(),
    created_at: yup.date().default(() => new Date()),
});

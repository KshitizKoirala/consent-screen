import { z } from 'zod';

export const emailSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export const alphanumericSchema = z.object({
    username: z.string().min(1, { message: "This field cannot be empty" }).regex(/^[a-zA-Z0-9]*$/, { message: "Only alphanumeric characters are allowed" }).max(20, { message: "Maximum length is 20 characters" })

})


export const isValidName = z.string().min(1, "This field cannot be empty");
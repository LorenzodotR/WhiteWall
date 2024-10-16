import {z} from 'zod';

export const UserSchema = z.object ({
    id: z.string(),
    api_key: z.string(),
    name: z.string(),
})


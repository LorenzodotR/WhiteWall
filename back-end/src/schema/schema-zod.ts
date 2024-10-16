import {z} from 'zod';

export const UserSchema = z.object ({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    age: z.number(),
    isSubscribed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    deletedAt: z.date().optional(),
})

export const ChatSchema = z.object ({
    id: z.string(),
    message: z.string(),
    userId: z.string(),
    recievedAt: z.date(),
    updatedAt: z.date().optional(),
    deletedAt: z.date().optional(),    
})

export const HistoricalChatSchema = z.object ({
    id: z.string(),
    message: z.string(),
    userId: z.string(),
    recievedAt: z.date(),
    updatedAt: z.date().optional(),
    deletedAt: z.date().optional(),
})


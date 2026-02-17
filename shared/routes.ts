import { z } from "zod";
import { insertUserSchema, users } from "./schema";

export const api = {
  users: {
    create: {
      method: "POST",
      path: "/api/users",
      input: insertUserSchema,
      responses: {
        201: z.object({
          message: z.string(),
          code: z.string(), // In a real app, this might be hidden until payment
        }),
        400: z.object({
          message: z.string(),
        }),
        409: z.object({
          message: z.string(),
        }),
      },
    },
  },
} as const;

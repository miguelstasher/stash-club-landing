import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  code: text("code").notNull().unique(),
  paymentStatus: text("payment_status").notNull().default("pending"), // pending, paid
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({ 
  id: true, 
  createdAt: true,
  code: true, // generated server-side
  paymentStatus: true // managed server-side
}).extend({
  email: z.string().email(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type CreateUserRequest = InsertUser;

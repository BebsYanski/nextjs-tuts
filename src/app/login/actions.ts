'use server';

import { z } from "zod"
import { createSession } from "../lib/session";
import { redirect } from "next/navigation";

const testUser = {
    id: "1",
    email: "test@email.com",
    password: "12345678"
};

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }).trim(),
});

export async function login(prevState: any, formData: FormData) {

    // Handle Validation
    const result = loginSchema.safeParse(Object.fromEntries(formData))
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };

    }

    // Check if user exists by validating email and password
    const { email, password } = result.data;
    if (email !== testUser.email || password !== testUser.password) {

        return {
            errors: {
                email: ["Invalid email or password"],
            },
        };
    }


    // Create session
    await createSession(testUser.id);

    // Redirect user to the dashboard
    redirect("/dashboard")
}

export async function logout() {

}
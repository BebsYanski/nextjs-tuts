"use client";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "../login/actions";

const LoginForm = () => {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
      {state?.errors?.email && (
        <p className="text-red-500 text-sm">{state.errors.email}</p>
      )}
      <div className="flex flex-col gap-2">
        <input
          className="border-amber-300 outline-amber-100 border outline px-2 py-1"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      {state?.errors?.password && (
        <p className="text-red-500 text-sm">{state.errors.password}</p>
      )}
      <div className="flex flex-col gap-2">
        <input
          className="border-amber-300 outline-amber-100 border outline px-2 py-1"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>{" "}
      <SubmitButton />{" "}
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      Login{" "}
    </button>
  );
}

export default LoginForm;

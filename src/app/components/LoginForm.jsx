"use client";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "../login/actions";

const LoginForm = () => {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
      <div className="flex flex-col gap-2">
        <input
          className="border-amber-300 outline-amber-100 border outline px-2 py-1"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
      </div>{" "}
      <div className="flex flex-col gap-2">
        <input
          className="border-amber-300 outline-amber-100 border outline px-2 py-1"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>{" "}
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

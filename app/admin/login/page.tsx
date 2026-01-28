"use client";
import { signIn } from "next-auth/react";

import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold text-center text-horizon-dark mb-6">
          Administration Horizon Plus
        </h1>

        <form
            className="space-y-4"
            onSubmit={async (e) => {
                e.preventDefault();
                await signIn("credentials", {
                email,
                password,
                callbackUrl: "/admin/dashboard",
                });
            }}
            >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-horizon-blue text-white py-3 rounded hover:bg-horizon-dark transition"
          >
            Se connecter
          </button>
        </form>

      </div>
    </div>
  );
}

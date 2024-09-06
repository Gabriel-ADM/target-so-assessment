'use client'
import { useState } from "react";
import { useAuth } from "./contexts/authProvider";
import { redirect } from "next/navigation";
import { doSignInWithEmailAndPassword } from "./firebase/auth"

export default function Login() {
  // Necessary variable to navigate between auth pages
  const { isUserLoggedIn } = useAuth();
  if (isUserLoggedIn) {
    redirect('/dashboard');
  }

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    setLoading(true);
    e.preventDefault();
    console.log({ userEmail, userPassword, isUserLoggedIn, loading });
    doSignInWithEmailAndPassword(userEmail, userPassword);
    setLoading(false);
    redirect('/(pages)/dashboard');
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-gray-200 items-betw justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="w-96 text-gray-200 bg-white space-y-5 p-4 shadow-xl border rounded-lg">
          <h3 className="text-gray-800 p-4 text-xl font-semibold sm:text-2xl text-center">Login</h3>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="text-base font-normal text-gray-600">
                Email
              </label>
              <input
                type="email"
                autoComplete='email'
                required
                value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label className="text-base font-normal text-gray-600">
                Password
              </label>
              <input
                type="password"
                autoComplete='current-password'
                required
                value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 mb-4 py-2 text-white font-medium rounded-lg bg-orange-500 hover:bg-orange-600 hover:shadow-xl transition duration-300'}`}
            >
              Entrar
            </button>
          </form>
          <div className="row-start-3 flex gap-6 flex-wrap items-center justify-between text-blue-500">
            <a href="https://google.com">Cadastre-se</a>
            <a>Esqueceu sua senha?</a>
          </div>
        </div>
      </main>
    </div >
  );
}

import React from "react";
import Image from "next/image";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <article id="login" className="sm:bg-gray-100 min-h-screen">
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow"></div>
          <div className="flex h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8 flex-grow">
            <div className="w-full max-w-md space-y-4">
              <div className="sm:border sm:p-8 bg-white">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    <Image
                      src="/logo.svg"
                      alt="인스타그램"
                      width={176}
                      height={60}
                    />
                  </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        전화번호, 사용자 이름 또는 이메일
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        비밀번호
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="비밀번호"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        자동 로그인
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        비밀번호를 잊으셨나요?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-4 px-4 text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      로그인
                    </button>
                  </div>
                </form>
              </div>
              <div className="sm:border sm:p-6 bg-white text-center">
                <p class="text-sm">
                  계정이 없으신가요?
                  <Link href="/signup">
                    <a className="font-bold ml-2 text-indigo-600 hover:text-indigo-500">
                      가입하기
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <footer className="p-6  text-center flex-grow">
            <div className="mb-4">
              <p className="text-sm text-gray-400">
                이 사이트는 React NextJS / tailwindcss를 적용하여 제작하였습니다
              </p>
              <p className="text-sm text-gray-400">© 2022 Bongstagram</p>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}

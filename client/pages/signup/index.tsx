import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Router from "next/router";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  emailOrPhone: string;
  name: string;
  userName: string;
  password: string;
  passwordConfirm: string;
};

// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: values ? values : {},
//     errors: !values.emailOrPhone
//       ? {
//           emailOrPhone: {
//             type: "required",
//             message: "필수 값입니다",
//           },
//         }
//       : {} || !values.name
//       ? {
//           name: {
//             type: "required",
//             message: "필수 값입니다",
//           },
//         }
//       : {},
//   };
// };

const schema = yup.object().shape({
  emailOrPhone: yup.string().email().required(),
  name: yup.string().required(),
  userName: yup.string().required(),
  password: yup.string().min(7).max(10).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onValid = () => {
    Router.push("/login");
  };

  const onInvalid = () => {
    console.log("errors", errors);
  };

  useEffect(() => {
    console.log("Signp page");
    return () => {};
  }, []);

  return (
    <>
      <article id="SignUp" className="sm:bg-gray-100 min-h-screen">
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow"></div>
          <div className="flex h-full items-center justify-center py-6 px-5 sm:px-6 lg:px-8 flex-grow">
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
                  <p className="text-center font-bold text-gray-400 text-md">
                    친구들의 사진과 동영상을 보려면 가입하세요.
                  </p>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-4 px-4 text-md font-medium text-white hover:bg-indigo-700"
                    >
                      <Image
                        src="/facebook_logo_w.svg"
                        alt="페이스북 로그인"
                        width={20}
                        height={20}
                      />
                      <span className="ml-2">Fackbook으로 로그인</span>
                    </button>
                  </div>
                </div>
                <form
                  className="mt-8 space-y-6"
                  action="#"
                  method="POST"
                  onSubmit={handleSubmit(onValid, onInvalid)}
                >
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <label htmlFor="email-phone" className="sr-only">
                        휴대폰 번호 또는 이메일 주소
                      </label>
                      <input
                        {...register("emailOrPhone", {
                          validate: {
                            email: (value) =>
                              !value.includes("@") || "이메일 형식이 아닙니다",
                          },
                          required: true,
                        })}
                        id="email-phone"
                        name="emailOrPhone"
                        type="text"
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="휴대폰 번호 또는 이메일 주소"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="sr-only">
                        성명
                      </label>
                      <input
                        {...register("name", {
                          minLength: 2,
                          required: true,
                        })}
                        id="name"
                        name="name"
                        type="text"
                        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="성명"
                      />
                    </div>
                    <div>
                      <label htmlFor="user-name" className="sr-only">
                        사용자 이름
                      </label>
                      <input
                        {...register("userName", {
                          minLength: 2,
                          required: true,
                        })}
                        id="user-name"
                        name="userName"
                        type="text"
                        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="사용자 이름"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        비밀번호
                      </label>
                      <input
                        {...register("password", {
                          required: true,
                        })}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="비밀번호"
                      />
                    </div>
                    <div>
                      <label htmlFor="passwordConfirm" className="sr-only">
                        비밀번호
                      </label>
                      <input
                        {...register("passwordConfirm", {
                          required: true,
                        })}
                        id="password-confirm"
                        name="passwordConfirm"
                        type="password"
                        autoComplete="current-password"
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="비밀번호"
                      />
                    </div>
                  </div>
                  {errors &&
                    Object.entries(errors).map(([key, error]) => {
                      return (
                        <>
                          <span className="text-red-400 font-bold">
                            {error.message}
                          </span>
                          <br />
                        </>
                      );
                    })}

                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-4 px-4 text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <UserPlusIcon
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      회원가입
                    </button>
                  </div>
                </form>
              </div>
              <div className="sm:border sm:p-6 bg-white text-center">
                <p className="text-sm">
                  계정이 있으신가요?
                  <Link href="/login">
                    <a className="font-bold ml-2 text-indigo-600 hover:text-indigo-500">
                      로그인
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

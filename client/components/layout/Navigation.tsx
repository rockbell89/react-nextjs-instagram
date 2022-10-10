import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  HashtagIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Navigation = ({ isLogined, handelSetLogOut }) => {
  return (
    <nav className="flex flex-col justify-between border-r p-4 w-60 bg-white">
      <div>
        <h2>
          <Link href="/">
            <a className="block py-2 mt-4">
              <Image
                src="/logo.svg"
                alt="인스타그램"
                width={120}
                height={40}
              ></Image>
            </a>
          </Link>
        </h2>
        <ul>
          <li className="p-3 my-3">
            <Link href="/">
              <a className="flex items-center">
                <HomeIcon className="w-8" aria-hidden="true"></HomeIcon>
                <span className="mx-2">홈</span>
              </a>
            </Link>
          </li>
          <li className="p-3 my-3">
            <Link href="/explore">
              <a className="flex items-center">
                <HashtagIcon className="w-8" aria-hidden="true"></HashtagIcon>
                <span className="mx-2">탐색 탭</span>
              </a>
            </Link>
          </li>
          <li className="p-3 my-3">
            <Link href="/direct">
              <a className="flex items-center">
                <PaperAirplaneIcon
                  className="w-8"
                  aria-hidden="true"
                ></PaperAirplaneIcon>
                <span className="mx-2">메시지</span>
              </a>
            </Link>
          </li>
          <li className="p-3 my-3">
            <button className="flex items-center">
              <HeartIcon className="w-8" aria-hidden="true"></HeartIcon>
              <span className="mx-2">알림</span>
            </button>
          </li>
          <li className="p-3 my-3">
            <button className="flex items-center">
              <PlusCircleIcon
                className="w-8"
                aria-hidden="true"
              ></PlusCircleIcon>
              <span className="mx-2">만들기</span>
            </button>
          </li>
          <li className="p-3 my-3">
            <Link href="/profile">
              <a className="flex items-center">
                <UserCircleIcon
                  className="w-8"
                  aria-hidden="true"
                ></UserCircleIcon>
                <span className="mx-2">프로필</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-3">
        <button className="flex items-center" onClick={handelSetLogOut}>
          <Bars3Icon className="w-8" aria-hidden="true"></Bars3Icon>
          <span className="mx-2">더 보기</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

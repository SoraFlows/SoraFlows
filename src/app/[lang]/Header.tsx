"use client";

import Link from "next/link";
import React from "react";
import Head from "next/head";
import { FaGithub } from 'react-icons/fa'; // 引入GitHub图标

export const LayoutHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[19] border-b-[0.5px] border-zinc-200 bg-white/80 pl-6 backdrop-blur">
      <nav className="flex h-16 justify-between items-center">
        <div>
          <Link
            href="/"
            className="font-bold opacity-90 md:text-base mr-4 lg:mr-8"
          >
            Go Home
          </Link>
        </div>
        <div className="flex justify-end mr-4">
          <Link
            href="/"
            className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
          >
            About us
          </Link>
          <Link
            href="https://github.com/flytoagi/SoraFlows"
            className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
          >
            <FaGithub className="text-xl" /> {/* 设置图标大小 */}
          </Link>
        </div>
      </nav>
    </header>
  );
};

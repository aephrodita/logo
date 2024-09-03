import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-full flex justify-center sticky border-b border-gray-200 z-10">
      <div className="w-3/4 h-20 flex justify-center">
        <div className="w-full flex justify-between items-center">
          <div>
            <span className="text-white font-bold">Logo</span>
          </div>
          <div className="flex">
            <div className="px-10 py-1.5">
              <Link to="/" className="text-white font-bold">
                <span>Главная</span>
              </Link>
            </div>
            <div className="px-10 py-1.5">
              <Link to="/news" className="text-white font-bold cursor-pointer">
                <span>Новости</span>
              </Link>
            </div>
            <div className="px-10 py-1.5">
              <Link to="/forum" className="text-white font-bold">
                <span>Форум</span>
              </Link>
            </div>
            <div className="px-10 py-1.5">
              <Link to="/catalog" className="text-white font-bold">
                <span>Каталог</span>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="px-2">
              <Button className="text-[#1E90FF] bg-white font-bold">
                Войти
              </Button>
            </div>
            <div className="px-2">
              <Button
                variant="flat"
                className="text-white bg-[#1E90FF] bg-opacity-5 font-bold"
              >
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

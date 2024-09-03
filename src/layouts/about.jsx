import React from "react";
import { Button } from "@nextui-org/react";

export default function About() {
  return (
    <>
      <div className="w-full absolute flex flex-col justify-between top-0 left-0 z-0">
        <div className="flex">
          <div className="h-[640px] w-full bg-[#218CD3] bg-cover bg-no-repeat">
            <div className="flex flex-col items-center h-full justify-end pb-10">
              <Button
                variant="flat"
                className="text-white bg-[#1E90FF] px-10 font-bold"
              >
                Начать учиться
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-8">
          <div className="flex flex-col w-4/5">
            <div className="flex items-start py-10">
              <h3 className="text-[#1E90FF] text-2xl">
                50+ топовых онлайн школ{" "}
              </h3>
            </div>
            <div className="flex">
              <div className="w-1/3 items-end p-10">
                <div className="flex flex-col items-center p-6 shadow-2xl rounded-2xl">
                  <div className="w-32 h-32 bg-[#1E90FF] rounded-full"></div>
                  <p className="py-4">Онлайн школа</p>
                  <p>
                    Онлайн школа, предлагающая современные и доступные курсы по
                    различным направлениям для школьников, студентов и взрослых.{" "}
                  </p>
                </div>
              </div>

              <div className="w-1/3">
                <div className="flex flex-col items-center p-6 shadow-2xl rounded-2xl">
                  <div className="w-52 h-52 bg-[#1E90FF] rounded-full"></div>
                  <p className="py-4">Онлайн школа</p>
                  <p>
                    Онлайн школа, предлагающая современные и доступные курсы по
                    различным направлениям для школьников, студентов и взрослых.{" "}
                  </p>
                </div>
              </div>

              <div className="w-1/3 items-end p-10">
                <div className="flex flex-col items-center p-6 shadow-2xl rounded-2xl">
                  <div className="w-32 h-32 bg-[#1E90FF] rounded-full"></div>
                  <p className="py-4">Онлайн школа</p>
                  <p>
                    Онлайн школа, предлагающая современные и доступные курсы по
                    различным направлениям для школьников, студентов и взрослых.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

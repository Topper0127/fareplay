"use client";

import Background from "/public/assets/img/background.png";
import { useState } from "react";

export default function Home() {
    return (
        <>
            <main
                className="place-items-center h-lvh"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div className="px-8 pt-8 flex gap-x-8 items-center w-full z-10">
                    <img
                        src="/assets/svg/FarePlay.svg"
                        alt="FarePlay"
                        className="object-cover h-full"
                    />
                    <div className="grow shrink flex justify-end items-center flex-nowrap overflow-hidden">
                        <p className="pr-8" style={{ fontFamily: "GohuFont" }}>
                            ABOUT
                        </p>
                        <p className="pr-8" style={{ fontFamily: "GohuFont" }}>
                            POINTS
                        </p>
                        <p style={{ fontFamily: "GohuFont" }}>WAITLIST</p>
                    </div>
                </div>
                <div className="clouds">
                    <div
                        className="cloud x1"
                        style={{
                            position: "absolute",
                            left: Math.random() * -1000,
                            top: Math.random() * 200,
                        }}
                    ></div>
                    <div
                        className="cloud x2"
                        style={{
                            position: "absolute",
                            left: Math.random() * -1000,
                            top: Math.random() * 200,
                        }}
                    ></div>
                    <div
                        className="cloud x3"
                        style={{
                            position: "absolute",
                            left: Math.random() * -1000,
                            top: Math.random() * 200,
                        }}
                    ></div>
                    <div
                        className="cloud x4"
                        style={{
                            position: "absolute",
                            left: Math.random() * -1000,
                            top: Math.random() * 200,
                        }}
                    ></div>
                    <div
                        className="cloud x5"
                        style={{
                            position: "absolute",
                            left: Math.random() * -1000,
                            top: Math.random() * 200,
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        marginTop: "auto",
                        width: "100%",
                        height: 600,
                        background: "url(/assets/img/background.png) no-repeat",
                        backgroundSize: "100% 100%",
                        zIndex: 10,
                    }}
                >
                    <div
                        className="grid justify-items-center w-fit"
                        style={{
                            marginTop: "-100px",
                            marginLeft: "calc(50% + 100px)",
                        }}
                    >
                        <p
                            className="text-[48px] m-0 p-0"
                            style={{
                                fontFamily: "Pixeboy",
                                lineHeight: 1,
                            }}
                        >
                            GAMBLE FOR FREE
                        </p>
                        <p
                            className="text-[64px] text-[#4AF5D3]"
                            style={{ fontFamily: "Pixeboy", lineHeight: 1 }}
                        >
                            EARN POINTS
                        </p>
                        <div>
                            <div className="flex">
                                <img src="/assets/svg/skeleton.svg" alt="img" />
                                <p
                                    className="text-[18px] px-2"
                                    style={{ fontFamily: "GohuFont" }}
                                >
                                    Click LAUNCH APP
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/assets/svg/skeleton.svg" alt="img" />
                                <p
                                    className="text-[18px] px-2"
                                    style={{ fontFamily: "GohuFont" }}
                                >
                                    Connect your wallet
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/assets/svg/skeleton.svg" alt="img" />
                                <p
                                    className="text-[18px] px-2"
                                    style={{ fontFamily: "GohuFont" }}
                                >
                                    Enter your invite code
                                </p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="bg-[#16413C] outline outline-1 outline-[#4AF5D3] w-[120px] h-[34px] rounded-lg hover:bg-green-700">
                                <p
                                    className="text-[12px]"
                                    style={{ fontFamily: "GohuFont" }}
                                >
                                    LAUNCH APP
                                </p>
                            </button>
                            <button className="bg-[#140747] outline outline-1 outline-[#410DFF] w-[120px] h-[34px] rounded-lg hover:bg-purple-800 ml-5">
                                <p
                                    className="text-[12px]"
                                    style={{ fontFamily: "GohuFont" }}
                                >
                                    LEARN MORE
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

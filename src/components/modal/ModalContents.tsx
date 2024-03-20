import React from "react";

export const RingostarModal = () => {
    return (
        <div className="p-5 bg-white rounded-lg shadow-2xl dark:bg-black">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">링고스타</h2>
            <h2 className="text-2xl font-medium mb-3 text-gray-800 dark:text-white">외국인 상대로 한 렌터카 서비스</h2>

            {/* Image Gallery or Placeholder */}
            <div className="mb-3">
                {/* Replace with actual image tags or a carousel component */}
                <div className="h-64 gap-5 rounded-md flex items-center justify-center">
                    <img src="\RingoStarMain.png" alt="Ringo Star" className="h-full"/>
                    <img src="\RingoStarList.png" alt="Ringo Star" className="h-full"/>
                    <img src="\RingoStarMap.png" alt="Ringo Star" className="h-full"/>
                </div>
            </div>

            {/* Project Details */}
            <div className="mb-6 text-gray-700 dark:text-white">
                <div className="space-y-2">
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Workplace:</div>
                        <div>아이작에스엔씨(주)</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Development period:</div>
                        <div>2023.10 ~ 2023.12 (3개월)</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Development scope:</div>
                        <div>Front end</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Technology stack:</div>
                        <div>Vue.js, Vuex, Bootstrap4, i18n</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">URL:</div>
                        <a href="https://ringostar.co.kr/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 inline-block ml-2">
                            https://ringostar.co.kr/
                        </a>
                    </div>
                </div>
            </div>

            {/* Development Story */}
            <div className="mb-4 text-gray-700 dark:text-white">
                <h3 className="font-semibold text-lg mb-2">Development Story</h3>
                <div>
                    <p className="mb-1">이 프로젝트는 외국인 관광객들을 목표로 한 외국인 전용 렌트카 홈페이지 입니다.</p>
                    <p className="mb-1">i18n을 사용하여 다국어 지원을 했습니다 </p>
                    <p className="mb-1">결제 모듈을 사용해 국내 및 해외 결제가 가능하게 했습니다.</p>
                    <p>Google Map을 이용하여 기사님의 실시간 위치를 볼 수 있게 했습니다.</p>
                </div>
            </div>
        </div>
    );
};

export const SeniorsModal = () => {
    return (
        <div className="p-5 bg-white rounded-lg shadow-2xl dark:bg-black">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Seniors</h2>
            <h2 className="text-2xl font-medium mb-3 text-gray-800 dark:text-white">6070분들의 재취업을 위한 프로젝트</h2>

            {/* Image Gallery or Placeholder */}
            <div className="mb-3">
                {/* Replace with actual image tags or a carousel component */}
                <div className="h-64 gap-10 rounded-md flex items-center justify-center">
                    <img src="\SeniorsMain.png" alt="Seniors" className=" h-full"/>
                    <img src="\SeniorsChat.png" alt="Seniors" className=" h-full"/>
                    <img src="\SeniorsChatButton.png" alt="Seniors" className=" h-full"/>
                </div>
            </div>

            {/* Project Details */}
            <div className="mb-6 text-gray-700 dark:text-white">
                <div className="space-y-2">
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Workplace:</div>
                        <div>사이드 프로젝트</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Development period:</div>
                        <div>2023.06 ~ 2023.11 (6개월)</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Development member:</div>
                        <div>FE: 3, BE: 3, DE: 1, PM: 1</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Development scope:</div>
                        <div>Front end</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Technology stack:</div>
                        <div>Next, TypeScript, Tailwind, Recoil, Tanstack Query, Stomp</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">URL:</div>
                        <a href="https://seniors-job.vercel.app/" target="_blank" rel="noopener noreferrer"
                           className="text-blue-500 hover:text-blue-600 inline-block ml-2">
                            https://seniors-job.vercel.app/
                        </a>
                    </div>
                    <div className="text-sm text-red-500">
                        (현재 서버가 닫혀 있습니다.)
                    </div>
                </div>
            </div>

            {/* Development Story */}
            <div className="mb-4 text-gray-700 dark:text-white">
                <h3 className="font-semibold text-lg mb-2">Development Story</h3>
                <p className="mb-1">이 프로젝트는 제가 직접 개발 커뮤니티 사이트에 글을 올려 사람들을 모집하여 진행한 프로젝트입니다.</p>
                <p className="mb-1">도메인은 6070분들의 재취업을 위해 계획했습니다.</p>
                <p className="mb-1"> 담당역할은 채팅 부분을 맡아 채팅 시스템을 개발 했습니다.</p>
                <p className="mb-1">Stomp를 이용해 실시간 채팅 및 실시간 접속 현황을 구현 하였습니다.</p>
            </div>
        </div>
    )
};

export const KinderGrewModal = () => {
    return (
        <div className="p-5 bg-white rounded-lg shadow-xl dark:bg-black">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">킨더그루</h2>
            <h2 className="text-2xl font-medium mb-3 text-gray-800 dark:text-white">유치원이 아이의 교육에 보다 집중할 수 있도록 아이 관리를 지원하는 통합 관리 서비스</h2>
            <div className="mb-3">
                <div className="h-64 gap-16 rounded-md flex items-center justify-center">
                    <img src="\KinderGrew3.png" alt="KinderGrew" className=" h-full"/>
                    <img src="\KinderGrew2.png" alt="KinderGrew" className=" h-full"/>
                    <img src="\KinderGrew1.png" alt="KinderGrew" className=" h-full"/>
                </div>
            </div>

            {/* Project Details */}
            <div className="mb-6 text-gray-700 dark:text-white">
                <div className="space-y-2">
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Workplace:</div>
                        <div>항해99 실전 프로젝트</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Development period:</div>
                        <div>2023.03 ~ 2023.04 (2개월)</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Development scale:</div>
                        <div>Front end</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Development member:</div>
                        <div>FE: 3, BE: 4, DE: 1</div>
                    </div>
                    <div className="flex justify-start items-baseline space-x-2">
                        <div className="font-semibold">Technology stack:</div>
                        <div>React, Recoil, Styled Components, Tanstack Query</div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-start items-baseline space-x-2">
                            <div className="font-semibold">URL:</div>
                            <a href="https://front-omega-vert.vercel.app/main" target="_blank" rel="noopener noreferrer"
                               className="text-blue-500 hover:text-blue-600">
                                https://front-omega-vert.vercel.app/main
                            </a>
                        </div>
                        <div className="text-sm text-red-500">
                            (현재 서버가 닫혀 있습니다.)
                        </div>
                    </div>
                </div>
            </div>

            {/* Development Story */}
            <div className="mb-4 text-gray-700 dark:text-white">
                <h3 className="font-semibold text-lg mb-2">Development Story</h3>
                <p className="mb-1">이 프로젝트는 유치원 통합 관리를 목표로 한 서비스 입니다.</p>
                <p className="mb-1">실제 일주일동안 유저들에게 테스트를 진행하여 40분의 피드백을 받아서 유저 피드백을 반영하는 경험을 하였습니다.</p>
            </div>
        </div>
    )
};
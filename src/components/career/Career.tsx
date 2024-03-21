

const Career = () => {
return (
    <div className="bg-white text-black p-10">
        <h2 className="text-4xl font-bold mb-4">Career</h2>
        <div className="flex flex-grow items-center justify-center">
                <div className="p-5">
                <p className="font-bold text-2xl">아이작에스엔씨(주)</p>
                <p className="font-medium text-lg">2023.08 ~ 현재</p>
                </div>
            <div className="p-5 border-l-2">
                <div className="p-2 mb-5 border-b-2">
                    <p className="font-bold text-2xl">링고스타</p>
                    <div className="font-medium mt-1">
                        <p>외국인 상대로 한 렌터카 서비스</p>
                        <p>서비스 페이지 혼자 담당하여 프론트 영역 개발 완성 및 유지보수 담당 </p>
                    </div>
                    <div className="pl-3">
                        <li className="m-2">i18n을 사용하여 6개 국어 지원</li>
                        <li className="m-2">결제 모듈을 사용하여 국내 및 해외 결제가 가능</li>
                        <li className="m-2">Google Map을 이용하여 기사님의 실시간 위치를 확인 가능</li>
                    </div>
                </div>
                <div className="p-2 mb-5 border-b-2">
                    <p className="font-bold text-2xl">Vringo ICMS 마이그레이션</p>
                    <div className="font-medium mt-1">
                        <p>현재 운영하고 있는 KT 부가서비스인 Vringo 관리자 페이지 VUE2에서 React18버전으로 마이그레이션</p>
                        <p>프론트 영역 혼자 담당하여 진행</p>
                    </div>
                    <div className="pl-3">
                        <li className="m-2">리액트에 맞는 최신 라이브러리 추가 및 변경</li>
                        <li className="m-2">개선 된 UI/UX</li>
                        <li className="m-2">사용자 추가 기능</li>
                    </div>
                </div>
                <div className="p-2">
                    <p className="font-bold text-2xl">V비즈링 CMS 기능 추가</p>
                    <div className="font-medium mt-1">
                        <p>현재 운영하고 있는 KT 부가서비스인 V비즈링 관리자 페이지에 기능 추가를 진행하고 유지 보수를 담당</p>
                    </div>
                    <div className="pl-3">
                            <li className="m-2">통계 페이지 차트 및 표 추가</li>
                            <li className="m-2">검색 조건 추가 </li>
                        </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Career
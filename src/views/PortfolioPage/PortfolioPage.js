import React from 'react'
import "./PortfolioPage.css"


function PortfolioPage() {
    console.log("portfolio")
    var scroll = document.querySelector('.curve')

    window.addEventListener(scroll, function(){
        var value = 1 + window.scrollY/-500;
        scroll.style.transform=`scaleY(${value})`;

    })
    return (
        <section className="container">
            <form className="milliewillie">
            <form className="appintro">
                    <h1 style={{ color:"#faf1d0"}}>디저트 주문앱 </h1>
                    <ul style={{ marginTop:'30px'}}>
                        Mocking Data를 활용한 내 주변의 카페를 찾고, 주문할 수 있는 앱
                    <br />
                    <br /></ul>
                
                        <li>기술스택: MVVM -retrofit2, Coroutines, firebase, koin , GoogleMap, Glide, kotlin, room, viewBinding, liveData</li>
                        <ol style={{ marginTop:'30px'}}>구현 기능: 
                            <li className="func">내 위치를 기반으로 주위 카페 리스트 보여주기 (원하는 위치로 조정 가능)</li>
                            <li className="func">찜 기능  </li>
                            <li className="func">주문 기능</li>
                            <li className="func">로그인 기능</li>
                        </ol>
                        <section style={{ marginTop: "30px"}}>
                            <img src="dessert1.png" style={{height:'30%',marginRight:'15px' }}/>
                            <img src="dessert2.png" style={{height:'30%', marginRight:'15px'}}/>
                            <img src="dessert3.png" style={{height:'30%',marginRight:'15px'}}/>
                            <img src="dessert4.png" style={{height:'30%',marginRight:'15px'}}/>
                            <img src="dessert5.png" style={{height:'30%',marginRight:'15px'}}/>
                            <br/>
                            <a style={{ marginTop:'30px', marginBottom: '100px', color:"#b8f1d0"}} href="https://github.com/Jungchaeyeon/LetsGoHiking">github 프로젝트 바로가기</a>
                        </section>
                    </form>
            <form className="appintro">
                    <h1 style={{ color:"#faf1d0"}}>AI 기반 재활용 분리수거시스템 </h1>
                    <ul style={{ marginTop:'30px'}}>
                     폐기물 선별장에서의 열악한 노동처우와 기존 폐기물 처리 기술 개선을 위해 
                     <br />인공지능을 활용해 재활용품을 자동선별하는 서비스
                    <br />
                       자체 구축한 모양 및 재질 분류 알고리즘을 통해 동일한 모양이더라도 다른 재질을 가지는
                    <br/> 물체까지 분리할 수 있습니다. 실시간으로 처리되는 재활용품 데이터들을 웹/ 앱 서비스로 제공합니다.
                    <br/> 또한 컨베이어벨트 이상 발생 시 관리자에게 즉각적인 알림을 전송할 수 있는 기능을 구현하였습니다.

                    <br /></ul>
                
                        <li>기술스택: React-native, javascript, AWS, EC2, MongoDB</li>
                        <ol style={{ marginTop:'30px'}}>구현 기능: 
                            <li className="func">AWS의 우분투 가상머신에 서버 구현, 웹 서비스구현</li>
                            <li className="func">Unity와 소켓통신을 통해 실시간 폐기물 처리 데이터를 DB에 저장 및 불러오는 기능 구현  </li>
                            <li className="func">Web View를 앱에 띄울 수 있는 앱서비스 구현</li>
                        </ol>
                        <section style={{ marginTop: "30px"}}>
                            <img src="trashcollection1.png" style={{height:'30%',marginRight:'15px' }}/>
                            <img src="trashcollection2.png" style={{height:'30%', marginRight:'15px'}}/>
                            <img src="trashcollection3.png" style={{height:'30%',marginRight:'15px'}}/>
                            <br/>
                            <a style={{ marginTop:'30px', marginBottom: '100px', color:"#b8f1d0"}} href="https://github.com/Jungchaeyeon/LetsGoHiking">github 프로젝트 바로가기</a>
                        </section>
                    </form>
                <form className="appintro">
                    <h1 style={{ color:"#faf1d0"}}>이번주 등산고? </h1>
                    <ul style={{ marginTop:'30px'}}>
                     산에 대한 정보와 산행포인트,등산로 정보, 더불어 지역별, 난이도별 산에 대한 정보를 제공합니다.
                    <br />
                        뿐만 아니라 등산 기록형 앱으로 산 북마크, 등산 기록 저장, 불러오기 기능을 구현하였고, 
                        한줄 리뷰 남기기 기능을 통해서 사람들과 산에 대한 리뷰를 공유할수 있도록 하였습니다.

                    <br /></ul>
                
                        <li>기술스택: kotlin, coroutines, okhttp3, retrofit2, gson, glide, koin2, viewmodel, livedata</li>
                        <ol style={{ marginTop:'30px'}}>구현 기능: 
                            <li className="func">지역별, 난이도별 산 추천</li>
                            <li className="func">산 검색 기능</li>
                            <li className="func">가고싶은 산 저장</li>
                            <li className="func">산 위치 보기</li>
                            <li className="func">한줄 등산 리뷰 공유</li>
                            <li className="func">나만의 등산 리뷰</li>
                        </ol>
                        <section style={{ marginTop: "30px"}}>
                            <img src="hiking1.png" style={{height:'30%',marginRight:'15px' }}/>
                            <img src="hiking2.png" style={{height:'30%', marginRight:'15px'}}/>
                            <img src="hiking3.png" style={{height:'30%',marginRight:'15px'}}/>
                            <img src="hiking4.png" style={{height:'30%',marginRight:'15px'}}/>
                            <img src="hiking5.png" style={{height:'30%',marginRight:'15px'}}/>
                            <br/>
                            <a style={{ marginTop:'30px', marginBottom: '100px', color:"#b8f1d0"}} href="https://github.com/Jungchaeyeon/LetsGoHiking">github 프로젝트 바로가기</a>
                        </section>
                    </form>
                    {/* --------------------------------------------------------------------- */}
                <img src="milliewillie_main.png" style={{width:'50%', height:'50%'}} />
                <form className="appintro">
                    <h1 style={{ color:"#faf1d0"}}>밀리윌리</h1>
                    <ul style={{ marginTop:'30px'}}>
                        "20대 청춘을 나라에 바치는 국군 장병들의 소중한 시간을 더 유의미하게 만들 수 없을까?"라는
                        고민에서부터 <br/>프로젝트가 시작되었습니다.<br />
                        짧다면 짧지만 길다면 긴,<br />
                        하루동안의 개인 정비 시간을 활용하여 자기개발에 도움이 될 수 있는 프로그램을 만들었습니다.</ul>
                    <li style={{ marginTop:'30px'}}>아키텍쳐 패턴: MVVM</li>
                    <li style={{ marginTop:'30px'}}>기술스택: almost kotlin, java(libs), databinding, rxAndroid2, constraintlayout, cardview, okhttp3, retrofit2, gson, glide, koin2, viewmodel, livedata</li>
                    <ol style={{ marginTop:'30px'}}>구현 기능: 
                        <li className="func">일정과 D-day </li> 
                        <li className="func">감정일기  </li>
                        <li className="func">로그인, 휴가 관리 </li>
                        <li className="func">달력 커스텀 </li>
                    </ol>
                    <video className="video" style={{ marginTop:'30px', width:'40%', height:'40%'}} muted controls autoPlay loop >
                        <source src="demo.mp4" type="video/mp4"/>
                    </video>         
                    <a style={{ marginTop: '30px', color:"#b8f1d0"}} href='https://play.google.com/store/apps/details?id=com.makeusteam.milliewillie'>플레이스토어 밀리윌리 바로가기</a>
                </form>
                <form className="appintro">
                 <h1 style={{ color: "#faf1d0", marginTop:'30px'}}>그 외 토이프로젝트</h1>
                <ul style={{ marginTop:'30px'}}>
                공공 데이터포털 - 제공 한국관광공사 관광사진 API 활용하여 앱 UI를 구현하였습니다.
                <br /></ul>
            
                    <li style={{ marginTop:'30px'}}>기술스택:almost kotlin, java(libs), databinding, rxAndroid2, constraintlayout, cardview, okhttp3, retrofit2, gson, glide, koin2, viewmodel, livedata</li>
                    <ol style={{ marginTop:'30px'}}>구현 기능: 
                        <li className="func">ViewPager</li>
                        <li className="func">CardView, RecyclerView</li>
                    </ol>
                    <section style={{ marginTop: "30px"}}>
                        <img src="toy1.png" style={{height:'30%',marginRight:'15px' }}/>
                        <img src="toy3.png" style={{height:'30%', marginRight:'15px'}}/>
                        <img src="toy2.png" style={{height:'30%',marginRight:'15px'}}/>
                        <br/>
                        <a style={{ marginTop:'30px', marginBottom: '100px', color:"#b8f1d0"}} href="https://github.com/Jungchaeyeon/MakeUs/tree/develop">github 프로젝트 바로가기</a>
                    </section>
                   
                </form>
                </form>
        </section>
    )
}

export default PortfolioPage

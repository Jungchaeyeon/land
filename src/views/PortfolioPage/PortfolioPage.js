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
                 <h1 style={{ color:"#faf1d0"}}>낙상방지 앱 </h1>
                <ul style={{ marginTop:'30px'}}>
                고령화의 속도는 급격하게 증가하고 있으며, 이에 따라 발생하는 안전사고 중 절반 정도를 차지하는 낙상 사고의 심각성 또한 증가하고 있습니다.
                <br />
                웨어러블 디바이스는 연령에 상관없이 쉽게 이용이 가능하며,
                상시 착용이 간편한 기기로 쉬운 데이터 활용이 가능하다는 점을 기반하여
                이를 통해 낙상사고를 인지하고, 예방하고자 하였습니다.
                <br /></ul>
            
                    <li>기술스택: java, firebase, beacon-library, naviagtion, constraintlayout</li>
                    <ol style={{ marginTop:'30px'}}>구현 기능: 
                        <li className="func">beacon기반 위치인식</li>
                        <li className="func">fitbit연동</li>
                        <li className="func">로그인, 긴급연락망</li>
                    </ol>
                    <a style={{ marginTop:'30px', color:"#b8f1d0"}} href="https://github.com/Jungchaeyeon/FallPrevention">github 프로젝트 바로가기</a>
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

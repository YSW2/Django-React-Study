import React, { Component } from "react"; // React와 Component 모듈을 불러옴
import { render } from "react-dom"; // render 함수를 불러옴

export default class App extends Component { // App 클래스를 선언하고 Component 클래스를 상속받음
    constructor(props) { // constructor 메소드를 정의하고 props를 매개변수로 받음
        super(props); // 부모 클래스의 생성자를 호출
    }

    render() { // render 메소드를 정의
        return <h1>Testing React Code</h1>; // h1 태그를 반환하여 화면에 출력
    }
}

const appDiv = document.getElementById("app"); // appDiv 변수에 id가 "app"인 요소를 할당
render(<App />, appDiv); // App 컴포넌트를 appDiv에 렌더링
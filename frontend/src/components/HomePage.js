import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  // App 클래스를 선언하고 Component 클래스를 상속받음
  constructor(props) {
    // constructor 메소드를 정의하고 props를 매개변수로 받음
    super(props); // 부모 클래스의 생성자를 호출
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<p>This is the home page</p>} />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/room/:roomCode" Component={Room} />
        </Routes>
      </Router>
    );
  }
}

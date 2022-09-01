import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar className="ri-auto" href="#home"><img className = "logo" alt = "logoimage" src= "/togatherLogo.png"></img></Navbar>
          <Nav className="le-auto">
            <Nav.Link href="#home">admin님</Nav.Link>
            <Nav.Link href="#home">로그아웃</Nav.Link>
            <Nav.Link href="#features">개인정보 수정</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className = "sideBar" >
        <ul>
          <li className = "active">
            대시보드
          </li>
          <li>
            회원관리
          </li>
          <li>
            커뮤니티관리
          </li>
          <li>
            학교관리
          </li>
          <li>
            결제관리
          </li>
          <li>
            NFT
          </li>
          <li>
            Q&amp;A
          </li>
          <li>
            관리자관리
          </li>
        </ul>

      </div>
 
    
    </div>
  );
}

export default App;

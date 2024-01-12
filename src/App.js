/*eslint-disable*/ //노란글씨 에러 지워줌

import { useState } from 'react';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  //자주 바뀔 수 있는 데이터를 저장하는 변수 역할 state
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState();
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>WelCome to Chnagmin's BLOG 👋</h4>
      </div>
      {/* html축약을 위해 반복문 map을 사용 */}
      {글제목.map(function (a, i) {
        return (
          // 반복문 사용시 key를 활용하여 unique한 값 부여
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i); //기본적인 state변경
              }}
            >
              {글제목[i]}{' '}
              <span
                onClick={(e) => {
                  e.stopPropagation(); // 이벤트 버블링을 방지
                  let copy = [...따봉]; //obj 또는 arr형태의 state를 변경할때는 복사본 만들어서 변경
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>{' '}
              {따봉[i]}{' '}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {/* input태그의 값이 변경될때마다 state변경 */}
      <input
        type='text'
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      {/* input에 입력한 값을 state 맨 앞에 추가 */}
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);

          let copy2 = [...따봉];
          copy2.unshift(0);
          따봉변경(copy2);
        }}
      >
        글발행
      </button>
      {/* 만들어진 컴포넌트를 조건이 참일때 불러오고 컴포넌트에 props 데이터 전송 */}
      {modal == true ? <Modal 글제목={글제목} title={title} /> : null}
    </div>
  );
}

// 많은 div들을 축약하고싶을때 사용하는 컴포넌트
function Modal(props) {
  //부모 컴포넌트로부터 전달받은 props 데이터
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>2월 17일 발행</p>
      <p>상세내용</p>
    </div>
  );
}

//class를 이용한 컴포넌트 생성 방법
class Modal2 extends React.Component {
  //class에서 props 전송방법
  constructor(props) {
    super(props);
    this.state = {
      name: 'changmin',
      age: 27,
    };
  }

  render() {
    return (
      <div>
        <h4>class를 이용하여 컴포넌트 생성</h4>
        {/* props 받아온 데이터 활용 */}
        <span>{this.state.name}</span>
        <span>{this.state.age}</span>
        <span>{this.props.프롭스이름}</span>
        <button
          onClick={() => {
            this.setState({ age: 23 }); //class에서 state 변경 방법
          }}
        ></button>
      </div>
    );
  }
}

export default App;

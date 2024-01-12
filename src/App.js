/*eslint-disable*/ //노란글씨 에러 지워줌

import { useState } from 'react';
import './App.css';
import { render } from '@testing-library/react';

function App() {
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
      {글제목.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}{' '}
              <span
                onClick={(e) => {
                  e.stopPropagation(); // 이벤트 버블링을 방지
                  let copy = [...따봉];
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
      <input
        type='text'
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
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

      {modal == true ? <Modal 글제목={글제목} title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>2월 17일 발행</p>
      <p>상세내용</p>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'changmin',
      age: 27,
    };
  }

  render() {
    return (
      <div>
        <h4>class를 이용하여 컴포넌트 생성</h4>
        <span>{this.state.name}</span>
        <span>{this.state.age}</span>
        <button
          onClick={() => {
            this.setState({ age: 23 });
          }}
        ></button>
      </div>
    );
  }
}

export default App;

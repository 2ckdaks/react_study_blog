/*eslint-disable*/ //노란글씨 에러 지워줌

import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);

  let [따봉, 따봉변경] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>WelCome to Chnagmin's BLOG 👋</h4>
      </div>

      <div className='list'>
        <h4>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{' '}
          {따봉}{' '}
        </h4>
        <p>2월 17일 발행</p>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            글제목변경(copy);
          }}
        >
          수정버튼
        </button>
      </div>
      <div className='list'>
        <h4>
          {글제목[1]} <span>👍</span> {따봉}{' '}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>
          {글제목[2]} <span>👍</span> {따봉}{' '}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

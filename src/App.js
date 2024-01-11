import logo from './logo.svg';
import './App.css';

function App() {
  let post = '강남 우동 맛집';

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>WelCome to Chnagmin's BLOG 👋</h4>
      </div>

      <div>블로그임</div>
      <div>{post}</div>
    </div>
  );
}

export default App;

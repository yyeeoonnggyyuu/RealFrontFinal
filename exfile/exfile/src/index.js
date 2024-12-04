import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App.js 파일에서 App 컴포넌트를 가져옵니다.

const root = ReactDOM.createRoot(document.getElementById('root')); // index.html에서 id="root"인 요소를 가져옴
root.render(
  <React.StrictMode>
    <App /> {/* App 컴포넌트를 렌더링 */}
  </React.StrictMode>
);

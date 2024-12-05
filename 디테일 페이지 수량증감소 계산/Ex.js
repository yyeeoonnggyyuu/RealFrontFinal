import React, { useState } from 'react';
import './App.css';

const Option = ({ id, name, price, onRemove, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    const updatedQuantity = Math.max(1, newQuantity); // 최소 수량은 1
    setQuantity(updatedQuantity);
    onQuantityChange(id, updatedQuantity);
  };

  const totalPrice = price * quantity;
  const reward = Math.floor(totalPrice * 0.01); // 1% 적립금 계산

  return (
    <div className="option">
      <h3>{name}</h3>
      <p>단가: {price.toLocaleString()}원</p>
      <div>
        <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      </div>
      <p>총 금액: {totalPrice.toLocaleString()}원</p>
      <p>적립금: {reward.toLocaleString()}원</p>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

const App = () => {
  const [options, setOptions] = useState([]);

  const addOption = () => {
    if (options.length >= 5) {
      alert('최대 5개의 옵션만 추가할 수 있습니다.');
      return;
    }

    const newOption = {
      id: Date.now(),
      name: `옵션 ${options.length + 1}`,
      price: 50000,
      quantity: 1,
    };

    setOptions([...options, newOption]);
  };

  const removeOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, quantity } : option
      )
    );
  };

  const totalQuantity = options.reduce((sum, option) => sum + option.quantity, 0);
  const totalPrice = options.reduce(
    (sum, option) => sum + option.price * option.quantity,
    0
  );

  return (
    <div className="App">
      <h1>옵션 관리</h1>
      <button onClick={addOption}>옵션 추가</button>
      <div className="options-container">
        {options.map((option) => (
          <Option
            key={option.id}
            id={option.id}
            name={option.name}
            price={option.price}
            onRemove={removeOption}
            onQuantityChange={updateQuantity}
          />
        ))}
      </div>
      <div className="summary">
        <h2>총 합계</h2>
        <p>총 수량: {totalQuantity}</p>
        <p>총 금액: {totalPrice.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default App;

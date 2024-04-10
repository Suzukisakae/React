import React from "react";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
function App() {
  return (
    <>
      <div>
        {/* <h3 className="title">Accordion</h3> */}
        {/* <Accordion data={faqs} /> */}
      </div>
      <div>
        <h3 className="title">Tip Calculator</h3>
        <TipCalculator />
      </div>
    </>
  );
}
function TipCalculator() {
  const [tipPrice, setTipPrice] = useState(0);
  const [tipYouRecive, setTipYouRecive] = useState(0);
  const [tipFriendRecive, setTipFriendRecive] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);

  function handleTipPriceChange(value) {
    const newTipPrice = Number(value);
    setTipPrice(newTipPrice);
    setTipTotal(
      Math.round((newTipPrice * tipYouRecive) / 100) +
        Math.round((newTipPrice * tipFriendRecive) / 100) +
        newTipPrice
    );
  }
  function handleTipYouReciveChange(value) {
    const newTipYouRecive = Number(value);
    setTipYouRecive(newTipYouRecive);
    setTipTotal(
      Math.round((tipPrice * newTipYouRecive) / 100) +
        Math.round((tipPrice * tipFriendRecive) / 100) +
        tipPrice
    );
  }
  function handleTipFriendReciveChange(value) {
    const newTipFriendRecive = Number(value);
    setTipFriendRecive(newTipFriendRecive);
    setTipTotal(
      Math.round((tipPrice * tipYouRecive) / 100) +
        Math.round((tipPrice * newTipFriendRecive) / 100) +
        tipPrice
    );
  }
  return (
    <div className="tip">
      <TipPrice onTipPriceChange={handleTipPriceChange} />
      <TipYouRecive onTipYouRiciveChange={handleTipYouReciveChange} />
      <TipFriendRecive onTipFriendReciveChange={handleTipFriendReciveChange} />
      <TipTotal
        tipPrice={tipPrice}
        tipYouRecive={tipYouRecive}
        tipFriendRecive={tipFriendRecive}
        tipTotal={tipTotal}
      />
    </div>
  );
}
function TipPrice({ onTipPriceChange }) {
  return (
    <div className="tip-frame">
      <p className="tip-text">Tip Price</p>
      <input
        className="tip-input"
        type="number"
        placeholder="VD: 20"
        onChange={(event) => onTipPriceChange(Number(event.target.value))}
      ></input>
    </div>
  );
}
function TipYouRecive({ onTipYouRiciveChange }) {
  return (
    <div className="tip-frame">
      <p className="tip-text">Tip You Recive</p>
      <select
        className="tip-select"
        onChange={(e) => onTipYouRiciveChange(Number(e.target.value))}
      >
        <option value="10">It's good (10%)</option>
        <option value="25">It's great (25%)</option>
        <option value="50">It's awesome (50%)</option>
      </select>
    </div>
  );
}
function TipFriendRecive({ onTipFriendReciveChange }) {
  return (
    <div className="tip-frame">
      <p className="tip-text">Tip Friend Recive</p>
      <select
        className="tip-select"
        onChange={(e) => onTipFriendReciveChange(Number(e.target.value))}
      >
        <option value="10">It's good (10%)</option>
        <option value="25">It's great (25%)</option>
        <option value="50">It's awesome (50%)</option>
      </select>
    </div>
  );
}
function TipTotal({ tipPrice, tipYouRecive, tipFriendRecive, tipTotal }) {
  return (
    <div className="tip-frame">
      <p className="tip-text">You Pay</p>
      <p className="tip-total">
        `${tipTotal} {"("} ${Math.round((tipPrice * tipYouRecive) / 100)} + $
        {Math.round((tipFriendRecive * tipPrice) / 100)} + ${tipPrice}
        {")"}`
      </p>
    </div>
  );
}
export default App;

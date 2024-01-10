import { useEffect, useRef, useState } from "react";

export default function Questions() {
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);
  const [showBox5, setShowBox5] = useState(false);

  const moreInfoRef = useRef(null);

  function showBox() {
    setShowBox1(!showBox1);
    setShowBox2(false);
    setShowBox3(false);
    setShowBox4(false);
    setShowBox5(false);
  }

  function showBoxTwo() {
    setShowBox2(!showBox2);
    setShowBox1(false);
    setShowBox3(false);
    setShowBox4(false);
    setShowBox5(false);
  }
  function showBoxThree() {
    setShowBox3(!showBox3);
    setShowBox1(false);
    setShowBox2(false);
    setShowBox4(false);
    setShowBox5(false);
  }
  function showBoxFour() {
    setShowBox4(!showBox4);
    setShowBox1(false);
    setShowBox2(false);
    setShowBox3(false);
    setShowBox5(false);
  }
  function showBoxFive() {
    setShowBox5(!showBox5);
    setShowBox1(false);
    setShowBox2(false);
    setShowBox3(false);
    setShowBox4(false);
  }
  function handleClickOutside() {
    if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
      setShowBox1(false);
      setShowBox2(false);
      setShowBox3(false);
      setShowBox4(false);
      setShowBox5(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className="questions">
      <h2>Frequently Asked Questions</h2>
      <div className="links">
        <a className="cursor-pointer">General</a>
        <a href="#">Payments</a>
        <a href="#">Gifting and Promotions</a>
        <a href="#">Other</a>
      </div>
      <div ref={moreInfoRef} className="box">
        {/* box-1  */}
        <div className="box1 cursor-pointer bg-blue-600" onClick={showBox}>
          <h5>What's a Nitro?</h5>
          <i
            className={`fa-solid fa-plus transition-all ${
              showBox1 === true ? "rotate-45" : ""
            }`}
          ></i>
          {showBox1 && (
            <div className="relative">
              <p>
                Nitro is a subscription service that unlocks features and perks
                across Discord, giving you more ways to have fun and express
                yourself.
              </p>
            </div>
          )}
        </div>

        {/* box-2  */}
        <div className="box2 cursor-pointer" onClick={showBoxTwo}>
          <h5>How does nitro work</h5>
          <i
            className={`fa-solid fa-plus transition-all ${
              showBox2 === true ? "rotate-45" : ""
            }`}
          ></i>
          {showBox2 && (
            <div className="relative">
              <p>
                Nitro is our most popular plan that unlocks access to all
                available Nitro perks, and Nitro Basic includes a selection of
                the most-loved Nitro perks that help you better express
                yourself. See the comparison chart above for a full breakdown!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

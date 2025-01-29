import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Fireworks from "fireworks-js";
import qrImage from "./assets/qr.jpg"; // Thêm import hình QR
import "./App.css";

const Button = ({ children, className, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const LunarNewYearWishes = () => {
  const { width, height } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [fireworks, setFireworks] = useState(null);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      activateEffects();
    }
  };

  const activateEffects = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000);

    const container = document.getElementById("fireworks-container");
    const fireworksInstance = new Fireworks(container, {
      hue: { min: 0, max: 60 },
      acceleration: 1.05,
      brightness: { min: 50, max: 80 },
      decay: { min: 0.015, max: 0.03 },
      delay: { min: 30, max: 60 },
      explosion: 5,
      flickering: 50,
      intensity: 30,
      friction: 0.96,
      gravity: 1.5,
      opacity: 0.5,
      particles: 90,
      traceLength: 3,
      traceSpeed: 10,
      rocketsPoint: { min: 50, max: 50 },
      lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
      lineStyle: "round",
    });
    fireworksInstance.start();
    setFireworks(fireworksInstance);

    setTimeout(() => fireworksInstance.stop(), 10000);
  };

  return (
    <div className="app-container">
      <div id="fireworks-container" className="fireworks-overlay"></div>
      {isConfettiActive && <Confetti width={width} height={height} numberOfPieces={500} recycle={false} />}

      {!isOpen && (
        <motion.div 
          className="li-xi"
          onClick={handleOpen}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="li-xi-gold-band"></div>
          <div className="li-xi-text">Ấn để mở lì xì</div>
        </motion.div>
      )}


      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="content-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <h1 className="app-title">Chúc Mừng Năm Mới</h1>
            <div className="app-content">
              <p>
                Kính gửi những người thân yêu,
              </p>
              <p>
                Năm mới đã đến, xin gửi đến mọi người những lời chúc chân thành nhất. Chúc một năm mới tràn đầy sức khỏe, hạnh phúc và bình an. Mong rằng mỗi ngày qua đi đều mang đến những niềm vui và may mắn mới.
              </p>
              <p>
                <strong>Chúc mừng năm mới 2025:</strong>
                <ul className="app-list">
                  <li>Sức khỏe dồi dào, năng lượng tràn đầy</li>
                  <li>Thành công rực rỡ, may mắn ngập tràn</li>
                  <li>Hạnh phúc sum vầy, ấm áp yêu thương</li>
                  <li>An khang thịnh vượng, phúc lộc đong đầy</li>
                </ul>
              </p>
              <p>
                <em>
                  Chúc cả gia đình một năm mới vạn sự như ý, tấn tài tấn lộc, 
                  cùng nhau đón những điều tốt đẹp nhất!
                </em>
              </p>
              <div className="qr-section">
                <img 
                  src={qrImage} 
                  alt="QR Code Lì Xì" 
                  className="qr-image"
                />
                <p className="qr-caption">Quét QR code nhận thật nhiều may mắn nè!</p>
              </div>
            </div>
          </motion.div>
        )}
        <motion.div
          className="app-button-container"
          whileHover={{ scale: 1.1 }}
        >
          <Button className="app-button" onClick={activateEffects}>
            Chúc Mừng Năm Mới 2025!
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LunarNewYearWishes;

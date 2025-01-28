import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Fireworks from "fireworks-js";
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

    setTimeout(() => fireworksInstance.stop(), 5000);
  };

  return (
    <div className="app-container">
      <div id="fireworks-container" className="fireworks-overlay"></div>
      {isConfettiActive && <Confetti width={width} height={height} numberOfPieces={500} recycle={false} />}

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
          Khi thanh xuân căng tràn nhựa sống, anh mong em hãy cứ là chính mình –
          một bầu trời riêng biệt giữa vũ trụ bao la. Em như cánh én mang theo
          nắng ấm, chạm đến đâu, đất trời bừng tỉnh, yêu thương nở rộ. Đừng
          ngần ngại tỏa sáng theo cách riêng mình, bởi vẻ đẹp em mang là món quà
          vô giá từ tạo hóa.
        </p>
        <p>
          <strong>Anh chúc em năm 2025:</strong>
          <ul className="app-list">
            <li>Dẫu đường đi có gập ghềnh, bàn chân em bước tới – đá hóa thành thảm lụa mềm.</li>
            <li>Mỗi thử thách hóa bậc thang nâng em lên tầm cao mới.</li>
            <li>Mỗi giọt mồ hôi thắp lên ngọn đuốc kiên cường trong tim.</li>
            <li>Dẫu giông tố có ập đến, em vẫn ung dung như cây tùng đứng giữa trời, rễ bám sâu vào hiện tại, cành vươn về phía bình minh.</li>
          </ul>
        </p>
        <p>
          Hãy để trái tim em là la bàn dẫn lối, đam mê làm ngọn hải đăng, nghị
          lực trở thành đôi cánh. Mỗi ngày qua không chỉ là tồn tại, mà là hành
          trình em tự viết nên truyền thuyết riêng.
        </p>
        <p>
          <em>
            Hạnh phúc không ở đâu xa – nó ẩn trong nụ cười em rạng rỡ, trong
            từng khoảnh khắc em dám yêu thương, dám sống trọn, dám tin vào ngày
            mai.
          </em>
        </p>
        <p>
          Anh nguyện là bến đỗ bình yên khi em mỏi gối, là vầng trăng dịu dàng
          soi sáng những đêm dài em lạc lối. Cứ bay đi, cô gái của bầu trời tự
          do, 2025 sẽ là chương mới trong hành trình em tự do tỏa sáng!
        </p>
            </div>
          </motion.div>
          
        )}
      <motion.div
        className="app-button-container"
        whileHover={{ scale: 1.1 }}
      >
        <Button className="app-button" onClick={activateEffects}>
          Đón Năm Mới!
        </Button>
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LunarNewYearWishes;
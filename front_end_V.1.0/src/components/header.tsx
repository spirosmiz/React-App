import { motion, MotionProps } from "framer-motion";
export default function Header() {
  return (
    <motion.div
      className="header text-center m-auto "
      style={{ backgroundColor: "#222" }}
    >
      <motion.span
        className="text-center"
        style={{
          fontSize: "1.6rem",
          fontFamily: "sans-serif",
          color: "white",
          backgroundClip: "text",
          WebkitBackgroundClip: "text", // For compatibility
        }}
      >
        La place Caffe App
      </motion.span>
    </motion.div>
  );
}

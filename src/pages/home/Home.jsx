/* eslint-disable react/no-unknown-property */
import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, ContactShadows, OrbitControls } from "@react-three/drei";
import Lung from "./models-3d/Lung";
import Recipient from "./models-3d/Recipient";
import Lights from "./lights/Lights";

const Home = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }} shadows={true}>
      <BakeShadows />
      <OrbitControls target={[0, 1, 0]} />
      <Lung scale={5} />
      <Recipient />
      <Lights />
      <ContactShadows 
            frames ={16}
            opacity={1}
            scale={20}
            blur={1}
            far={10}
            resolution={256}
            color={"#000"}
            />
    </Canvas>
  );
};

export default Home;

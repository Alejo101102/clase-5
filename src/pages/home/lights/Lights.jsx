import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef} from "react";
import { DirectionalLightHelper, HemisphereLightHelper, MathUtils, PointLightHelper, SpotLightHelper } from "three";

const Lights = () => {

    const directionalLightRef = useRef()
    //useHelper(directionalLightRef, DirectionalLightHelper)

    const pointLightRef = useHelper()
    useHelper(pointLightRef, PointLightHelper, 2, "cyan")

    const spotLightRef = useRef()
    useHelper(spotLightRef, SpotLightHelper)

    const hemisphereLightRef = useRef()
    useHelper(hemisphereLightRef, HemisphereLightHelper)

    useFrame((state) => {
        const elapsedTime = state.clock.getElapsedTime()
        directionalLightRef.current.position.x = MathUtils.lerp(-1, 1, Math.cos(elapsedTime))
    })

    return(
        <>

            <spotLight ref={spotLightRef} color={"red"} position={[4, 2, -2]} distance={6} intensity={100} angle={Math.PI / 14} penumbra={1} />
            <hemisphereLight ref={hemisphereLightRef} color={"red"} groundColor={"blue"} intensity={2} />
            <pointLight ref={pointLightRef} color={"cyan"} position={[0, 2, -4]} intensity={5} />
            <ambientLight color={"#F5F5DC"} intensity={2} />
            
            <directionalLight 
            ref={directionalLightRef} 
            color={"yellow"} 
            position={[0, 5, 5]} 
            castShadow={true}
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-1}
            shadow-camera-right={1}
            shadow-camera-top={1}
            shadow-camera-bottom={-1}
            shadow-camera-near={1}
            shadow-camera-far={7.5}
            />
        </>
    )
}

export default Lights;
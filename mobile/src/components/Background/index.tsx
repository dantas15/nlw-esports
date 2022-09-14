import { ImageBackground } from "react-native";

import { styles } from "./styles";

import backgroundImg from "../../assets/background-galaxy.png";

export interface BackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground source={backgroundImg} style={styles.container} defaultSource={backgroundImg}>
      {children}
    </ImageBackground>
  );
}

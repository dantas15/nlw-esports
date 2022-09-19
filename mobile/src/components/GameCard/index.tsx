import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCard {
  id: string;
  title: string;
  _count: { ads: number };
  bannerURL: string;
}

interface GameCardProps extends TouchableOpacityProps {
  data: GameCard;
}

export function GameCard({ data, ...rest }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerURL }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

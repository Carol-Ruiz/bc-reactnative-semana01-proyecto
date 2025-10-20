import { View, Text } from 'react-native';
import { skillCardStyles } from '../../styles';

interface SkillCardProps {
  emoji: string;
  name: string;
  level?: string;
}

export function SkillCard({ emoji, name, level }: SkillCardProps) {
  return (
    <View style={skillCardStyles.card}>
      <Text style={skillCardStyles.emoji}>{emoji}</Text>
      <View style={skillCardStyles.content}>
        <Text style={skillCardStyles.name}>{name}</Text>
        {level && <Text style={skillCardStyles.level}>{level}</Text>}
      </View>
    </View>
  );
}
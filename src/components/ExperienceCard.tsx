import { View, Text } from 'react-native';
import { experienceCardStyles } from '../../styles';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
}

export function ExperienceCard({
  company,
  position,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <View style={experienceCardStyles.card}>
      <View style={experienceCardStyles.header}>
        <View style={experienceCardStyles.infoContainer}>
          <Text style={experienceCardStyles.position}>{position}</Text>
          <Text style={experienceCardStyles.company}>{company}</Text>
        </View>
        <View style={experienceCardStyles.periodBadge}>
          <Text style={experienceCardStyles.periodText}>{period}</Text>
        </View>
      </View>
      <Text style={experienceCardStyles.description}>{description}</Text>
    </View>
  );
}
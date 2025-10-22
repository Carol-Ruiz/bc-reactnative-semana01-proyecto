import { View, Text } from 'react-native';
import { educationStyles } from '../../styles';

interface EducationCardProps {
  school: string;
  degree: string;
  year: string;
  icon?: string;
}

export function EducationCard({
  school,
  degree,
  year,
  icon = '🎓',
}: EducationCardProps) {
  return (
    <View style={educationStyles.card}>
      <View style={educationStyles.header}>
        <Text style={educationStyles.icon}>{icon}</Text>
        <View style={educationStyles.content}>
          <Text style={educationStyles.schoolName}>{school}</Text>
          <Text style={educationStyles.degree}>{degree}</Text>
          <Text style={educationStyles.year}>{year}</Text>
        </View>
      </View>
    </View>
  );
}
import { View, Text } from 'react-native';
import { projectCardStyles } from '../../styles';

interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({
  emoji,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <View style={projectCardStyles.card}>
      {/* Header */}
      <View style={projectCardStyles.header}>
        <Text style={projectCardStyles.emoji}>{emoji}</Text>
        <Text style={projectCardStyles.title}>{title}</Text>
      </View>

      {/* Descripción */}
      <Text style={projectCardStyles.description}>{description}</Text>

      {/* Tags */}
      <View style={projectCardStyles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={projectCardStyles.tag}>
            <Text style={projectCardStyles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

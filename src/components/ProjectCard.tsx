import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { projectCardStyles } from '../../styles';

interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  completed?: boolean;
  link?: string; 
}

export function ProjectCard({
  emoji,
  title,
  description,
  tags,
  featured = false,
  completed = false,
  link, 
}: ProjectCardProps) {

  const handlePress = () => {
    if (link) {
      Linking.openURL(link).catch((err) => console.error('Error al intentar abrir la URL:', err));
    } else {
      console.warn('No se ha definido un enlace para este proyecto');
    }
  };

  return (
    <View style={[projectCardStyles.card, featured && projectCardStyles.cardFeatured]}>
      {/* Header */}
      <View style={projectCardStyles.header}>
        <View style={projectCardStyles.titleContainer}>
          <Text style={projectCardStyles.emoji}>{emoji}</Text>
          <Text style={projectCardStyles.title}>{title}</Text>
        </View>
        {completed && (
          <View style={projectCardStyles.badge}>
            <Text style={projectCardStyles.badgeText}>✓</Text>
          </View>
        )}
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

      {/* Botones */}
      <View style={projectCardStyles.buttonContainer}>
        <TouchableOpacity style={projectCardStyles.button} activeOpacity={0.7} onPress={handlePress}>
          <Text style={projectCardStyles.buttonText}>Ver Código</Text>
        </TouchableOpacity>
      </View>

      {/* Estado */}
      {completed && (
        <View style={projectCardStyles.counter}>
          <Text style={projectCardStyles.counterText}>✅ Proyecto completado</Text>
        </View>
      )}
    </View>
  );
}

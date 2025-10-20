import { View, Text } from 'react-native';
import { headerStyles } from '../../styles';

interface SectionHeaderProps {
  title: string;
  icon: string;
}

export function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
      <Text style={{ fontSize: 24, marginRight: 8 }}>{icon}</Text>
      <Text style={{ fontSize: 22, fontWeight: '700', color: '#111827' }}>
        {title}
      </Text>
    </View>
  );
}
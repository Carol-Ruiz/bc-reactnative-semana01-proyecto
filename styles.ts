import { StyleSheet } from 'react-native';

// ==================== COLORES GLOBALES ====================
export const colors = {
  // Primarios
  primary: '#b769ebff', 
  secondary: '#a855f7', 
  terceary:'#b397ceff', 
  success: '#7f4ebeff', 
  
  // Neutral
  white: '#ffffff',
  black: '#000000',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray900: '#111827',
  
  // Backgrounds
  bgLight: '#eff6ff', // Azul claro
  bgPurple: '#faf5ff', // Púrpura claro
  bgGreen: '#f0fdf4', // Verde claro
  
  // Borders
  borderBlue: '#bfdbfe',
  borderPurple: '#e9d5ff',
  borderGreen: '#bbf7d0',
};

// ==================== ESTILOS GLOBALES ====================
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  scrollView: {
    flex: 1,
  },
});

// ==================== HEADER ====================
export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.terceary,
    height: 170,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 32,
  },
  title: {
    color: colors.white,
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
  },
});

// ==================== AVATAR ====================
export const avatarStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: colors.white,
  },
});

// ==================== NOMBRE Y TÍTULO ====================
export const profileStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.gray900,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 8,
  },
});

// ==================== TARJETA DE CONTACTO ====================
export const contactStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray900,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  itemWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingBottom: 16,
  },
  icon: {
    fontSize: 24,
    marginRight: 16,
    width: 32,
  },
  infoContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.gray500,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray900,
  },
});

// ==================== TARJETA "SOBRE MÍ" ====================
export const bioStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgLight,
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: colors.borderBlue,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray900,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: colors.gray700,
    lineHeight: 24,
  },
});

// ==================== SEPARADOR ====================
export const separatorStyles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: colors.gray300,
    marginHorizontal: 20,
    marginVertical: 32,
  },
});
// ==================== SECCIÓN COLAPSABLE ====================
export const collapsibleStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 32,
  },
  button: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSkills: {
    backgroundColor: colors.primary,
  },
  buttonExperience: {
    backgroundColor: colors.secondary,
  },
  buttonProjects: {
    backgroundColor: colors.success,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24,
  },
  contentContainer: {
    paddingHorizontal: 4,
  },
});

// ==================== SKILL CARD ====================
export const skillCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgLight,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderBlue,
  },
  emoji: {
    fontSize: 28,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray900,
  },
  level: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 4,
  },
});

// ==================== EXPERIENCE CARD ====================
export const experienceCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgPurple,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.borderPurple,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  infoContainer: {
    flex: 1,
  },
  position: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray900,
  },
  company: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray500,
    marginTop: 4,
  },
  periodBadge: {
    backgroundColor: '#f3e8ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  periodText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.secondary,
  },
  description: {
    fontSize: 14,
    color: colors.gray500,
    lineHeight: 20,
  },
});

// ==================== PROJECT CARD ====================
export const projectCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 28,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray900,
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: colors.gray500,
    lineHeight: 24,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#93c5fd',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1e40af',
  },
});

// ==================== FOOTER ====================
export const footerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray600,
  },
  subtext: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 8,
  },
});
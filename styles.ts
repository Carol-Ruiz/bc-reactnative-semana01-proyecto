import { StyleSheet } from 'react-native';

// colores 
export const colors = {
  // Primarios
  primary: '#b769ebff', 
  primaryDark: '#9333ea',
  secondary: '#a855f7', 
  terceary:'#b397ceff', 
  success: '#7f4ebeff',
  warning: '#987addff',
  danger: '#ef4444',
  
  // Neutral
  white: '#ffffff',
  black: '#000000',
  pink: '#e9a8c6ff',
  blue:'#342d99ff',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray900: '#111827',
  
  // Backgrounds
  bgLight: '#eff6ff',
  bgPurple: '#faf5ff',
  bgGreen: '#f0fdf4',
  bgWarning: '#fef3c7',
  
  // Borders
  borderBlue: '#bfdbfe',
  borderPurple: '#e9d5ff',
  borderGreen: '#bbf7d0',
};

// sombras
const shadowBase = {
  shadowColor: colors.black,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 3,
};

const shadowMedium = {
  shadowColor: colors.black,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  elevation: 6,
};

const shadowLarge = {
  shadowColor: colors.black,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.25,
  shadowRadius: 16,
  elevation: 10,
};

// estilos globales
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  scrollView: {
    flex: 1,
  },
});

// header
export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.terceary,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 32,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    ...shadowLarge,
  },
  title: {
    color: colors.blue,
    fontSize: 45,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    opacity: 0.95,
  },
});

// avatar
export const avatarStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: colors.pink,
    ...shadowLarge,
  },
  badge: {
    position: 'absolute',
    bottom: 5,
    right: 115,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: colors.pink,
    ...shadowMedium,
  },
  badgeText: {
    fontSize: 22,
    fontWeight: '800',
  },
});

//perfil
export const profileStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  name: {
  fontSize: 28,
  fontWeight: '800',
  color: colors.gray900,
  letterSpacing: -0.3,
  textAlign: 'center', 
},
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    justifyContent: 'center',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray600,
    marginTop: 4,
  },
});

// Redes sociales
export const socialStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    ...shadowBase,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonSuccess: {
    backgroundColor: colors.success,
  },
  buttonWarning: {
    backgroundColor: colors.warning,
  },
  icon: {
    fontSize: 24,
  },
});

// Contacto
export const contactStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 24,
    marginHorizontal: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.gray200,
    ...shadowBase,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
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
    fontWeight: '800',
    color: colors.gray500,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.gray900,
  },
});
// bio
export const bioStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgLight,
    borderRadius: 18,
    padding: 24,
    marginHorizontal: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: colors.borderBlue,
    ...shadowBase,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.gray900,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: colors.gray700,
    lineHeight: 24,
    fontWeight: '500',
  },
});

// Educacion
export const educationStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgWarning,
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#fcd34d',
    ...shadowBase,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 28,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  schoolName: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.gray900,
  },
  degree: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray700,
    marginTop: 4,
  },
  year: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.warning,
    marginTop: 4,
  },
});

// separador
export const separatorStyles = StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: colors.gray300,
    marginHorizontal: 20,
    marginVertical: 32,
    borderRadius: 1,
  },
});

// colapsable
export const collapsibleStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 32,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shadowMedium,
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
  buttonEducation: {
    backgroundColor: colors.warning,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  buttonSubtext: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
  },
  contentContainer: {
    paddingHorizontal: 4,
  },
});

// skill card
export const skillCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgLight,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderBlue,
    ...shadowBase,
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.gray900,
  },
  level: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 4,
    textTransform: 'uppercase',
  },
});

// experience card
export const experienceCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgPurple,
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.borderPurple,
    ...shadowBase,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  infoContainer: {
    flex: 1,
  },
  position: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.gray900,
  },
  company: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.gray600,
    marginTop: 4,
  },
  periodBadge: {
    backgroundColor: '#f3e8ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  periodText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.secondary,
  },
  description: {
    fontSize: 14,
    color: colors.gray600,
    lineHeight: 20,
    fontWeight: '500',
  },
});

// project card
export const projectCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.gray200,
    ...shadowMedium,
  },
  cardFeatured: {
    borderWidth: 2,
    borderColor: colors.success,
    backgroundColor: colors.bgGreen,
    ...shadowLarge,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  emoji: {
    fontSize: 30,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.gray900,
    flex: 1,
  },
  badge: {
    backgroundColor: colors.success,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.white,
  },
  description: {
    fontSize: 16,
    color: colors.gray600,
    lineHeight: 24,
    marginBottom: 12,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    gap: 8,
  },
  tag: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#93c5fd',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1e40af',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  button: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
    ...shadowBase,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
  },
  counterText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.gray600,
  },
});

// filtros
export const filterStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    marginRight: 8,
    backgroundColor: colors.gray200,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  filterButtonActive: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  filterText: {
    fontWeight: '700',
    fontSize: 13,
    color: colors.gray700,
  },
  filterTextActive: {
    color: colors.white,
  },
});

// footer
export const footerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.gray700,
  },
  subtext: {
    fontSize: 12,
    color: colors.gray500,
    marginTop: 8,
    fontWeight: '600',
  },
});
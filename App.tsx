import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { useState, useMemo } from 'react';
import { SkillCard } from './src/components/SkillCard';
import { ProjectCard } from './src/components/ProjectCard';
import { ExperienceCard } from './src/components/ExperienceCard';
import { EducationCard } from './src/components/EducationCard';
import {
  globalStyles,
  headerStyles,
  avatarStyles,
  profileStyles,
  contactStyles,
  bioStyles,
  separatorStyles,
  collapsibleStyles,
  footerStyles,
  socialStyles,
  filterStyles,
} from './styles';

// interfases
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface Skill {
  id: string;
  emoji: string;
  name: string;
  level?: string;
}

interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  completed?: boolean;
  link?: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
  icon?: string;
}

interface SocialLink {
  icon: string;
  label: string;
  url: string;
  variant: 'primary' | 'secondary' | 'success' | 'warning';
}

// Mis Datos
const personalInfo = {
  name: 'Carol Andrea Ruiz Castañeda',
  title: 'Desarrolladora Backend',
  avatar: require('./img/avatar.jpeg'),
  bio: 'Soy una desarrolladora backend con pasión por crear soluciones escalables y robustas. Trabajo con Python, JavaScript, Prisma, MariaDB y me especializo en el desarrollo de APIs REST.',
};

const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'caritool152007@gmail.com' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá, Colombia' },
  { icon: '🔗', label: 'GitHub', value: 'https://github.com/Carol-Ruiz' },
];

const socialLinks: SocialLink[] = [
  { icon: '🐱', label: 'GitHub', url: 'https://github.com/Carol-Ruiz', variant: 'primary' },
  { icon: '✉️', label: 'Email', url: 'mailto:caritool152007@gmail.com', variant: 'warning' },
];

const skills: Skill[] = [
  { id: '1', emoji: '🐍', name: 'Python', level: 'Intermedio' },
  { id: '2', emoji: '🔥', name: 'JavaScript', level: 'Avanzado' },
  { id: '3', emoji: '⚡', name: 'Node.js', level: 'Intermedio' },
  { id: '4', emoji: '📦', name: 'Prisma', level: 'Intermedio' },
  { id: '5', emoji: '💾', name: 'MariaDB', level: 'Intermedio' },
  { id: '6', emoji: '🛠️', name: 'Flask', level: 'Básico' },
  { id: '7', emoji: '📊', name: 'Git & GitHub', level: 'Intermedio' },
];

const projects: Project[] = [
  {
    id: '1',
    emoji: '💻',
    title: 'Plataforma de Optica',
    description:
      'Sistema web completo para gestión y venta de productos sobre una optica. ',
    tags: ['JavaScript', 'Node.js', 'Express'],
    featured: true,
    completed: true,
    link: 'https://github.com/Carol-Ruiz/OPTICA.git',
  },
  {
    id: '2',
    emoji: '🛠️',
    title: 'API REST de Gestión de Tareas',
    description:
      'API RESTful para gestión de tareas con recordatorios. Permite crear, editar y eliminar tareas.',
    tags: ['Flask', 'API REST', 'MariaDB', 'Python','JavaScript'],
    completed: true,
    link: 'https://github.com/Carol-Ruiz/CRUD_TAREAS.git',
  },
  {
    id: '3',
    emoji: '🎯',
    title: 'Plataforma de Técnicas de Estudio',
    description:
      'Plataforma colaborativa de SENA con herramientas de concentración y temporizadores.',
    tags: ['Python', 'Flask', 'API REST','JavaScript'],
    completed: false,
    link: 'https://github.com/Fernandam99/proyectoSynapse.git',
  },
];

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup XYZ',
    position: 'Desarrolladora Backend',
    period: '2023 - Presente',
    description: 'Desarrollo de microservicios y APIs con Node.js, Prisma y MariaDB.',
  },
  {
    id: '2',
    company: 'Freelance',
    position: 'Desarrolladora Backend Full Stack',
    period: 'Presente',
    description: 'Desarrollo de aplicaciones backend con Python, Flask y bases de datos relacionales.',
  },
];

const education: Education[] = [
  {
    id: '1',
     school: 'I.E.D ARBORIZADORA BAJA',
     degree: 'Bachillerato',
     year: '2024',
     icon: '🎓',
     
  },
  {
    id: '2',
    school: 'SENA',
    degree: 'Técnico en Desarrollo de Software',
    year: '2023 - 2024',
    icon: '💻',
   
  },
];

// ==================== TIPOS ====================
type SectionType = 'skills' | 'experience' | 'projects' | 'education';
type FilterType = 'all' | string;

// componente
export default function App() {
  const [expandedSection, setExpandedSection] = useState<SectionType | null>('projects');
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  const toggleSection = (section: SectionType) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Contador de proyectos completados
  const completedProjects = useMemo(
    () => projects.filter((p) => p.completed).length,
    []
  );

  // Filtra proyectos por la tecnología
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projects;
    return projects.filter((p) => p.tags.includes(selectedFilter));
  }, [selectedFilter]);

  // Obtener todas las tecnologías únicas
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => techs.add(tag)));
    return Array.from(techs).sort();
  }, []);

  // Abrir los enlaces a redes sociales
  const openSocialLink = async (url: string, label: string) => {
    try {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `No se pudo abrir ${label}`);
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al abrir el enlace');
    }
  };

  const handleProjectPress = (project: Project) => {
    Alert.alert(
      project.title,
      `${project.description}\n\n${project.completed ? '✅ Completado' : '🚧 En desarrollo'}`,
      [
        { text: 'Ver en GitHub', onPress: () => project.link && openSocialLink(project.link, 'GitHub') },
        { text: 'Cerrar', style: 'cancel' },
      ]
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.scrollView}>
        
        {/* ========== HEADER ========== */}
        <View style={headerStyles.container}>
          <Text style={headerStyles.title}>🍄_.PERFIL._🍄</Text>
          <Text style={headerStyles.subtitle}>Backend Developer | Python | JavaScript</Text>
        </View>

        {/* ========== AVATAR ========== */}
        <View style={avatarStyles.container}>
          <Image
            source={personalInfo.avatar}  
            style={avatarStyles.image}
          />
          <View style={avatarStyles.badge}>
            <Text style={avatarStyles.badgeText}>✓</Text>
          </View>
        </View>

        {/* ========== NOMBRE Y TÍTULO ========== */}
        <View style={profileStyles.container}>
          <Text style={profileStyles.name}>{personalInfo.name}</Text>
          <Text style={profileStyles.title}>{personalInfo.title}</Text>
          <Text style={profileStyles.subtitle}>SENA | Bogotá, Colombia</Text>
        </View>

        {/* ========== REDES SOCIALES ========== */}
        <View style={socialStyles.container}>
          {socialLinks.map((social) => {
            const variantStyle = 
              social.variant === 'secondary' ? socialStyles.buttonSecondary :
              social.variant === 'success' ? socialStyles.buttonSuccess :
              social.variant === 'warning' ? socialStyles.buttonWarning : {};
            
            return (
              <TouchableOpacity
                key={social.label}
                style={[socialStyles.button, variantStyle]}
                onPress={() => openSocialLink(social.url, social.label)}
                activeOpacity={0.7}
              >
                <Text style={socialStyles.icon}>{social.icon}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ========== SECCIÓN CONTACTO ========== */}
        <View style={contactStyles.card}>
          <Text style={contactStyles.cardTitle}>📞 Contacto</Text>
          {contacts.map((contact, index) => (
            <View
              key={index}
              style={[
                contactStyles.itemContainer,
                index < contacts.length - 1 && contactStyles.itemWithBorder,
              ]}
            >
              <Text style={contactStyles.icon}>{contact.icon}</Text>
              <View style={contactStyles.infoContainer}>
                <Text style={contactStyles.label}>{contact.label}</Text>
                <Text style={contactStyles.value}>{contact.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ========== SECCIÓN SOBRE MÍ ========== */}
        <View style={bioStyles.card}>
          <Text style={bioStyles.title}>📖 Sobre Mí</Text>
          <Text style={bioStyles.text}>{personalInfo.bio}</Text>
        </View>

        {/* ========== SEPARADOR ========== */}
        <View style={separatorStyles.line} />

        {/* ========== SECCIÓN HABILIDADES (COLAPSABLE) ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonSkills]}
            onPress={() => toggleSection('skills')}
            activeOpacity={0.8}
          >
            <View>
              <Text style={collapsibleStyles.buttonText}>💪 Mis Habilidades</Text>
            </View>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'skills' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'skills' && (
            <View style={collapsibleStyles.contentContainer}>
              {skills.map((skill) => (
                <SkillCard key={skill.id} {...skill} />
              ))}
            </View>
          )}
        </View>

        {/* ========== SEPARADOR ========== */}
        <View style={separatorStyles.line} />

        {/* ========== SECCIÓN EDUCACIÓN (COLAPSABLE) ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonEducation]}
            onPress={() => toggleSection('education')}
            activeOpacity={0.8}
          >
            <View>
              <Text style={collapsibleStyles.buttonText}>🎓 Mi Educación</Text>
            </View>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'education' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'education' && (
            <View style={collapsibleStyles.contentContainer}>
              {education.map((edu) => (
                <EducationCard key={edu.id} {...edu} />
              ))}
            </View>
          )}
        </View>

        {/* ========== SEPARADOR ========== */}
        <View style={separatorStyles.line} />

        {/* ========== SECCIÓN EXPERIENCIA (COLAPSABLE) ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonExperience]}
            onPress={() => toggleSection('experience')}
            activeOpacity={0.8}
          >
            <View>
              <Text style={collapsibleStyles.buttonText}>💼 Mi Experiencia</Text>
            </View>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'experience' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'experience' && (
            <View style={collapsibleStyles.contentContainer}>
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} {...exp} />
              ))}
            </View>
          )}
        </View>

        {/* ========== SEPARADOR ========== */}
        <View style={separatorStyles.line} />

        {/* ========== SECCIÓN PROYECTOS CON FILTRADO ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonProjects]}
            onPress={() => toggleSection('projects')}
            activeOpacity={0.8}
          >
            <View>
              <Text style={collapsibleStyles.buttonText}>🚀 Mis Proyectos</Text>
              <Text style={collapsibleStyles.buttonSubtext}>
                {completedProjects} completados • {projects.length} total
              </Text>
            </View>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'projects' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'projects' && (
            <View style={collapsibleStyles.contentContainer}>
              {/* FILTROS POR TECNOLOGÍA */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={filterStyles.container}
              >
                <TouchableOpacity
                  style={[
                    filterStyles.filterButton,
                    selectedFilter === 'all' && filterStyles.filterButtonActive,
                  ]}
                  onPress={() => setSelectedFilter('all')}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      filterStyles.filterText,
                      selectedFilter === 'all' && filterStyles.filterTextActive,
                    ]}
                  >
                    Todos ({projects.length})
                  </Text>
                </TouchableOpacity>

                {allTechs.map((tech) => {
                  const count = projects.filter((p) => p.tags.includes(tech)).length;
                  return (
                    <TouchableOpacity
                      key={tech}
                      style={[
                        filterStyles.filterButton,
                        selectedFilter === tech && filterStyles.filterButtonActive,
                      ]}
                      onPress={() => setSelectedFilter(tech)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          filterStyles.filterText,
                          selectedFilter === tech && filterStyles.filterTextActive,
                        ]}
                      >
                        {tech} ({count})
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              {/* LISTA DE PROYECTOS FILTRADOS */}
              {filteredProjects.map((project) => (
                <TouchableOpacity
                  key={project.id}
                  onPress={() => handleProjectPress(project)}
                  activeOpacity={0.7}
                >
                  <ProjectCard {...project} />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* ========== FOOTER ========== */}
        <View style={footerStyles.container}>
          <Text style={footerStyles.text}>🍄 Mi App 🍄</Text>
          <Text style={footerStyles.subtext}>© 2025 - Carol Ruiz</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
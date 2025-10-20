import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SkillCard } from './src/components/SkillCard';
import { ProjectCard } from './src/components/ProjectCard';
import { ExperienceCard } from './src/components/ExperienceCard';
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
} from './styles';

// ==================== INTERFACES ====================
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
}

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

// ==================== DATOS PERSONALES ====================
const personalInfo = {
  name: 'Carol Andrea Ruiz Castañeda',
  title: 'Desarrolladora Backend',
  avatar: require('./img/avatar2.jpeg'),
  bio: 'Soy una desarrolladora backend con pasión por crear soluciones escalables y robustas. Trabajo con Python, JavaScript, Prisma, MariaDB y me especializo en el desarrollo de APIs REST.',
};

const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'caritool152007@gmail.com' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá, Colombia' },
  { icon: '🔗', label: 'GitHub', value: 'https://github.com/Carol-Ruiz' },
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
    title: 'Plataforma de ventas en línea para salsamentaria',
    description:
      'Desarrollo de un sistema web para la gestión y venta de productos en una salsamentaria. Incluye un sistema de gestión de productos, carrito de compras y panel administrativo.',
    tags: ['JavaScript', 'Node.js', 'MariaDB', 'Prisma'],
  },
  {
    id: '2',
    emoji: '🛠️',
    title: 'API REST de Gestión de Tareas',
    description:
      'Desarrollo de una API RESTful para la gestión de tareas y recordatorios, implementada con Node.js, Express y MariaDB. Esta API permite a los usuarios crear, editar y eliminar tareas, así como asignarlas a diferentes categorías.',
    tags: ['Node.js', 'API REST', 'MariaDB', 'Express'],
  },
  {
    id: '3',
    emoji: '🎯',
    title: 'Proyecto de Técnicas de Estudio y Concentración',
    description:
      'Proyecto colaborativo de SENA para crear una plataforma que promueva técnicas de estudio y concentración. Incluye herramientas como temporizadores, recordatorios y sugerencias personalizadas para mejorar la productividad.',
    tags: ['Python', 'Flask', 'API REST', 'Gestión de Tareas'],
  },
];

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup XYZ',
    position: 'Desarrolladora Backend',
    period: '2024 - Presente',
    description: 'Desarrollo de microservicios y APIs con Node.js, Prisma y MariaDB.',
  },
  {
    id: '2',
    company: 'Freelance',
    position: 'Desarrolladora Backend Full Stack',
    period: '2023 - 2024',
    description: 'Desarrollo de aplicaciones backend utilizando Python, Flask y bases de datos relacionales.',
  },
];

// ==================== TIPOS ====================
type SectionType = 'skills' | 'experience' | 'projects';

// ==================== COMPONENTE PRINCIPAL ====================
export default function App() {
  const [expandedSection, setExpandedSection] = useState<SectionType | null>('projects');

  const toggleSection = (section: SectionType) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.scrollView}>
        
        {/* ========== HEADER ========== */}
        <View style={headerStyles.container}>
          <Text style={headerStyles.title}>🍄_.PERFIL._🍄</Text>
        </View>

        {/* ========== AVATAR ========== */}
        <View style={avatarStyles.container}>
          <Image
            source={personalInfo.avatar}  
            style={avatarStyles.image}
          />
        </View>

        {/* ========== NOMBRE Y TÍTULO ========== */}
        <View style={profileStyles.container}>
          <Text style={profileStyles.name}>{personalInfo.name}</Text>
          <Text style={profileStyles.title}>{personalInfo.title}</Text>
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
          >
            <Text style={collapsibleStyles.buttonText}>💪 Mis Habilidades</Text>
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

        {/* ========== SECCIÓN EXPERIENCIA (COLAPSABLE) ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonExperience]}
            onPress={() => toggleSection('experience')}
          >
            <Text style={collapsibleStyles.buttonText}>💼 Mi Experiencia</Text>
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

        {/* ========== SECCIÓN PROYECTOS (COLAPSABLE) ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonProjects]}
            onPress={() => toggleSection('projects')}
          >
            <Text style={collapsibleStyles.buttonText}>🚀 Mis Proyectos</Text>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'projects' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'projects' && (
            <View style={collapsibleStyles.contentContainer}>
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </View>
          )}
        </View>

        {/* ========== FOOTER ========== */}
        <View style={footerStyles.container}>
          <Text style={footerStyles.text}>🍄Mi app🍄</Text>
          <Text style={footerStyles.subtext}>© 2025</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
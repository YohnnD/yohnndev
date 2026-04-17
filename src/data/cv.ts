import type { Profile } from "../types/Profile";


export const cvData: Profile = {
meta: {
    title: 'Yohnneiber Diaz | Full Stack Web Developer',
    description:
      'Desarrollador Full Stack con 6 años de experiencia en sistemas web escalables, APIs e integraciones empresariales.'
  },
  name: 'Yohnneiber Diaz',
  summary: 'Soy desarrollador web Full Stack con 6 años de experiencia construyendo soluciones en frontend y backend, integrando APIs de terceros, y desarrollando sistemas sólidos y escalables.',
  role: 'Full Stack Web Developer',
  contact: {
    email: 'yohnndev@gmail.com',
    phone: '+58 412 716 8439',
    whatsapp: '584127168439',
    location: 'Barquisimeto, Venezuela',
    linkedin: 'https://www.linkedin.com/in/yohnneiber-diaz-b830611a5/',
    github: 'https://github.com/YohnnD',
    cv: 'https://docs.yohnndev.com/cv_yohnneiber_diaz.pdf'
  },
  experience: [
    {
      company: 'Nexus Logistics S.A.',
      role: 'Desarrollador Full Stack',
      period: '2024 - 2026',
      description:
        'Diseñé, desarrollé y mantuve una aplicación para un freight forwarder con arquitectura de frontend y backend desacoplada.',
      highlights: [
        'Implementé frontend en Angular y backend en Java con Spring Boot y servicios REST.',
        'Integré APIs de terceros para rastreo de envíos y servicios aduanales.',
        'Trabajé con Scrum y Jira para la planificación, seguimiento y entregas iterativas.',
        'Optimicé consultas de base de datos para mejorar el rendimiento en la generación de reportes.'
      ],
      stack: ['Angular', 'Tailwind CSS', 'Spring Boot', 'REST API', 'Jira', 'Scrum']
    },
    {
      company: 'Tecnova C.A.',
      role: 'Desarrollador Full Stack',
      period: '2019 - 2023',
      description:
        'Diseñé, optimicé, desplegué y mantuve aplicaciones web adaptadas a diversas necesidades de negocio.',
      highlights: [
        'Desarrollé soluciones robustas con Laravel, React y Angular.',
        'Implementé integraciones con terceros mediante la creación y consumo de APIs.',
        'Participé activamente en mejoras de rendimiento y mantenibilidad del software.',
        'Gestioné el despliegue de aplicaciones en Google Cloud Platform.'
      ],
      stack: ['Laravel', 'React', 'Angular', 'PHP', 'JavaScript', 'GCP']
    }
  ],
  skills: [
    'Aplicación de patrones de diseño y principios SOLID',
    'Creación y consumo de servicios y APIs',
    'Diseño y optimización de bases de datos',
    'Manejo de metodologías ágiles'
  ],
  tools: [
    'Tailwind CSS',
    'JavaScript',
    'React',
    'Angular',
    'Node.js',
    'PHP',
    'Laravel',
    'Java',
    'Spring Boot',
    'MySQL',
    'PostgreSQL',
    'Google Cloud',
    'Docker',
    'Git'
  ],
  education: {
    degree: 'Ingeniería Informática',
    university: 'Universidad Politécnica Territorial Andrés Eloy Blanco (UPTAEB)',
    period: '2016 - 2021'
  },
  stats: [
    { value: '6+', label: 'Años de experiencia', icon: 'lucide:timer' },
    { value: '2', label: 'Empresas', icon: 'lucide:briefcase-business' },
    { value: '10+', label: 'Tecnologías', icon: 'lucide:target' }
  ],
  learning: [
    { name: 'Next.js', progress: 50 },
  	{ name: 'Astro', progress: 70 },
  ]

};
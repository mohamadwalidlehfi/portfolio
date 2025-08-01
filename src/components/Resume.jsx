

// Data
const resumeData = {
  education: [
    {
      id: 1,
      title: 'Istanbul Arel University',
      degree: 'Bachelor of Computer Engineering',
      period: '2021 – 2026 (Expected)',
      description: 'Developing skills in full stack web development, algorithms, and software engineering principles.',
      highlights: [
        'Jenior Project: E-commerce Platform with MERN Stack'
      ]
    }
  ],
  experience: [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2024 — 2025',
      description: 'Developed multiple full-stack web projects using modern technologies.',
      responsibilities: [
        'Built responsive web applications with React, Node.js, and MongoDB',
        'Implemented RESTful APIs and authentication systems',
        'Optimized performance and SEO for client websites'
      ]
    }
  ],
  skills: {
    technical: [
      { name: 'React.js', percentage: 75 },
      { name: 'Node.js', percentage: 75 },
      { name: 'HTML-CSS', percentage: 95 },
      { name: 'Tailwind', percentage: 90 },
      { name: 'MongoDB', percentage: 75 },
      { name: 'Express.js', percentage: 70 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'Git', percentage: 80 },
      { name: 'Wordpress', percentage: 75 }
    ],
    professional: [
      { name: 'Problem Solving', percentage: 85 },
      { name: 'Team Collaboration', percentage: 80 },
      { name: 'Project Management', percentage: 75 },
      { name: 'Communication', percentage: 90 },
      { name: 'Time Management', percentage: 85 }
    ]
  }
};

// Components
const TimelineItem = ({ title, subtitle, period, description, details }) => (
  <li className="mb-8 relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-teal-500 before:rounded-full after:absolute after:left-2 after:top-6 after:w-px after:h-[calc(100%-28px)] after:bg-gray-700">
    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-teal-500/30 transition-all">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      {subtitle && <p className="text-teal-400 text-sm mt-1">{subtitle}</p>}
      <span className="inline-block bg-gray-700 text-teal-500 text-xs px-2 py-1 rounded-full mt-1 mb-2">
        {period}
      </span>
      <p className="text-gray-300 mb-2">{description}</p>
      {details && (
        <ul className="mt-2 space-y-1">
          {details.map((item, i) => (
            <li key={i} className="flex items-start text-gray-400">
              <span className="text-teal-500 mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </li>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
      {title}
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-gray-300">{skill.name}</span>
            <span className="text-teal-500 text-sm">{skill.percentage}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full" 
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SectionHeader = ({ icon, title, children }) => (
  <div className="flex items-center mb-6">
    <div>
      <h2 className="text-2xl font-bold text-teal-500">{title}</h2>
      {children && <p className="text-gray-400 text-sm">{children}</p>}
    </div>
  </div>
);

export default function Resume() {
  return (
    <div className="w-full bg-gray-800 text-white shadow-lg rounded-2xl p-6 md:p-8 lg:p-10">
      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          {/* Education */}
          <section className="mb-10">
            <SectionHeader   title="Education" />
            <ul>
              {resumeData.education.map(item => (
                <TimelineItem
                  key={item.id}
                  title={item.title}
                  subtitle={item.degree}
                  period={item.period}
                  description={item.description}
                  details={item.highlights}
                />
              ))}
            </ul>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <SectionHeader  title="Experience" />
            <ul>
              {resumeData.experience.map(item => (
                <TimelineItem
                  key={item.id}
                  title={item.title}
                  subtitle={item.company}
                  period={item.period}
                  description={item.description}
                  details={item.responsibilities}
                />
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column - Skills */}
        <div>
          <section className="sticky top-4">
            <SectionHeader icon="code-slash-outline" title="Skills" />
            <SkillCategory 
              title="Technical Skills" 
              skills={resumeData.skills.technical} 
            />
            <SkillCategory 
              title="Professional Skills" 
              skills={resumeData.skills.professional} 
            />
            

          </section>
        </div>
      </div>
    </div>
  );
}
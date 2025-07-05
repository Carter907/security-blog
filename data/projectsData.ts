interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Keylogger made in C++',
    description: `Ever wanted to keep track of your key strokes on Linux? Well, now you can with
    this simple keylogger made in C++. It requires sudo privileges to run, and is very accurate and fast.`,
    imgSrc: '/static/images/key.png',
    href: 'https://github.com/Carter907/keylogger',
  },
  {
    title: 'A Java Build Tool',
    description: `Are you sick of using Maven or Gradle? Well, me too-- I made this simple build tool for Java projects that allows you to
    build, run, and package your java projects with ease.`,
    imgSrc: '/static/images/java-build-tool.png',
    href: 'https://github.com/Carter907/streamline',
  },
]

export default projectsData

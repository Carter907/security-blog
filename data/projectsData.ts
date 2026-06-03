interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Keylogger made in C++',
    description: `Here is a keylogger for Linux systems made for simplicity and speed.`,
    imgSrc: '/static/images/key.png',
    href: 'https://github.com/Carter907/keylogger',
  },
  {
    title: 'A Java Build Tool',
    description: `Streamline is a simple build tool for Java projects aimed at helping students interact and run Java programmers
		without any of the friction that's inheriently present in enterprise build systems.`,
    imgSrc: '/static/images/java-build-tool.png',
    href: 'https://github.com/Carter907/streamline',
  },
]

export default projectsData

# Carter's Blog

A personal blog focused on cybersecurity, software development, and technology insights.

## About

This is a personal blog where I share my experiences, insights, and learnings in the cybersecurity and software development fields. As a Computer Science student transitioning from software development to cybersecurity, I document my journey, projects, and technical explorations.

## Goals

- **Share Knowledge**: Document and share technical insights about cybersecurity, programming, and software development
- **Career Development**: Track my transition from software development to security engineering
- **Community Engagement**: Connect with others interested in cybersecurity and technology
- **Project Showcase**: Highlight personal projects including security tools and development utilities

## Featured Projects

- **[Keylogger](https://github.com/Carter907/keylogger)**: A C++ keylogger for Linux that tracks keystrokes with sudo privileges
- **[Java Build Tool](https://github.com/Carter907/streamline)**: A simplified build tool for Java projects as an alternative to Maven/Gradle

## Technology Stack

This blog is built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Content**: [Contentlayer](https://www.contentlayer.dev/) for MDX content management
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: Umami Analytics
- **Comments**: Giscus (GitHub Discussions)

## Getting Started

### Prerequisites

- Node.js 18+ or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Carter907/security-blog.git
cd security-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` and configure your environment variables for analytics and comments.

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog in your browser.

### Building for Production

```bash
npm run build
npm run serve
# or
yarn build
yarn serve
```

## Project Structure

```
security-blog/
├── app/              # Next.js app directory
├── components/       # React components
├── data/
│   ├── blog/        # Blog posts in MDX format
│   ├── authors/     # Author information
│   └── siteMetadata.js  # Site configuration
├── layouts/         # Page layouts
├── public/          # Static assets
└── scripts/         # Build and utility scripts
```

## Writing Blog Posts

Blog posts are written in MDX format and stored in `data/blog/`. Each post includes frontmatter with metadata:

```mdx
---
title: 'Your Post Title'
date: 2025-01-01
tags: ['cybersecurity', 'programming']
draft: false
summary: 'A brief summary of your post'
---

Your content here...
```

## Contributing

This is a personal blog, but if you find any issues or have suggestions, feel free to open an issue.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: speers.carter@gmail.com
- **GitHub**: [@Carter907](https://github.com/Carter907)
- **LinkedIn**: [Carter Speers](https://www.linkedin.com/in/speerscarter)
- **Blog**: [https://carters-blog.vercel.app](https://carters-blog.vercel.app/)

## Acknowledgments

This blog is built on the [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template by Timothy Lin.

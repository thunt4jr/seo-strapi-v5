# BWL Backend Project

## Project Overview

This is a Strapi-powered backend project developed by Terry Hunt, designed to provide a robust content management system with flexible schema definitions for various content types.

## Content Type Schemas

### 1. Blog Post (`blog-post`)

Manages blog content with comprehensive SEO and authorship features.

- **Key Attributes**:
  - Title (unique, max 150 characters)
  - Slug (auto-generated from title)
  - Excerpt (max 300 characters)
  - Rich text content
  - Featured image
  - Categories (many-to-many relationship)
  - Author (many-to-one relationship with Person)
  - Reading time estimation
  - SEO metadata component

### 2. Category (`category`)

Organizes blog posts into categorizable groups.

- **Key Attributes**:
  - Name (unique)
  - Slug (auto-generated from name)
  - Description
  - Many-to-many relationship with Blog Posts

### 3. Contact Form (`contact`)

Captures and manages website contact form submissions.

- **Key Attributes**:
  - First and Last Name
  - Email
  - Phone (optional)
  - Message
  - Submission status (new, in-progress, completed, archived)
  - Additional metadata like IP address and user agent

### 4. Hero Slide (`hero-slide`)

Manages carousel slides for the homepage.

- **Key Attributes**:
  - Title (max 100 characters)
  - Description (max 300 characters)
  - Image
  - Call-to-Action (CTA) text and link
  - Display order
  - Active status

### 5. Person (`person`)

Manages profiles for authors, team members, or resume entries.

- **Key Attributes**:
  - Name and title
  - Slug
  - Avatar
  - Bio
  - Contact information
  - Skills
  - Education (repeatable component)
  - Work experience (repeatable component)
  - Social media links
  - Blog post authorship
  - Featured status

### 6. Project Type (`project-type`)

Categorizes portfolio projects.

- **Key Attributes**:
  - Title (max 100 characters)
  - Description
  - Icon or emoji
  - Display order
  - Active status
  - Relationship with Projects

### 7. Project (`project`)

Showcases portfolio projects with detailed information.

- **Key Attributes**:
  - Title
  - Slug
  - Description
  - Short description
  - Project type
  - Featured image
  - Additional images
  - Project URL
  - Technologies used (repeatable component)
  - Completion date
  - Featured status
  - SEO metadata

## Components

### Resume Components

- **Education**: Degree, institution, year, description
- **Experience**: Position, company, dates, description
- **Social Media**: Links to various platforms

### SEO Components

- **SEO Metadata**: Title, description, keywords, robots settings, Open Graph details
- **Page Speed**: Optimization settings for web performance
- **Social Sharing**: Auto-posting and sharing configurations

## Configuration Files

- `.env.example`: Environment configuration template
- `config/`: Contains server, database, and middleware configurations
- `tsconfig.json`: TypeScript configuration

## Development

### Prerequisites

- Node.js (18.0.0 - 22.x.x)
- npm (6.0.0+)

### Setup

1. Copy `.env.example` to `.env`
2. Update environment variables
3. Install dependencies: `npm install`
4. Run development server: `npm run develop`

### Deployment

- Build: `npm run build`
- Start: `npm run start`

## Contributing

Please follow best practices for content modeling and ensure comprehensive documentation.

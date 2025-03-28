import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectTechnology extends Struct.ComponentSchema {
  collectionName: 'components_project_technology';
  info: {
    description: 'Technology used in projects';
    displayName: 'Technology';
  };
  attributes: {
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    version: Schema.Attribute.String;
  };
}

export interface ResumeEducation extends Struct.ComponentSchema {
  collectionName: 'components_resume_education';
  info: {
    description: 'Educational background';
    displayName: 'Education';
  };
  attributes: {
    degree: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    institution: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String;
  };
}

export interface ResumeExperience extends Struct.ComponentSchema {
  collectionName: 'components_resume_experience';
  info: {
    description: 'Work experience';
    displayName: 'Experience';
  };
  attributes: {
    company: Schema.Attribute.String & Schema.Attribute.Required;
    current: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.Date;
    position: Schema.Attribute.String & Schema.Attribute.Required;
    startDate: Schema.Attribute.Date;
  };
}

export interface ResumeSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_resume_social_media';
  info: {
    description: 'Social media profiles';
    displayName: 'Social Media';
  };
  attributes: {
    behance: Schema.Attribute.String;
    dribbble: Schema.Attribute.String;
    facebook: Schema.Attribute.String;
    github: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

export interface SeoBreadcrumb extends Struct.ComponentSchema {
  collectionName: 'components_seo_breadcrumb';
  info: {
    description: 'Define breadcrumb navigation links';
    displayName: 'Breadcrumb';
  };
  attributes: {
    position: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoHreflang extends Struct.ComponentSchema {
  collectionName: 'components_seo_hreflang';
  info: {
    description: 'Alternate language version links';
    displayName: 'Hreflang';
  };
  attributes: {
    language: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoPageSpeed extends Struct.ComponentSchema {
  collectionName: 'components_seo_page_speed';
  info: {
    description: 'Settings for page speed and Core Web Vitals';
    displayName: 'Page Speed Optimizations';
  };
  attributes: {
    deferNonCriticalCSS: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    deferNonCriticalJS: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    lazyLoadImages: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    preconnect: Schema.Attribute.Text;
    preload: Schema.Attribute.Component<'seo.preload-resource', true>;
    priority: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SeoPreloadResource extends Struct.ComponentSchema {
  collectionName: 'components_seo_preload_resource';
  info: {
    description: 'Resource to preload for page speed';
    displayName: 'Preload Resource';
  };
  attributes: {
    mediaQuery: Schema.Attribute.String;
    resourceType: Schema.Attribute.Enumeration<
      ['image', 'style', 'script', 'font', 'document']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_metadata';
  info: {
    description: 'Basic SEO metadata for content';
    displayName: 'SEO Metadata';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaKeywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.Enumeration<
      [
        'index, follow',
        'index, nofollow',
        'noindex, follow',
        'noindex, nofollow',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
  };
}

export interface SeoSocialSharing extends Struct.ComponentSchema {
  collectionName: 'components_seo_social_sharing';
  info: {
    description: 'Settings for social media sharing and integration';
    displayName: 'Social Media Sharing';
  };
  attributes: {
    customShareText: Schema.Attribute.Text;
    enableAutoPosting: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    hashTags: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.technology': ProjectTechnology;
      'resume.education': ResumeEducation;
      'resume.experience': ResumeExperience;
      'resume.social-media': ResumeSocialMedia;
      'seo.breadcrumb': SeoBreadcrumb;
      'seo.hreflang': SeoHreflang;
      'seo.page-speed': SeoPageSpeed;
      'seo.preload-resource': SeoPreloadResource;
      'seo.seo-metadata': SeoSeoMetadata;
      'seo.social-sharing': SeoSocialSharing;
    }
  }
}

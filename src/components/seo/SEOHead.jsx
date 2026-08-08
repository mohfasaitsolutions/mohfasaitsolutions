import { useEffect } from 'react';

/**
 * SEOHead — Dynamically injects additional page-level JSON-LD structured data
 * and meta information into <head> via useEffect.
 *
 * The primary Organization, LocalBusiness, WebSite, FAQ, and ProfessionalService
 * schemas are already in index.html (static, for fastest crawler access).
 * This component handles dynamic/per-section supplemental schemas.
 */
export default function SEOHead() {
  useEffect(() => {
    // ── Helper: inject a <script type="application/ld+json"> if not already present ──
    const injectSchema = (id, data) => {
      if (document.getElementById(id)) return; // Prevent duplicates
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(data, null, 2);
      document.head.appendChild(script);
    };

    // ── 1. Services Offered Schema ─────────────────────────────────────────────
    injectSchema('schema-services', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Software Development Services by Mohfasa IT Solutions',
      'description': 'Complete list of software development, AI, and IT services offered by Mohfasa IT Solutions',
      'url': 'https://mohfasaitsolutions.com/#services',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Custom Business Software Development',
          'url': 'https://mohfasaitsolutions.com/#services',
          'description': 'Tailor-made ERP, CRM, HRMS, inventory management, and custom business platforms built for your exact workflows.',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'AI & Business Automation',
          'url': 'https://mohfasaitsolutions.com/#services',
          'description': 'Autonomous AI agents, business chatbots, generative AI integrations, document automation, and customer support automation.',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Website & Web Application Development',
          'url': 'https://mohfasaitsolutions.com/#services',
          'description': 'High-performance corporate websites, SaaS platforms, customer portals, and progressive web apps.',
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'E-Commerce Solutions',
          'url': 'https://mohfasaitsolutions.com/#services',
          'description': 'Shopify development, custom e-commerce platforms, B2B/B2C portals, and payment gateway integration.',
        },
        {
          '@type': 'ListItem',
          'position': 5,
          'name': 'Mobile Application Development',
          'url': 'https://mohfasaitsolutions.com/#services',
          'description': 'Native iOS and Android apps, Flutter cross-platform development, and enterprise mobility solutions.',
        },
        {
          '@type': 'ListItem',
          'position': 6,
          'name': 'Cloud & DevOps Solutions',
          'url': 'https://mohfasaitsolutions.com/#services',
          'description': 'AWS cloud infrastructure, cloud migration, CI/CD pipelines, Docker, Kubernetes, and infrastructure automation.',
        },
        {
          '@type': 'ListItem',
          'position': 7,
          'name': 'Digital Growth Solutions',
          'url': 'https://mohfasaitsolutions.com/#services',
          'description': 'SEO, performance marketing, B2B lead generation, social media management, and conversion rate optimization.',
        },
      ],
    });

    // ── 2. Testimonials / Review Schema ──────────────────────────────────────
    injectSchema('schema-reviews', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://mohfasaitsolutions.com/#organization',
      'name': 'Mohfasa IT Solutions',
      'review': [
        {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5',
          },
          'author': {
            '@type': 'Person',
            'name': 'Marcus Vance',
            'jobTitle': 'Chief Operating Officer',
          },
          'reviewBody':
            'Mohfasa IT Solutions automated our entire order dispatch pipeline. We cut customer wait times by 70% within the first month. They act like an internal engineering team, not an agency.',
          'datePublished': '2025-06-15',
          'publisher': {
            '@type': 'Organization',
            'name': 'Apex Hospitality Group',
          },
        },
        {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5',
          },
          'author': {
            '@type': 'Person',
            'name': 'Dr. Elena Rostova',
            'jobTitle': 'Director of Digital Health',
          },
          'reviewBody':
            'The custom EHR database Mohfasa developed for our clinics handled 50,000+ patient records seamlessly with zero security compliance issues. Highly recommended for enterprise software.',
          'datePublished': '2025-09-02',
          'publisher': {
            '@type': 'Organization',
            'name': 'Vanguard Medical Systems',
          },
        },
        {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5',
          },
          'author': {
            '@type': 'Person',
            'name': 'David Sterling',
            'jobTitle': 'Head of Customer Experience',
          },
          'reviewBody':
            'Their AI customer support agent resolves 85% of our tier-1 tickets automatically. We saved over $180,000 in support overhead while delivering 24/7 instant responses.',
          'datePublished': '2025-11-18',
          'publisher': {
            '@type': 'Organization',
            'name': 'Luminary SaaS Corp',
          },
        },
      ],
    });

    // ── 3. HowTo Schema — Development Process ────────────────────────────────
    injectSchema('schema-process', {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How Mohfasa IT Solutions Delivers Software Projects',
      'description':
        'Our proven 6-step agile software development process from discovery to deployment.',
      'totalTime': 'P3M',
      'step': [
        {
          '@type': 'HowToStep',
          'position': 1,
          'name': 'Discovery & Requirements',
          'text':
            'We conduct stakeholder interviews, analyze your business processes, and define clear project scope, technical requirements, and success metrics.',
        },
        {
          '@type': 'HowToStep',
          'position': 2,
          'name': 'Architecture & Design',
          'text':
            'Our architects design the system architecture, database schema, and API contracts. Our UX team creates wireframes and interactive prototypes.',
        },
        {
          '@type': 'HowToStep',
          'position': 3,
          'name': 'Agile Development (2-Week Sprints)',
          'text':
            'Development proceeds in 2-week agile sprints. You receive a working demo at the end of every sprint with full transparency into progress.',
        },
        {
          '@type': 'HowToStep',
          'position': 4,
          'name': 'Quality Assurance & Testing',
          'text':
            'Every feature undergoes unit testing, integration testing, performance testing, and security scanning before release.',
        },
        {
          '@type': 'HowToStep',
          'position': 5,
          'name': 'Deployment & Go-Live',
          'text':
            'We handle CI/CD pipeline setup, cloud infrastructure provisioning, and zero-downtime deployment to production.',
        },
        {
          '@type': 'HowToStep',
          'position': 6,
          'name': 'Support & Maintenance',
          'text':
            'Post-launch, we provide 24/7 monitoring, bug fixes, feature enhancements, and dedicated support as per your SLA.',
        },
      ],
    });

    // ── 4. Locations Served Schema ────────────────────────────────────────────
    injectSchema('schema-locations', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Mohfasa IT Solutions',
      'url': 'https://mohfasaitsolutions.com',
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Bhopal',
          'containedInPlace': {
            '@type': 'State',
            'name': 'Madhya Pradesh',
            'containedInPlace': { '@type': 'Country', 'name': 'India' },
          },
        },
        {
          '@type': 'City',
          'name': 'Pune',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'India',
          },
        },
        {
          '@type': 'City',
          'name': 'Bangalore',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'India',
          },
        },
        {
          '@type': 'City',
          'name': 'Mumbai',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'India',
          },
        },
        {
          '@type': 'City',
          'name': 'Dubai',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'United Arab Emirates',
          },
        },
        { '@type': 'Country', 'name': 'India' },
        { '@type': 'Country', 'name': 'United States' },
        { '@type': 'Country', 'name': 'United Arab Emirates' },
      ],
    });

    // Cleanup on unmount (though for SPA homepage this rarely fires)
    return () => {
      [
        'schema-services',
        'schema-reviews',
        'schema-process',
        'schema-locations',
      ].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  // This component renders nothing visible — it only manipulates <head>
  return null;
}

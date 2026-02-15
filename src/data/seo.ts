import { faqItems } from './faq';
import { reviews } from './reviews';
import { services } from './services';

const SITE_URL = 'https://julia-astro.ru';

export const siteConfig = {
  title: 'Астролог Юлия Плотникова — натальная карта, солярный прогноз, консультации',
  description: 'Профессиональный астролог Юлия Плотникова. Индивидуальные консультации: натальная карта, солярный прогноз на год, профориентация, здоровье, кармические задачи, астро-стиль. Онлайн и очно.',
  keywords: 'астролог, натальная карта, солярный прогноз, астрология, консультация астролога, кармические задачи, профориентация по натальной карте, астрологические консультации онлайн, астролог Юлия Плотникова, расшифровка натальной карты, годовой прогноз, астро-стиль, гороскоп, персональный прогноз',
  url: SITE_URL,
  locale: 'ru_RU',
  phone: '+79100051667',
  instagram: 'https://instagram.com/julia_mi',
  whatsapp: 'https://api.whatsapp.com/send?phone=79100051667',
  telegram: 'https://t.me/+79100051667',
};

export const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    // --- WebSite ---
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Астролог Юлия Плотникова',
      description: siteConfig.description,
      inLanguage: 'ru',
      publisher: { '@id': `${SITE_URL}/#person` },
    },

    // --- WebPage ---
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'ru',
    },

    // --- Person ---
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Юлия Плотникова',
      jobTitle: 'Астролог',
      description: 'Дипломированный астролог, практикующий с 2023 года. Специализация: натальные карты, солярные прогнозы, профориентация, кармические задачи.',
      url: SITE_URL,
      image: `${SITE_URL}/images/photos/about.jpg`,
      telephone: siteConfig.phone,
      sameAs: [
        siteConfig.instagram,
        siteConfig.telegram,
      ],
    },

    // --- ProfessionalService ---
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: 'Астролог Юлия Плотникова',
      description: 'Профессиональные астрологические консультации: натальная карта, солярный прогноз, профориентация, здоровье, кармические задачи, астро-стиль.',
      url: SITE_URL,
      telephone: siteConfig.phone,
      priceRange: 'По запросу',
      image: `${SITE_URL}/images/og-image.jpg`,
      founder: { '@id': `${SITE_URL}/#person` },
      areaServed: {
        '@type': 'Country',
        name: 'Россия',
      },
      serviceType: 'Астрологические консультации',
      sameAs: [
        siteConfig.instagram,
        siteConfig.telegram,
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        worstRating: '1',
        ratingCount: String(reviews.length),
        reviewCount: String(reviews.length),
      },
      review: reviews.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        datePublished: r.date,
        reviewBody: r.text,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(r.rating),
          bestRating: '5',
        },
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги астролога',
        itemListElement: services.map((s, i) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.title,
            description: s.description,
            url: `${SITE_URL}/#services`,
          },
          position: i + 1,
        })),
      },
    },

    // --- BreadcrumbList ---
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Главная',
          item: SITE_URL,
        },
      ],
    },

    // --- FAQPage ---
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

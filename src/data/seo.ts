export const siteConfig = {
  title: 'Астролог Юлия Плотникова — натальная карта, солярный прогноз, консультации',
  description: 'Профессиональные астрологические консультации от Юлии Плотниковой: натальная карта, солярный прогноз, профориентация, здоровье, кармические задачи. Персональный подход и точные прогнозы.',
  keywords: 'астролог, натальная карта, солярный прогноз, астрология, кармические задачи, профориентация, астрологические консультации, астролог Юлия Плотникова',
  url: 'https://julia-astro-production.up.railway.app',
  locale: 'ru_RU',
  phone: '+79100051667',
  instagram: 'https://instagram.com/julia_mi',
  whatsapp: 'https://api.whatsapp.com/send?phone=79100051667',
  telegram: 'https://t.me/+79100051667',
};

export const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://julia-astro-production.up.railway.app/#business',
      name: 'Астролог Юлия Плотникова',
      description: 'Профессиональные астрологические консультации: натальная карта, солярный прогноз, профориентация, здоровье, кармические задачи.',
      url: 'https://julia-astro-production.up.railway.app',
      telephone: '+79100051667',
      priceRange: 'По запросу',
      image: 'https://julia-astro-production.up.railway.app/images/og-image.jpg',
      sameAs: [
        'https://instagram.com/julia_mi',
        'https://t.me/+79100051667',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://julia-astro-production.up.railway.app/#person',
      name: 'Юлия Плотникова',
      jobTitle: 'Астролог',
      url: 'https://julia-astro-production.up.railway.app',
      sameAs: [
        'https://instagram.com/julia_mi',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://julia-astro-production.up.railway.app/#website',
      url: 'https://julia-astro-production.up.railway.app',
      name: 'Астролог Юлия Плотникова',
      inLanguage: 'ru',
    },
  ],
};

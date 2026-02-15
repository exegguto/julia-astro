export const siteConfig = {
  title: 'Астролог Юлия Плотникова — натальная карта, солярный прогноз, консультации',
  description: 'Профессиональные астрологические консультации от Юлии Плотниковой: натальная карта, солярный прогноз, профориентация, здоровье, кармические задачи. Персональный подход и точные прогнозы.',
  keywords: 'астролог, натальная карта, солярный прогноз, астрология, кармические задачи, профориентация, астрологические консультации, астролог Юлия Плотникова',
  url: 'https://julia-astro.ru',
  locale: 'ru_RU',
  phone: '+79100051667',
  instagram: 'https://instagram.com/julia_mi',
  whatsapp: 'https://wa.me/79100051667',
  telegram: 'https://t.me/+79100051667',
};

export const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://julia-astro.ru/#business',
      name: 'Астролог Юлия Плотникова',
      description: 'Профессиональные астрологические консультации: натальная карта, солярный прогноз, профориентация, здоровье, кармические задачи.',
      url: 'https://julia-astro.ru',
      telephone: '+79100051667',
      priceRange: 'По запросу',
      image: 'https://julia-astro.ru/images/og-image.jpg',
      sameAs: [
        'https://instagram.com/julia_mi',
        'https://t.me/+79100051667',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://julia-astro.ru/#person',
      name: 'Юлия Плотникова',
      jobTitle: 'Астролог',
      url: 'https://julia-astro.ru',
      sameAs: [
        'https://instagram.com/julia_mi',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://julia-astro.ru/#website',
      url: 'https://julia-astro.ru',
      name: 'Астролог Юлия Плотникова',
      inLanguage: 'ru',
    },
  ],
};

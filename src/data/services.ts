export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
}

export const services: Service[] = [
  {
    id: 'solar-forecast',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="12" stroke="currentColor" stroke-width="2"/><line x1="32" y1="4" x2="32" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="32" y1="50" x2="32" y2="60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="4" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="50" y1="32" x2="60" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12.2" y1="12.2" x2="19.3" y2="19.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="44.7" y1="44.7" x2="51.8" y2="51.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12.2" y1="51.8" x2="19.3" y2="44.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="44.7" y1="19.3" x2="51.8" y2="12.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    title: 'Солярный прогноз',
    description: 'Персональный годовой прогноз на основе положения Солнца в момент рождения. Узнайте главную тему года, важные события, благоприятные периоды для семьи, карьеры и отношений.',
    cta: 'Узнать подробнее',
  },
  {
    id: 'natal-chart',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="20" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M32 4v56M4 32h56" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="32" cy="12" r="3" fill="currentColor"/><circle cx="48" cy="24" r="2.5" fill="currentColor"/><circle cx="20" cy="44" r="2" fill="currentColor"/><circle cx="44" cy="46" r="2.5" fill="currentColor"/></svg>`,
    title: 'Натальная карта',
    description: 'Ваш персональный «навигатор по жизни». Глубокий анализ сильных сторон, слабых мест и скрытого потенциала во всех сферах — от отношений до финансов.',
    cta: 'Узнать подробнее',
  },
  {
    id: 'career-guidance',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="2"/><path d="M32 8l4 8-4 4-4-4 4-8z" fill="currentColor" opacity="0.6"/><path d="M32 32V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="32" r="4" stroke="currentColor" stroke-width="2"/><path d="M32 36v16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/></svg>`,
    title: 'Профориентация',
    description: 'Определение прибыльного направления через натальную карту. Разбор финансовых блоков, раскрытие талантов и выстраивание стратегии заработка.',
    cta: 'Узнать подробнее',
  },
  {
    id: 'health',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 56S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 32-24 32z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M20 30h8l4-8 4 16 4-8h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Здоровье',
    description: 'Астрологический анализ предрасположенностей к заболеваниям и персональные рекомендации по профилактике. Забота о себе начинается с понимания.',
    cta: 'Узнать подробнее',
  },
  {
    id: 'karma',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 32c0-8 10-16 24-16s24 8 24 16-10 16-24 16S8 40 8 32z" stroke="currentColor" stroke-width="2"/><path d="M20 32c0-4 5-8 12-8s12 4 12 8-5 8-12 8-12-4-12-8z" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="32" cy="32" r="3" fill="currentColor"/></svg>`,
    title: 'Карма и кармические задачи',
    description: 'Раскрытие жизненных уроков, кармических долгов и духовных задач. Понимание своей миссии помогает пройти путь осознанно и гармонично.',
    cta: 'Узнать подробнее',
  },
  {
    id: 'astro-style',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="28" r="8" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="28" r="6" stroke="currentColor" stroke-width="1.5"/><circle cx="32" cy="42" r="7" stroke="currentColor" stroke-width="1.5"/><circle cx="24" cy="28" r="3" fill="currentColor" opacity="0.3"/><circle cx="40" cy="28" r="3" fill="currentColor" opacity="0.3"/><circle cx="32" cy="42" r="3" fill="currentColor" opacity="0.3"/></svg>`,
    title: 'Астро-стиль',
    description: 'Рекомендации по имиджу, стилю одежды и интерьеру на основе вашей натальной карты. Внешний мир — отражение внутренней гармонии.',
    cta: 'Узнать подробнее',
  },
];

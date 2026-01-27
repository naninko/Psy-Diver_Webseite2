import { useTranslation } from 'react-i18next';
import './News.css';

function News() {
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 4,
      dateKey: 'news.items.item4.date',
      titleKey: 'news.items.item4.title',
      categoryKey: 'engagement',
      excerptKey: 'news.items.item4.excerpt',
      contentKey: 'news.items.item4.content',
      color: 'var(--color-coral)'
    },
    {
      id: 1,
      dateKey: 'news.items.item1.date',
      titleKey: 'news.items.item1.title',
      categoryKey: 'projectUpdate',
      excerptKey: 'news.items.item1.excerpt',
      contentKey: 'news.items.item1.content',
      color: 'var(--color-cyan)'
    }
  ];

  return (
    <div className="news">
      <section className="page-header">
        <div className="container">
          <h1>{t('news.title')}</h1>
          <p className="page-subtitle">{t('news.subtitle')}</p>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <p className="newsletter-text">
            Sie möchten über neue Publikationen und Veranstaltungen informiert werden?
            Abonnieren Sie unseren <a href="https://qrco.de/bgZ0Cp" target="_blank" rel="noopener noreferrer">Newsletter</a>
          </p>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <div className="news-grid">
            {newsItems.length > 0 ? (
              newsItems.map(item => (
                <article key={item.id} className="news-card">
                  <div className="news-header" style={{'--category-color': item.color}}>
                    <span className="news-category">{t('news.categories.' + item.categoryKey)}</span>
                    <span className="news-date">{t(item.dateKey)}</span>
                  </div>
                  <div className="news-body">
                    <h3>{t(item.titleKey)}</h3>
                    <p className="news-excerpt">{t(item.excerptKey)}</p>
                    <p className="news-content">{t(item.contentKey)}</p>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-news">
                <p>{t('news.noNews')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section - Commented out for now, may be needed later */}
      {/* <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">{t('news.timeline.title')}</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker" style={{'--marker-color': 'var(--color-cyan)'}}></div>
              <div className="timeline-content">
                <h4>{t('news.timeline.phase1.date')}</h4>
                <p>{t('news.timeline.phase1.title')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker" style={{'--marker-color': 'var(--color-magenta)'}}></div>
              <div className="timeline-content">
                <h4>{t('news.timeline.phase2.date')}</h4>
                <p>{t('news.timeline.phase2.title')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker" style={{'--marker-color': 'var(--color-yellow)'}}></div>
              <div className="timeline-content">
                <h4>{t('news.timeline.phase3.date')}</h4>
                <p>{t('news.timeline.phase3.title')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker" style={{'--marker-color': 'var(--color-coral)'}}></div>
              <div className="timeline-content">
                <h4>{t('news.timeline.phase4.date')}</h4>
                <p>{t('news.timeline.phase4.title')}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default News;

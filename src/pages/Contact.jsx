import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data via Formsubmit (forwards to psy-diver@lvr.de)
      const response = await fetch('https://formsubmit.co/ajax/psy-diver@lvr.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        // Show success message
        setFormStatus({
          submitted: true,
          error: false
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ submitted: false, error: false });
        }, 5000);
      } else {
        setFormStatus({
          submitted: false,
          error: true
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true
      });
    }
  };

  return (
    <div className="contact">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p className="page-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>{t('contact.getInTouch.title')}</h2>
              <p>
                {t('contact.getInTouch.description')}
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-text">
                    <h4>{t('contact.details.projectLead')}</h4>
                    <p>Dr. Sönke J. Peters (er/ ihm)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-text">
                    <h4>{t('contact.details.address')}</h4>
                    <p>
                      LVR-Institut für Forschung und Bildung<br />
                      c/o LVR-Klinik Köln<br />
                      Wilhelm-Griesinger-Straße 23<br />
                      51109 Köln, Germany
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-text">
                    <h4>{t('contact.details.email')}</h4>
                    <p>
                      <a href="mailto:psy-diver@lvr.de">
                        psy-diver@lvr.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>{t('contact.form.title')}</h2>

              {formStatus.submitted && (
                <div className="success-message" role="alert">
                  {t('contact.form.success')}
                </div>
              )}

              {formStatus.error && (
                <div className="error-message" role="alert">
                  {t('contact.form.error')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    {t('contact.form.name')} <span className="required">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.namePlaceholder')}
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    {t('contact.form.email')} <span className="required">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.emailPlaceholder')}
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    {t('contact.form.subject')} <span className="required">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.subjectPlaceholder')}
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    {t('contact.form.message')} <span className="required">{t('contact.form.required')}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder={t('contact.form.messagePlaceholder')}
                    aria-required="true"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

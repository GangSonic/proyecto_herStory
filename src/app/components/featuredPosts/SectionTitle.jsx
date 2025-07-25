'use client';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>{title}</h2>
      <div>
        <span>Check Our</span>{' '}
        <span className="description-title">{subtitle}</span>
      </div>
    </div>
  );
};

export default SectionTitle;

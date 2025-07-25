import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main className="main">
      <ContactHeader />
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up">
          <ContactInfo />
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="400">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

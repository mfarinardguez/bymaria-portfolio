import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        <div className="flex-1">
          <ContactCard />
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

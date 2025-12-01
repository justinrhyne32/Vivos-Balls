import ContactForm from '@/components/ContactForm'
import OwnerInfo from '@/components/OwnerInfo'

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 neon-text text-center">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-400 text-center mb-16">
          Have questions? We&apos;d love to hear from you
        </p>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <OwnerInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}




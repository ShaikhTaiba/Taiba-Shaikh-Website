import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  // service_qazwbn9
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        await emailjs.send('service_tkumeoa', 'template_llgg1dp', {from_name: form.name, to_name: 'Taiba', from_email: form.email, to_email: 'taibashaikh025@gmail.com', message: form.message

        }, 'hAumlYn-_mPguE9kT')

        setLoading(false);
        alert('Your message has been sent!');
        setForm({
            name: '',
            email: '',
            message: '',    
        })

    } catch (error) {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
}
  }
  return (
    <section className='c-space my-20' id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
            <div className="contact-container w-full max-w-full sm:max-w-2xl px-4 sm:px-0">
                <h3 className="head-text mt-4 sm:mt-10">Get in touch!</h3>
                <p className="block sm:hidden text-sm text-white-600 mt-3">
  Let’s build something amazing together!
</p>

<p className="hidden sm:block text-lg text-white-600 mt-3">
  I am open to MTCP collaboration opportunities, academic partnerships in AI for development, and conversations about applying machine learning to public sector challenges. If you are a researcher, policymaker, or fellow practitioner working at the intersection of AI and governance — I would love to connect.
</p>
                <form ref={formRef} onSubmit={handleSubmit} className="sm:mt-10 mt-5 flex flex-col sm:space-y-7 space-y-2">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="field-input"
                          placeholder="Your full name."
                        ></input>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="field-input"
                          placeholder="xyz@gmail.com"
                        ></input>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Your message</span>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="field-input"
                          placeholder="Your message here..."
                        ></textarea>
                    </label>
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>

    </section>
  )
}

export default Contact
'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import { useScrollTyping } from '@/hooks/useInView'

export function Contact() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { typed: touchTyped, elementRef } = useScrollTyping("Touch.", 80);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const result = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID || 'service_kl1i1ah',   // replace with actual service ID
        process.env.EMAILJS_TEMPLATE_ID || 'template_qvirl1e',  // replace with actual template ID
        {
          FirstName: formData.FirstName,
          LastName: formData.LastName,
          email: formData.email,
          message: formData.message,
        },
        process.env.EMAILJS_USER_ID || 'Vvs9_11uIb8Ezy0Fb',    // replace with actual user ID
      )

      if (result.status === 200) {
        setStatus('success')
        setFormData({ FirstName: '', LastName: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding py-12 md:py-20 bg-white">
      <div className="container-custom px-4 sm:px-6 transition-all duration-700">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Get In{" "}
            <span
              ref={elementRef}
              className="bg-gradient-to-r from-[#233EFF] via-[#233EFF] to-[#8c9eff] bg-clip-text text-[#233EFF] typing-caret"
            >
              {touchTyped}
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mx-auto px-4">
            Partner with leading enterprise security teams driving the next generation of insider threat detection. Contact us to learn more or request early access.
          </p>
        </div>

        <div className="flex justify-center mt-10 md:mt-12">
          <div className="w-full max-w-xl bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center text-gray-900">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                 <div>
                   <label htmlFor="FirstName" className="block text-sm font-medium mb-2 text-gray-700">
                     First Name *
                   </label>
                   <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                    required
                    className="bg-white w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-[20px] md:rounded-[30px] focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="LastName" className="block text-sm font-medium mb-1 md:mb-2 text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                    className="bg-white w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-[20px] md:rounded-[30px] focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 md:mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-[20px] md:rounded-[30px] focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 md:mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-white w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-[15px] md:rounded-[20px] focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Write your message here..."
                />
              </div>
              {/* <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] w-full text-sm md:text-base py-3 md:py-4 font-bold hover:shadow-lg transition-all duration-300 rounded-lg md:rounded-xl hover:scale-[1.02]"
              >
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Mail Sent'}
                {status === 'error' && 'Failed'}
                {status === 'idle' && 'Submit'}
              </button> */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`relative overflow-hidden w-full text-sm md:text-base text-white py-3 md:py-4 font-bold 
                  rounded-lg md:rounded-xl transition-all duration-300
                  bg-gradient-to-r from-[#233EFF] via-[#233EFF] to-[#233EFF]
                  ${status === 'loading' ? 'cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'}`}
              >
                {/* Dark shimmer effect background */}
                {status === 'loading' && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent 
                    animate-shimmer" />
                )}

                <span className="relative z-10">
                  {status === 'loading' && 'Sending...'}
                  {status === 'success' && 'Mail Sent'}
                  {status === 'error' && 'Failed'}
                  {status === 'idle' && 'Submit'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// pages/index.js
"use client"
import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react'

export default function Home() {
  const [currentStat, setCurrentStat] = useState(0)
  
  const stats = [
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Orders Delivered', value: '25,000+' },
    { label: 'Products Launched', value: '15+' },
    { label: 'Satisfaction Rate', value: '98%' },
    { label: 'Industry Awards', value: '5+' }
  ]

  const healthBenefits = [
    {
      name: 'Anthoxanthin',
      icon: '💊',
      description: 'Antioxidant properties beneficial for cancer treatment and heart health. Improves blood flow and reduces oxidative stress.'
    },
    {
      name: 'Chlorophyll',
      icon: '🍃',
      description: 'Strengthens the immune system and helps block cancer-causing chemicals. Aids in weight loss and lowers cholesterol levels.'
    },
    {
      name: 'Lycopene',
      icon: '❤️',
      description: 'Powerful antioxidant that reduces oxidative damage and inflammation. Protects against various cancers and supports heart health.'
    },
    {
      name: 'Carotenoids',
      icon: '💊',
      description: 'Essential for vitamin A production supporting immune health. Reduces inflammation and promotes eye health while aiding hair growth.'
    },
    {
      name: 'Anthocyanin',
      icon: '🧠',
      description: 'Lowers blood pressure and reduces the risk of heart disease. Protects brain function and may slow cancer growth.'
    }
  ]

  const milestones = [
    {
      year: '2026',
      title: 'Newtro-X Project Kickoff',
      description: 'Launch of Newtro-X, our base segment brand. Introducing the world\'s first non-expiry water bottle.'
    },
    {
      year: '2027',
      title: 'Our Home Care Product Expansion',
      description: 'Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner.'
    },
    {
      year: '2028',
      title: 'Our Vehicle Care Segment Launch',
      description: 'Introduction of DM Water (battery), Coolant, and DEF Water.'
    },
    {
      year: '2029',
      title: 'Black Plum Premium Segment',
      description: 'Launch of our premium brand with enhanced minerals and benefits. Premium glass bottle packaging, professional branding.'
    },
    {
      year: '2030',
      title: 'Java-X Major Achievement',
      description: 'Launch of our highest premium segment brand with top enhancements. Super premium glass bottle, elite branding.'
    }
  ]

  const teamMembers = [
    {
      name: 'Dr. Gagan Mahalwanshi',
      position: 'Founder & CEO',
      image: '/gagan.webp'
    },
    {
      name: 'Sandhya Mahalwanshi',
      position: 'Managing Director',
      image: '/sandhya.webp'
    },
    {
      name: 'U. S. Khobariya',
      position: 'Sub-Director',
      image: '/khobriya.webp'
    },
    {
      name: 'Mukesh Dixit',
      position: 'CFO',
      image: '/2.webp'
    }
  ]

  const advantages = [
    {
      title: 'World\'s first non-expiry water',
      description: 'Our revolutionary water that never expires, ensuring unmatched quality and freshness for decades, making it a unique choice in the modern world today.',
      icon: '🌍'
    },
    {
      title: 'Health benefits',
      description: 'Unique water formulation helps prevent major health risks such as cancer and heart attacks while boosting the immune system for long-term vitality and daily wellness.',
      icon: '❤️'
    },
    {
      title: 'Premium mineral enrichment',
      description: 'Infused with essential minerals Newtro-X provides superior nourishment compared to regular bottled water, promoting overall health and energy all day long every day.',
      icon: '⭐'
    },
    {
      title: 'Bacteria free',
      description: 'Ensure that never release microplastic or harmful bacteria, keeping the water clean and perfectly safe for everyone, anywhere, with consistent purity at every single sip.',
      icon: '✅'
    },
    {
      title: 'Technology',
      description: 'Utilization of cutting edge - ultra purification and preservation methods to maintain water qualities, offering unmatched performance and innovation in safe hydration.',
      icon: '⚙️'
    },
    {
      title: 'Preservation',
      description: 'With no expiry date consumers can store the product indefinitely without the risk of contamination or quality degradation reducing frequent repurchasing cost.',
      icon: '🧪'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <>
      <Head>
        <title>Empire Blue - World&apos;s First Non-Expiry Water</title>
        <meta name="description" content="Revolutionary water technology that eliminates expiration dates on bottled water" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
  {/* Navigation */}
  <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="font-bold text-xl text-blue-900">Empire Blue</span> */}
          <Image src="/logo1.webp" alt="Empire Blue Logo" width={200} height={100} />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Link 1 */}
          <a
            href="#about"
            className="group relative inline-block text-gray-700 hover:text-blue-600 transition-colors"
          >
            About Us
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Link 2 */}
          <a
            href="#benefits"
            className="group relative inline-block text-gray-700 hover:text-blue-600 transition-colors"
          >
            Health Benefits
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Link 3 */}
          <a
            href="#advantages"
            className="group relative inline-block text-gray-700 hover:text-blue-600 transition-colors"
          >
            Advantages
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Link 4 */}
          <a
            href="#team"
            className="group relative inline-block text-gray-700 hover:text-blue-600 transition-colors"
          >
            Team
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </nav>



        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  World&apos;s First
                  <span className="text-blue-600 block">Non-Expiry Water</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Empire Blue Pvt. Ltd. We prioritize health, innovation, and sustainability. We are committed to setting new industry standards and providing a safe, reliable and beneficial hydration solution for people worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105">
                    Book Your First Can
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                    <div className="w-full h-96 bg-gradient-to-t from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                      {/* <div className="text-8xl">💧</div> */}
                      <Image src="/can1.webp" alt="Water Drop" layout="fill" objectFit="cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Empire Blue Pvt. Ltd. Established July 2025, based in Chhindwara, Madhya Pradesh, is a pioneering company in the bottled water industry recognized as the world&apos;s first manufacturer of non-expiry bacteria-free water bottles.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">2.2B</div>
                    <div className="text-gray-600">People without safe water</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">3.5B</div>
                    <div className="text-gray-600">People without clean water</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center">
                  <Image src="/building.webp" alt="Building" layout="fill" objectFit="cover" className="rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Situation */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Health Impact of Contaminated Water</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Every 33 seconds a person dies from heart disease worldwide, and around 26,300 people die from cancer every day. Contaminated water releases harmful bacteria and microplastics which lead to health problems like cancer and cause high blood pressure and heart problems.
              </p>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Health Benefits</h2>
              <p className="text-xl text-gray-600">Discover the key nutrients and their powerful effects on your health</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.name}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section id="advantages" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Competitive Advantage Beyond The Ordinary</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Revolutionizing Water Technology</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                We&apos;re pioneering the future of water technology with our groundbreaking innovation that eliminates expiration dates from bottled water, ensuring pure and safe drinking water for generations to come.
              </p>
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">🔬</div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Milestone</h2>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 lg:pr-8">
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex w-16 h-16 bg-blue-600 rounded-full items-center justify-center text-white font-bold text-xl absolute left-1/2 transform -translate-x-1/2">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Success Story</h2>
              <p className="text-xl text-blue-100">Trusted by thousands of customers across India, delivering pure and healthy water solutions</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center transition-all duration-500 ${currentStat === index ? 'scale-110' : ''}`}>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
         <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-60 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden mx-auto">
                  {/* Image */}
                  <div className="relative w-full h-72">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Info Box */}
                  <div className="px-4 py-3 text-center">
                    <h3 className="text-blue-900 font-semibold text-base">{member.name}</h3>
                    <p className="text-gray-500 text-sm">{member.position}</p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Testimonials */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
              <p className="text-xl text-gray-600">Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about their experience with Newtro-X.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-6">💧</div>
                <blockquote className="text-xl text-gray-600 italic mb-6">
                  &quot;Newtro-X water has completely transformed my daily routine. The non-expiry feature is a game-changer, and I can taste the difference in purity. My clients love it too!&quot;
                </blockquote>
                <div className="font-bold text-gray-900">Priya Sharma</div>
                <div className="text-blue-600">Health Coach, Mumbai</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Take the Next Step Towards Better Health</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Empire Blue operates in the growing health and wellness market for health-conscious individuals seeking natural solutions for disease prevention and immune support. Ready to experience our exceptional innovative water? Book your first can today and discover how we can help you live your healthiest life.
            </p>
            <button className="bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-blue-50 transition-colors transform hover:scale-105">
              Book Now
            </button>
          </div>
        </section>

        {/* Footer */}
        {/* <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <span className="font-bold text-xl text-white">Empire Blue</span>
              </div>
              <div className="text-gray-400">
                © 2025 Empire Blue Pvt. Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </footer> */}

            <footer className="bg-white border-t text-gray-700">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
             <Image src="/logo1.webp" alt="Empire Blue Logo" width={200} height={100} />
          </div>
          <p className="text-sm mb-4">
            Providing clean and safe water solutions for a healthier tomorrow. Our commitment to quality and innovation makes us the trusted choice in water treatment.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-500">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Our Services</a></li>
            <li><a href="#news" className="hover:underline">Latest News</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Water Testing</a></li>
            <li><a href="#" className="hover:underline">Water Purification</a></li>
            <li><a href="#" className="hover:underline">Water Treatment</a></li>
            <li><a href="#" className="hover:underline">Expert Consultation</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-blue-700 mt-1"><i className="fas fa-map-marker-alt"></i></span>
              <span>Empire Blue Pvt. Ltd. <br /> Chhindwara, Madhya Pradesh <br /> India</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-700"><i className="fas fa-phone-alt"></i></span>
              <a href="tel:+918867268719" className="hover:underline">+91 8867268719</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-700"><i className="fas fa-envelope"></i></span>
              <a href="mailto:info@empireblue.in" className="hover:underline">info@empireblue.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t mt-6">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <span>© 2025 Empire Blue. All rights reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

      </div>
    </>
  )
}
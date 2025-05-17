import { Download, Users, BookOpen, Star, ArrowRight, Smartphone, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { CreatorSection } from '../components/CreatorSection';
import { testimonials } from '../data/testimonialsData';
import { FaqSection } from '../components/FaqSection';
import { faqs } from '../data/faqData';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Animated Gradient Blob */}
          <div className="absolute top-0 left-16 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-16 right-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-32 left-80 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />

          {/* Main Content (Grid Layout) */}
          <div className="max-w-7xl mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full lg:pb-28 xl:pb-30">
            <main className="mt-24 mx-auto max-w-7xl px-4 sm:mt-28 sm:px-6 md:mt-32 lg:mt-20 lg:px-8 xl:mt-30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-center justify-center">
                {/* Text Section */}
                <div className="text-center" data-aos="fade-right">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl">
                    <span className="block xl:inline">Access Academic Notes</span>{' '}
                    <span className="block text-indigo-600 xl:inline">Anytime, Anywhere</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Join thousands of students who are already using NotesNeo to access high-quality academic notes. Study smarter, not harder.
                  </p>

                  {/* CTA Buttons */}
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                    {/* WhatsApp Group Button */}
                    <div className="rounded-md shadow" data-aos="fade-up" data-aos-delay="200">
                      <a
                        href="whatsapp link"
                        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg hover:shadow-indigo-500/50 md:py-4 md:text-lg md:px-4"
                      >
                        <Users className="w-5 h-5 mr-2" />
                        Join WhatsApp Group
                      </a>
                    </div>

                    {/* Download App Button */}
                    <div className="mt-3 sm:mt-0 sm:ml-3" data-aos="fade-up" data-aos-delay="400">
                      <a
                        href="google-drive-link"
                        className="w-full flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-semibold rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-300 ease-in-out shadow-lg hover:shadow-indigo-300/50 md:py-4 md:text-lg md:px-4"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Android App
                      </a>
                    </div>
                  </div>

                  {/* Search Notes Button */}
                  <div className="mt-3 sm:mt-0 sm:ml-3 px-6 py-3 flex justify-center" data-aos="fade-up" data-aos-delay="400">
                    <Link
                      to="/notes"
                      className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Search Notes Here
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                </div>

                {/* Image Section */}
                <div className="relative" data-aos="fade-left">
                  <img
                    className="w-full h-auto object-contain sm:h-72 md:h-96 lg:h-96 xl:h-[32rem] transform hover:scale-105 transition-transform duration-500"
                    src="/assets/hero.svg"
                    alt="Students studying"
                  />
                </div>
              </div>

              {/* Statistics Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Solid Color Icon Wrapper */}
                      <div className={`p-3 rounded-lg ${stat.color} ${stat.darkColor}`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>



            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center" data-aos="fade-up">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to excel
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={feature.name} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                  </dt>
                  <dd className="ml-16 text-base text-gray-500 dark:text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Ready to Excel in Your Studies?
          </h2>
          <Link
            to="/notes"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-6"
          >
            Browse Notes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-indigo-600 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">
              What Our Students Say
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Don't just take our word for it - hear from some of our satisfied students
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>

      {/* Creator Section */}
      <CreatorSection />

      {/* FAQ Section */}
      <FaqSection faqs={faqs} />
    </div>
  );
}

const stats = [
  {
    label: 'Users',
    value: '1,000+',
    icon: Users,
    color: 'bg-blue-600', // Solid color instead of gradient
    darkColor: 'dark:bg-blue-500', // Dark mode solid color
  },
  {
    label: 'Notes',
    value: '500+',
    icon: BookOpen,
    color: 'bg-purple-600', // Solid color instead of gradient
    darkColor: 'dark:bg-purple-500', // Dark mode solid color
  },
  {
    label: 'Downloads',
    value: '5,000+',
    icon: Download,
    color: 'bg-green-600', // Solid color instead of gradient
    darkColor: 'dark:bg-green-500', // Dark mode solid color
  },
  {
    label: 'Rating',
    value: '4.8/5',
    icon: Star,
    color: 'bg-yellow-600', // Solid color instead of gradient
    darkColor: 'dark:bg-yellow-500', // Dark mode solid color
  },
];


const features = [
  {
    name: 'Comprehensive Notes',
    description: 'Access detailed notes for all subjects, carefully curated by top educators.',
    icon: BookOpen,
  },
  {
    name: 'Easy Downloads',
    description: 'Download notes instantly for offline access and study.',
    icon: Download,
  },
  {
    name: 'Community Support',
    description: 'Join the WhatsApp community for discussions and support.',
    icon: Users,
  },
  {
    name: 'Personalized Study Resources',
    description: 'Save favorite notes for quick access and create a customized study library.',
    icon: Star,
  },
  {
    name: 'Multi-Device Access',
    description: 'Access your notes and study materials on any device.',
    icon: Smartphone,
  },
  {
    name: 'Updated Content',
    description: 'Stay up-to-date with the latest notes and resources for your studies.',
    icon: RefreshCw,
  },
];

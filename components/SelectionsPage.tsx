// File: app/portfolio/[slug]/page.jsx
'use client'
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from '@/data/index';

export default function SelectionsPage() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();

  const desc = searchParams.get('desc');
  const title = searchParams.get('title');
  const videoUrl = searchParams.get('videoUrl');
  const industry = searchParams.get('industry');
  const services = searchParams.get('services');
  const completionDate = searchParams.get('completionDate');
  const imgListParam = searchParams.get('imgList');

  // ✅ Parse image list safely (whether it's JSON or comma-separated)
  let imgList = [];
  if (imgListParam) {
    try {
      imgList = JSON.parse(imgListParam);
    } catch {
      imgList = imgListParam.split(',');
    }
  }

  const project = {
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Shopify Headless'],
  };

  return (
    <main className="min-h-screen text-white pt-28 pb-20" style={{ background: '#0b0c13' }}>
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">{title}</h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Swiper */}
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-gray-800">
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="w-full h-full"
              >
                {imgList.map((item, ) => (
                  <SwiperSlide >
                    <img
                      src={ item }
                      
                      className="w-full h-80 lg:h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 flex flex-col space-y-8">
            {/* Project Details */}
            <div className="rounded-lg p-6" style={{ background: '#1a1b26' }}>
              <h3 className="text-2xl font-bold mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-white">Industry:</span>
                  <span className="text-gray-300 ml-2">{industry}</span>
                </div>

                <div>
                  <span className="font-semibold text-white">Services Provided:</span>
                  <p className="text-gray-300 text-sm mt-1">{services}</p>
                </div>

                <div>
                  <span className="font-semibold text-white">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-white">Completion Date:</span>
                  <span className="text-gray-300 ml-2">{completionDate}</span>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="rounded-lg p-6" style={{ background: '#1a1b26' }}>
              <h3 className="text-2xl font-bold mb-4">About This Project</h3>
              <p className="text-gray-300 leading-relaxed mb-6 min-h-[50px]">
               {t(desc)}
              </p>

              <Link
                href="#contact"
                className="inline-block w-full text-center px-6 py-3 
                font-semibold text-white bg-gradient-to-r from-purple-600
                 to-pink-500 rounded-lg shadow-lg transition-all duration-300
                  hover:shadow-xl hover:scale-105"
              >
                {t('start_project')}
              </Link>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold mb-4">Inspired by this project?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's build something amazing together.</p>
          <Link
            href="#contact"
            className="inline-block px-10 py-4 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            {t('start_project')}
          </Link>
        </div>
      </div>
    </main>
  );
}

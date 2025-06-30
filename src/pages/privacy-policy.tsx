import { Link } from 'react-router'

export function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden'>
      {/* Декоративные фоновые элементы */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-slate-600 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 right-20 w-48 h-48 bg-slate-700 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-1/4 w-32 h-32 bg-slate-500 rounded-full blur-2xl'></div>
      </div>

      {/* Header Section */}
      <section className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-16 relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-10 right-20 w-40 h-40 bg-slate-400 rounded-full blur-3xl'></div>
          <div className='absolute bottom-10 left-10 w-32 h-32 bg-slate-300 rounded-full blur-2xl'></div>
        </div>

        <div className='max-w-4xl mx-auto px-6 relative z-10 text-center'>
          <h1 className='text-5xl font-bold text-white mb-4 drop-shadow-lg'>Privacy Policy</h1>
          <div className='w-24 h-1 bg-gradient-to-r from-slate-300 via-white to-slate-300 mx-auto mb-4 rounded-full'></div>
          <p className='text-slate-200 text-lg'>Last updated: July 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-16 relative z-10'>
        <div className='privacy-content bg-white rounded-3xl p-12 shadow-xl border border-slate-200'>
          
          {/* Introduction */}
          <div className='mb-12'>
            <p className='text-lg text-slate-700 leading-relaxed'>
              Welcome to <strong className='text-slate-800'>The Yogurt Book</strong> (the "Site"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our Site and engage with our yogurt-making community.
            </p>
          </div>

          {/* Information We Collect */}
          <section className='policy-section mb-10'>
            <h2 className='text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              Information We Collect
            </h2>
            <p className='text-slate-700 mb-4 leading-relaxed'>We may collect the following types of information when you use the Site:</p>
            <ul className='space-y-3 text-slate-700'>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0'></div>
                <span>Information you provide voluntarily, such as your name and email address when you subscribe to our yogurt recipe newsletter or join our fermentation community.</span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0'></div>
                <span>Anonymous data automatically collected through cookies and analytics tools (such as browser type, device information, and recipe pages visited).</span>
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className='policy-section mb-10'>
            <h2 className='text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              How We Use Your Information
            </h2>
            <p className='text-slate-700 mb-4 leading-relaxed'>We may use the information we collect for purposes such as:</p>
            <ul className='space-y-3 text-slate-700'>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0'></div>
                <span>Sending you yogurt recipes, fermentation tips, updates, and promotional content if you've subscribed.</span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0'></div>
                <span>Improving the content and functionality of the Site to better serve our yogurt-making community.</span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0'></div>
                <span>Analyzing site usage to better understand our audience and their recipe preferences.</span>
              </li>
            </ul>
          </section>

          {/* Cookies & Tracking */}
          <section className='policy-section mb-10'>
            <h2 className='text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
              </div>
              Cookies & Tracking
            </h2>
            <p className='text-slate-700 leading-relaxed'>
              Our Site uses cookies to enhance your yogurt-making experience. Cookies are small data files stored on your device that help us understand how visitors use the Site and which recipes are most popular.
              You can manage or disable cookies in your browser settings.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className='policy-section mb-10'>
            <h2 className='text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9' />
                </svg>
              </div>
              Third-Party Services
            </h2>
            <p className='text-slate-700 leading-relaxed'>
              We may use third-party services (such as Google Analytics) to help us analyze how the Site is used and which yogurt recipes perform best. These services may collect information sent by your browser as part of a web page request.
            </p>
          </section>

          {/* Your Rights */}
          <section className='policy-section mb-10'>
            <h2 className='text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
              </div>
              Your Rights
            </h2>
            <p className='text-slate-700 leading-relaxed'>
              You have the right to access, correct, or delete your personal information at any time. You can also opt out of receiving our yogurt recipe newsletter by following the unsubscribe link in any of our emails.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className='policy-section mb-10'>
            <h2 className='text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                </svg>
              </div>
              Changes to This Policy
            </h2>
            <p className='text-slate-700 leading-relaxed'>
              We may update this Privacy Policy from time to time to reflect changes in our yogurt recipe platform or legal requirements. The most current version will always be posted on this page with the updated date.
            </p>
          </section>

          {/* Contact */}
          <section className='policy-section'>
            <h2 className='text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
              Contact Us
            </h2>
            <p className='text-slate-700 leading-relaxed'>
              If you have any questions about this Privacy Policy or how we handle your information in our yogurt-making community, please{' '}
              <Link className='text-slate-600 hover:text-slate-800 font-semibold underline decoration-slate-400 hover:decoration-slate-600 transition-colors' to="/contacts">
                contact us here
              </Link>
              .
            </p>
          </section>

        </div>
      </main>

      <style>{`
        /* Асимметричная форма для основного контента */
        .privacy-content {
          border-radius: 40px 10px 40px 10px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .privacy-content:hover {
          border-radius: 10px 40px 10px 40px;
          transform: translateY(-2px);
          box-shadow: 0 25px 50px rgba(71, 85, 105, 0.15);
        }

        /* Стили для секций */
        .policy-section {
          position: relative;
          padding-left: 1rem;
        }

        .policy-section::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #64748b, #94a3b8);
          border-radius: 2px;
          opacity: 0.3;
        }

        /* Анимация для иконок */
        .policy-section h2 > div {
          transition: all 0.3s ease;
        }

        .policy-section:hover h2 > div {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(71, 85, 105, 0.3);
        }

        /* Адаптивные изменения */
        @media (max-width: 768px) {
          .privacy-content {
            border-radius: 20px 5px 20px 5px;
            padding: 2rem;
          }

          .privacy-content:hover {
            border-radius: 5px 20px 5px 20px;
          }

          .policy-section {
            padding-left: 0.5rem;
          }

          .policy-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

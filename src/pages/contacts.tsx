import { ContactForm } from '@/components/shared/contact-form'
import { Container } from '@/components/shared/container'

export function ContactsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden'>
			{/* Декоративные фоновые элементы */}
			<div className='absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none'>
				<div className='absolute top-20 left-10 w-64 h-64 bg-slate-600 rounded-full blur-3xl'></div>
				<div className='absolute top-1/2 right-20 w-48 h-48 bg-slate-700 rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 left-1/4 w-32 h-32 bg-slate-500 rounded-full blur-2xl'></div>
				<div className='absolute top-1/4 right-1/4 w-40 h-40 bg-slate-400 rounded-full blur-3xl'></div>
			</div>

			{/* Hero Section */}
			<section className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-20 relative overflow-hidden'>
				{/* Декоративные элементы в заголовке */}
				<div className='absolute top-0 left-0 w-full h-full opacity-10'>
					<div className='absolute top-10 right-20 w-40 h-40 bg-slate-400 rounded-full blur-3xl'></div>
					<div className='absolute bottom-10 left-10 w-32 h-32 bg-slate-300 rounded-full blur-2xl'></div>
				</div>

				<Container className='relative z-10'>
					<div className='text-center'>
						<h1 className='text-6xl font-bold text-white mb-6 drop-shadow-lg'>
							Get in Touch
						</h1>
						<div className='w-32 h-1.5 bg-gradient-to-r from-slate-300 via-white to-slate-300 mx-auto mb-6 rounded-full'></div>
						<p className='text-slate-200 max-w-3xl mx-auto text-lg leading-relaxed'>
							Have questions about yogurt making or fermentation? Need help with a recipe? 
							We'd love to hear from you and share our expertise!
						</p>
					</div>
				</Container>
			</section>

			{/* Contact Content */}
			<Container className='relative z-10'>
				<div className='py-16'>
					{/* Contact Information Cards */}
					<div className='grid md:grid-cols-3 gap-8 mb-16'>
						<div className='contact-info-card text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200'>
							<div className='w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4'>
								<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-slate-800 mb-2'>Email Us</h3>
							<p className='text-slate-600'>hello@theyogurtbook.com</p>
						</div>

						<div className='contact-info-card text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200'>
							<div className='w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4'>
								<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-slate-800 mb-2'>Response Time</h3>
							<p className='text-slate-600'>Within 24 hours</p>
						</div>

						<div className='contact-info-card text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200'>
							<div className='w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4'>
								<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-3-3v3a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2z' />
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-slate-800 mb-2'>Expert Support</h3>
							<p className='text-slate-600'>Fermentation specialists</p>
						</div>
					</div>

					{/* Main Contact Section */}
					<div className='text-center mb-12'>
						<h2 className='text-4xl font-bold text-slate-800 mb-4'>
							Ask Our Yogurt Experts
						</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 mx-auto mb-6 rounded-full'></div>
						<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
							Whether you're a beginner or experienced fermenter, our team is here to help 
							you master the art of yogurt making. Fill out the form below and we'll get 
							back to you with personalized advice.
						</p>
					</div>

					{/* Contact Form */}
					<div className='contact-form-wrapper bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-auto border border-slate-200 relative overflow-hidden'>
						{/* Декоративная полоска сверху */}
						<div className='w-full h-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600'></div>
						
						<div className='p-8 md:p-12'>
							<ContactForm />
						</div>
					</div>

					{/* Additional Information */}
					<div className='mt-16 text-center'>
						<div className='max-w-4xl mx-auto p-8 bg-slate-800 rounded-2xl text-white relative overflow-hidden'>
							{/* Декоративные элементы */}
							<div className='absolute top-0 right-0 w-32 h-32 bg-slate-400/10 rounded-full transform translate-x-16 -translate-y-16'></div>
							<div className='absolute bottom-0 left-0 w-24 h-24 bg-slate-500/10 rounded-full transform -translate-x-12 translate-y-12'></div>
							
							<div className='relative z-10'>
								<h3 className='text-2xl font-semibold mb-4'>Join Our Yogurt Community</h3>
								<p className='text-slate-300 max-w-2xl mx-auto mb-6'>
									Connect with fellow yogurt enthusiasts, share your creations, 
									and get weekly tips delivered to your inbox.
								</p>
								<div className='flex items-center justify-center gap-6 text-slate-300'>
									<div className='flex items-center gap-2'>
										<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
										</svg>
										<span>5000+ Members</span>
									</div>
									<div className='flex items-center gap-2'>
										<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.465.935-6.012 2.456l3.09 3.09a11.959 11.959 0 006.748-3.454l3.94 3.94A11.998 11.998 0 0024 12c0-6.628-5.372-12-12-12S0 5.372 0 12c0 2.34.635 4.525 1.732 6.416L3.89 16.26z' />
										</svg>
										<span>500+ Recipes</span>
									</div>
									<div className='flex items-center gap-2'>
										<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
										</svg>
										<span>Expert Verified</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<style>{`
				/* Асимметричная форма для информационных карточек */
				.contact-info-card {
					border-radius: 25px 8px 25px 8px;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}

				.contact-info-card:hover {
					border-radius: 8px 25px 8px 25px;
					transform: translateY(-4px) scale(1.02);
					box-shadow: 0 15px 40px rgba(71, 85, 105, 0.15);
				}

				/* Асимметричная форма для формы контактов */
				.contact-form-wrapper {
					border-radius: 40px 10px 40px 10px;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}

				.contact-form-wrapper:hover {
					border-radius: 10px 40px 10px 40px;
					transform: translateY(-2px);
					box-shadow: 0 25px 50px rgba(71, 85, 105, 0.2);
				}

				/* Адаптивные изменения */
				@media (max-width: 768px) {
					.contact-info-card {
						border-radius: 15px 5px 15px 5px;
					}
					
					.contact-info-card:hover {
						border-radius: 5px 15px 5px 15px;
						transform: translateY(-2px) scale(1.01);
					}

					.contact-form-wrapper {
						border-radius: 20px 5px 20px 5px;
					}

					.contact-form-wrapper:hover {
						border-radius: 5px 20px 5px 20px;
					}
				}
			`}</style>
		</div>
	)
}

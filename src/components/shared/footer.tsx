import { Link } from 'react-router'

export function Footer() {
	return (
		<footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-12 relative overflow-hidden'>
			{/* Декоративные элементы фона */}
			<div className='absolute top-0 left-0 w-full h-full opacity-10'>
				<div className='absolute top-0 left-20 w-32 h-32 bg-slate-400 rounded-full blur-3xl'></div>
				<div className='absolute bottom-0 right-10 w-24 h-24 bg-slate-500 rounded-full blur-2xl'></div>
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='flex flex-col items-center justify-center'>
					{/* Логотип и заголовок */}
					<div className='text-center mb-8'>
						<h3 className='text-3xl font-bold text-white mb-2'>
							The Yogurt Book
						</h3>
						<div className='w-24 h-1 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 mx-auto mb-4 rounded-full'></div>
						<p className='text-slate-300 max-w-md mx-auto'>
							Your ultimate guide to yogurt making, fermentation techniques, and healthy living
						</p>
					</div>

					{/* Навигационные ссылки */}
					<nav className='mb-8'>
						<ul className='flex flex-wrap gap-8 justify-center text-slate-200 text-base'>
							<li>
								<Link
									to='/about'
									className='footer-link hover:text-slate-300 transition-all duration-300 font-medium relative'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to='/blog'
									className='footer-link hover:text-slate-300 transition-all duration-300 font-medium relative'
								>
									Recipes
								</Link>
							</li>
							<li>
								<Link
									to='/categories'
									className='footer-link hover:text-slate-300 transition-all duration-300 font-medium relative'
								>
									Categories
								</Link>
							</li>
							<li>
								<Link
									to='/privacy-policy'
									className='footer-link hover:text-slate-300 transition-all duration-300 font-medium relative'
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to='/contacts'
									className='footer-link hover:text-slate-300 transition-all duration-300 font-medium relative'
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</nav>

					{/* Социальные сети / дополнительная информация */}
					<div className='flex items-center justify-center gap-6 mb-8'>
						<div className='flex items-center gap-2 text-slate-400'>
							<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
							</svg>
							<span className='text-sm'>Tested Recipes</span>
						</div>
						<div className='w-1 h-1 bg-slate-500 rounded-full'></div>
						<div className='flex items-center gap-2 text-slate-400'>
							<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
							</svg>
							<span className='text-sm'>Expert Tips</span>
						</div>
						<div className='w-1 h-1 bg-slate-500 rounded-full'></div>
						<div className='flex items-center gap-2 text-slate-400'>
							<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
							</svg>
							<span className='text-sm'>Daily Updates</span>
						</div>
					</div>

					{/* Copyright */}
					<div className='text-center border-t border-slate-700 pt-6 w-full'>
						<p className='text-slate-400 text-sm mb-2'>
							©{new Date().getFullYear()} The Yogurt Book. All Rights Reserved.
						</p>
						<p className='text-slate-500 text-xs'>
							Made with ❤️ for yogurt enthusiasts worldwide
						</p>
					</div>
				</div>
			</div>

			<style>{`
				/* Стили для ссылок в футере */
				.footer-link {
					position: relative;
					overflow: hidden;
				}

				.footer-link::before {
					content: '';
					position: absolute;
					bottom: -2px;
					left: 0;
					width: 0;
					height: 2px;
					background: linear-gradient(90deg, #64748b, #94a3b8);
					transition: width 0.3s ease;
					border-radius: 2px;
				}

				.footer-link:hover::before {
					width: 100%;
				}

				.footer-link:hover {
					transform: translateY(-2px);
				}

				/* Адаптивные изменения */
				@media (max-width: 768px) {
					.footer-link {
						font-size: 0.875rem;
					}
				}
			`}</style>
		</footer>
	)
}

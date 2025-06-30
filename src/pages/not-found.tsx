export function NotFoundPage() {
	return (
		<>
			<section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden'>
				{/* Декоративные фоновые элементы */}
				<div className='absolute top-0 left-0 w-full h-full opacity-10'>
					<div className='absolute top-20 left-10 w-64 h-64 bg-slate-400 rounded-full blur-3xl animate-pulse'></div>
					<div className='absolute top-1/2 right-20 w-48 h-48 bg-slate-300 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
					<div className='absolute bottom-20 left-1/4 w-32 h-32 bg-slate-500 rounded-full blur-2xl animate-pulse' style={{animationDelay: '2s'}}></div>
					<div className='absolute top-1/4 right-1/4 w-40 h-40 bg-slate-600 rounded-full blur-3xl animate-pulse' style={{animationDelay: '0.5s'}}></div>
				</div>

				<div className='text-center px-4 relative z-10'>
					{/* Основной контент 404 */}
					<div className='not-found-container bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-slate-600/30 shadow-2xl'>
						{/* Иконка йогурта */}
						<div className='mb-8'>
							<div className='w-24 h-24 bg-slate-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl'>
								<svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
								</svg>
							</div>
						</div>

						{/* 404 число */}
						<h1 className='text-9xl font-bold text-white mb-6 drop-shadow-lg'>
							4<span className='text-slate-300'>0</span>4
						</h1>
						
						{/* Заголовок */}
						<h2 className='text-3xl font-semibold text-white mt-6 mb-4'>
							Recipe Not Found
						</h2>
						
						{/* Разделитель */}
						<div className='w-32 h-1 bg-gradient-to-r from-slate-300 via-white to-slate-300 mx-auto mb-6 rounded-full'></div>
						
						{/* Описание */}
						<p className='text-slate-200 text-lg mb-8 max-w-md mx-auto leading-relaxed'>
							Oops! This yogurt recipe seems to have been eaten already. 
							Let's get you back to our delicious collection!
						</p>

						{/* Дополнительная информация */}
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-slate-300'>
							<div className='flex items-center gap-2 justify-center'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
								</svg>
								<span>500+ Recipes</span>
							</div>
							<div className='flex items-center gap-2 justify-center'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
								</svg>
								<span>Expert Tested</span>
							</div>
							<div className='flex items-center gap-2 justify-center'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
								</svg>
								<span>Community Loved</span>
							</div>
						</div>

						{/* Кнопка возврата */}
						<a href='/'>
							<button className='return-home-button bg-slate-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
								</svg>
								Return to Recipe Collection
							</button>
						</a>

						{/* Популярные ссылки */}
						<div className='mt-8 pt-8 border-t border-slate-600/30'>
							<p className='text-slate-300 text-sm mb-4'>Or try these popular sections:</p>
							<div className='flex flex-wrap gap-3 justify-center'>
								<a href='/blog' className='quick-link text-slate-300 hover:text-white text-sm underline decoration-slate-500 hover:decoration-white transition-colors'>
									All Recipes
								</a>
								<a href='/blog?type=Greek' className='quick-link text-slate-300 hover:text-white text-sm underline decoration-slate-500 hover:decoration-white transition-colors'>
									Greek Style
								</a>
								<a href='/blog?type=Healthy' className='quick-link text-slate-300 hover:text-white text-sm underline decoration-slate-500 hover:decoration-white transition-colors'>
									Healthy Options
								</a>
								<a href='/about' className='quick-link text-slate-300 hover:text-white text-sm underline decoration-slate-500 hover:decoration-white transition-colors'>
									About Us
								</a>
							</div>
						</div>
					</div>
				</div>

				<style>{`
					/* Асимметричная форма для основного контейнера */
					.not-found-container {
						border-radius: 40px 10px 40px 10px;
						transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
						max-width: 600px;
					}

					.not-found-container:hover {
						border-radius: 10px 40px 10px 40px;
						transform: translateY(-4px);
						box-shadow: 0 25px 60px rgba(15, 23, 42, 0.4);
					}

					/* Анимация для числа 404 */
					h1 {
						animation: float 3s ease-in-out infinite;
					}

					@keyframes float {
						0%, 100% { transform: translateY(0px); }
						50% { transform: translateY(-10px); }
					}

					/* Стили кнопки */
					.return-home-button {
						position: relative;
						overflow: hidden;
					}

					.return-home-button::before {
						content: '';
						position: absolute;
						top: 0;
						left: -100%;
						width: 100%;
						height: 100%;
						background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
						transition: left 0.5s;
					}

					.return-home-button:hover::before {
						left: 100%;
					}

					/* Hover-эффекты для быстрых ссылок */
					.quick-link {
						position: relative;
					}

					.quick-link::after {
						content: '';
						position: absolute;
						bottom: -2px;
						left: 0;
						width: 0;
						height: 2px;
						background: white;
						transition: width 0.3s ease;
					}

					.quick-link:hover::after {
						width: 100%;
					}

					/* Адаптивные изменения */
					@media (max-width: 768px) {
						.not-found-container {
							border-radius: 20px 5px 20px 5px;
							padding: 2rem;
						}

						.not-found-container:hover {
							border-radius: 5px 20px 5px 20px;
							transform: translateY(-2px);
						}

						h1 {
							font-size: 6rem;
						}
					}
				`}</style>
			</section>
		</>
	)
}

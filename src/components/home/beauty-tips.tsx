import { useGetArticles } from '@/hooks/useArticles'
import type { FC } from 'react'
import { Link } from 'react-router'

export const BeautyTips: FC = () => {
	const { data: articles } = useGetArticles()
	const types = [...new Set(articles?.map(article => article.type))]

	return (
		<section className='py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden'>
			{/* Декоративные элементы фона */}
			<div className='absolute top-0 left-0 w-full h-full opacity-5'>
				<div className='absolute top-20 left-10 w-32 h-32 bg-slate-600 rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 right-10 w-40 h-40 bg-slate-700 rounded-full blur-3xl'></div>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-slate-500 rounded-full blur-3xl'></div>
			</div>
			
			<div className='container mx-auto px-4 relative z-10'>
				{/* Заголовок секции */}
				<div className='text-center mb-12'>
					<div className='inline-block'>
						<h2 className='text-4xl font-bold mb-4 text-slate-800 relative'>
							Yogurt Recipe Categories
							<div className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent rounded-full'></div>
						</h2>
					</div>
					<p className='text-lg text-slate-600 max-w-2xl mx-auto mt-6'>
						Explore our curated collection of healthy and delicious yogurt recipes, 
						tips for perfect fermentation, and nutritional guides
					</p>
				</div>

				{/* Сетка карточек с одинаковой асимметричной формой */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
					{types.map((type, index) => (
						<div
							key={index}
							className='card-wrapper rounded-asymmetric transform hover:scale-105 transition-all duration-500 group'
						>
							<div className='card-content bg-slate-800/50 shadow-xl border border-slate-700 overflow-hidden relative'>
								{/* Декоративная анимированная полоска */}
								<div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 group-hover:h-2 transition-all duration-300'></div>
								
								<div className='relative h-48 w-full overflow-hidden'>
									<img
										src={articles?.find(article => article.type === type)?.image}
										alt={type}
										className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-500'
									/>
									{/* Градиентный оверлей */}
									<div className='absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
								</div>
								
								<div className='p-6'>
									<h3 className='text-xl font-semibold mb-3 text-slate-800 group-hover:text-slate-700 transition-colors duration-300'>
										{type}
									</h3>
									<p className='text-slate-600 leading-relaxed mb-4'>
										{articles?.find(article => article.type === type)?.summary}
									</p>
									<Link to={`/blog?type=${encodeURIComponent(type ?? '')}`}>
										<button className='inline-flex items-center gap-2 mt-2 px-4 py-2 text-slate-700 font-medium hover:text-white hover:bg-slate-700 border-2 border-slate-700 rounded-lg transition-all duration-300 group-hover:shadow-md'>
											Explore Recipes
											<svg className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
											</svg>
										</button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Дополнительная информация */}
				<div className='text-center mt-16'>
					<div className='max-w-4xl mx-auto p-8 bg-slate-800/50 rounded-2xl border border-slate-700 relative overflow-hidden'>
						{/* Декоративные элементы */}
						<div className='absolute top-0 right-0 w-32 h-32 bg-slate-600/5 rounded-full transform translate-x-16 -translate-y-16'></div>
						<div className='absolute bottom-0 left-0 w-24 h-24 bg-slate-700/5 rounded-full transform -translate-x-12 translate-y-12'></div>
						
						<h3 className='text-2xl font-semibold text-slate-800 mb-4 relative z-10'>
							Why Choose The Yogurt Book?
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 relative z-10'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3'>
									<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
									</svg>
								</div>
								<h4 className='font-semibold text-slate-800 mb-2'>Tested Recipes</h4>
								<p className='text-slate-600 text-sm'>All recipes are kitchen-tested for perfect results</p>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3'>
									<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
									</svg>
								</div>
								<h4 className='font-semibold text-slate-800 mb-2'>Healthy Living</h4>
								<p className='text-slate-600 text-sm'>Nutritious recipes for a healthier lifestyle</p>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3'>
									<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
									</svg>
								</div>
								<h4 className='font-semibold text-slate-800 mb-2'>Expert Tips</h4>
								<p className='text-slate-600 text-sm'>Professional advice and fermentation secrets</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style>{`
				/* Асимметричная скругленная форма для всех карточек */
				.rounded-asymmetric .card-content {
					border-radius: 40px 10px 40px 10px;
					transition: border-radius 0.3s ease;
				}
				.rounded-asymmetric:hover .card-content {
					border-radius: 10px 40px 10px 40px;
				}

				/* Дополнительные эффекты для всех карточек */
				.card-wrapper {
					filter: drop-shadow(0 10px 30px rgba(71, 85, 105, 0.1));
					transition: filter 0.3s ease;
				}
				.card-wrapper:hover {
					filter: drop-shadow(0 20px 40px rgba(71, 85, 105, 0.2));
				}

				/* Адаптивные изменения для мобильных устройств */
				@media (max-width: 768px) {
					.rounded-asymmetric .card-content {
						border-radius: 20px 5px 20px 5px;
					}
					.rounded-asymmetric:hover .card-content {
						border-radius: 5px 20px 5px 20px;
					}
				}
			`}</style>
		</section>
	)
}

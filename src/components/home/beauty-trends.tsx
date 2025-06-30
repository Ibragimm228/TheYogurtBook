import type { FC } from 'react'
import { useGetArticles } from '@/hooks/useArticles'
import { Link } from 'react-router'

export const BeautyTrends: FC = () => {
	const { data: articles, isLoading } = useGetArticles()

	// Берем первые 3 статьи для трендов
	const trends = articles?.slice(0, 3) || []

	// Функция для создания slug из названия статьи (сохраняя заглавные буквы)
	const createSlug = (title: string) => {
		return title
			.replace(/[^a-zA-Z0-9\s-]/g, '') // удаляем специальные символы, кроме букв, цифр, пробелов и дефисов
			.replace(/\s+/g, '-') // заменяем пробелы на дефисы
			.replace(/-+/g, '-') // заменяем множественные дефисы на одинарные
			.trim()
			.replace(/^-|-$/g, '') // удаляем дефисы в начале и конце
	}

	if (isLoading) {
		return (
			<section className='py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden'>
				<div className='container mx-auto px-4 relative z-10'>
					<div className='text-center mb-12'>
						<div className='inline-block mb-6'>
							<h2 className='text-4xl font-bold text-white mb-4 relative'>
								Trending Yogurt Styles
								<div className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full'></div>
							</h2>
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
						{Array.from({ length: 3 }).map((_, index) => (
							<div key={index} className='group relative card-wrapper'>
								<div className='relative h-80 w-full overflow-hidden trend-card bg-slate-700 animate-pulse'>
									<div className='w-full h-full bg-slate-600'></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className='py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden'>
			{/* Декоративные элементы фона */}
			<div className='absolute top-0 left-0 w-full h-full opacity-10'>
				<div className='absolute top-10 left-20 w-40 h-40 bg-slate-400 rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 right-10 w-32 h-32 bg-slate-500 rounded-full blur-3xl'></div>
				<div className='absolute top-1/2 left-10 w-24 h-24 bg-slate-300 rounded-full blur-2xl'></div>
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='text-center mb-12'>
					<div className='inline-block mb-6'>
						<h2 className='text-4xl font-bold text-white mb-4 relative'>
							Trending Yogurt Styles
							<div className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full'></div>
						</h2>
					</div>
					<p className='text-slate-200 max-w-2xl mx-auto text-lg'>
						Discover the most popular yogurt styles and techniques that are 
						revolutionizing healthy eating and fermentation culture
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
					{trends.map((article, index) => (
						<Link 
							key={article.id || index}
							to={`/articles/${createSlug(article.title)}`}
							className='group relative card-wrapper block'
						>
							<div className='relative h-80 w-full overflow-hidden trend-card'>
								<img
									src={article.image}
									alt={article.title}
									className='object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-transparent' />
								
								{/* Декоративная анимированная полоска */}
								<div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 group-hover:h-2 transition-all duration-300'></div>
								
								<div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
									<span className='inline-block px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-xl text-sm font-medium mb-3 transition-colors duration-300 shadow-lg'>
										{article.type || 'Recipe'}
									</span>
									<h3 className='text-2xl font-bold mb-2 drop-shadow-lg'>{article.title}</h3>
									<p className='text-slate-200 leading-relaxed mb-4 line-clamp-2'>
										{article.summary}
									</p>
									
									{/* Кнопка для перехода к статье */}
									<div className='inline-flex items-center gap-2 mt-2 text-slate-300 hover:text-white font-medium transition-colors duration-300 group-hover:text-slate-100'>
										Read More
										<svg className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
										</svg>
									</div>
								</div>

								{/* Дополнительный оверлей при hover */}
								<div className='absolute inset-0 bg-gradient-to-t from-slate-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							</div>
						</Link>
					))}
				</div>

				{/* Дополнительная секция */}
				<div className='mt-16 text-center'>
					<div className='max-w-4xl mx-auto p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/30 relative overflow-hidden'>
						{/* Декоративные элементы */}
						<div className='absolute top-0 right-0 w-32 h-32 bg-slate-400/10 rounded-full transform translate-x-16 -translate-y-16'></div>
						<div className='absolute bottom-0 left-0 w-24 h-24 bg-slate-500/10 rounded-full transform -translate-x-12 translate-y-12'></div>
						
						<h3 className='text-2xl font-semibold text-white mb-4 relative z-10'>
							Master the Art of Yogurt Making
						</h3>
						<p className='text-slate-300 max-w-2xl mx-auto relative z-10 mb-6'>
							From traditional fermentation techniques to modern flavor innovations, 
							explore comprehensive guides that will transform your yogurt-making journey
						</p>
						<Link 
							to='/blog'
							className='inline-flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg'
						>
							View All Recipes
							<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
							</svg>
						</Link>
					</div>
				</div>
			</div>

			<style>{`
				/* Асимметричная скругленная форма для карточек трендов */
				.trend-card {
					border-radius: 40px 10px 40px 10px;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
					box-shadow: 
						0 10px 30px rgba(15, 23, 42, 0.3),
						0 0 0 1px rgba(71, 85, 105, 0.2);
				}

				.card-wrapper:hover .trend-card {
					border-radius: 10px 40px 10px 40px;
					transform: translateY(-8px) scale(1.02);
					box-shadow: 
						0 25px 50px rgba(15, 23, 42, 0.4),
						0 0 0 1px rgba(100, 116, 139, 0.3);
				}

				/* Дополнительные эффекты */
				.card-wrapper {
					filter: drop-shadow(0 8px 25px rgba(15, 23, 42, 0.2));
					transition: filter 0.3s ease;
				}
				.card-wrapper:hover {
					filter: drop-shadow(0 15px 40px rgba(15, 23, 42, 0.3));
				}

				/* Ограничение текста */
				.line-clamp-2 {
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				/* Адаптивные изменения для мобильных устройств */
				@media (max-width: 768px) {
					.trend-card {
						border-radius: 20px 5px 20px 5px;
					}
					.card-wrapper:hover .trend-card {
						border-radius: 5px 20px 5px 20px;
						transform: translateY(-4px) scale(1.01);
					}
				}
			`}</style>
		</section>
	)
}

import { useGetArticles } from '@/hooks/useArticles'
import { ArticleCardLarge } from '../shared/article-card/article-card-large'
import { Container } from '../shared/container'
import { ArticleCardCompact } from '../shared/article-card/article-card-compact'

export function Latest() {
	const { data: articles } = useGetArticles()
	const latestArticles = articles?.sort(
		(a, b) =>
			new Date(b.published_date || 0).getTime() -
			new Date(a.published_date || 0).getTime()
	)

	return (
		latestArticles && (
			<section className='py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden'>
				{/* Декоративные элементы фона */}
				<div className='absolute top-0 left-0 w-full h-full opacity-10'>
					<div className='absolute top-20 left-10 w-48 h-48 bg-slate-400 rounded-full blur-3xl'></div>
					<div className='absolute bottom-10 right-20 w-32 h-32 bg-slate-500 rounded-full blur-2xl'></div>
					<div className='absolute top-1/2 right-10 w-24 h-24 bg-slate-300 rounded-full blur-xl'></div>
				</div>

				<Container>
					<div className='text-center mb-12 relative z-10'>
						<div className='inline-block'>
							<h2 className='text-5xl font-bold mb-4 text-white relative'>
								Latest Yogurt Discoveries
								<div className='absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full'></div>
							</h2>
						</div>
						<p className='text-slate-300 text-lg max-w-3xl mx-auto mt-6'>
							Fresh recipes, fermentation techniques, and healthy living tips from our yogurt experts
						</p>
					</div>

					<div className='grid grid-cols-2 gap-12 max-md:grid-cols-1 relative z-10'>
						{/* Левая колонка - большие карточки */}
						<div className='w-full flex flex-col gap-12'>
							<div className='relative mb-6'>
								<h3 className='text-2xl font-semibold text-white mb-4 flex items-center gap-3'>
									<div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
										<svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
										</svg>
									</div>
									Featured Stories
								</h3>
							</div>
							{latestArticles.slice(0, 4).map((article, index) => (
								<div
									key={index}
									style={{ gridArea: `Area${index + 1}` }}
									className='w-full h-full card-container'
								>
									<ArticleCardLarge className='h-[300px]' article={article} />
								</div>
							))}
						</div>

						{/* Правая колонка - компактные карточки */}
						<div className='w-full flex flex-col gap-6'>
							<div className='relative mb-4'>
								<h3 className='text-2xl font-semibold text-white mb-4 flex items-center gap-3'>
									<div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
										<svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
										</svg>
									</div>
									Quick Reads
								</h3>
							</div>
							{latestArticles.slice(5, 10).map((article, index) => (
								<div
									key={index}
									style={{ gridArea: `Area${index + 1}` }}
									className='w-full h-full card-container-compact'
								>
									<ArticleCardCompact article={article} />
								</div>
							))}
						</div>
					</div>

					{/* Дополнительная информационная секция */}
					<div className='mt-16 relative z-10'>
						<div className='max-w-4xl mx-auto p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/30 relative overflow-hidden'>
							{/* Декоративные элементы */}
							<div className='absolute top-0 right-0 w-32 h-32 bg-slate-400/10 rounded-full transform translate-x-16 -translate-y-16'></div>
							<div className='absolute bottom-0 left-0 w-24 h-24 bg-slate-500/10 rounded-full transform -translate-x-12 translate-y-12'></div>
							
							<div className='text-center relative z-10'>
								<h3 className='text-2xl font-semibold text-white mb-4'>
									Stay Updated with The Yogurt Book
								</h3>
								<p className='text-slate-300 max-w-2xl mx-auto mb-6'>
									Subscribe to our newsletter for weekly yogurt recipes, fermentation tips, 
									and exclusive content from our community of yogurt enthusiasts.
								</p>
								<div className='flex items-center justify-center gap-4 flex-wrap'>
									<div className='flex items-center gap-2 text-slate-400'>
										<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
										</svg>
										<span>Updated Daily</span>
									</div>
									<div className='flex items-center gap-2 text-slate-400'>
										<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
										</svg>
										<span>Expert Verified</span>
									</div>
									<div className='flex items-center gap-2 text-slate-400'>
										<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
										</svg>
										<span>Community Favorites</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>

				<style>{`
					/* Асимметричная форма для больших карточек */
					.card-container {
						filter: drop-shadow(0 10px 30px rgba(15, 23, 42, 0.2));
						transition: filter 0.3s ease;
					}
					.card-container:hover {
						filter: drop-shadow(0 20px 40px rgba(15, 23, 42, 0.3));
					}
					.card-container > div {
						border-radius: 40px 10px 40px 10px !important;
						transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
						overflow: hidden;
						border: 2px solid rgba(71, 85, 105, 0.2);
					}
					.card-container:hover > div {
						border-radius: 10px 40px 10px 40px !important;
						transform: translateY(-4px) scale(1.01);
						border-color: rgba(100, 116, 139, 0.3);
					}

					/* Асимметричная форма для компактных карточек */
					.card-container-compact {
						filter: drop-shadow(0 8px 25px rgba(15, 23, 42, 0.15));
						transition: filter 0.3s ease;
					}
					.card-container-compact:hover {
						filter: drop-shadow(0 15px 35px rgba(15, 23, 42, 0.25));
					}
					.card-container-compact > div {
						border-radius: 25px 8px 25px 8px !important;
						transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
						overflow: hidden;
						border: 1px solid rgba(71, 85, 105, 0.2);
					}
					.card-container-compact:hover > div {
						border-radius: 8px 25px 8px 25px !important;
						transform: translateY(-2px) scale(1.005);
						border-color: rgba(100, 116, 139, 0.3);
					}

					/* ТОЛЬКО для текста - фантомно-синие цвета */
					.card-container-compact .text-pink-500,
					.card-container-compact .text-pink-600,
					.card-container-compact .text-pink-700,
					.card-container-compact .text-pink-400,
					.card-container-compact .text-pink-300 {
						color: #64748b !important;
					}

					/* ИСПРАВЛЕНЫ HOVER-ЭФФЕКТЫ ДЛЯ ТЕКСТА */
					.card-container-compact:hover .text-pink-500,
					.card-container-compact:hover .text-pink-600,
					.card-container-compact:hover .text-pink-700,
					.card-container-compact:hover .text-pink-400,
					.card-container-compact:hover .text-pink-300,
					.card-container-compact .hover\\:text-pink-600:hover,
					.card-container-compact .hover\\:text-pink-700:hover,
					.card-container-compact .hover\\:text-pink-500:hover,
					.card-container-compact .hover\\:text-pink-400:hover {
						color: #475569 !important;
					}

					/* Переопределение ВСЕХ возможных hover-состояний текста */
					.card-container-compact:hover h1,
					.card-container-compact:hover h2,
					.card-container-compact:hover h3,
					.card-container-compact:hover h4,
					.card-container-compact:hover h5,
					.card-container-compact:hover h6,
					.card-container-compact:hover p,
					.card-container-compact:hover span,
					.card-container-compact:hover a {
						color: #475569 !important;
					}

					/* ТОЛЬКО для фонов и границ - фантомно-синие цвета */
					.card-container-compact .bg-pink-500,
					.card-container-compact .bg-pink-600,
					.card-container-compact .bg-pink-400,
					.card-container-compact .bg-pink-300 {
						background-color: #64748b !important;
					}

					.card-container-compact .border-pink-500,
					.card-container-compact .border-pink-600,
					.card-container-compact .border-pink-400,
					.card-container-compact .border-pink-300 {
						border-color: #64748b !important;
					}

					/* Hover-эффекты для фонов */
					.card-container-compact .hover\\:bg-pink-600:hover,
					.card-container-compact .hover\\:bg-pink-700:hover,
					.card-container-compact .hover\\:bg-pink-500:hover {
						background-color: #475569 !important;
					}

					.card-container-compact .hover\\:border-pink-600:hover,
					.card-container-compact .hover\\:border-pink-700:hover,
					.card-container-compact .hover\\:border-pink-500:hover {
						border-color: #475569 !important;
					}

					/* Кнопки и ссылки */
					.card-container-compact button {
						color: #64748b !important;
						border-color: #64748b !important;
						background-color: transparent !important;
					}

					.card-container-compact button:hover {
						color: white !important;
						background-color: #64748b !important;
						border-color: #64748b !important;
					}

					.card-container-compact a {
						color: #64748b !important;
					}

					.card-container-compact a:hover {
						color: #475569 !important;
					}

					/* Убираем фон у текстовых элементов */
					.card-container-compact h1,
					.card-container-compact h2,
					.card-container-compact h3,
					.card-container-compact h4,
					.card-container-compact h5,
					.card-container-compact h6,
					.card-container-compact p,
					.card-container-compact span:not([class*="bg-"]) {
						background-color: transparent !important;
					}

					/* Блокируем ВСЕ розовые hover-эффекты */
					.card-container-compact *:hover {
						color: #475569 !important;
					}

					/* Исключение для кнопок с фоном */
					.card-container-compact button:hover {
						color: white !important;
					}

					/* Адаптивные изменения */
					@media (max-width: 768px) {
						.card-container > div {
							border-radius: 20px 5px 20px 5px !important;
						}
						.card-container:hover > div {
							border-radius: 5px 20px 5px 20px !important;
							transform: translateY(-2px) scale(1.005);
						}
						.card-container-compact > div {
							border-radius: 15px 5px 15px 5px !important;
						}
						.card-container-compact:hover > div {
							border-radius: 5px 15px 5px 15px !important;
						}
					}
				`}</style>
			</section>
		)
	)
}

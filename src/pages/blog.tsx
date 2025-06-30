import { ArticleCardCompact } from '@/components/shared/article-card/article-card-compact'
import { Container } from '@/components/shared/container'
import { useGetArticles, useGetArticlesByType } from '@/hooks/useArticles'
import { SearchIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type')
	const searchQuery = searchParams.get('search')

	const { data: allArticles, isLoading: isLoadingAll } = useGetArticles()
	const { data: articlesByTypes, isLoading: isLoadingByType } =
		useGetArticlesByType(type)

	const articles = searchQuery?.length
		? articlesByTypes?.filter(article =>
				article.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
		  )
		: articlesByTypes

	// Get unique article types for filtering
	const types = [...new Set(allArticles?.map(article => article.type))]

	const isLoading = isLoadingAll || isLoadingByType

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-white relative overflow-hidden'>
			{/* Декоративные фоновые элементы */}
			<div className='absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none'>
				<div className='absolute top-20 left-10 w-64 h-64 bg-slate-600 rounded-full blur-3xl'></div>
				<div className='absolute top-1/2 right-20 w-48 h-48 bg-slate-700 rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 left-1/4 w-32 h-32 bg-slate-500 rounded-full blur-2xl'></div>
			</div>

			{/* Header Section */}
			<section className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-16 relative overflow-hidden'>
				{/* Декоративные элементы в заголовке */}
				<div className='absolute top-0 left-0 w-full h-full opacity-10'>
					<div className='absolute top-10 right-20 w-40 h-40 bg-slate-400 rounded-full blur-3xl'></div>
					<div className='absolute bottom-10 left-10 w-32 h-32 bg-slate-300 rounded-full blur-2xl'></div>
				</div>

				<Container className='relative z-10'>
					<div className='text-center'>
						<h1 className='text-6xl font-bold text-white mb-6 drop-shadow-lg'>
							The Yogurt Recipe Collection
						</h1>
						<div className='w-32 h-1.5 bg-gradient-to-r from-slate-300 via-white to-slate-300 mx-auto mb-6 rounded-full'></div>
						<p className='text-slate-200 max-w-3xl mx-auto text-lg leading-relaxed'>
							Discover authentic yogurt recipes, fermentation techniques, and nutritional 
							wisdom from our community of yogurt enthusiasts and health experts.
						</p>
						<div className='flex items-center justify-center gap-8 mt-8 text-slate-300'>
							<div className='flex items-center gap-2'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
								</svg>
								<span>Expert Tested</span>
							</div>
							<div className='w-1 h-1 bg-slate-400 rounded-full'></div>
							<div className='flex items-center gap-2'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
								</svg>
								<span>Community Loved</span>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Search and Filter Section */}
			<section className='py-12 bg-white border-b border-slate-200 relative'>
				<Container>
					<div className='flex flex-col gap-8 items-center justify-between'>
						{/* Search Bar */}
						<div className='search-container'>
							<form
								action='/blog'
								className='flex items-center bg-slate-50 rounded-2xl px-6 py-4 w-full md:w-96 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300'
							>
								<input
									type='text'
									name='search'
									placeholder='Search yogurt recipes...'
									defaultValue={searchQuery || ''}
									className='bg-transparent outline-none text-slate-800 placeholder-slate-500 w-full text-lg'
								/>
								<button type='submit' className='text-slate-600 hover:text-slate-800 transition-colors ml-2'>
									<SearchIcon size={24} />
								</button>
							</form>
						</div>

						{/* Type Filter */}
						<div className='flex flex-wrap gap-3 justify-center'>
							<Link
								to='/blog'
								className={`filter-button px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
									!type
										? 'bg-slate-600 text-white shadow-lg'
										: 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-800'
								}`}
							>
								All Recipes
							</Link>
							{types?.map((articleType, index) => (
								<Link
									key={index}
									to={`/blog?type=${encodeURIComponent(articleType || '')}`}
									className={`filter-button px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
										type === articleType
											? 'bg-slate-600 text-white shadow-lg'
											: 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-800'
									}`}
								>
									{articleType}
								</Link>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* Articles Grid */}
			<section className='py-16 relative z-10'>
				<Container>
					{isLoading ? (
						<div className='flex items-center justify-center py-20'>
							<div className='text-center'>
								<div className='w-16 h-16 bg-slate-600 rounded-full mx-auto mb-4 animate-pulse'></div>
								<p className='text-slate-600 font-medium'>Loading delicious recipes...</p>
							</div>
						</div>
					) : articles?.length ? (
						<div className='grid gap-8 articles-grid'>
							{articles.map((article, index) => (
								<div key={index} className='article-card-wrapper'>
									<ArticleCardCompact article={article} />
								</div>
							))}
						</div>
					) : (
						<div className='text-center py-20'>
							<div className='w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
								<svg className='w-12 h-12 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.465.935-6.012 2.456l3.09 3.09a11.959 11.959 0 006.748-3.454l3.94 3.94A11.998 11.998 0 0024 12c0-6.628-5.372-12-12-12S0 5.372 0 12c0 2.34.635 4.525 1.732 6.416L3.89 16.26z' />
								</svg>
							</div>
							<h3 className='text-3xl font-semibold text-slate-800 mb-4'>
								No recipes found
							</h3>
							<p className='text-slate-600 text-lg max-w-md mx-auto'>
								{searchQuery
									? `No recipes found matching "${searchQuery}". Try different keywords or browse our categories.`
									: 'No recipes available in this category yet. Check back soon for new additions!'}
							</p>
						</div>
					)}
				</Container>
			</section>

			<style>{`
				/* Асимметричные формы для карточек статей */
				.article-card-wrapper > div {
					border-radius: 25px 8px 25px 8px !important;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
					box-shadow: 0 4px 20px rgba(71, 85, 105, 0.1);
					border: 1px solid rgba(71, 85, 105, 0.1);
				}

				.article-card-wrapper:hover > div {
					border-radius: 8px 25px 8px 25px !important;
					transform: translateY(-4px) scale(1.01);
					box-shadow: 0 12px 40px rgba(71, 85, 105, 0.15);
				}

				/* Переопределение розовых цветов в ArticleCardCompact */
				.article-card-wrapper .text-pink-500,
				.article-card-wrapper .text-pink-600,
				.article-card-wrapper .text-pink-700,
				.article-card-wrapper .text-pink-400 {
					color: #64748b !important;
				}

				.article-card-wrapper .bg-pink-500,
				.article-card-wrapper .bg-pink-600,
				.article-card-wrapper .bg-pink-400 {
					background-color: #64748b !important;
				}

				.article-card-wrapper .border-pink-500,
				.article-card-wrapper .border-pink-600,
				.article-card-wrapper .border-pink-400 {
					border-color: #64748b !important;
				}

				/* ИСПРАВЛЕНИЕ: Блокировка розовых цветов при hover для названий статей */
				.article-card-wrapper:hover .text-pink-500,
				.article-card-wrapper:hover .text-pink-600,
				.article-card-wrapper:hover .text-pink-700,
				.article-card-wrapper:hover .text-pink-400,
				.article-card-wrapper .hover\\:text-pink-600:hover,
				.article-card-wrapper .hover\\:text-pink-700:hover,
				.article-card-wrapper .hover\\:text-pink-500:hover,
				.article-card-wrapper .hover\\:text-pink-400:hover {
					color: #475569 !important;
				}

				/* Переопределение ВСЕХ заголовков и ссылок */
				.article-card-wrapper h1,
				.article-card-wrapper h2,
				.article-card-wrapper h3,
				.article-card-wrapper h4,
				.article-card-wrapper h5,
				.article-card-wrapper h6,
				.article-card-wrapper a {
					color: #64748b !important;
				}

				.article-card-wrapper:hover h1,
				.article-card-wrapper:hover h2,
				.article-card-wrapper:hover h3,
				.article-card-wrapper:hover h4,
				.article-card-wrapper:hover h5,
				.article-card-wrapper:hover h6,
				.article-card-wrapper:hover a,
				.article-card-wrapper h1:hover,
				.article-card-wrapper h2:hover,
				.article-card-wrapper h3:hover,
				.article-card-wrapper h4:hover,
				.article-card-wrapper h5:hover,
				.article-card-wrapper h6:hover,
				.article-card-wrapper a:hover {
					color: #475569 !important;
				}

				/* Блокировка ЛЮБЫХ розовых цветов при hover */
				.article-card-wrapper:hover *,
				.article-card-wrapper *:hover {
					color: #475569 !important;
				}

				/* Исключения для элементов с серым текстом */
				.article-card-wrapper .text-gray-500,
				.article-card-wrapper .text-gray-600,
				.article-card-wrapper .text-slate-500,
				.article-card-wrapper .text-slate-600 {
					color: #64748b !important;
				}

				.article-card-wrapper:hover .text-gray-500,
				.article-card-wrapper:hover .text-gray-600,
				.article-card-wrapper:hover .text-slate-500,
				.article-card-wrapper:hover .text-slate-600 {
					color: #64748b !important;
				}

				.article-card-wrapper .hover\\:bg-pink-600:hover,
				.article-card-wrapper .hover\\:bg-pink-700:hover {
					background-color: #475569 !important;
				}

				.article-card-wrapper .hover\\:border-pink-600:hover,
				.article-card-wrapper .hover\\:border-pink-700:hover {
					border-color: #475569 !important;
				}

				/* Кнопки и ссылки в карточках */
				.article-card-wrapper button {
					color: #64748b !important;
					border-color: #64748b !important;
				}

				.article-card-wrapper button:hover {
					color: white !important;
					background-color: #64748b !important;
				}

				/* Стили для поисковой формы */
				.search-container form {
					background: linear-gradient(145deg, #f8fafc, #f1f5f9);
				}

				.search-container form:hover {
					background: linear-gradient(145deg, #f1f5f9, #e2e8f0);
				}

				/* Стили для кнопок фильтра */
				.filter-button {
					position: relative;
					overflow: hidden;
				}

				.filter-button::before {
					content: '';
					position: absolute;
					top: 0;
					left: -100%;
					width: 100%;
					height: 100%;
					background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
					transition: left 0.5s;
				}

				.filter-button:hover::before {
					left: 100%;
				}

				/* Адаптивные изменения */
				@media (max-width: 768px) {
					.article-card-wrapper > div {
						border-radius: 15px 5px 15px 5px !important;
					}
					
					.article-card-wrapper:hover > div {
						border-radius: 5px 15px 5px 15px !important;
						transform: translateY(-2px) scale(1.005);
					}
				}
			`}</style>
		</div>
	)
}

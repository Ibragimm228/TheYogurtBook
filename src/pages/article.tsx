import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
	const { slug } = useParams()

	const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

	if (isArticleLoading || isArticlesLoading) {
		return (
			<Container>
				<div className='py-12 min-h-screen bg-gradient-to-br from-slate-50 to-white'>
					<div className='flex items-center justify-center h-96'>
						<div className='text-center'>
							<div className='w-16 h-16 bg-slate-600 rounded-full mx-auto mb-4 animate-pulse'></div>
							<p className='text-slate-600 font-medium'>Loading yogurt recipe...</p>
						</div>
					</div>
				</div>
			</Container>
		)
	}

	if (!article) return null

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden'>
			{/* Декоративные фоновые элементы */}
			<div className='absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none'>
				<div className='absolute top-20 left-10 w-64 h-64 bg-slate-600 rounded-full blur-3xl'></div>
				<div className='absolute top-1/2 right-20 w-48 h-48 bg-slate-700 rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 left-1/4 w-32 h-32 bg-slate-500 rounded-full blur-2xl'></div>
				<div className='absolute top-1/4 right-1/4 w-24 h-24 bg-slate-400 rounded-full blur-xl'></div>
			</div>

			<Container className='relative z-10'>
				<div className='py-12'>
					{/* Article Header with enhanced styling */}
					<div className='article-header-wrapper'>
						<ArticleHeader article={article} />
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8'>
						{/* Left Column - Article Content */}
						<div className='lg:col-span-8 article-content-wrapper'>
							{/* Article Navigation */}
							<div className='article-navigation-wrapper mb-8'>
								<ArticleNavigation currentArticle={article} articles={articles} />
							</div>

							{/* Article Content */}
							<div className='article-main-content'>
								<ArticleContent article={article} />
							</div>
						</div>

						{/* Right Column - Articles & Comments */}
						<div className='lg:col-span-4 space-y-8 article-sidebar'>
							{/* Comments Section */}
							<div className='article-comments-wrapper'>
								<ArticleComments article={article} />
							</div>

							{/* Latest Articles */}
							<div className='article-latest-wrapper'>
								<ArticleLatest articles={articles} />
							</div>

							{/* Popular Articles */}
							<div className='article-popular-wrapper'>
								<ArticlePopular articles={articles} />
							</div>

							{/* Featured Articles */}
							<div className='article-featured-wrapper'>
								<ArticleFeatured articles={articles} />
							</div>
						</div>
					</div>
				</div>
			</Container>

			<style>{`
				/* Глобальные переопределения розовых цветов на фантомно-синие */
				.article-header-wrapper .text-pink-500,
				.article-header-wrapper .text-pink-600,
				.article-header-wrapper .text-pink-700,
				.article-content-wrapper .text-pink-500,
				.article-content-wrapper .text-pink-600,
				.article-content-wrapper .text-pink-700,
				.article-sidebar .text-pink-500,
				.article-sidebar .text-pink-600,
				.article-sidebar .text-pink-700 {
					color: #64748b !important;
				}

				.article-header-wrapper .bg-pink-500,
				.article-header-wrapper .bg-pink-600,
				.article-content-wrapper .bg-pink-500,
				.article-content-wrapper .bg-pink-600,
				.article-sidebar .bg-pink-500,
				.article-sidebar .bg-pink-600 {
					background-color: #64748b !important;
				}

				.article-header-wrapper .border-pink-500,
				.article-header-wrapper .border-pink-600,
				.article-content-wrapper .border-pink-500,
				.article-content-wrapper .border-pink-600,
				.article-sidebar .border-pink-500,
				.article-sidebar .border-pink-600 {
					border-color: #64748b !important;
				}

				/* Hover-эффекты */
				.article-header-wrapper .hover\\:text-pink-600:hover,
				.article-header-wrapper .hover\\:text-pink-700:hover,
				.article-content-wrapper .hover\\:text-pink-600:hover,
				.article-content-wrapper .hover\\:text-pink-700:hover,
				.article-sidebar .hover\\:text-pink-600:hover,
				.article-sidebar .hover\\:text-pink-700:hover {
					color: #475569 !important;
				}

				.article-header-wrapper .hover\\:bg-pink-600:hover,
				.article-header-wrapper .hover\\:bg-pink-700:hover,
				.article-content-wrapper .hover\\:bg-pink-600:hover,
				.article-content-wrapper .hover\\:bg-pink-700:hover,
				.article-sidebar .hover\\:bg-pink-600:hover,
				.article-sidebar .hover\\:bg-pink-700:hover {
					background-color: #475569 !important;
				}

				.article-header-wrapper .hover\\:border-pink-600:hover,
				.article-header-wrapper .hover\\:border-pink-700:hover,
				.article-content-wrapper .hover\\:border-pink-600:hover,
				.article-content-wrapper .hover\\:border-pink-700:hover,
				.article-sidebar .hover\\:border-pink-600:hover,
				.article-sidebar .hover\\:border-pink-700:hover {
					border-color: #475569 !important;
				}

				/* ИСПРАВЛЕНИЕ 1: Latest Articles - имена статей всегда фантомно-синие */
				.article-latest-wrapper h3,
				.article-latest-wrapper h3 a,
				.article-latest-wrapper .text-gray-900,
				.article-latest-wrapper .text-gray-800,
				.article-latest-wrapper .text-black {
					color: #64748b !important;
				}

				.article-latest-wrapper h3:hover,
				.article-latest-wrapper h3 a:hover,
				.article-latest-wrapper .text-gray-900:hover,
				.article-latest-wrapper .text-gray-800:hover,
				.article-latest-wrapper .text-black:hover {
					color: #475569 !important;
				}

				/* Переопределение ВСЕХ ссылок в Latest Articles */
				.article-latest-wrapper a {
					color: #64748b !important;
				}

				.article-latest-wrapper a:hover {
					color: #475569 !important;
				}

				/* Блокировка розовых цветов при hover в Latest Articles */
				.article-latest-wrapper *:hover {
					color: #475569 !important;
				}

				/* ИСПРАВЛЕНИЕ 2: Post Comment кнопка всегда белая */
				.article-comments-wrapper button,
				.article-comments-wrapper input[type="submit"],
				.article-comments-wrapper [class*="submit"] {
					color: white !important;
					background-color: #64748b !important;
					border-color: #64748b !important;
				}

				.article-comments-wrapper button:hover,
				.article-comments-wrapper input[type="submit"]:hover,
				.article-comments-wrapper [class*="submit"]:hover {
					color: white !important;
					background-color: #475569 !important;
					border-color: #475569 !important;
				}

				/* Дополнительные правила для кнопки комментариев */
				.article-comments-wrapper .bg-slate-600,
				.article-comments-wrapper .bg-slate-700,
				.article-comments-wrapper .bg-slate-500 {
					color: white !important;
					background-color: #64748b !important;
				}

				/* Кнопки и ссылки */
				.article-header-wrapper button,
				.article-content-wrapper button,
				.article-sidebar button {
					color: #64748b !important;
					border-color: #64748b !important;
				}

				.article-header-wrapper button:hover,
				.article-content-wrapper button:hover,
				.article-sidebar button:hover {
					background-color: #64748b !important;
					color: white !important;
				}

				.article-header-wrapper a,
				.article-content-wrapper a,
				.article-sidebar a {
					color: #64748b !important;
				}

				.article-header-wrapper a:hover,
				.article-content-wrapper a:hover,
				.article-sidebar a:hover {
					color: #475569 !important;
				}

				/* Исключение для кнопок комментариев - они должны быть белыми */
				.article-comments-wrapper button,
				.article-comments-wrapper input[type="submit"] {
					color: white !important;
					background-color: #64748b !important;
				}

				/* Асимметричные формы для элементов sidebar */
				.article-sidebar > div {
					border-radius: 25px 8px 25px 8px;
					transition: all 0.3s ease;
					background: white;
					box-shadow: 0 4px 20px rgba(71, 85, 105, 0.1);
					border: 1px solid rgba(71, 85, 105, 0.1);
				}

				.article-sidebar > div:hover {
					border-radius: 8px 25px 8px 25px;
					transform: translateY(-2px);
					box-shadow: 0 8px 30px rgba(71, 85, 105, 0.15);
				}

				/* Основной контент статьи */
				.article-main-content {
					background: white;
					border-radius: 40px 10px 40px 10px;
					padding: 2rem;
					box-shadow: 0 8px 30px rgba(71, 85, 105, 0.1);
					border: 1px solid rgba(71, 85, 105, 0.1);
					transition: all 0.4s ease;
				}

				.article-main-content:hover {
					border-radius: 10px 40px 10px 40px;
					box-shadow: 0 12px 40px rgba(71, 85, 105, 0.15);
				}

				/* Навигация статей */
				.article-navigation-wrapper {
					background: white;
					border-radius: 30px 8px 30px 8px;
					padding: 1.5rem;
					box-shadow: 0 4px 20px rgba(71, 85, 105, 0.08);
					border: 1px solid rgba(71, 85, 105, 0.1);
					transition: all 0.3s ease;
				}

				.article-navigation-wrapper:hover {
					border-radius: 8px 30px 8px 30px;
					transform: translateY(-1px);
				}

				/* Заголовок статьи */
				.article-header-wrapper {
					text-align: center;
					margin-bottom: 2rem;
				}

				/* Адаптивные изменения */
				@media (max-width: 768px) {
					.article-sidebar > div {
						border-radius: 15px 5px 15px 5px;
					}
					
					.article-sidebar > div:hover {
						border-radius: 5px 15px 5px 15px;
					}

					.article-main-content {
						border-radius: 20px 5px 20px 5px;
						padding: 1.5rem;
					}

					.article-main-content:hover {
						border-radius: 5px 20px 5px 20px;
					}

					.article-navigation-wrapper {
						border-radius: 15px 5px 15px 5px;
						padding: 1rem;
					}

					.article-navigation-wrapper:hover {
						border-radius: 5px 15px 5px 15px;
					}
				}
			`}</style>
		</div>
	)
}

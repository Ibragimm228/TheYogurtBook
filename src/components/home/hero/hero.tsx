import { useGetArticles } from '@/hooks/useArticles'
import { ArticleCardLarge } from '../../shared/article-card/article-card-large'
import { ArticleCardSkeleton } from '../../shared/article-card/article-card-skeleton'
import { Container } from '../../shared/container'
import styles from './hero.module.css'

export function Hero() {
    const { data: articles, isLoading } = useGetArticles()

    return (
        <section className='py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700'>
            <Container>
                <div className='text-center mb-8'>
                    <h1 className='text-5xl font-extrabold text-white mb-3 drop-shadow-lg'>
                        The Yogurt Book
                    </h1>
                    <div className='w-32 h-1.5 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 mx-auto mb-4 rounded-full shadow-lg'></div>
                    <h2 className='text-3xl font-semibold text-slate-200 mb-2'>
                        Today's Featured Recipes
                    </h2>
                    <p className='text-slate-300 text-lg max-w-2xl mx-auto'>
                        Discover delicious yogurt recipes, healthy tips, and culinary inspiration
                    </p>
                </div>
                
                <div className={styles['hero-container']}>
                    {isLoading
                        ? Array.from({ length: 11 }).map((_, index) => (
                                <div
                                    key={`skeleton-${index}`}
                                    style={{ gridArea: `Area${index + 1}` }}
                                    className='w-full h-full'
                                >
                                    <ArticleCardSkeleton />
                                </div>
                          ))
                        : articles?.slice(0, 11).map((article, index) => (
                                <div
                                    key={index}
                                    style={{ gridArea: `Area${index + 1}` }}
                                    className='w-full h-full group'
                                >
                                    <ArticleCardLarge article={article} />
                                </div>
                          ))}
                </div>
            </Container>
        </section>
    )
}

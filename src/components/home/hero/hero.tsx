import { useGetArticles } from '@/hooks/useArticles'
import { ArticleCardLarge } from '../../shared/article-card/article-card-large'
import { ArticleCardSkeleton } from '../../shared/article-card/article-card-skeleton'
import { Container } from '../../shared/container'
import { memo, useMemo } from 'react'
import styles from './hero.module.css'

// Мемоизированный компонент скелетона
type MemoizedSkeletonProps = { index: number }
const MemoizedSkeleton = memo(({ index }: MemoizedSkeletonProps) => (
    <div
        style={{ 
            gridArea: `Area${index + 1}`,
            aspectRatio: '16/9', 
            minHeight: '200px'
        }}
        className='w-full h-full'
    >
        <ArticleCardSkeleton />
    </div>
))

// Мемоизированный компонент карточки статьи
type MemoizedArticleCardProps = { article: import('@/types/interfaces').IArticle, index: number }
const MemoizedArticleCard = memo(({ article, index }: MemoizedArticleCardProps) => (
    <div
        style={{ 
            gridArea: `Area${index + 1}`,
            aspectRatio: '16/9', // Фиксированное соотношение сторон
            minHeight: '200px'   // Минимальная высота для стабильности
        }}
        className='w-full h-full group'
    >
        <ArticleCardLarge article={article} />
    </div>
))

export const Hero = memo(() => {
    const { data: articles, isLoading } = useGetArticles()

    // Мемоизация скелетонов для предотвращения лишних ререндеров
    const skeletonElements = useMemo(() => 
        Array.from({ length: 11 }).map((_, index) => (
            <MemoizedSkeleton key={`skeleton-${index}`} index={index} />
        )), []
    )

    // Мемоизация элементов статей
    const articleElements = useMemo(() => 
        articles?.slice(0, 11).map((article, index) => (
            <MemoizedArticleCard 
                key={article.id || index} 
                article={article} 
                index={index} 
            />
        )) || [], [articles]
    )

    return (
        <section className='py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700'>
            <Container>
                {/* Заголовочная секция с фиксированными размерами */}
                <header className='text-center mb-8' style={{ minHeight: '180px' }}>
                    <h1 className='text-5xl font-extrabold text-white mb-3 drop-shadow-lg'>
                        The Yogurt Book
                    </h1>
                    <div 
                        className='bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 mx-auto mb-4 rounded-full shadow-lg'
                        style={{ 
                            width: '128px', 
                            height: '6px',
                            flexShrink: 0 // Предотвращает сжатие
                        }}
                    />
                    <h2 className='text-3xl font-semibold text-slate-200 mb-2'>
                        Today's Featured Recipes
                    </h2>
                    <p className='text-slate-300 text-lg max-w-2xl mx-auto'>
                        Discover delicious yogurt recipes, healthy tips, and culinary inspiration
                    </p>
                </header>
                
                {/* Контейнер сетки с зарезервированным пространством */}
                <div 
                    className={styles['hero-container']}
                    style={{
                        minHeight: '600px', // Минимальная высота для предотвращения сдвигов
                        position: 'relative'
                    }}
                >
                    {isLoading ? skeletonElements : articleElements}
                </div>
            </Container>
        </section>
    )
})

Hero.displayName = 'Hero'

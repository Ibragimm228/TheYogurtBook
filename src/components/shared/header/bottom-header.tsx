import { AnimatePresence, motion } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Container } from '../container'
import { HeaderMenu } from './header-menu'

export function BottomHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()

	// Закрываем меню при изменении маршрута
	useEffect(() => {
		setIsMenuOpen(false)
	}, [location.pathname])

	// Функция для закрытия меню
	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<>
			<nav className='bg-gradient-to-r from-white via-slate-50 to-white w-full border-b border-slate-200/50 relative z-40'>
				<Container className='flex items-center justify-between max-md:justify-center'>
					{/* Mobile menu button */}
					<motion.button
						className='mobile-menu-button md:hidden p-3 rounded-2xl hover:bg-slate-100 transition-colors duration-300'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						animate={{ rotate: isMenuOpen ? 180 : 0 }}
						transition={{ duration: 0.3 }}
					>
						<AnimatePresence mode='wait'>
							{isMenuOpen ? (
								<motion.div
									key='close'
									initial={{ opacity: 0, rotate: -90 }}
									animate={{ opacity: 1, rotate: 0 }}
									exit={{ opacity: 0, rotate: 90 }}
									transition={{ duration: 0.2 }}
								>
									<XIcon size={24} className='text-slate-700' />
								</motion.div>
							) : (
								<motion.div
									key='menu'
									initial={{ opacity: 0, rotate: 90 }}
									animate={{ opacity: 1, rotate: 0 }}
									exit={{ opacity: 0, rotate: -90 }}
									transition={{ duration: 0.2 }}
								>
									<MenuIcon size={24} className='text-slate-700' />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.button>

					{/* Desktop menu */}
					<HeaderMenu className='flex-row max-md:hidden text-nowrap gap-8' />
				</Container>
			</nav>

			{/* Mobile dropdown menu - вынесено за пределы nav для правильного z-index */}
			<AnimatePresence>
				{isMenuOpen && (
					<>
						{/* Overlay для закрытия меню при клике вне его */}
						<motion.div
							className='fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 md:hidden'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={closeMenu}
						/>
						
						{/* Само мобильное меню */}
						<motion.div
							className='fixed top-[73px] left-0 right-0 bg-gradient-to-br from-white via-slate-50 to-white border-b border-slate-200/50 shadow-2xl z-50 md:hidden'
							initial={{ opacity: 0, height: 0, y: -20 }}
							animate={{ opacity: 1, height: 'auto', y: 0 }}
							exit={{ opacity: 0, height: 0, y: -20 }}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
						>
							<div className='mobile-menu-container max-h-[70vh] overflow-y-auto'>
								{/* Декоративная полоска сверху */}
								<div className='w-full h-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600'></div>
								
								{/* Заголовок меню */}
								<div className='text-center py-4 border-b border-slate-200/30'>
									<h3 className='text-lg font-semibold text-slate-800'>Navigation</h3>
									<p className='text-sm text-slate-600'>The Yogurt Book</p>
								</div>

								{/* Меню с функцией закрытия */}
								<div className='py-2' onClick={closeMenu}>
									<HeaderMenu />
								</div>

								{/* Дополнительная информация */}
								<div className='px-6 py-4 bg-slate-100/50 border-t border-slate-200/30'>
									<div className='flex items-center justify-center gap-4 text-slate-600 text-sm'>
										<div className='flex items-center gap-1'>
											<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
											</svg>
											<span>500+ Recipes</span>
										</div>
										<div className='flex items-center gap-1'>
											<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
											</svg>
											<span>Expert Tested</span>
										</div>
									</div>
								</div>
							</div>

							{/* Кнопка закрытия в меню (дополнительная) */}
							<motion.button
								className='absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors duration-200'
								onClick={closeMenu}
								whileTap={{ scale: 0.95 }}
							>
								<XIcon size={20} />
							</motion.button>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			<style>{`
				/* Асимметричная форма для кнопки мобильного меню */
				.mobile-menu-button {
					border-radius: 20px 8px 20px 8px;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
					border: 1px solid rgba(71, 85, 105, 0.1);
				}

				.mobile-menu-button:hover {
					border-radius: 8px 20px 8px 20px;
					background: linear-gradient(135deg, rgba(71, 85, 105, 0.05), rgba(100, 116, 139, 0.1));
					border-color: rgba(71, 85, 105, 0.2);
				}

				/* Стили для контейнера мобильного меню */
				.mobile-menu-container {
					border-radius: 0 0 30px 30px;
				}

				/* Скрытие скроллбара но сохранение функциональности */
				.mobile-menu-container::-webkit-scrollbar {
					width: 4px;
				}

				.mobile-menu-container::-webkit-scrollbar-track {
					background: rgba(71, 85, 105, 0.1);
				}

				.mobile-menu-container::-webkit-scrollbar-thumb {
					background: rgba(71, 85, 105, 0.3);
					border-radius: 2px;
				}

				.mobile-menu-container::-webkit-scrollbar-thumb:hover {
					background: rgba(71, 85, 105, 0.5);
				}

				/* Адаптивные изменения */
				@media (max-width: 768px) {
					.mobile-menu-button {
						border-radius: 15px 5px 15px 5px;
					}
					
					.mobile-menu-button:hover {
						border-radius: 5px 15px 5px 15px;
					}
				}
			`}</style>
		</>
	)
}

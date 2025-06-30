import { Container } from '../container'
import { SearchIcon } from 'lucide-react'

export function TopHeader() {
	return (
		<div className='bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 w-full border-b border-slate-200/40 relative overflow-hidden'>
			{/* Декоративные элементы */}
			<div className='absolute top-0 left-0 w-full h-full opacity-5'>
				<div className='absolute top-2 left-20 w-16 h-16 bg-slate-600 rounded-full blur-xl'></div>
				<div className='absolute top-1 right-32 w-12 h-12 bg-slate-700 rounded-full blur-lg'></div>
			</div>

			<Container className='flex items-center justify-between py-4 max-md:flex-col max-md:gap-6 max-md:py-6 relative z-10'>
				<div className='flex items-center gap-6 max-md:flex-col max-md:gap-4'>
					{/* Logo Image */}
					<div className="group relative">
						<div className="absolute -inset-1 bg-gradient-to-r from-slate-400/20 to-slate-600/25 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
						<div className="logo-container relative bg-white/70 backdrop-blur-sm rounded-2xl p-3 border border-slate-200/40 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5">
							<img 
								src="https://cdn.leonardo.ai/users/a62f4751-2c49-4f46-a75a-951c2dd91cd6/generations/94bbcc1c-7809-4231-862a-b45488961f20/segments/2:4:1/Flux_Dev_A_sleekly_modern_The_Yogurt_Book_logo_exuding_simplic_1.jpg" 
								alt="The Yogurt Book Logo" 
								className='w-12 h-12 rounded-xl object-cover'
							/>
						</div>
					</div>

					{/* Tagline */}
					<div className="text-center max-md:text-center">
						<span className='text-slate-700 font-medium text-lg max-md:text-base'>
							Master Yogurt Fermentation
						</span>
						<p className='text-slate-500 text-sm font-light mt-0.5 max-md:hidden'>
							From culture to creation, perfecting every batch
						</p>
					</div>
				</div>

				{/* Search Form */}
				<form
					action='/blog'
					className='group relative'
				>
					<div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400/15 to-slate-600/20 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
					<div className='search-container relative flex items-center bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-3 border border-slate-200/40 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5'>
						<input
							type='text'
							name='search'
							placeholder='Search yogurt recipes...'
							className='bg-transparent outline-none text-slate-700 placeholder-slate-400 w-56 max-md:w-48 font-light'
						/>
						<button 
							type='submit' 
							className='ml-3 text-slate-500 hover:text-slate-700 transition-colors duration-200 search-button'
						>
							<SearchIcon size={20} />
						</button>
					</div>
				</form>
			</Container>

			<style>{`
				/* Асимметричная форма для логотипа */
				.logo-container {
					border-radius: 20px 8px 20px 8px;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}

				.logo-container:hover {
					border-radius: 8px 20px 8px 20px;
				}

				/* Асимметричная форма для поиска */
				.search-container {
					border-radius: 25px 8px 25px 8px;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}

				.search-container:hover {
					border-radius: 8px 25px 8px 25px;
				}

				/* Эффект для кнопки поиска */
				.search-button {
					position: relative;
					border-radius: 50%;
					padding: 4px;
					transition: all 0.3s ease;
				}

				.search-button:hover {
					background-color: rgba(71, 85, 105, 0.1);
					transform: scale(1.1);
				}

				/* Дополнительные эффекты */
				.search-container input::placeholder {
					transition: color 0.3s ease;
				}

				.search-container:hover input::placeholder {
					color: #64748b;
				}

				/* Адаптивные изменения */
				@media (max-width: 768px) {
					.logo-container {
						border-radius: 15px 5px 15px 5px;
					}
					
					.logo-container:hover {
						border-radius: 5px 15px 5px 15px;
					}

					.search-container {
						border-radius: 18px 6px 18px 6px;
					}

					.search-container:hover {
						border-radius: 6px 18px 6px 18px;
					}
				}
			`}</style>
		</div>
	)
}

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { HomeIcon, InfoIcon, MailIcon, ChefHatIcon } from 'lucide-react'
import { Link } from 'react-router'

export function HeaderMenu({ className }: { className?: string }) {
	return (
		<motion.ul
			className={cn(
				'flex flex-col items-center gap-3 py-6 text-slate-800 font-medium text-lg',
				className
			)}
			initial={{ y: -20 }}
			animate={{ y: 0 }}
			transition={{ delay: 0.1, duration: 0.3 }}
		>
			<motion.li
				className='menu-item flex items-center gap-3 text-slate-700 py-3 px-6 w-full justify-center relative overflow-hidden'
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
			>
				<Link to='/' className='menu-link contents'>
					<HomeIcon size={22} />
					Home
				</Link>
			</motion.li>
			
			<motion.li
				className='menu-item flex items-center gap-3 py-3 px-6 text-slate-700 hover:text-slate-600 cursor-pointer w-full justify-center relative overflow-hidden'
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3 }}
			>
				<Link to='/about' className='menu-link contents'>
					<InfoIcon size={22} />
					About Us
				</Link>
			</motion.li>
			
			<motion.li
				className='menu-item flex items-center gap-3 py-3 px-6 text-slate-700 hover:text-slate-600 cursor-pointer w-full justify-center relative overflow-hidden'
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4 }}
			>
				<Link to='/blog' className='menu-link contents'>
					<ChefHatIcon size={22} />
					Recipes
				</Link>
			</motion.li>
			
			<motion.li
				className='menu-item flex items-center gap-3 py-3 px-6 text-slate-700 hover:text-slate-600 cursor-pointer w-full justify-center relative overflow-hidden'
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5 }}
			>
				<Link to='/contacts' className='menu-link contents'>
					<MailIcon size={22} />
					Contact Us
				</Link>
			</motion.li>

			{/* Декоративная секция */}
			<motion.li
				className='mt-4 pt-4 border-t border-slate-200/50 w-full'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
			>
				<div className='text-center'>
					
						
				</div>
			</motion.li>

			<style>{`
				/* Асимметричные формы для пунктов меню */
				.menu-item {
					border-radius: 20px 6px 20px 6px;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
					background: transparent;
					position: relative;
				}

				.menu-item::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: linear-gradient(135deg, rgba(71, 85, 105, 0.05), rgba(100, 116, 139, 0.1));
					border-radius: inherit;
					opacity: 0;
					transition: all 0.3s ease;
					z-index: -1;
				}

				.menu-item:hover {
					border-radius: 6px 20px 6px 20px;
					transform: translateX(4px);
					background: rgba(71, 85, 105, 0.05);
				}

				.menu-item:hover::before {
					opacity: 1;
				}

				/* Эффект для ссылок */
				.menu-link {
					position: relative;
					z-index: 1;
					transition: all 0.3s ease;
				}

				.menu-item:hover .menu-link {
					color: #475569;
					transform: scale(1.05);
				}

				/* Анимация иконок */
				.menu-item svg {
					transition: all 0.3s ease;
				}

				.menu-item:hover svg {
					transform: rotate(5deg) scale(1.1);
					color: #64748b;
				}

				/* Специальный эффект для Home */
				.menu-item:first-child {
					background: linear-gradient(135deg, rgba(71, 85, 105, 0.08), rgba(100, 116, 139, 0.12));
					border: 1px solid rgba(71, 85, 105, 0.1);
				}

				.menu-item:first-child:hover {
					background: linear-gradient(135deg, rgba(71, 85, 105, 0.12), rgba(100, 116, 139, 0.16));
					border-color: rgba(71, 85, 105, 0.2);
				}

				/* Эффект волны при hover */
				.menu-item::after {
					content: '';
					position: absolute;
					top: 50%;
					left: -100%;
					width: 100%;
					height: 1px;
					background: linear-gradient(90deg, transparent, #64748b, transparent);
					transition: left 0.5s ease;
					transform: translateY(-50%);
				}

				.menu-item:hover::after {
					left: 100%;
				}

				/* Адаптивные изменения */
				@media (max-width: 768px) {
					.menu-item {
						border-radius: 15px 5px 15px 5px;
						padding: 0.5rem 1rem;
					}
					
					.menu-item:hover {
						border-radius: 5px 15px 5px 15px;
						transform: translateX(2px);
					}
				}
			`}</style>
		</motion.ul>
	)
}

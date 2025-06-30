import { Container } from '@/components/shared/container'
import { Link } from 'react-router'

export function AboutPage() {
	const authors = [
		{
			name: 'Irene Kim',
			role: 'Fermentation Expert & Founder',
			image: 'https://miro.medium.com/v2/resize:fit:600/1*s2MUlL3dc0-6KAF4LfiCVQ.jpeg',
			bio: 'With over 12 years of experience in fermentation science, Sofia founded The Yogurt Book to share her passion for healthy living and traditional yogurt-making techniques.',
		},
		{
			name: 'Julian Blake',
			role: 'Nutritionist & Recipe Developer',
			image: 'https://www.legal500.com/wp-content/uploads/sites/13/2022/01/ai-image-985550-1729045216.png',
			bio: 'Marcus brings his expertise in nutrition and food science to create healthy, delicious yogurt recipes that promote wellness and gut health.',
		},
		{
			name: 'Elena Rodriguez',
			role: 'Culinary Artist & Writer',
			image: 'https://imagescdn.homes.com/i2/LeQjF3vqhXStvtPba05ojxQEvMUpC9oxtMjZkqH8MYc/117/isabel-rivera-contreras.jpg?p=1',
			bio: 'Elena combines her culinary background with yogurt expertise to create innovative recipes and share traditional fermentation wisdom with our community.',
		},
	]

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-white'>
			{/* Hero Section */}
			<section className='relative h-[60vh] overflow-hidden'>
				<img
					src='https://3.bp.blogspot.com/-tFmubahH2ks/UIhvptnsIVI/AAAAAAAAELQ/Wzlh5AyixP8/s640/canon+184.JPG'
					alt='The Yogurt Book Hero'
					className='object-cover brightness-40 w-full h-full'
				/>
				{/* Декоративные элементы */}
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-700/60'></div>
				
				<div className='absolute z-10 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-[90%]'>
					<h1 className='text-6xl font-bold mb-6 drop-shadow-lg'>About The Yogurt Book</h1>
					<div className='w-32 h-1.5 bg-gradient-to-r from-slate-300 via-white to-slate-300 mx-auto mb-6 rounded-full'></div>
					<p className='text-xl max-w-3xl mx-auto leading-relaxed'>
						Your comprehensive guide to yogurt making, fermentation techniques, 
						and the journey to healthier living through probiotics
					</p>
				</div>
			</section>

			{/* Mission Section */}
			<Container className='py-20'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='relative'>
						<div className='absolute -top-4 -left-4 w-24 h-24 bg-slate-100 rounded-full opacity-50'></div>
						<h2 className='text-4xl font-bold mb-6 text-slate-800 relative z-10'>Our Mission</h2>
						<p className='text-slate-600 mb-6 text-lg leading-relaxed'>
							At The Yogurt Book, we believe in the power of fermentation to transform 
							both milk and lives. Our mission is to preserve and share traditional 
							yogurt-making wisdom while embracing modern nutritional science.
						</p>
						<p className='text-slate-600 mb-6 text-lg leading-relaxed'>
							We combine time-tested techniques with innovative recipes to help you 
							create delicious, healthy yogurt at home and discover the benefits 
							of probiotic-rich foods.
						</p>
						<div className='flex items-center gap-4'>
							<div className='w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center'>
								<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
								</svg>
							</div>
							<span className='text-slate-700 font-medium'>Expert-tested recipes and techniques</span>
						</div>
					</div>
					<div className='relative h-[400px] group'>
						<div className='absolute inset-0 bg-slate-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300'></div>
						<img
							src='https://cdn.leonardo.ai/users/a62f4751-2c49-4f46-a75a-951c2dd91cd6/generations/94bbcc1c-7809-4231-862a-b45488961f20/segments/2:4:1/Flux_Dev_A_sleekly_modern_The_Yogurt_Book_logo_exuding_simplic_1.jpg'
							alt='Yogurt Making Process'
							className='object-cover rounded-2xl w-full h-full relative z-10 shadow-xl'
						/>
					</div>
				</div>
			</Container>

			{/* Team Section */}
			<section className='py-20 bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden'>
				{/* Декоративные элементы */}
				<div className='absolute top-0 left-0 w-full h-full opacity-5'>
					<div className='absolute top-20 left-10 w-48 h-48 bg-slate-600 rounded-full blur-3xl'></div>
					<div className='absolute bottom-20 right-20 w-32 h-32 bg-slate-700 rounded-full blur-2xl'></div>
				</div>

				<Container className='relative z-10'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-slate-800 mb-4'>Meet Our Experts</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 mx-auto mb-6 rounded-full'></div>
						<p className='text-slate-600 max-w-2xl mx-auto text-lg'>
							Our passionate team of fermentation experts, nutritionists, and culinary artists
						</p>
					</div>
					
					<div className='grid md:grid-cols-3 gap-8'>
						{authors.map((author, index) => (
							<div
								key={index}
								className='bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 team-card'
							>
								<div className='relative overflow-hidden'>
									<img
										src={author.image}
										alt={author.name}
										className='object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
								</div>
								<div className='p-8'>
									<h3 className='text-2xl font-bold mb-2 text-slate-800'>{author.name}</h3>
									<p className='text-slate-600 font-semibold mb-4 text-lg'>
										{author.role}
									</p>
									<p className='text-slate-500 leading-relaxed'>{author.bio}</p>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Contact Section */}
			<section className='py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden'>
				{/* Декоративные элементы */}
				<div className='absolute top-0 left-0 w-full h-full opacity-10'>
					<div className='absolute top-10 left-20 w-40 h-40 bg-slate-400 rounded-full blur-3xl'></div>
					<div className='absolute bottom-10 right-10 w-32 h-32 bg-slate-300 rounded-full blur-2xl'></div>
				</div>

				<Container className='relative z-10'>
					<div className='text-center'>
						<h2 className='text-4xl font-bold mb-6 text-white'>Get in Touch</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-slate-300 via-white to-slate-300 mx-auto mb-8 rounded-full'></div>
						<p className='text-slate-200 mb-10 max-w-3xl mx-auto text-lg leading-relaxed'>
							Have questions about fermentation? Need help with a recipe? 
							We would love to hear from you and share our yogurt-making expertise!
						</p>
						<Link to='/contact'>
							<button className='bg-slate-600 text-white px-10 py-4 rounded-2xl hover:bg-slate-500 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1'>
								Contact Our Experts
							</button>
						</Link>
					</div>
				</Container>
			</section>

			<style >{`
				.team-card {
					border-radius: 40px 10px 40px 10px;
					transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}
				.team-card:hover {
					border-radius: 10px 40px 10px 40px;
				}

				@media (max-width: 768px) {
					.team-card {
						border-radius: 20px 5px 20px 5px;
					}
					.team-card:hover {
						border-radius: 5px 20px 5px 20px;
					}
				}
			`}</style>
		</div>
	)
}

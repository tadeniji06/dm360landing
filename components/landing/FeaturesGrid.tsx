"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const FeaturesGrid = () => {
	const features = [
		{
			title: "Ads Manager",
			icon: "solar:graph-up-bold-duotone",
			desc: "Manage and optimize all your ad campaigns across multiple platforms from one dashboard.",
			color: "text-purple-500",
			bg: "bg-purple-50",
		},
		{
			title: "Social Schedule",
			icon: "solar:calendar-date-bold-duotone",
			desc: "Schedule and automate your social media posts to maintain a consistent online presence.",
			color: "text-indigo-600",
			bg: "bg-indigo-50",
		},
		{
			title: "Email Automation",
			icon: "solar:letter-bold-duotone",
			desc: "Create powerful email sequences that nurture leads and drive sales automatically.",
			color: "text-blue-500",
			bg: "bg-blue-50",
		},
		{
			title: "Design Studio",
			icon: "solar:palet-2-bold-duotone",
			desc: "A built-in design component like Canva to create stunning graphics without leaving the platform.",
			color: "text-green-500",
			bg: "bg-green-50",
		},
		{
			title: "SEO Tools",
			icon: "solar:magnifying-glass-bold-duotone",
			desc: "Optimize your content for search engines and track your rankings with ease.",
			color: "text-orange-500",
			bg: "bg-orange-50",
		},
	];

	return (
		<section className='py-32 px-6 max-w-7xl mx-auto flex flex-col gap-20 overflow-visible'>
			<div className='flex flex-col gap-6 text-center max-w-3xl mx-auto'>
				<motion.span
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-primary-brand font-black uppercase tracking-[0.3em] text-xs'
				>
					Fullstack Architecture
				</motion.span>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className='text-5xl md:text-7xl font-black text-zinc-900 leading-[0.9] tracking-tighter'
				>
					The Complete{" "}
					<span className='text-primary-brand'>Fullstack Suite.</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className='text-zinc-500 text-lg md:text-xl font-medium leading-relaxed'
				>
					Ditch the fragmented tools. DM360 provides the complete fullstack infrastructure your marketing team needs.
				</motion.p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
				{features.map((feature, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 20,
							delay: index * 0.1,
						}}
						className={`group relative flex flex-col gap-8 p-10 bg-white rounded-[48px] border border-zinc-100 shadow-2xl shadow-black/5 hover:shadow-primary-brand/10 transition-all duration-500
                            ${index === 3 || index === 4 ? "lg:col-span-1.5" : ""}
                        `}
					>
						<div
							className={`w-20 h-20 rounded-3xl ${feature.bg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
						>
							<Icon
								icon={feature.icon}
								className={`w-10 h-10 ${feature.color}`}
							/>
						</div>

						<div className='flex flex-col gap-4'>
							<h3 className='text-3xl font-black text-zinc-900 tracking-tighter'>
								{feature.title}
							</h3>
							<p className='text-zinc-500 text-lg leading-relaxed font-medium'>
								{feature.desc}
							</p>

							<motion.div
								whileHover={{ x: 5 }}
								className={`flex items-center gap-2 font-bold text-sm cursor-pointer mt-4 ${feature.color}`}
							>
								Explore Feature
								<svg
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M5 12h14m-7-7 7 7-7 7' />
								</svg>
							</motion.div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default FeaturesGrid;

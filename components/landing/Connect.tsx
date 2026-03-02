"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Connect = () => {
	// Icons for fallback
	const icons = [
		"logos:facebook",
		"logos:instagram-icon",
		"logos:google-ads",
		"logos:x",
		"logos:meta-icon",
		"logos:youtube-icon",
		"logos:linkedin-icon",
		"logos:tiktok-icon",
	];

	return (
		<section className='py-32 px-6 max-w-7xl mx-auto flex flex-col items-center gap-16 text-center text-primary-brand/80 overflow-hidden'>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				className='inline-flex gap-3 items-center bg-blue-50/80 px-6 py-2 rounded-full text-xs font-black border border-blue-100/50 uppercase tracking-[0.3em] text-primary-brand shadow-sm'
			>
				Powering your Growth
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className='text-5xl md:text-7xl font-black max-w-4xl leading-[0.9] tracking-tighter text-zinc-900 uppercase'
			>
				Connect all your socials to <br />
				<span className='text-primary-brand drop-shadow-sm'>
					one platform
				</span>
			</motion.h2>

			<div className='relative w-full overflow-hidden py-16 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-64 before:bg-linear-to-r before:from-[#f1f1f1] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-64 after:bg-linear-to-l after:from-[#f1f1f1] after:to-transparent'>
				<motion.div
					className='flex gap-16 items-center whitespace-nowrap'
					animate={{
						x: [0, -1500],
					}}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop",
							duration: 35,
							ease: "linear",
						},
					}}
				>
					{[...icons, ...icons, ...icons, ...icons, ...icons].map(
						(icon, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.1, rotate: 5 }}
								className='flex items-center justify-center p-8 bg-white rounded-[40px] shadow-xl shadow-black/5 border border-zinc-100 transition-all cursor-pointer'
							>
								<Icon
									icon={icon}
									className='w-16 h-16 md:w-20 md:h-20 object-contain'
								/>
							</motion.div>
						),
					)}
				</motion.div>
			</div>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className='text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px]'
			>
				Integrate with 50+ Tools
			</motion.p>
		</section>
	);
};

export default Connect;

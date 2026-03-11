"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ss, s1, s2 } from "../../assets";

const Extras = () => {
	const emaildata = [
		{
			id: 1,
			des: "Generate high-quality data for leads",
			icon: "tabler:database-search",
		},
		{
			id: 2,
			des: "Send personalized email campaigns",
			icon: "tabler:mail-forward",
		},
		{
			id: 3,
			des: "Track open rates and click-throughs",
			icon: "tabler:chart-bar",
		},
		{
			id: 4,
			des: "Automate follow-up sequences",
			icon: "tabler:refresh",
		},
	];

	return (
		<section className='px-6 md:px-20 py-32 bg-white/30 relative overflow-hidden'>
			<div className='absolute top-0 right-0 w-[800px] h-[800px] bg-primary-brand/5 rounded-full blur-[150px] -mr-96 -mt-96' />

			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
				{/* Text Section */}
				<div className='flex flex-col gap-12'>
					<div className='flex flex-col gap-6'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='flex items-center gap-3'
						>
							<span className='w-12 h-1 bg-primary-brand rounded-full' />
							<span className='text-primary-brand font-black uppercase tracking-[0.3em] text-[10px]'>
								Fullstack Growth
							</span>
						</motion.div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className='text-5xl md:text-7xl font-black text-zinc-900 leading-[0.9] tracking-tighter uppercase'
						>
							Fullstack <br />
							<span className='text-primary-brand italic'>
								Automation.
							</span>
						</motion.h2>
					</div>

					<div className='grid grid-cols-1 gap-4'>
						{emaildata.map((item, index) => (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 + 0.2 }}
								className='flex items-center gap-6 p-6 rounded-[32px] hover:bg-white transition-all duration-500 border border-transparent hover:border-zinc-100 hover:shadow-2xl hover:shadow-black/5 group cursor-default'
							>
								<div className='rounded-2xl bg-zinc-100 group-hover:bg-primary-brand group-hover:text-white flex items-center justify-center h-14 w-14 shrink-0 transition-all duration-500 shadow-sm'>
									<Icon
										icon={item.icon}
										className='h-7 w-7 text-primary-brand group-hover:text-white transition-colors duration-500'
									/>
								</div>
								<span className='text-zinc-500 text-xl group-hover:text-zinc-900 transition-colors font-bold tracking-tight'>
									{item.des}
								</span>
							</motion.div>
						))}
					</div>
				</div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className='relative'
				>
					<div className='absolute -inset-10 bg-primary-brand/10 blur-[100px] rounded-full' />
					<div className='relative group overflow-hidden rounded-[50px] shadow-2xl border-4 border-white'>
						<Image
							src={ss}
							alt='dashboard preview'
							className='w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-2000'
						/>
						<div className='absolute inset-0 bg-linear-to-tr from-primary-brand/30 to-transparent mix-blend-overlay' />
					</div>

					{/* Floaties */}
					<motion.div
						animate={{ y: [0, -30, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className='absolute -top-10 -right-10 w-40 h-auto p-4 bg-white rounded-[32px] shadow-2xl border border-zinc-100 hidden md:block'
					>
						<Image src={s2} alt='' className='rounded-2xl' />
					</motion.div>

					<motion.div
						animate={{ y: [0, 30, 0] }}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1,
						}}
						className='absolute -bottom-10 -left-10 w-40 h-auto p-4 bg-zinc-900 rounded-[32px] shadow-2xl border border-white/10 hidden md:block'
					>
						<Image src={s1} alt='' className='rounded-2xl' />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Extras;

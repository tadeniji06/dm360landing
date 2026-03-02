"use client";
import Image from "next/image";
import Link from "next/link";
import { dm360 } from "../../assets";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
	ChevronDown,
	AlertCircle,
	Zap,
	Shield,
	Target,
	Menu,
	X,
} from "lucide-react";

const Navbar = ({ onSignup }: { onSignup: () => void }) => {
	const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const problems = [
		{
			title: "Manual Data Entry",
			desc: "DM360 automates lead generation, saving you 20+ hours a week.",
			icon: <Zap className='text-yellow-500' />,
		},
		{
			title: "Inconsistent Posting",
			desc: "Schedule months of content in minutes across all platforms.",
			icon: <Target className='text-red-500' />,
		},
		{
			title: "Lead Leakage",
			desc: "Smart follow-ups ensure no prospect ever falls through the cracks.",
			icon: <Shield className='text-green-500' />,
		},
		{
			title: "Complex Tools",
			desc: "One dashboard replaces 10+ expensive, confusing subscriptions.",
			icon: <AlertCircle className='text-blue-500' />,
		},
	];

	return (
		<div className='fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none'>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 100, damping: 20 }}
				className='mt-4 md:mt-6 w-full max-w-7xl flex items-center justify-between px-4 md:px-8 py-3 md:py-4 bg-white/95 backdrop-blur-md shadow-2xl shadow-black/5 rounded-[24px] md:rounded-[32px] border border-zinc-100 pointer-events-auto relative'
			>
				<Link
					href='/'
					className='flex items-center gap-2 md:gap-3 group shrink-0'
				>
					<div className='w-[140px] md:w-[200px] h-[35px] md:h-[50px] flex items-center justify-center p-1 group-hover:rotate-2 transition-all duration-300'>
						<Image
							src={dm360}
							alt='DM360 Logo'
							className='w-full h-full object-contain'
						/>
					</div>
				</Link>

				{/* Desktop Menu */}
				<div className='hidden lg:flex items-center gap-10 text-zinc-500 font-bold tracking-tight text-sm uppercase'>
					<a
						href='#'
						className='relative hover:text-primary-brand transition-colors group'
					>
						Platform
						<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-brand transition-all group-hover:w-full' />
					</a>

					<div
						className='relative cursor-pointer group'
						onMouseEnter={() => setIsSolutionsOpen(true)}
						onMouseLeave={() => setIsSolutionsOpen(false)}
					>
						<div className='flex items-center gap-1 hover:text-primary-brand transition-colors'>
							Solutions{" "}
							<ChevronDown
								size={14}
								className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`}
							/>
						</div>

						<AnimatePresence>
							{isSolutionsOpen && (
								<motion.div
									initial={{ opacity: 0, y: 10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: 10, scale: 0.95 }}
									className='absolute top-full left-1/2 -translate-x-1/2 mt-4 pt-4 w-[400px]'
								>
									<div className='bg-white rounded-[32px] shadow-2xl border border-zinc-100 p-6 grid grid-cols-1 gap-4'>
										<div className='text-[10px] text-zinc-400 mb-2 px-2'>
											The problems we solve:
										</div>
										{problems.map((p, i) => (
											<div
												key={i}
												className='flex gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors group/item'
											>
												<div className='w-10 h-10 rounded-xl bg-zinc-50 group-hover/item:bg-white flex items-center justify-center shadow-sm'>
													{p.icon}
												</div>
												<div className='flex flex-col gap-0.5'>
													<span className='text-zinc-900 normal-case font-black tracking-tight'>
														{p.title}
													</span>
													<span className='text-zinc-500 text-[11px] normal-case font-medium leading-tight'>
														{p.desc}
													</span>
												</div>
											</div>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					<div className='flex items-center gap-2 group cursor-not-allowed'>
						<span className='opacity-50'>Pricing</span>
						<span className='bg-zinc-100 text-zinc-400 text-[9px] px-2 py-0.5 rounded-full font-black uppercase'>
							Coming Soon
						</span>
					</div>

					<a
						href='#'
						className='relative hover:text-primary-brand transition-colors group'
					>
						Resources
						<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-brand transition-all group-hover:w-full' />
					</a>
				</div>

				<div className='flex items-center gap-2 md:gap-4'>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={onSignup}
						className='bg-primary-brand text-white px-5 md:px-8 py-2 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm shadow-xl shadow-blue-500/30 active:scale-95 transition-all text-nowrap'
					>
						Join Waitlist
					</motion.button>

					{/* Mobile Toggle */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='lg:hidden p-2 text-zinc-500 hover:text-primary-brand transition-colors'
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu Drawer */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className='absolute top-full left-0 right-0 mt-4 bg-white rounded-[24px] md:rounded-[32px] border border-zinc-100 shadow-2xl overflow-hidden lg:hidden'
						>
							<div className='flex flex-col p-6 gap-6'>
								<Link
									href='#'
									className='text-lg font-bold text-zinc-900 flex items-center justify-between'
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Platform
								</Link>
								<div className='space-y-4'>
									<span className='text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400'>
										Solutions
									</span>
									{problems.map((p, i) => (
										<div key={i} className='flex gap-4 items-center'>
											<div className='w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center'>
												{p.icon}
											</div>
											<span className='text-sm font-bold text-zinc-700'>
												{p.title}
											</span>
										</div>
									))}
								</div>
								<div className='flex items-center justify-between opacity-50'>
									<span className='text-lg font-bold text-zinc-900'>
										Pricing
									</span>
									<span className='bg-zinc-100 text-zinc-400 text-[9px] px-2 py-0.5 rounded-full font-black uppercase'>
										Coming Soon
									</span>
								</div>
								<Link
									href='#'
									className='text-lg font-bold text-zinc-900'
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Resources
								</Link>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</div>
	);
};

export default Navbar;

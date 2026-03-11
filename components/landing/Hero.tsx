"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { crr } from "../../assets";
import { useState } from "react";
import { CheckCircle2, ChevronRight, Mail } from "lucide-react";

interface HeroProps {
	onSignup: () => void;
}

const Hero = ({ onSignup }: HeroProps) => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			onSignup();
			setEmail("");
		}
	};

	return (
		<div className='relative overflow-visible bg-primary-brand text-zinc-100 rounded-bl-[80px] md:rounded-bl-[200px] pt-32 pb-40 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen'>
			{/* Dynamic Background Elements */}
			<motion.div
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 90, 0],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear",
				}}
				className='absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full -mr-48 -mt-48 blur-[120px] pointer-events-none'
			/>
			<motion.div
				animate={{
					scale: [1.2, 1, 1.2],
					x: [0, 50, 0],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "linear",
				}}
				className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full -ml-40 -mb-40 blur-[100px] pointer-events-none'
			/>

			<div className='max-w-6xl w-full flex flex-col gap-12 items-center text-center z-10'>
				<motion.div
					initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ type: "spring", stiffness: 200, damping: 15 }}
					className='inline-flex items-center gap-3 bg-white/10 px-6 py-2.5 rounded-full text-xs font-black backdrop-blur-xl border border-white/20 shadow-2xl uppercase tracking-[0.2em]'
				>
					<span className='flex h-3 w-3 rounded-full bg-blue-300 animate-ping' />
					The Fullstack Advantage
				</motion.div>

				<div className='flex flex-col gap-6 items-center text-center'>
					<h1 className='text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase'>
						Fullstack <br />
						<span className='text-zinc-900 drop-shadow-2xl'>
							Marketing
						</span>{" "}
						<br />
						Automation
					</h1>

					<p className='text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed font-medium'>
						The complete fullstack marketing operating system designed to scale your business effortlessly. 
						Automate your entire marketing stack and dominate your market.
					</p>
				</div>

				<motion.form
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
					onSubmit={handleSubmit}
					className='w-full max-w-xl flex flex-col md:flex-row gap-4 p-3 bg-white/10 backdrop-blur-2xl rounded-[32px] border border-white/20 shadow-2xl relative group'
				>
					<div className='relative flex-1'>
						<Mail className='absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-200 group-focus-within:text-white transition-colors' />
						<input
							required
							type='email'
							placeholder='Enter your professional email...'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full bg-transparent border-none focus:ring-0 py-5 pl-14 pr-4 text-white text-lg placeholder:text-blue-200/50 outline-none font-semibold'
						/>
					</div>
					<motion.button
						whileHover={{ scale: 1.02, x: 5 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						className='bg-white text-primary-brand px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-black/20 transition-all text-nowrap uppercase tracking-widest'
					>
						Get Access <ChevronRight size={24} strokeWidth={3} />
					</motion.button>
				</motion.form>

				<motion.div
					style={{ perspective: 2000 }}
					initial={{ opacity: 0, y: 100, rotateX: 20 }}
					animate={{ opacity: 1, y: 0, rotateX: 0 }}
					transition={{
						delay: 0.7,
						duration: 1.2,
						ease: [0.16, 1, 0.3, 1],
					}}
					className='mt-20 w-full max-w-6xl relative'
				>
					<div className='absolute -inset-4 bg-white/5 rounded-[40px] blur-3xl -z-10' />
					<div className='relative bg-zinc-900 rounded-[40px] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden transform hover:scale-[1.01] transition-transform duration-700'>
						<Image
							className='w-full h-auto object-cover rounded-[32px]'
							src={crr}
							alt='DM360 Dashboard Preview'
							priority
						/>
						<div className='absolute inset-0 bg-linear-to-tr from-primary-brand/20 to-transparent pointer-events-none' />
					</div>

					{/* Floating Feature Badges */}
					<motion.div
						animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className='absolute -top-12 -right-12 bg-white text-primary-brand p-6 rounded-[32px] shadow-2xl flex-col gap-1 border border-zinc-100 hidden md:flex'
					>
						<span className='text-3xl font-black'>99%</span>
						<span className='text-[10px] font-bold uppercase tracking-widest text-zinc-400'>
							Efficiency Boost
						</span>
					</motion.div>

					<motion.div
						animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className='absolute -bottom-12 -left-12 bg-zinc-900 text-white p-6 rounded-[32px] shadow-2xl items-center gap-4 border border-white/10 hidden md:flex'
					>
						<div className='w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center'>
							<CheckCircle2 size={24} />
						</div>
						<div className='flex flex-col'>
							<span className='font-bold text-sm'>Automated</span>
							<span className='text-[10px] text-zinc-400 uppercase tracking-widest'>
								Workflow Ready
							</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;

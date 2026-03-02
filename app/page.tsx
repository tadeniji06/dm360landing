"use client";
import { useState } from "react";
import Hero from "@/components/landing/Hero";
import Connect from "@/components/landing/Connect";
import Extras from "@/components/landing/Extras";
import SuccessModal from "@/components/landing/SuccessModal";
import Navbar from "@/components/landing/Navbar";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div className='relative min-h-screen bg-[#f1f1f1] selection:bg-primary-brand selection:text-white'>
			{/* Scroll Progress Bar */}
			<motion.div
				className='fixed top-0 left-0 right-0 h-1 bg-primary-brand z-50 origin-[0%]'
				style={{ scaleX }}
			/>

			<Navbar onSignup={() => setIsModalOpen(true)} />

			<main>
				<Hero onSignup={() => setIsModalOpen(true)} />

				<div className='relative z-10 -mt-16 bg-[#f1f1f1] rounded-t-[60px] md:rounded-t-[160px] pb-32'>
					<Connect />
					<FeaturesGrid />
					<Extras />

					{/* Simple Footer style section */}
					<section className='py-20 px-6 max-w-7xl mx-auto border-t border-zinc-200 mt-20 text-center flex flex-col items-center gap-8'>
						<h2 className='text-3xl md:text-4xl font-bold text-zinc-800'>
							Ready to transform your marketing?
						</h2>
						<p className='text-zinc-500 max-w-xl'>
							Join hundreds of other marketers and business owners who
							are waiting to scale with DM360.
						</p>
						<button
							onClick={() => setIsModalOpen(true)}
							className='bg-primary-brand text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all active:scale-95'
						>
							Get Early Access Now
						</button>

						<div className='text-sm font-medium text-zinc-400 mt-12 flex flex-col md:flex-row items-center gap-6'>
							<span>© 2025 DM360 Suite. All rights reserved.</span>
							<div className='flex gap-6'>
								<a
									href='#'
									className='hover:text-primary-brand transition-colors'
								>
									Privacy Policy
								</a>
								<a
									href='#'
									className='hover:text-primary-brand transition-colors'
								>
									Terms of Service
								</a>
							</div>
						</div>
					</section>
				</div>
			</main>

			<SuccessModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}

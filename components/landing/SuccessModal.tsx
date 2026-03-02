"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { X, CheckCircle2, PartyPopper } from "lucide-react";

interface SuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center p-6'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className='absolute inset-0 bg-black/40 backdrop-blur-sm'
					/>

					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className='relative w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden p-10 flex flex-col items-center text-center gap-6'
					>
						<button
							onClick={onClose}
							className='absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 transition-colors'
						>
							<X size={20} />
						</button>

						<div className='relative'>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: "spring",
									damping: 10,
									stiffness: 100,
								}}
								className='w-24 h-24 bg-primary-brand/10 rounded-full flex items-center justify-center'
							>
								<CheckCircle2
									className='w-12 h-12 text-primary-brand'
									strokeWidth={3}
								/>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.2 }}
								className='absolute -top-4 -right-4 bg-yellow-400 p-2 rounded-2xl shadow-lg rotate-12'
							>
								<PartyPopper size={24} className='text-white' />
							</motion.div>
						</div>

						<div className='flex flex-col gap-2'>
							<h3 className='text-3xl font-bold text-zinc-900 tracking-tight'>
								You're on the list!
							</h3>
							<p className='text-zinc-500 max-w-xs leading-relaxed'>
								Thank you for joining the DM360 waitlist. We'll notify
								you as soon as early access is available.
							</p>
						</div>

						<div className='w-full flex flex-col gap-3 mt-4'>
							<button
								onClick={onClose}
								className='w-full bg-primary-brand text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-500/20'
							>
								Done
							</button>

							<div className='flex items-center justify-center gap-2 text-xs text-zinc-400 font-medium uppercase tracking-widest'>
								Stay Tuned for updates
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default SuccessModal;

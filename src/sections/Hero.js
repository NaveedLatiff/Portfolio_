import ParticleBackground from '@/components/ParticleBackground'
import React from 'react'

const Hero = () => {
    return (
        <div className='min-h-screen w-full relative bg-black overflow-hidden'>
            <ParticleBackground />

            <div className='absolute top-20 left-20 w-52 h-52 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-3xl blink-1'></div>
            <div className='absolute bottom-20 right-20 w-52 h-52 bg-gradient-to-br from-green-400/40 to-teal-500/40 rounded-full blur-3xl blink-2'></div>

            <div className='relative z-10 container mx-auto px-4 md:px-8 lg:px-12 min-h-screen flex items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full'>
                    
                    <div className='flex flex-col justify-center space-y-6'>
                    </div>

                    <div className='flex flex-col justify-center space-y-6'>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
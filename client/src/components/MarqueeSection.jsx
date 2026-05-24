import React from 'react'
import Marquee from 'react-fast-marquee'

export const MarqueeSection = () => {
    const technologies = [
        { src: './Images/csharp.svg', alt: 'C#' },
        { src: './Images/python.png', alt: 'Python' },
        { src: './Images/html.png', alt: 'HTML' },
        { src: './Images/css.png', alt: 'CSS' },
        { src: './Images/js1.png', alt: 'JavaScript' },
        { src: './Images/tailwind.png', alt: 'Tailwind CSS' },
        { src: './Images/node.png', alt: 'Node.js' },
        { src: './Images/express.png', alt: 'Express.js' },
        { src: './Images/sql.png', alt: 'SQL' },
        { src: './Images/mongodb.png', alt: 'MongoDB' },
        { src: './Images/mongoose.png', alt: 'Mongoose' },
        { src: './Images/npm.png', alt: 'NPM' },
        { src: './Images/redis.png', alt: 'Redis' },
        { src: './Images/git.png', alt: 'Git' },
        { src: './Images/github.png', alt: 'GitHub' },
        { src: './Images/figma.png', alt: 'Figma' },
        { src: './Images/postman.png', alt: 'Postman' },
        { src: './Images/docker.png', alt: 'Docker' },
        // Power BI & Cloud
        { src: './Images/powerbi.png', alt: 'Power BI' },
        { src: './Images/aws.png', alt: 'AWS' },
        { src: './Images/azure.png', alt: 'Azure' },
        { src: './Images/gcp.png', alt: 'Google Cloud' },
        // Python Libraries
        { src: './Images/tensorflow.png', alt: 'TensorFlow' },
        { src: './Images/pytorch.png', alt: 'PyTorch' },
        { src: './Images/pandas.png', alt: 'Pandas' },
        { src: './Images/numpy.png', alt: 'NumPy' },
        { src: './Images/scikit.png', alt: 'Scikit-Learn' },
        { src: './Images/keras.png', alt: 'Keras' },
        { src: './Images/opencv.png', alt: 'OpenCV' },
        { src: './Images/jupyter.png', alt: 'Jupyter' },
    ]

    return (
        <section className="py-16">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-purple-400 font-semibold tracking-wider uppercase mb-4">Technologies</p>
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Tech Stack I Work With</h2>
            </div>

            {/* Marquee Container with Glow Effect */}
            <div className="relative">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                <div className="glass-card py-8 mx-6 rounded-2xl">
                    <Marquee pauseOnHover speed={60} gradient={false}>
                        <div className="flex items-center gap-12 px-6">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center gap-3 min-w-[100px]"
                                >
                                    <div className="relative">
                                        <img
                                            src={tech.src}
                                            alt={tech.alt}
                                            className="h-16 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                    </div>
                                    <span className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors font-medium opacity-0 group-hover:opacity-100">
                                        {tech.alt}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>

            {/* Reverse Marquee for Visual Effect */}
            <div className="relative mt-6">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                <div className="glass-card py-8 mx-6 rounded-2xl">
                    <Marquee pauseOnHover speed={40} direction="right" gradient={false}>
                        <div className="flex items-center gap-12 px-6">
                            {[...technologies].reverse().map((tech, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center gap-3 min-w-[100px]"
                                >
                                    <div className="relative">
                                        <img
                                            src={tech.src}
                                            alt={tech.alt}
                                            className="h-12 w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

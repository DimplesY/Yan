import Image from 'next/image'
import * as motion from 'motion/react-client'
import { Github, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-300/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, white, transparent 70%)',
          }} />
        </div>
        
        {/* Geometric Shapes - Hidden on mobile */}
        <motion.div
          className="hidden sm:block absolute top-1/4 right-1/3 w-24 lg:w-32 h-24 lg:h-32 border border-cyan-300/10 rotate-45"
          animate={{ rotate: [45, 135, 45] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-1/3 left-1/4 w-20 lg:w-24 h-20 lg:h-24 border border-purple-300/10 rotate-12"
          animate={{ rotate: [12, 102, 12] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-full relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full">
          
          {/* Left Column - Avatar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative">
              <Image
                src="https://avatars.githubusercontent.com/u/51285767"
                className="rounded-2xl shadow-2xl border-2 border-border/20 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60"
                width={240}
                height={240}
                alt="DimplesY"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-2 flex flex-col items-center lg:items-start">
            
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-3 lg:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="text-muted-foreground">Hey, I&apos;m</span>
                <br />
                <span className="bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 text-transparent">
                  DimplesY
                </span>
              </h1>
              
              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 rounded-full border border-cyan-200/50 dark:border-cyan-800/50">
                <span className="text-sm font-mono text-cyan-700 dark:text-cyan-300">
                  Software Engineer
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              <p className="text-base sm:text-lg lg:text-xl">
                I love exploring interesting projects on GitHub and diving deep into the latest technology trends.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg">
                Passionate about coding and constantly learning new technologies. 
                Working with <span className="text-foreground font-medium">JavaScript/TypeScript</span>, 
                <span className="text-foreground font-medium"> Java</span>, and 
                <span className="text-foreground font-medium"> Python</span>, while exploring 
                <span className="text-foreground font-medium"> Rust</span> and 
                <span className="text-foreground font-medium"> Go</span>.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4"
            >
              <Link
                href="/articles"
                className="group inline-flex items-center justify-center px-5 py-2.5 bg-foreground text-background rounded-lg font-medium transition-all duration-200 hover:bg-foreground/90 hover:scale-105 text-sm sm:text-base"
              >
                Read My Articles
                <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href="https://github.com/dimplesy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border hover:bg-accent hover:scale-110 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                
                <a
                  href="mailto:dimplesyj@gmail.com"
                  className="p-2.5 rounded-lg border border-border hover:bg-accent hover:scale-110 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}

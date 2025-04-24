import Image from 'next/image'
import * as motion from 'motion/react-client'
export default function Page() {
  return (
    <div className="h-full p-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-5 lg:gap-10">
          <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }}>
            <Image
              src="https://avatars.githubusercontent.com/u/51285767"
              className="rounded-full border block h-30 mx-auto md:mx-0 w-30"
              width={460}
              height={460}
              alt="dimplesY"
            />
          </motion.div>

          <div className="text-xl flex flex-1 flex-col tracking-wide font-bold md:text-2xl lg:text-3xl">
            <span>{'Hey 👋, '}</span>
            <span>{"I'm DimplesY."}</span>
          </div>
        </div>

        <div className="mt-10 text-lg max-w-2xl flex items-center justify-between gap-5">
          <div className="flex">
            <motion.span className="mx-2 bg-clip-text  bg-gradient-to-r to-cyan-500 selection:text-cyan-400 selection:bg-zinc-800 from-cyan-100 text-transparent px-2 py-1 font-mono">
              <span className="font-medium text-lg">{'<Software Engineer />'}</span>
            </motion.span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-lg max-w-2xl break-all">
          {'I love exploring interesting projects on GitHub and diving deep into the latest technology trends.'}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 text-lg max-w-2xl">
          {
            "Coding is one of the most exciting things in the world to me, and I'm always eager to learn and grow. My primary tech stack includes JavaScript/TypeScript, Java, and Python, and I'm also expanding my skills with Rust and Go."
          }
        </motion.div>
      </div>
    </div>
  )
}

import Image from 'next/image'
export default function Page() {
  return (
    <main className="container mx-auto border-x h-full flex-1 box-border p-10 text-base">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-5 lg:gap-10">
          <Image
            src="https://avatars.githubusercontent.com/u/51285767"
            className="rounded-full border block h-30 mx-auto md:mx-0 w-30"
            width={460}
            height={460}
            alt="dimplesY"
          />

          <div className="text-xl flex flex-1 flex-col tracking-wide font-bold md:text-2xl lg:text-3xl">
            <span>{'Hey 👋, '}</span>
            <span>{"I'm DimplesY."}</span>
          </div>
        </div>

        <div className="mt-10 text-lg max-w-2xl flex items-center justify-between gap-5">
          <div className="flex">
            <span className="mx-2 text-cyan-200 px-2 py-1 font-mono">
              <span>{'<'}</span>
              <span className="font-medium text-lg">{'Software Engineer'}</span>
              <span>{'/>'}</span>
            </span>
          </div>
        </div>

        <div className="mt-5 text-lg max-w-2xl break-all">
          {'I love exploring interesting projects on GitHub and diving deep into the latest technology trends.'}
        </div>

        <div className="mt-5 text-lg max-w-2xl">
          {
            "Coding is one of the most exciting things in the world to me, and I'm always eager to learn and grow. My primary tech stack includes JavaScript/TypeScript, Java, and Python, and I'm also expanding my skills with Rust and Go."
          }
        </div>
      </div>
    </main>
  )
}

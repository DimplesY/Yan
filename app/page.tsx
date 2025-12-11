import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="container mx-auto text-foreground h-screen">
      <nav className="w-full mx-auto h-16 rounded-full fixed top-5 z-10 backdrop-blur-2xl shadow font-geist-sans flex items-center px-10">
        <Link href="/" className="font-bold text-2xl">
          DimplesY
        </Link>
      </nav>

      <div className="h-screen flex items-center justify-center">
        <div className="prose prose-invert lg:prose-lg prose-p:my-2 prose-h2:mt-4 prose-img:my-2 mx-auto font-geist-mono flex flex-col slide-enter-content">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="https://avatars.githubusercontent.com/u/51285767"
              width={240}
              height={240}
              alt="DimplesY"
              className="rounded-full size-20"
              priority
            />
          </div>

          <h2 className="text-center md:text-left text-2xl font-bold">Hi, I'm DimplesY.</h2>

          <p>I'm a full-stack developer base in ChangSha.</p>

          <p>I love exploring interesting projects on GitHub and diving deep into the latest technology trends.</p>

          <p>
            Passionate about coding and constantly learning new technologies. Working with <code>JavaScript</code>,{' '}
            <code>TypeScript</code>, <code>Java</code>, and <code>Python</code>, while exploring <code>Rust</code> and{' '}
            <code>Go</code>.
          </p>

          <p className="flex items-center gap-2 cursor-pointer">
            <i className="icon-[carbon--logo-github]" />
            <a href="https://github.com/DimplesY">Github</a>
          </p>
        </div>
      </div>
    </div>
  )
}

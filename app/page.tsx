import Image from 'next/image'

export default function Page() {
  return (
    <div className="container prose prose-xl prose-p:my-2 prose-h2:mt-4 prose-img:my-2 py-50 mx-auto font-geist-mono flex flex-col slide-enter-content">
      <Image
        src="https://avatars.githubusercontent.com/u/51285767"
        width={240}
        height={240}
        alt="DimplesY"
        className="rounded-full size-20"
        priority
      />

      <h2>Hi, I'm DimplesY.</h2>

      <p>I'm a full-stack developer base in ChangSha.</p>

      <p>I love exploring interesting projects on GitHub and diving deep into the latest technology trends.</p>

      <p>
        Passionate about coding and constantly learning new technologies. Working with <code>JavaScript</code>, <code>TypeScript</code>, <code>Java</code>, and <code>Python</code>, while exploring <code>Rust</code> and <code>Go</code>.
      </p>

      <p className="flex items-center gap-2 cursor-pointer">
        <i className="icon-[carbon--logo-github]" />
        <a href="https://github.com/DimplesY">Github</a>
      </p>
    </div>
  )
}

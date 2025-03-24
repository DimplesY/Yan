import { SiGithub } from '@icons-pack/react-simple-icons'
import Link from 'next/link'

export function PageFooter() {
  return (
    <div className="h-20 border-t flex items-center justify-center">
      <div className="container border-x h-full flex items-center justify-between p-10 box-border">
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <Link className="hover:underline" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY-NC-SA 4.0
          </Link>
          <span>2019-PRESENT &copy; DimplesY</span>
        </div>

        <div>
          <Link href="https://github.com/dimplesY">
            <div className="flex flex-col justify-center text-gray-500 hover:text-cyan-200 items-center gap-1">
              <SiGithub />
              <span className="text-xs">GitHub</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

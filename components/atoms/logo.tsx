import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">IL</span>
      </div>
      <span className="font-bold text-base sm:text-lg">Indrawan</span>
    </Link>
  )
}

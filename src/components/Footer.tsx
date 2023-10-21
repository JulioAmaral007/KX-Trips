import Link from 'next/link'

export function Footer() {
  return (
    <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">KX</span> Trips
        </h1>
      </Link>
      <p className="text-sm font-medium mt-1 text-primaryDarker">
        Todos os direitos reservados.
      </p>
    </div>
  )
}

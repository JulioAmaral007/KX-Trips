import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto my-20 grid grid-cols-2 justify-center items-center text-black">
      <main className="flex flex-col gap-6 items-center">
        <h1 className="text-4xl font-bold">
          Ops, esta página não foi encontrada
        </h1>
        <p className="mt-6 text-xl font-light">
          Parece que você se perdeu...
          <br />
          Tente voltar para a página anterior ou acessar a home.
        </p>

        <div className="flex mt-6 gap-4">
          <button className="items-center flex justify-center px-10 py-2 cursor-pointer rounded-md bg-primary hover:bg-primaryLighter">
            <Link href="/">Home</Link>
          </button>
        </div>
      </main>

      <aside>
        <Image width={500} height={450} src="/not-found.png" alt="404" />
      </aside>
    </div>
  )
}

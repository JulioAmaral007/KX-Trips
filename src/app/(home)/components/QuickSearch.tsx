import Image from 'next/image'
import Link from 'next/link'

export function QuickSearch() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] "></div>
        <h2 className="px-5 font-medium  whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] "></div>
      </div>

      <div className="flex w-full justify-center mt-5 flex-wrap gap-5 lg:justify-evenly lg:gap-0 ">
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=hotel`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" />
            <p className="text-sm ">Hotel</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=fazenda"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/farm-icon.png" alt="Fazenda" />
            <p className="text-sm ">Fazenda</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=chale"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/cottage-icon.png" alt="Chalé" />
            <p className="text-sm ">Chalé</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=pousada"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/inn-icon.png" alt="Pousada" />
            <p className="text-sm ">Pousada</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=pontos-turisticos"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={35}
              height={35}
              src="/castle-icon.png"
              alt="Pontos Turísticos"
            />
            <p className="text-sm ">Pontos Turísticos</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=resorts"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={35}
              height={35}
              src="/resort-icon.png"
              alt="Resorts"
            />
            <p className="text-sm ">Resorts</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

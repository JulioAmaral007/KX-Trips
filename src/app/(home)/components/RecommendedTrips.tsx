import { TripItem } from '@/components/ui/tripItem'
import { prismaClient } from '@/lib/prisma'
import { Trip } from '@prisma/client'

async function getTrips() {
  const trips = await prismaClient.trip.findMany({})

  return trips
}

export async function RecommendedTrips() {
  const data = await getTrips()

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-zinc-400"></div>
        <h2 className="px-5 font-medium whitespace-nowrap">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-zinc-400"></div>
      </div>

      <div className="flex flex-col items-center mt-5 lg:mt-12 gap-5 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-10 md:flex-row md:flex-wrap md:justify-center">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
}

import { prisma } from '@/lib/prisma'

import { TripDescription } from './components/TripDescription'
import { TripHeader } from './components/TripHeader'
import { TripHighlights } from './components/TripHighlights'
import { TripLocation } from './components/TripLocation'
import { TripReservation } from './components/TripReservation'

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  })

  return trip
}

export default async function TripDetails({
  params,
}: {
  params: { tripId: string }
}) {
  const trip = await getTripDetails(params.tripId)

  if (!trip) return null

  return (
    <div className="container mx-auto lg:px-40 lg:pt-10">
      <TripHeader trip={trip} />
      <div className="flex flex-col lg:flex-row lg:mt-12 lg:gap-20">
        <div className="lg:order-2">
          <TripReservation
            tripId={trip.id}
            pricePerDay={trip.pricePerDay as any}
            tripStartDate={trip.startDate}
            tripEndDate={trip.endDate}
            maxGuests={trip.maxGuests}
          />
        </div>

        <div className="lg:order-1">
          <TripDescription description={trip.description} />

          <TripHighlights highlights={trip.highlights} />
        </div>
      </div>
      <TripLocation
        locationDescription={trip.locationDescription}
        location={trip.location}
      />
    </div>
  )
}

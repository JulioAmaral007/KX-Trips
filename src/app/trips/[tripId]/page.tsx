import { prisma } from '@/lib/prisma'

import { TripDescription } from './components/TripDescription'
import { TripHeader } from './components/TripHeader'
import { TripHighlights } from './components/TripHighlights'
import { TripLocation } from './components/TripLocation'
import { TripReservation } from './components/TripReservarion'

async function getTripDetails(tripId: string) {
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
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation
        tripId={trip.id}
        pricePerDay={trip.pricePerDay as any}
        tripStartDate={trip.startDate}
        tripEndDate={trip.endDate}
        maxGuests={trip.maxGuests}
      />

      <TripDescription description={trip.description} />

      <TripHighlights highlights={trip.highlights} />
      <TripLocation
        locationDescription={trip.locationDescription}
        location={trip.location}
      />
    </div>
  )
}

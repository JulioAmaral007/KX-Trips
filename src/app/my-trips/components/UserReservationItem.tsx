import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'
import { toast } from 'react-toastify'

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true }
  }>
  fetchReservations: () => void
}

export function UserReservationItem({
  reservation,
  fetchReservations,
}: UserReservationItemProps) {
  const { trip } = reservation

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      return toast.error('Ocorreu um erro ao cancelar a reserva!')
    }

    toast.success('Reserva cancelada com sucesso!', {
      position: 'bottom-center',
    })

    fetchReservations()
  }

  return (
    <div>
      {/* CARD */}
      <div className="flex flex-col p-5 mt-5  border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b  border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              alt={trip.name}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{trip.name}</h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs  underline">{trip.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <h3 className="text-sm">Data</h3>
          <div className="flex items-center gap-1">
            <p className="text-sm">
              {format(new Date(reservation.startDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
            {' - '}
            <p className="text-sm">
              {format(new Date(reservation.endDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
          </div>

          <h3 className="mt-5 text-sm">Hóspedes</h3>
          <p className="text-sm pb-5">{reservation.guests} hóspedes</p>

          <h3 className="font-semibold mt-3 pt-5 border-t border-solid ">
            Informações sobre o preço
          </h3>

          <div className="flex justify-between mt-1">
            <p className=" text-sm mt-2">Total:</p>
            <p className="font-medium text-sm">
              R${Number(reservation.totalPaid)}
            </p>
          </div>

          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="destructive" className="mt-5">
                Cancelar
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Essa ação não poderá ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="text-white">
                <AlertDialogCancel className="">Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteClick}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { CurrencyInput } from '@/components/ui/currencyInput'
import DatePicker from '@/components/ui/datePicker'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'

interface TripSearchForm {
  text: string
  endDate: Date | null
  budget: string
}

export function TripSearch() {
  const router = useRouter()

  const { control, register, handleSubmit } = useForm<TripSearchForm>()

  const onSubmit = (data: TripSearchForm) => {
    router.push(
      `/trips/search?text=
      ${data.text}&endDate=${data.endDate?.toISOString()}&budget=
      ${data.budget}`,
    )
  }
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat lg:py-28">
      <h1 className="font-semibold text-2xl text-center lg:text-[2.5rem]">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg:bg-primary lg:mt-12 lg:bg-opacity-20 lg:rounded-lg">
        <Input
          placeholder="Onde você quer ir?"
          {...register('text', {
            required: {
              value: true,
              message: 'Texto é obrigatório.',
            },
          })}
        />

        <div className="flex gap-4 lg:w-full">
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                onChange={field.onChange}
                selected={field.value}
                placeholderText="Data Final"
                className="w-full"
                minDate={new Date()}
              />
            )}
          />

          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                allowDecimals={false}
                placeholder="Orçamento"
                onValueChange={field.onChange as any}
                value={field.value}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>

        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="w-1/2 lg:h-fit"
        >
          Buscar
        </Button>
      </div>
    </div>
  )
}

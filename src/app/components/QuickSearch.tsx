import Image from 'next/image'

export function QuickSearch() {
   return (
      <div className="container mx-auto p-5">
         <div className="flex items-center">
            <div className="w-full h-[2px] bg-grayLighter"></div>
            <h2 className="px-3 font-medium text-grayPrimary whitespace-nowrap">
               Tente pesquisar por
            </h2>
            <div className="w-full h-[2px] bg-grayLighter"></div>
         </div>

         <div className="flex w-full justify-between mt-5">
            <div className="flex flex-col items-center gap-1 cursor-pointer">
               <Image width={35} height={35} src="/hotel-icon.png" alt="Hotéis" />

               <p className="text-sm text-grayPrimary">Hotéis</p>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer">
               <Image width={35} height={35} src="/farm-icon.png" alt="Fazendas" />

               <p className="text-sm text-grayPrimary">Fazendas</p>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer">
               <Image width={35} height={35} src="/cottage-icon.png" alt="Chalés" />

               <p className="text-sm text-grayPrimary">Chalés</p>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer">
               <Image width={35} height={35} src="/inn-icon.png" alt="Pousadas" />

               <p className="text-sm text-grayPrimary">Pousadas</p>
            </div>
         </div>
      </div>
   )
}

'use client'

import { Button } from '@/components/Button'
import Input from '@/components/Input'
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
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Profile() {
  const { status, data } = useSession()
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  //   watch,
  //   setError,
  // } = useForm()

  const router = useRouter()

  const handleDeleteClick = () => { }

  useEffect(() => {
    if (status === 'unauthenticated') {
      return router.push('/')
    }
  }, [status])

  return (
    <div className="container mx-auto p-5">
      <div className="mb-6">
        <h1 className="font-semibold text-primaryDarker text-xl lg:mb-5">
          Configurações
        </h1>
        <p className="mt-2 font-medium text-primaryDarker">
          Edite seu perfil aqui. Para alterar sua senha, faça o logout e clique
          na opção esqueci a senha.
        </p>
      </div>

      <div>
        <Avatar className="w-28 h-28">
          <AvatarImage src={data?.user?.image!} alt={data?.user?.name!} />
        </Avatar>
      </div>

      <div>
        <Input placeholder={`Julio `} className="mt-4" type="text" />
        <Input placeholder={`Julio `} className="mt-4" type="text" />
        <Input placeholder={`Julio `} className="mt-4" type="text" />
      </div>

      <div>
        <div>
          <h1 className="font-semibold text-primaryDarker text-lg lg:mb-5">
            Deletar Conta
          </h1>
          <p className="mt-2 font-medium text-primaryDarker">
            Deletar sua conta e todos os seus dados.
          </p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="danger" className="mt-5">
              Deletar
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
              <AlertDialogCancel className="bg-primaryDarker">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteClick}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Button variant="primary" className="mt-5">
        Salvar
      </Button>
    </div>
  )
}

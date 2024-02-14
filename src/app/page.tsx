import Image from 'next/image'
import SetaIcon from './components/SetaIcon'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className='flex flex-col gap-4 items-center'>
        <div className="flex flex-row justify-center">
          <Image
            src="/logo.jpg"
            alt="Biofox Logo"
            width={80}
            height={60}
            priority
          />
          <div className='text-bio-green'>
          <div>
          <span className='text-5xl font-bold'>Bio</span>
          <span className='text-5xl font-semibold'>fox</span>
          </div>
          <span className='text-golden text-2xl'>Análises Clínicas & Saúde</span>
          </div>
        </div>
        <div className='h-1 w-full bg-bio-green'></div>
        <div>
          <div className='text-bio-green'>Fixo (44) 3659-1666  | Celular (44) 99710-9569</div>
        </div>
        <div>
          <Link href="https://biofox.lab.jalis.net.br:7080/resultado" target="_blank">
            <button className='bg-bio-green text-white px-4 py-2 rounded-md hover:bg-bio-green-dark flex flex-row items-center gap-2'>
              Resultados
              <SetaIcon fill='white' stroke='white' width={15} heigth={15}/>
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

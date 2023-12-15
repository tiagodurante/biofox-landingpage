import Image from 'next/image'

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
      </div>
    </main>
  )
}

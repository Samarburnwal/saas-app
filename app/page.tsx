import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <div>
      <main>
        <h1 className='text-2xl underline'>Popular Companions</h1>
        <section className='home-section'>
          <CompanionCard
            id='123'
            name='Neura the brainly explorer'
            topic='Neural Network of the brain'
            subject='science'
            duration={45}
            color='#ffdda1'
          />
          <CompanionCard
            id='456'
            name='Rotational Mechanics with Roto'
            topic='Understanding rotational forces'
            subject='physics'
            duration={50}
            color='#a1ffe0ff'
          />
          <CompanionCard
            id='789'
            name='Quantum Computing with Qubit'
            topic='Quantum states and superposition'
            subject='computer science'
            duration={60}
            color='#a1c4ff'
          />
        </section>

        <section className='home-section'>
          <CompanionList 
            title='Recently Completed Sessions'
            companions={recentSessions}
            className="w-2/3 max-lg: w-full"
          />
          <CTA/>
        </section>
      </main>
    </div>
  )
}

export default Page
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {
  const limit = 3;
  const subject = null, topic = null;
  const companions = await getAllCompanions({ limit, subject, topic });
  const recentSessionsCompnanions = await getRecentSessions(10);

  console.log(companions);
  
  return (
    <div>
      <main>
        <h1 className='text-2xl underline'>Popular Companions</h1>
        <section className='home-section'>
          {companions.map((companion) => {
            return <CompanionCard
              key={companion.id}
              id={companion.id}
              name={companion.name}
              topic={companion.topic}
              subject={companion.subject}
              duration={companion.duration}
              color={getSubjectColor(companion.subject)}
            />
          })}
          
        </section>

        <section className='home-section'>
          <CompanionList 
            title='Recently Completed Sessions'
            companions={recentSessionsCompnanions}
            className="w-2/3 max-lg: w-full"
          />
          <CTA/>
        </section>
      </main>
    </div>
  )
}

export default Page
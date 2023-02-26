import NavBarServer from '../components/NavBarServer'
import FaqSection from './FaqSection'
import HeroSection from './HeroSection'
import TestimonialsSection from './TestimonialsSection'
import TrainingPlanSection from './TrainingPlanSection'

const TrainingPlansPage = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer />
      <main>
        <HeroSection />
        {/* @ts-expect-error Server Component */}
        <TrainingPlanSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
    </>
  )
}

export default TrainingPlansPage

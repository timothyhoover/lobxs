import NavBar from '../components/NavBar'
import FaqSection from './FaqSection'
import HeroSection from './HeroSection'
import TestimonialsSection from './TestimonialsSection'
import TrainingPlanSection from './TrainingPlanSection'

const TrainingPlansPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <TrainingPlanSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
    </>
  )
}

export default TrainingPlansPage

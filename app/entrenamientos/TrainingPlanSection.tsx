import TrainingPlan from './TrainingPlan'

const TrainingPlanSection = () => {
  return (
    <section className="flex flex-col items-center bg-neutral">
      <h3 className="text-4xl font-bold mb-10">Planes de entrenamientos</h3>
      {/* training plans */}
      <div className="grid grid-col-1 md:grid-cols-3 justify-items-center w-5/6 gap-5">
        <TrainingPlan />
        <TrainingPlan />
        <TrainingPlan />
      </div>
    </section>
  )
}

export default TrainingPlanSection

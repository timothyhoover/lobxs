import { ApiTrainingPlanTrainingPlan } from '../../schemas'
import Button from '../components/Button'

const TrainingPlan = ({ plan }: { plan: ApiTrainingPlanTrainingPlan }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-center text-xl font-medium text-gray-500 dark:text-gray-400">
        {plan.attributes.name}
      </h5>
      <p className="text-center mb-4 text-sm font-light">
        {plan.attributes.sub_text}
      </p>
      <div className="flex items-baseline justify-center text-gray-900 dark:text-white">
        <span className="text-5xl font-extrabold tracking-tight">
          {plan.attributes.price}
        </span>
        <span className="text-3xl font-semibold">€</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /mes
        </span>
      </div>
      {/* List */}
      <ul role="list" className="space-y-5 my-7">
        {plan.attributes.training_plan_features.data.map((feature: any) => {
          return (
            <li className="flex space-x-3">
              {/* Icon */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {feature.attributes.feature}
              </span>
            </li>
          )
        })}
      </ul>
      <Button className="w-full">Choose plan</Button>
    </div>
  )
}

export default TrainingPlan

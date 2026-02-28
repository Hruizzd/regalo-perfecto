interface ProgressCardProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressCard({ currentStep, totalSteps }: ProgressCardProps) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-700">Progreso</span>
        <span className="text-sm font-medium text-purple-600">
          {currentStep} de {totalSteps}
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

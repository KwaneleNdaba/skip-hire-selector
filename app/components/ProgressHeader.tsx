import { AlertTriangle, Calendar, CheckCircle, CreditCard, MapPin, Trash2 } from "lucide-react";

export const ProgressHeader: React.FC = () => (
  <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {[
          { icon: MapPin, label: "Postcode", active: true },
          { icon: Trash2, label: "Waste Type", active: true },
          { icon: CheckCircle, label: "Select Skip", active: true },
          { icon: AlertTriangle, label: "Permit", active: false },
          { icon: Calendar, label: "Date", active: false },
          { icon: CreditCard, label: "Payment", active: false },
        ].map((step, index) => (
          <div 
            key={index}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-bold ${
              step.active 
                ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md' 
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            <step.icon className="w-4 h-4 mr-2" />
            <span>{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

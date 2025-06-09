import { AlertTriangle } from "lucide-react";
import { calculateTotalPrice } from "~/constants";
import type { Skip } from "~/interfaces/skip";

export const SelectedSkipSummary: React.FC<{ skip: Skip | null; onDismiss: () => void }> = ({ skip, onDismiss }) => {
    if (!skip) return null;

    const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
    const hasRestrictions = !skip.allowed_on_road || !skip.allows_heavy_waste;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3">
                            {skip.size}Y
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                                {skip.size} Yard Skip Selected
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">{skip.hire_period_days} day hire period</p>
                        </div>
                    </div>

                    <div className="text-center sm:text-right">
                        <p className="text-gray-600 text-sm">Total Price</p>
                        <p className="text-2xl sm:text-3xl font-black text-emerald-600">
                            £{totalPrice}
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={onDismiss}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg font-medium transition-colors"
                        >
                            Change
                        </button>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all">
                            Continue →
                        </button>
                    </div>
                </div>

                {hasRestrictions && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-amber-50 to-red-50 border-l-4 border-amber-400 rounded-lg">
                        <h4 className="font-bold text-amber-800 mb-1 flex items-center text-sm sm:text-base">
                            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Important Restrictions:
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:gap-6 text-xs sm:text-sm">
                            {!skip.allowed_on_road && (
                                <span className="text-red-700 font-medium">• Private property placement only</span>
                            )}
                            {!skip.allows_heavy_waste && (
                                <span className="text-amber-700 font-medium">• Light waste materials only</span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
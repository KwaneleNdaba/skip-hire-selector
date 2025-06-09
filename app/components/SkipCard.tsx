import { AlertTriangle, CheckCircle, Clock, Shield, Star } from "lucide-react";
import { calculateTotalPrice, getPopularityBadge, getSkipImage } from "~/constants";
import type { Skip } from "~/interfaces/skip";

interface SkipCardProps {
    skip: Skip;
    isSelected: boolean;
    onSelect: (skip: Skip) => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
    const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
    const popularityBadge = getPopularityBadge(skip.size);

    return (
        <div
            className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 overflow-hidden ${isSelected
                ? 'ring-4 ring-emerald-400 scale-[1.02]'
                : 'hover:shadow-xl hover:scale-[1.02]'
                }`}
            onClick={() => onSelect(skip)}
        >
            <div className="absolute top-3 left-3 right-3 z-10 flex justify-between">
                {popularityBadge && (
                    <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                        <Star className="w-3 h-3 inline mr-1" />
                        {popularityBadge}
                    </div>
                )}

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm sm:text-base shadow">
                    {skip.size} <span className="text-xs sm:text-sm">YARDS</span>
                </div>
            </div>
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                    src={getSkipImage(skip.size)}
                    alt={`${skip.size} Yard Skip`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex space-x-2">
                    {!skip.allowed_on_road && (
                        <div className="bg-red-500 text-white p-1.5 rounded-full shadow">
                            <Shield className="w-4 h-4" />
                        </div>
                    )}
                    {!skip.allows_heavy_waste && (
                        <div className="bg-amber-500 text-white p-1.5 rounded-full shadow">
                            <AlertTriangle className="w-4 h-4" />
                        </div>
                    )}
                </div>
            </div>
            <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                        {skip.size} Yard Skip
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">{skip.hire_period_days} day hire</span>
                    </div>
                </div>

                <div className="mb-4 sm:mb-6">
                    <div className="flex items-baseline">
                        <span className="text-3xl sm:text-4xl font-black text-emerald-600">£{totalPrice}</span>
                        <span className="text-gray-500 ml-2 text-sm sm:text-base">inc. VAT</span>
                    </div>
                </div>
                {(!skip.allowed_on_road || !skip.allows_heavy_waste) && (
                    <div className="mb-3 sm:mb-4 space-y-2">
                        {!skip.allowed_on_road && (
                            <div className="flex items-center text-red-600 text-xs sm:text-sm bg-red-50 p-2 rounded-lg">
                                <Shield className="w-4 h-4 mr-2" />
                                <span>Private property only</span>
                            </div>
                        )}
                        {!skip.allows_heavy_waste && (
                            <div className="flex items-center text-amber-600 text-xs sm:text-sm bg-amber-50 p-2 rounded-lg">
                                <AlertTriangle className="w-4 h-4 mr-2" />
                                <span>Light waste only</span>
                            </div>
                        )}
                    </div>
                )}
                <button
                    className={`w-full py-3 px-4 sm:py-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all ${isSelected
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        }`}
                >
                    {isSelected ? (
                        <span className="flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            SELECTED
                        </span>
                    ) : (
                        <span className="flex items-center justify-center">
                            SELECT THIS SKIP
                            <span className="ml-2">→</span>
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};
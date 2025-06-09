import React, { useState } from 'react';
import type { Skip } from '~/interfaces/skip';
import { ProgressHeader } from '~/components/ProgressHeader';
import { skipData } from '~/constants';
import { SelectedSkipSummary } from '~/components/SelectedSkipSummary';
import { SkipCard } from '~/components/SkipCard';
import { HeroSection } from '~/components/HeroSection';


const SkipHireSelector: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-24 sm:pb-0">
      <ProgressHeader />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skipData.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={setSelectedSkip}
            />
          ))}
        </div>
      </div>

      <SelectedSkipSummary
        skip={selectedSkip}
        onDismiss={() => setSelectedSkip(null)}
      />
    </div>
  );
};

export default SkipHireSelector;
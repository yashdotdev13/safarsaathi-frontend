import { AiTravelCard } from "@/components/dashboard/AiTravelCard";
import { RecommendedDestinations } from "@/components/dashboard/RecommendedDestinations";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { SuggestedCompanions } from "@/components/dashboard/SuggestedCompanions";
import { UpcomingTrips } from "@/components/dashboard/UpcomingTrips";
import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";

export default function DashboardPage() {
  return (
    <div className="p-6 sm:p-8 lg:p-10">
      <div className="mx-auto max-w-7xl">

        <WelcomeHeader />

        <AiTravelCard />

        <StatsCards />

        <UpcomingTrips />

        <RecommendedDestinations />

        <SuggestedCompanions />

      </div>
    </div>
  );
}
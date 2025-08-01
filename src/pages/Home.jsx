import ProfileCard from "../components/ProfileCard";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        <ProfileCard />
        <MainContent />
      </div>
    </div>
  );
}

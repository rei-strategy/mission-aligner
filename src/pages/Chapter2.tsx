import { AppSidebar } from "@/components/AppSidebar";

const Chapter2 = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1 bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center mb-10 pt-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Business Planning</h1>
            <p className="text-lg text-gray-600">Creating your business plan</p>
          </header>
        </div>
      </main>
    </div>
  );
};

export default Chapter2;
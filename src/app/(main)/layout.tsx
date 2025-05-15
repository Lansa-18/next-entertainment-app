import SideNavigation from "../_components/SideNavigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen gap-[3.2rem] px-[3.2rem] py-[3.2rem]">
      <div className="fixed">
        <SideNavigation />
      </div>
      <main className="ml-[11.2rem] h-[calc(100vh-6.4rem)] flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
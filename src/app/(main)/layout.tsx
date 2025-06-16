import SideNavigation from "../_components/SideNavigation";
import { auth } from "../_lib/auth";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log(session);

  if (!session) alert("You are not logged in.");

  const user = session?.user;
  const avatarImage = user?.image;
  const isAuthorized = session ? true : false;

  return (
    <div className="flex min-h-screen gap-[3.2rem] px-[3.2rem] custom-390:px-[2rem] py-[3.2rem] tab-port:flex-col">
      <div className="fixed tab-port:relative">
        <SideNavigation avatarImage={avatarImage ?? undefined} isAuthorized={isAuthorized} />
      </div>
      <main className="ml-[11.2rem] tab-port:ml-0 h-[calc(100vh-6.4rem)] flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

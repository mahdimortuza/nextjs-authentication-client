import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in user email {session?.user?.email}
          </h1>
          <Image
            className="mx-auto rounded-full mt-5"
            src={
              session?.user?.image ||
              "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png"
            }
            width={100}
            height={100}
            alt="user image"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;

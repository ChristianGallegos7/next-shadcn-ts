import Image from "next/image";
import { GetServerSideProps } from "next";
import { FC } from "react";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserPageProps {
  params: {
    id: string;
  };
}

async function getUser(id: number): Promise<User> {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

const UserPage: FC<UserPageProps> = async ({ params }) => {
  const userId = parseInt(params.id, 10);
  const user = await getUser(userId);
  return (
    <div className="bg-blue-300 p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4">
      <div className="flex-shrink-0">
        <Image
          className="h-24 w-24 rounded-full"
          src={user.avatar}
          width={100}
          height={100}
          alt="User picture"
        />
      </div>
      <div>
        <h3 className="text-xl font-medium text-black">
          {user.id}. {user.last_name} {user.first_name}
        </h3>
        <p className="text-gray-500">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserPage;

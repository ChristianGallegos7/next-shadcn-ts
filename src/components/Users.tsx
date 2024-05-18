import Image from "next/image";
import Link from "next/link";

export default function Users({ users }: any) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li
            className="flex bg-slate-300 mb-2 p-4 justify-between"
          >
            <div>
              <h3 className="text-black font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h3>
              <p className="text-slate-600 font-bold">Email:{user.email} </p>
            </div>
            <Image
              src={user.avatar}
              width={100}
              height={100}
              alt="User Image"
              className="rounded-full"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

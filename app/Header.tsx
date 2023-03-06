import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = false;
  return (
    <header
      className={`sticky top-0 z-50 bg-white flex items-center p-10 shadow-sm ${
        session ? "justify-between" : "justify-center"
      }`}
    >
      {session ? (
        <>
          <div className="flex space-x-2">
            <Image
              className="rounded-full mx-2 object-contain"
              height={10}
              width={50}
              src=""
              alt="Profile Picture"
            />
            <div>
              <p className="text-blue-400">Logged in as:</p>
              <p className="font-bold text-lg">Lucas Pires</p>
            </div>
          </div>
          <LogoutButton />
        </>
      ) : (
        <div className="flex flex-col items-center space-y-5">
          <div className="flex space-x-2 items-center">
            <Image
              src="https://links.papareact.com/jne"
              alt="Logo"
              height={10}
              width={50}
            />
            <p className="text-blue-400">Welcome to Meta Messenger</p>
          </div>
          <Link
            href="/auth/signin"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

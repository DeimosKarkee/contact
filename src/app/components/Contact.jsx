import Image from "next/image";
import Link from "next/link";

function Contact({ user }) {
  return (
    <div className="border-2  shadow-md p-2 flex flex-col items-center">
      <Link href={`/contacts/${user.id}`}>
        <Image
          src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
          alt={user.name}
          width="180"
          height="180"
        />
        <div className="mt-2 pt-2 ">
          <h2 className="text-center mb-1 text-xl underline underline-offset-2">
            {user.username}
          </h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      </Link>
    </div>
  );
}

export default Contact;

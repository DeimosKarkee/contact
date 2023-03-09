import Contact from "@/app/components/Contact";

async function ContactId({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.contactId}`
  );
  const user = await res.json();

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2">
        <Contact key={user.id} user={user} />
      </div>
    </div>
  );
}

export default ContactId;

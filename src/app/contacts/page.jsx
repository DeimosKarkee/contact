import SearchContacts from "../components/SearchContacts";
async function Contacts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div className="py-10">
      <h1 className="text-3xl text-center mb-5 font-bold uppercase">
        Contact Manager
      </h1>
      <SearchContacts users={users} />
    </div>
  );
}

export default Contacts;

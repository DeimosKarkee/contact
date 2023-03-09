"use client";
import { useState, useEffect } from "react";
import Contact from "./Contact";

function SearchContacts({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([{ name: "" }]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/3 mb-3 self-center border-2 border-gray-400 text-center p-2"
        placeholder="Search Contacts....."
      />
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2 p-3">
        {filteredUsers.map((user) => (
          <Contact key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default SearchContacts;

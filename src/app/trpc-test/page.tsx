"use client";
import { trpc } from "../_trpc/client";
import { useState } from "react";

const TrpcTestPage = () => {
  // --- Queries ---
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.city.getPaginated.useQuery();

  // --- Mutations ---
  const createCity = trpc.city.create.useMutation({
    onSuccess: () => utils.city.getPaginated.invalidate(),
  });
  const deleteCity = trpc.city.delete.useMutation({
    onSuccess: () => utils.city.getPaginated.invalidate(),
  });

  // --- Local state for new city form ---
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  if (isLoading) return <div className="text-white">Loading...</div>;

  return (
    <div className="p-4 text-white space-y-4">
      {/* List cities */}
      <div>
        <h2 className="text-lg font-bold">Cities</h2>
        <ul className="list-disc list-inside">
          {data?.data.map((c) => (
            <li key={c.id} className="flex items-center justify-between">
              <span>{c.name}</span>
              <button
                onClick={() => deleteCity.mutate({ id: c.id })}
                className="ml-4 px-2 py-1 bg-red-600 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Create new city */}
      <div>
        <h2 className="text-lg font-bold">Add City</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createCity.mutate({
              name,
              imageUrl,
              transports: [], // keep empty for now
            });
            setName("");
            setImageUrl("");
          }}
          className="space-y-2"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="City name"
            className="px-2 py-1 rounded w-full"
            required
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
            className="px-2 py-1 rounded w-full"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 rounded w-full"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrpcTestPage;

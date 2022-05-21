import { trpc } from "../utils/trpc";

export default function Name() {
  const nameQuery = trpc.useQuery(["names.getName", { name: "nexxel" }]);

  return (
    <>
      {nameQuery.data ? (
        <h1>{nameQuery.data.greeting}</h1>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}

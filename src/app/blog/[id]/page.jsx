import React from "react";

import SingleBlog from "@/components/SingleBlog";

async function getBlog(id) {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-cache",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const blog = async ({ params: { id } }) => {
  // const router = useRouter();
  // const { data: session, status } = useSession();
  const { data } = await getBlog(id);
  console.log("data", data);
  return <SingleBlog data={data} id={id} />;
};

export default blog;

import BlogRow from "@/components/BlogRow";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-cache",
    next: {
      tags: ["blogs"],
    },
    next: { revalidate: 100 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { data: blogs } = await getBlogs();
  // console.log("blogs", blogs);

  return (
    <div className="mt-5">
      <div className="flex-col space-y-16">
        {blogs.map((item, index) => {
          return (
            <BlogRow
              key={index}
              title={item.title}
              author={item.author}
              summary={item.summary}
              content={item.content}
              time={item.createdAt}
              blogId={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}

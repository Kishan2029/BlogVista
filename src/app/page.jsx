import BlogRow from "@/components/BlogRow";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    next: { revalidate: 1 },
  });
  console.log("response", res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = [
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing text of the printing",
      author: "Kishan",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      time: "22:00:00",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing text of the printing",
      author: "Kishan",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      time: "22:00:00",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing ",
      author: "Kishan",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      time: "22:00:00",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing  ",
      author: "Kishan",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      time: "22:00:00",
    },
  ];

  const { data: blogs } = await getBlogs();
  console.log("blogs", blogs);

  return (
    <div className="mt-5">
      <div className="flex-col space-y-16">
        {blogs.map((item, index) => {
          return (
            // <div >Hello</div>
            <BlogRow
              key={index}
              title={item.title}
              author={item.author}
              summary={item.summary}
              content={item.content}
              time={item.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}

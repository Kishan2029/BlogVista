import BlogRow from "@/components/BlogRow"


export default function Home() {
  const data = [{
    title: "Lorem Ipsum is simply dummy text of the printing text of the printing",
    author: "Kishan",
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    time: "22:00:00"
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing text of the printing",
    author: "Kishan",
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    time: "22:00:00"
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing ",
    author: "Kishan",
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    time: "22:00:00"
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing  ",
    author: "Kishan",
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    time: "22:00:00"
  }
  ]
  return (
    <div className="mt-5">

      <div className="flex-col space-y-16" >
        {
          data.map((item) => {
            return (
              // <div >Hello</div>
              <BlogRow title={item.title} author={item.author} summary={item.summary} time={item.time} />
            )

          })
        }
      </div>
    </div>
  )
}

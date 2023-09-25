"use client";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import coverImage from "../../../../public/images/cover.jpeg";
import { stringSplit } from "@/util/helper";
import { useRouter, useSearchParams } from "next/navigation";
import ReactHtmlParser from "react-html-parser";
import parse from "html-react-parser";

async function getBlog(id) {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    // cache: "no-cache",
    // next: { revalidate: 5 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const blog = async ({ params: { id } }) => {
  const router = useRouter();

  const { data } = await getBlog(id);

  // const data = {
  //   title:
  //     "Lorem Ipsum is simply dummy text of the printing text of the printing",
  //   author: "Kishan",
  //   summary:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   time: "22:00:00",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper quis lectus nulla at volutpat diam. Egestas dui id ornare arcu odio ut sem nulla. Urna et pharetra pharetra massa. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Id eu nisl nunc mi ipsum faucibus. Sapien faucibus et molestie ac. Ac feugiat sed lectus vestibulum. Est placerat in egestas erat imperdiet sed. Sollicitudin nibh sit amet commodo. Tortor posuere ac ut consequat semper. Pellentesque habitant morbi tristique senectus et netus. Tellus molestie nunc non blandit massa enim nec dui. Euismod quis viverra nibh cras. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Adipiscing at in tellus integer.\nAmet justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus pretium. Amet nisl suscipit adipiscing bibendum est ultricies integer. At consectetur lorem donec massa sapien faucibus et. Tempus quam pellentesque nec nam aliquam sem et. Lacus laoreet non curabitur gravida arcu. Lectus urna duis convallis convallis tellus id interdum velit. Lacinia at quis risus sed vulputate. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nascetur ridiculus mus mauris vitae ultricies. Dui ut ornare lectus sit amet est placerat.\nMalesuada proin libero nunc consequat interdum varius sit amet mattis. Ante in nibh mauris cursus mattis molestie a iaculis at. Erat velit scelerisque in dictum non consectetur a. Viverra suspendisse potenti nullam ac tortor vitae purus. Semper risus in hendrerit gravida rutrum quisque. Gravida dictum fusce ut placerat orci. Convallis posuere morbi leo urna molestie at elementum. Eget mi proin sed libero enim sed faucibus turpis. Iaculis nunc sed augue lacus viverra. Turpis massa sed elementum tempus egestas sed sed risus. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Non diam phasellus vestibulum lorem. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Turpis egestas integer eget aliquet nibh praesent. Lacus sed viverra tellus in hac habitasse platea. Facilisis mauris sit amet massa vitae. Feugiat nibh sed pulvinar proin. In cursus turpis massa tincidunt dui. A cras semper auctor neque.\nTincidunt tortor aliquam nulla facilisi cras. A iaculis at erat pellentesque adipiscing commodo elit. Sagittis orci a scelerisque purus semper eget duis at tellus. Diam in arcu cursus euismod. Odio pellentesque diam volutpat commodo sed. Magna sit amet purus gravida quis blandit turpis. In est ante in nibh mauris cursus. Mattis nunc sed blandit libero volutpat sed cras ornare. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Dictum fusce ut placerat orci nulla pellentesque dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada. Urna duis convallis convallis tellus id interdum velit laoreet. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Id cursus metus aliquam eleifend. Nulla aliquet enim tortor at auctor. In pellentesque massa placerat duis. Duis tristique sollicitudin nibh sit. Ut pharetra sit amet aliquam id. Purus viverra accumsan in nisl. Eget aliquet nibh praesent tristique magna.\nElit sed vulputate mi sit. Duis at consectetur lorem donec massa sapien faucibus. Odio euismod lacinia at quis risus sed vulputate odio. Nulla facilisi cras fermentum odio. Tincidunt tortor aliquam nulla facilisi cras fermentum. Odio ut sem nulla pharetra. Sed libero enim sed faucibus turpis in. Tempor nec feugiat nisl pretium fusce id. Volutpat consequat mauris nunc congue nisi. Amet justo donec enim diam vulputate ut pharetra sit. Nec tincidunt praesent semper feugiat. Amet nisl purus in mollis nunc. Augue ut lectus arcu bibendum at varius vel pharetra vel. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Nec ultrices dui sapien eget mi proin sed libero enim. Nisl rhoncus mattis rhoncus urna neque. Risus ultricies tristique nulla aliquet enim. Tincidunt arcu non sodales neque sodales ut etiam sit. Eget gravida cum sociis natoque penatibus et.",
  // };
  return (
    <div>
      {/* Title bar */}
      <div className="text-center mb-5">
        <div className="text-3xl font-semibold"> {data.title}</div>
        <div className="text-xs font-normal mt-2 mb-1 text-slate-600">
          {data.time}
        </div>
        <div className="text-xs font-bold mb-3 text-black">{data.author}</div>
        <div className="flex justify-center">
          <button
            className="flex items-center space-x-2 bg-gray-700 py-2 px-4 rounded-md text-white text-sm"
            onClick={
              () => router.push(`/editBlog/${id}`)
              // router.push({
              //   pathname: `/editBlog/${id}`,
              //   query: { keyword: "this way" },
              // })
            }
          >
            <BiEdit />

            <span>Edit this post</span>
          </button>
        </div>
      </div>

      <Image
        src={coverImage}
        alt="dfefe"
        // height={400}
        style={{ objectFit: "cover", height: "23rem", width: "100%" }}
      />

      <div className="mt-6">
        <div className="mb-6 text-base  text-slate-600 leading-relaxed">
          {/* {ReactHtmlParser(data.content)} */}
          {parse(data.content)}
          {/* <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
        </div>
        {/* {stringSplit(data.content).map((item) => {
          return (
            <div className="mb-6 text-base  text-slate-600 leading-relaxed">
              {ReactHtmlParser(item)}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default blog;

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="mt-5">
      <div className="flex-col space-y-16">
        {Array.apply(null, { length: 5 }).map((e, i) => (
          <div className="flex flex-col space-y-4 cursor-pointer sm:flex-row sm:space-y-0  sm:space-x-10">
            <div className="basis-2/5">
              <Skeleton height={"15rem"} />
            </div>
            <div className="basis-3/5">
              {/* title */}
              <div className="text-5xl font-medium ">
                <Skeleton />
              </div>
              {/* author and time */}
              <div className="flex gap-x-6 mt-6 mb-6">
                <div className="text-sm basis-1/2 ">
                  <Skeleton />
                </div>
                <div className="text-sm basis-1/2">
                  <Skeleton />
                </div>
              </div>
              {/* summary */}
              <div className="text-sm hidden sm:block">
                <Skeleton count={4} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

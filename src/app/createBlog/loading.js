import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Loading() {
  return (
    <div className="flex-col space-y-4 ">
      <div
        className="text-3xl"
      ><Skeleton /></div>
      <div
        className="text-3xl"
      ><Skeleton /></div>
      <div
        className="text-3xl"
      ><Skeleton /></div>
      <div>
        <div

        ><Skeleton height={300} /></div>
      </div>
      <div className="h-30 text-white sm:hidden">x</div>
      <div className="flex space-x-6">
        <div
          className="mt-12 px-4 py-2 text-white rounded-md text-3xl"

        >
          <Skeleton width={100} />
        </div>
      </div>
    </div>
  );
};



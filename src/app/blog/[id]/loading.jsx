import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div>
            {/* Title bar */}
            <div className="text-center mb-5">
                <div className="text-xl sm:text-3xl font-medium"> <Skeleton count={2} /></div>
                <div className="text-xs font-normal mt-2 mb-1 text-slate-600">
                    <Skeleton width={300} />
                </div>
                <div className="text-xs font-bold mb-3 text-black"><Skeleton width={300} /></div>

            </div>

            <Skeleton

                style={{ height: "23rem", width: "100%" }}
            />

            <div className="mt-6">
                <div className="mb-6 text-base  text-slate-600 leading-relaxed">
                    <Skeleton count={12} />
                </div>

            </div>
        </div>
    );
}

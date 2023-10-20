import SkeletonLoadingEffect from "./SkeletonLoadingEffect";

function SkeletonCard() {
  return (

    <div className="card-bg">
      <SkeletonLoadingEffect text="image" />
      <SkeletonLoadingEffect text="title" />
      <SkeletonLoadingEffect text="text" />
    </div>
  );
}

export default SkeletonCard;

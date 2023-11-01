import { Col } from "react-bootstrap";
import SkeletonLoadingEffect from "./SkeletonLoadingEffect";

function SkeletonCard() {
  return (
    <Col md={4} sm={12} className="card-bg">
      <SkeletonLoadingEffect text="image" />
      <SkeletonLoadingEffect text="title" />
      <SkeletonLoadingEffect text="text" />
    </Col>
  );
}

export default SkeletonCard;

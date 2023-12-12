interface loadingtypeprops{
  text?:string | undefined
}

function SkeletonLoadingEffect(props : loadingtypeprops) {
  const classes = `skeleton ${props.text} skeleton-animation`;
  return (
    <div className={classes}>
      <div className="contaniner"></div>
    </div>
  );
}

export default SkeletonLoadingEffect;

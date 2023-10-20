interface loadingtypeprops{
  text?:string
}

function SkeletonLoadingEffect(props : loadingtypeprops) {
  const classes = `skeleton ${props.text} skeleton-animation`;
  return (
    <div className={classes}>
      <div></div>
    </div>
  );
}

export default SkeletonLoadingEffect;

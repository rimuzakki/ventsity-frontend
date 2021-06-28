import s from './skeleton.module.less'

function Skeleton(props) {

  const viewSkeleton = () => {
    const { w, h, r, m, dark, style } = props;
    return (
      <div 
        className={ s.skeleton }
        style={{
          width: w,
          height: h,
          borderRadius: r,
          margin: m,
          ...(typeof style === 'object' ? style : {})
        }}
      >
      </div>
    )
  }

  return (
    viewSkeleton()
  )
}

export default Skeleton
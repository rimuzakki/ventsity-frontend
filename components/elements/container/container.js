function Container(props) {
    const { type, ...resProps } = props
    let className = ''

    if (type === 'fluid') {
        className = 'containerFluid'
    } else {
        className = 'container'
    }
    
    return (
        <div {...resProps} className={ className }>
            { props.children }
        </div>
    )

    
}

export default Container
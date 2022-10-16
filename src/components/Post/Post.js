import React from 'react'

const Post = React.forwardRef(({ post }, ref) => {

    const postBody = (
        <>
            <h2>상호명 : {post.name}</h2>
            <p>가격 : {post.price}</p>
            <p>제조사 : {post.company}</p>
            <p>종류 :{post.soolType}</p>
            <p>재고 수량 : {post.stockQuantity}</p>
            <p>이미지 주소 : {post.image_url}</p>
            {/* <p>sool name: {post.name}</p> */}
        </>
    )

    const content = ref
        ? <article ref={ref}>{postBody}</article>
        : <article>{postBody}</article>

    return content
})

export default Post
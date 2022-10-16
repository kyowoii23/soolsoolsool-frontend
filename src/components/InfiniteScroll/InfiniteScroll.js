import { useState, useRef, useCallback } from 'react'
import usePosts from '../../hooks/usePosts'
import Post from '../Post/Post'
import Container from "@mui/material/Container"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const InfiniteScroll = () => {
    const [pageNum, setPageNum] = useState(1)
    const {
        isLoading,
        isError,
        error,
        results,
        hasNextPage
    } = usePosts(pageNum)

    const intObserver = useRef()
    const lastPostRef = useCallback(post => {
        if (isLoading) return

        if (intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                console.log('We are near the last post!')
                setPageNum(prev => prev + 1)
            }
        })

        if (post) intObserver.current.observe(post)
    }, [isLoading, hasNextPage])

    if (isError) return <p className='center'>Error: {error.message}</p>

    const content = results.map((post, i) => {
        if (results.length === i + 1) {
            return (
                <Box sx={{
                    marginBottom: "16x",
                    padding: "32px",
                    border: "1px solid #A6A9AA",
                    borderRadius: "12px",
                    width: "100%" }} 
                >
                    <Post ref={lastPostRef} key={post.name} post={post} />
                </Box>
            )
        }
        return (
            <Box sx={{
                    marginBottom: "16px",
                    padding: "32px",
                    border: "1px solid #A6A9AA",
                    borderRadius: "12px",
                    width: "100%" }} 
            >
                <Post key={post.name} post={post} />
            </Box>
            )
    })

    return (
        <Container sx={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center" }} 
        >
            {content}
            {isLoading && <p className="center">Loading More Posts...</p>}
            <Button 
            variant="outlined" 
            href="#top" 
            sx={{
                color: "#7A939C",
                width: "14rem"
            }}
            >
                Back to Top
            </Button>
        </Container>
    )
}
export default InfiniteScroll
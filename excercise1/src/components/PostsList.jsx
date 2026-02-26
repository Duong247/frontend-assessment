import Post from '../components/Post'

export default function PostList(){
    const DATA = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    return(
        <div className="container text-center">
            <div className="row " style={{ margin:"0 auto"}}> 
                <Post content={DATA} postImg={''}/>
                <Post content={DATA} postImg={''}/>
                <Post content={DATA} postImg={''}/>
            </div>
        </div>
    )
}
import React from 'react'
import Photo from './Photo'
import { Link } from 'react-router-dom'
import AddPhoto from './AddPhoto'

function Photowall(props) {
        return (
            <div>
            <Link to="/AddPhoto" className="btn-add">+</Link>
            <div  className="photo-grid">
            <ul>
            {
                props.posts.map((posts,id)=> <Photo key={id} posts={posts} onremovePhoto={props.onremovePhoto}/>)
            }
            </ul>  
            </div>
            </div>
        )
}

export default Photowall

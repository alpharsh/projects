import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()

    // Not Optimised way for Loader from the API call
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/alpharsh')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        GitHub Followers: {data.followers}
        <h1 className='text-xl'>Following: {data.following}</h1>
        <h1 className='text-xl'>Bio: {data.bio}</h1>
        <img className='text-center rounded-3xl' src={data.avatar_url} alt="GitHub dp" width={300}/>
    </div>
  )
}

export default GitHub

// Optimised way Information Loader from the API call
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/alpharsh')
    return response.json()
}
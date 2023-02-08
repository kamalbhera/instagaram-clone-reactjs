import React, { useEffect, useState } from 'react'
import posts from '../data/postData'
import reels from '../data/reelsData'
import tagged from '../data/taggedData'

const ProfileData = () => {
  const [page, setPage] = useState('posts')
  const [storyNav, setStoryNav] = useState(posts)

  useEffect(() => {
    if (page === 'posts') {
      setStoryNav(posts)
    } else if (page === 'reels') {
      setStoryNav(reels)
    } else {
      setStoryNav(tagged)
    }
  }, [page])

  return (
    <div className='profile__images'>
      <div className='images_navigate'>
        <div
          className={`title ${page === 'posts' ? 'selected' : ''}`}
          onClick={() => setPage('posts')}
        >
          <p>POSTS</p>
        </div>
        <div
          className={`title ${page === 'reels' ? 'selected' : ''}`}
          onClick={() => setPage('reels')}
        >
          <p>REELS</p>
        </div>
        <div
          className={`title ${page === 'tagged' ? 'selected' : ''}`}
          onClick={() => setPage('tagged')}
        >
          <p>TAGGED</p>
        </div>
      </div>

      <div className='photo_grid'>
        {storyNav.map((single, i) => (
          <div
            key={i}
            className={`single_photo ${single?.like ? 'card_effect' : ''}`}
          >
            <div className='photo_pic'>
              <img src={single.img} alt='virat' />
            </div>
            {single?.like && (
              <div className='photo__stats'>
                <div> {single.like} </div>
                <div> {single.message} </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileData

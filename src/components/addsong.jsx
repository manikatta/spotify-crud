import React from 'react'

export default function Addsong() {
  return (
    <div>
         <form action="">
                    Song: <input type="text" placeholder='song name' />
                    Date released: <input type="date" placeholder='date' />
                    Artwork: <input type="image"alt='' />
                    Artists: <input type="checkbox" />
                    <button>Add artists</button>
                    <button>cancel</button>
                    <button>save</button>
                </form>
    </div>
  )
}


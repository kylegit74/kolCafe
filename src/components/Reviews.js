import React from 'react'

const Reviews = () => {
  return (
    <>
        <div className='reviews py-5 bg_theme_light'>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-6'>
                    <h3 className='pb-5'>Reviews</h3>
                    <div className='card border-0'>
                    <iframe title='Instagram Feed' src='https://widgets.sociablekit.com/instagram-feed/iframe/194923' width='100%' height='550'></iframe>
                    </div>

                    </div>
                    <div className='col-xl-6'>
                    <h3 className='text-end pb-5'>Facebook Timeline</h3>
                        <div className='card border-0'>
                        <iframe title='Facebook Page' className='m-auto pt-2' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdosacafekol%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="550" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Reviews
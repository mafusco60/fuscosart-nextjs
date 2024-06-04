import {
FacebookShareButton,
TwitterShareButton,
InstagramShareButton,
EmailShareButton,
LinkedinShareButton,
FacebookIcon,
TwitterIcon,
InstagramIcon,
LinkedinIcon,
EmailIcon
} from 'react-share'



const ShareButtons = ({ artwork }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/artworks/${artwork._id}`

  return (
    <>
    <h3 className="text-xl font-bold text-center pt-2">
      Share this Artwork
    </h3>
<div className="flex gap-3 justify-center pb-5">
  <FacebookShareButton 
    url={shareUrl}
    quote='Check out this artwork: {artwork.name} by Mary Anne Fusco'
    hashtag= {`#${artwork.type}`} >
    <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <TwitterShareButton 
    url={shareUrl}
    title='Check out this artwork: {artwork.name} by Mary Anne Fusco'
    hashtag= {`[${artwork.type}]`} >
    <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    
    <LinkedinShareButton 
    url={shareUrl}
    quote='Check out this artwork: {artwork.name} by Mary Anne Fusco'
    hashtag= {`#${artwork.type}`} >
    <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
    
    <EmailShareButton 
    url={shareUrl}
    subject= {artwork.name} 
    body= {`Check out this artwork: ${artwork.type} by Mary Anne Fusco`} >
    <EmailIcon size={32} round={true} />
    </EmailShareButton>
</div>
    </>
  )
}

export default ShareButtons
function SocialIcon({ url, img }) {
  return (
    <a href={url} target='_blank'>
      <img src={img} alt='' className='p-2 bg-darkBlue rounded-full ficon' />
    </a>
  );
}

export default SocialIcon;

function Card({ imageUrl, title, description }) {
  return (
    <div
      className='flex flex-col items-center space-y-2 md:w-1/2 duration-200
     hover:scale-110 hover:shadow-lg hover:shadow-[#65e2d9]'
    >
      <div className={`flex items-center justify-center w-20 h-24 mb-6`}>
        <img src={imageUrl} alt='' />
      </div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='max-w-md'>{description}</p>
    </div>
  );
}

export default Card;

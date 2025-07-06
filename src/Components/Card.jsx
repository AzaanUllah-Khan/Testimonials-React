import { StarIcon } from '@heroicons/react/24/solid'

const Card = (props) => {
    const stars = () => {
        const StarElem = [];
        for (let i = 0; i < props.rating; i++) {
            StarElem.push(<StarIcon className='size-4 text-yellow-400' />)
        }
        return StarElem
    }
    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 px-5 py-4 rounded-lg w-70 inset-shadow-sm '>
            <img src={props.photo} alt={props.name} className='size-25 rounded-full object-cover object-top' />
            <h1 className='text-xl font-semibold mt-3'>{props.name}</h1>
            <p className='text-gray-500 mb-2'>{props.location}</p>
            <div className='flex gap-1 mt-1 mb-2'>{stars()}</div>
            <p className='text-center text-lg text-gray-700'>{props.message}</p>
        </div>
    )
}

export default Card

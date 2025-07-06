import testimonials from './assets/testimonials.json';
import Card from './Components/Card';

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center py-5 mb-2'>Testimonials</h1>
      <div className='flex flex-wrap justify-center gap-5 mb-5'>
      {testimonials.map(function (item,idx) {
        return <Card key={idx} rating={item.rating} name={item.name} message={item.message} photo={item.photo} location={item.location}/>
      })}
      </div>
    </div>
  )
}

export default App

import './App.css';
import NavBar from './NavBar';
import Main from './Main';
import About from './About';
import testimonials from './testimonials';
import Reviews from './Reviews';

function App() {
  const reviewElements = testimonials.map(review =>{
    return <Reviews 
            key={review.id}
            {...review}

            />
  })

  return (
<div>
  <NavBar />
  <Main />
  <About />
  <div className='reviewcontent'>
  {reviewElements}
  </div>

</div>

  )
}

export default App;

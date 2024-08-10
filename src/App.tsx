import { useEffect, useState } from 'react'
import './App.scss'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const fetchRandomImages = () => {
    const newImages = [];
    for (let i = 0; i < 9; i++) {
      newImages.push(`https://picsum.photos/200/200?random=${Math.random()}`);
    }
    setImages(newImages);
  };

  const namesList = [
    { name: "Alice" }, { name: "Bob" }, { name: "Charlie" }, { name: "David" }, { name: "Eve" },
    { name: "Frank" }, { name: "Grace" }, { name: "Hank" }, { name: "Ivy" }, { name: "Jack" },
    { name: "Kara" }, { name: "Leo" }, { name: "Mona" }, { name: "Nina" }, { name: "Oscar" },
    { name: "Paul" }, { name: "Quinn" }, { name: "Rita" }, { name: "Sam" }, { name: "Tina" },
    { name: "Uma" }, { name: "Vince" }, { name: "Wendy" }, { name: "Xander" }, { name: "Yara" },
    { name: "Zane" }, { name: "Amy" }, { name: "Brian" }, { name: "Cathy" }, { name: "Derek" },
    { name: "Ella" }, { name: "Fred" }, { name: "Gina" }, { name: "Harry" }, { name: "Isla" },
    { name: "Jake" }, { name: "Kylie" }, { name: "Liam" }, { name: "Mia" }, { name: "Noah" },
    { name: "Olivia" }, { name: "Pete" }, { name: "Quincy" }, { name: "Rachel" }, { name: "Steve" },
    { name: "Tara" }, { name: "Ursula" }, { name: "Victor" }, { name: "Will" }, { name: "Xena" }
];

console.log("Current Index => " + currentIndex);


useEffect(() => {
  fetchRandomImages();
  const interval = setInterval(fetchRandomImages, 10000);
  return () => clearInterval(interval);
}, []);



  return (
    <>
     <div className='wrapper'>
        <div className='customer-list' >
          {namesList.map( (item, indx) => (
           <div style={ indx == currentIndex ? {backgroundColor: 'grey'}: {}} className='customer-list-card'
             onClick={() => setCurrentIndex(indx)}
             key={indx}>
              <h3>Customer 0{indx + 1} : {item.name}</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div> 
          ))}
       
        </div>
        <div className='customer-detail'>
          <h1>{namesList[currentIndex].name}</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          <div className='img-container'> 
              {images.map( (item, indx) =>(
                <div className='img-div' key={indx}><img src= {item}/></div>
              ))}
          </div>
        </div>
     </div>
    </>
  )
}

export default App;

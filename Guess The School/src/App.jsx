import './App.css'
import Cards from './components/cards'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

 const updateCard = () => {
    // setCount(Math.floor(Math.random() * 12));
    if (count === 11) {
      setCount(0);
    } else {
    setCount(count + 1);
    }
  };

  const Schools = [
   {
      name: "The University of Southern Mississippi",
      mascot: "Seymour the Golden Eagle",
      img: "https://mascothalloffame.com/wp-content/uploads/2023/03/SoMiss-e1678822654287.jpg",
      location: "Hattiesburg, Mississippi"
    },
    {
      name: "Mississippi State University",
      mascot: "Bully the Bulldog",
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4986,h_2804,x_0,y_0/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images%2FImagnImages%2Fmmsport%2F296%2F01hs9pn45cbxr030xb1z.jpg",
      location: "Starkville, Mississippi"
    },
    {
      name: "University of Florida",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Albert_and_Alberta.jpg/413px-Albert_and_Alberta.jpg",
      location: "Gainesville, Florida",
      mascot: "Albert and Alberta the Alligators",
    },
   {
      name: "University of Alabama",
      img: "https://rolltide.com/images/2023/7/3/BigAl.jpg",
      location: "Tuscaloosa, Alabama",
      mascot: "Big Al the Elephant"
    },
    {
      name: "University of Iowa",
      img: "https://dailyiowan.com/wp-content/uploads/2023/10/2023_09_16_HERKY_CB0014.jpg",
      location: "Iowa City, Iowa",
      mascot: "Herky the Hawk"
    },
    {
      name: "Purdue University",
      img: "https://cdn.vox-cdn.com/thumbor/CZanmYHNBcX2_ebuO064DRgyxqE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24837724/usa_today_17012264.jpg",
      location: "West Lafayette, Indiana",
      mascot: "Purdue Pete"
    },
    {
      name: "University of Texas",
      img: "https://tower.utexas.edu/wp-content/uploads/2016/09/tumblr_inline_nuq1u5BHTL1qjkl22_1280.jpg",
      location: "Austin, Texas",
      mascot: "Hook 'em the Longhorn"
    },
  {
      name: "University of Georgia",
      img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2F71a7209514434dda285c1fdb3e04e82084e4a2a4eb881f62a899f5c9cdc533df.jpg",
      location: "Athens, Georgia",
      mascot: "Hairy Dawg"
    },
    {
      name: "University of Tennessee",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/gray/BULMNEVXERFABKYA7BWPTBUHV4.jpg",
      location: "Knoxville, Tennessee",
      mascot: "Smokey the Bluetick Coonhound"
    },
    {
      name: "University of Colorado",
      img: "https://www.colorado.edu/coloradan/sites/default/files/styles/large/public/slider/coloradanfall21-looka-1500x1000.png?itok=vlc-TEHS",
      location: "Boulder, Colorado",
      mascot: "Chip the Buffalo"
    },
   {
      name: "University of Oregon",
      img: "https://wwhttps://render.fineartamerica.com/images/rendered/default/poster/8/5.5/break/images-medium-5/oregon-ducks-mascot-puddles-at-autzen-stadium-joshua-rainey.jpgw.goducks.com/images/2021/8/10/Donald_Duck.jpg",
      location: "Eugene, Oregon",
      mascot: "The Oregon Duck(Donald Duck)"
    },
    {
      name: "University of Miami",
      img: "https://mascothalloffame.com/wp-content/uploads/2019/09/Sebastian-The-Ibis-Univ-of-Miami.png",
      location: "Coral Gables, Florida",
      mascot: "Sebastian the Ibis"
    }
  ]
  

  return (
    <div>
      <div className='Header'>
      <h1>Guess The School</h1>
      <h4>In this app, you are going to guess Colleges based on their Mascot. Are you Mascot-Savvy?</h4>
      <h6>Number of cards: 10</h6>
      </div>
      <div className='cards'>
        <Cards school={Schools[count]} />
      </div>
      <button onClick={updateCard}>Next</button>
    </div>
  );
}

export default App;

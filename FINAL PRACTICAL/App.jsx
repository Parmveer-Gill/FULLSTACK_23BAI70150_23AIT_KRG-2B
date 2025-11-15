
import './App.css';
//Importing a component from other file
import Title from "./Title.jsx";
import ProductTab from './ProductTab.jsx';

import CreatePostForm from './form.jsx';
function Description() {
  return <h3>This is my First React Description</h3>
}

function App() {//This is our SUPREME component

  return (
    <div>
      {/*       
      <Title />
      <Description /> */}
      {/* <ProductTab></ProductTab>
       */}


      {/* <button>Press</button> */}
        <CreatePostForm></CreatePostForm>
    </div>
  )
}

export default App

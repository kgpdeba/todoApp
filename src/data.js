import img from './assets/react.svg'
import img1 from './assets/vite.svg'
import img2 from './assets/react.svg'

export const Core_Concepts = [
    {
        image:img,
        title:"JSX",
        desc:"Core Jsx"
    },
      {
        image:img1,
        title:"Props",
        desc:"Core Props"
    },
      {
        image:img2,
        title:"Redux",
        desc:"Core Redux"
    },

]

export const Vals = {
  components:{
    title:'Props',
    desc:"Hello I am Props",
    example:
    `function greet(){
    return <h1>hello Props</h1>
    }`
  },
   jsx:{
    title:'Jsx',
    desc:"Hello I am Jsx",
    example:
    `function greet(){
    return <h1>hello Jsx</h1>
    }`
  },
   components:{
    title:'Components',
    desc:"Hello I am Component",
    example:
    `function greet(){
    return <h1>hello Component</h1>
    }`
  },
   state:{
    title:'State',
    desc:"Hello I am State",
    example:
    `function greet(){
    return <h1>hello State</h1>
    }`
  }
}

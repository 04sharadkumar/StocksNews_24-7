import React from 'react'
import { First,Second,Third,Fourth,Fifth,Sixth,Seven,Eight,Nine,Ten, useFetch } from '@/components/Hook/codefile'
import { fromTheme } from 'tailwind-merge'

function Test() {
  const data = useFetch("https:jsonplaceholder.tyicode.com/users")
  console.log(data);
  
  return (
    <div>
      <First />
      <Second />
      <Third />
      <Fourth/>
      <Fifth />
      <Sixth />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
      <div>
        {data?data.map((res)=>{

          return (
            <h4 key={res.id}>
              {res.id}.{res.name}
            </h4>
          )


        }):alert('error in the useFetch')}
      </div>
      


      
    
    </div>
    
    
  )
}

export default Test
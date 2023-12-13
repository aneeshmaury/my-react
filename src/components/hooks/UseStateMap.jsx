
export function UsestateMap(){


const arr=[
    {name:'Aneesh' ,Age:20},
    {name:'vikas' ,Age:21}
];

return(<>
     {arr.map((person,index)=>
    (
<h1 key={index}>name is {person.name} and age {person.Age}</h1>
    ))}
</>
);
}
    
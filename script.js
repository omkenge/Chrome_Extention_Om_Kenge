fetch('https://api.quotable.io/random')
    .then(data=>data.json())
    .then(jokeData=>{
        const jokeText=jokeData.content;

        const name=document.getElementById('name');
        name.innerHTML=jokeText;
        
    })

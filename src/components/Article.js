

function Article({title, date, preview}){
   console.log({date})
    return(
    <article>
        <h3>{title} </h3>
        <small>{date} alt = "January 1, 1970"</small>
        <p>{preview}</p>
        
   
    
    </article>
        
    
)}

export default Article;
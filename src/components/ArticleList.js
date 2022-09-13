import Article from "../components/Article"

function ArticleList({posts}){
    // const date = "January 1, 1970"

    return(
        <main>
            {posts.map(item => <Article key ={item.id} title = {item.title} date = {item.date} preview={item.preview}/>)}

        </main>
    )
}

export default ArticleList;
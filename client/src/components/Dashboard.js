import  React, {
    Component
  } from 'react'
  import { Link } from 'react-router-dom';
export default class Dashboard extends React.Component
{   constructor(props)
    {
    super(props);
    this.state={
        isLoaded: false,
        error:null,
        articles : []
    }
    }
componentDidMount()
{
    fetch('https://newsapi.org/v2/everything?q='+this.props.match.params.id+'&apiKey=b4d084a3fdcd4e5195ed822ae6cc0f25')
    .then((res) =>res.json())
    .then((res)=>{
        //  console.log(res)
        this.setState(
            {articles:res.articles,
            isLoaded:true
        });
    },
    (error)=>{
    this.setState({
            isLoaded:true,
            error
        });

        }
    )
}
    render()
    {
        const { error, isLoaded, articles } = this.state;
        if(error)
        {
            return <div>Error thrown</div>
        }
        else if(!isLoaded)
        {
            return <div>Loading....</div>
        }
        else
        {
        return (
                <div>                    
                {articles.map(article =>(
                        <dl className="pull-left">
                            <dt className="pull-left">{article.title}</dt>
                            <dd>{article.description}</dd>
                            <dd>{article.content}</dd>
                            <dt>{article.author}</dt>
                            <div>
                            <a href={article.url}>Full content here</a>
                            </div>
                            <div>
                            <Link to ={"/Chat/"+ article.title}>Do you have anything to say?</Link>
                            {/* <a href={article.url}>Do you have anything to say?</a> */}
                            </div>
                        </dl>
                ))}
                </div>
        );
    }
    }
}

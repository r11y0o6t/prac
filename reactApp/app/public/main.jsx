function App() {
  const [tweets, setTweets] = React.useState([
    {
      id: 0,
      icon: '中',
      displayName: '中島　僚太',
      accountName: 'NakashimaRyota',
      content: '明けましておめでとう！'
    },
    {
      id: 1,
      icon: '高',
      displayName: '高屋　雪乃',
      accountName: 'TakayaYukino',
      content: '今年もよろしく！'  
    }
  ]);
  
  const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);

  return (
    <div>
      <TweetInput addTweet={addTweet}/>
      <Timeline tweets={tweets}/>
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);  
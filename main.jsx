function App() {
        // useStateでツイート配列を取得する
        //初期値は今まで通り
        const [tweets, setTweets] = React.useState([
                {
                        id:0,
                        // icon:'もろこし',
                        displayName:'もろこし太郎',
                        accountName:'morokoshi',
                        content:'今日ももろこしがうまい'
                },
                {
                        id:1,
                        // icon:'えびでんす',
                        displayName:'えびでやんす',
                        accountName:'evidence',
                        content:'かにみそがたべたい'
                }
        ]);

        //addTweet関数はuseCallbackで作成する
        //これも毎回作成していると重くなるので
        const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);

        return (
                <div>
                        <TweetInput addTweet={addTweet} />
                        <Timeline tweets={tweets}/>
                </div>
        );
}

const target= document.querySelector('#app');
ReactDOM.render(<App/>, target);

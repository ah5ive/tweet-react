class ListItem extends React.Component {
//ListItem being request at Alltweets
    render() {
        return (
                <div className="post">
                <img src={this.props.profile_image_url} alt="profile image" />
                <h4><strong>{this.props.name}: </strong>{this.props.text}</h4>
                <p>favourites: {this.props.favorite_count} retweet: {this.props.retweet_count}</p>
                </div>

        );
    }
}



class Alltweets extends React.Component {

    render() {
        console.log(this.props.items)
        let itemsElements = this.props.items.map( (item) => {
                              return <ListItem key={item.id}
                              //ListItem component
                              // can spit out before sending to another Component
                                        text={item.text}
                                        name={item.user.name}
                                        favorite_count={item.favorite_count}
                                        retweet_count={item.retweet_count}
                                        profile_image_url={item.user.profile_image_url}>
                                        </ListItem>;

                            });
        return (
                <div className="wrapper">
                    <div className="container">
                        <h2>Kayne West Tweets</h2>

                            {itemsElements}

                    </div>
                </div>
        );
    }
}

ReactDOM.render(
    <Alltweets items={tweets} />,
    document.getElementById('root')
);
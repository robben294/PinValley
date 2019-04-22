# PinValley

PinValley is a faithful clone of Pinterest that allow users to share images and the corresponding website, create boards, and save other users' pins.

You can visit PinValley [here](https://pin-valley.herokuapp.com/)

## Features

* User accounts with secure authentication
* User profiles with access to all of their content
* User profiles edit
* Board and Pin create, edit and save
* Home feed with infinite scrolling

![Home Feed](lib/assets/feed.png)

## Infinite Scroll & filtering pins
Using pagination control on rails backend and React-Waypoint on frontend, each set of pins were rendered on an as-needed basis. This lowers backend querying. It also reduces the bandwidth speed requirements, when compared to rendering a large number of pins simultaneously. Below is the simple version code snippets of its implementation.


### Infinite Scroll & filtering pins Backend 

```Ruby
  def index
        pin_boards_join = PinBoard.includes(pin: { photo_attachment: :blob }).joins(:pin).joins(:board)
        pin_boards_filtered = pin_boards_join.where.not(pins: {author_id: current_user.id}).where.not(boards: {creator_id: current_user.id})
        @pin_boards = pin_boards_filtered.includes(:board).includes(:pin).page(params[:page]).per(5)

        render 'api/pin_boards/index'
    end
```

### Infinite Scroll Frontend
```Javascript
  this.state = {
      page: 1,
  };
  
  handleFetchMoreFeed(e) {
      this.setState({page: this.state.page + 1});
      this.props.fetchMoreFeed(this.state.page);
  }
  
  render() {
    return (
        <div>
            <Waypoint
                onEnter={this.handleFetchMoreFeed}
            />
        </div>
    )
  }
        
```

## Technology

PinValley runs on the Rails framework and is hosted on Heroku. Rails is used strictly as a RESTful API, returning JSON data and interpreted by React.js in the frontend.

As a single-page application, React.js and Redux.js are used in frontend to manage frontend data. Node package manager (npm) is used to install all of the frontend dependencies.

AWS S3 is used for managing photos that users upload. And PostgreSQL is used for managing database except photos.
AJAX requests are used for communication with rails backend.

## Future Implementations
* Mantionary style for pins styling
* Follow between users and between users and boards

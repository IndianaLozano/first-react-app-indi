import React, {Component} from 'react';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';

/*
  INSIDE Function App():
  const name = 'John';
  const lastName = 'Wick';
  const age = 28;
  const job = 'Gentleman';
  
  const getFullName = (name, lastName) => {
    return `${name} ${lastName}`
  }

  const nArr = [1, 2, 3, 4]

  const inputPlaceHolder = 'Enter your data';
  const detailsInputBox = <input placeholder={inputPlaceHolder} autoComplete/>

  const blogObj = {
    title: 'Blog Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, dictumst quisque euismod lectus sapien blandit, convallis metus magnis vel ridiculus justo.'}

  }*/

class App extends Component {

  state = {
    showBlogs: true,
    blogArray: [
        {
          id: 1,
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing, elit dictum dis imperdiet senectus inceptos platea, sollicitudin tellus risus hendrerit iaculis. ",
          likeCount: 0,
        },
        {
          id: 2,
          title: "Blog Title 2",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing, elit dictum dis imperdiet senectus inceptos platea, sollicitudin tellus risus hendrerit iaculis. ",
          likeCount: 0,
        },
        {
          id: 3,
          title: "Blog Title 3",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing, elit dictum dis imperdiet senectus inceptos platea, sollicitudin tellus risus hendrerit iaculis. ",
          likeCount: 0,
        }
    ]
  }

    onLikeBtnClick = (pos) =>{
      const updatedBlogList = this.state.blogArray;
      const updatedBlogObj = updatedBlogList[pos];

      updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
      updatedBlogList[pos] = updatedBlogObj;

      this.setState({blogArray: updatedBlogList});
    }

    onHideBtnClick = () => {
      /* this.showBlogs = false;
      console.log(this.showBlogs);
      let updatedState = !this.state.showBlogs; */
      this.setState ((prevState, prevProps) => {
        return {showBlogs: !prevState.showBlogs}
      });
      console.log(this.state.showBlogs);
    }

    render(){
      console.log('Render Called');
      console.log(this.state);

      const blogCards = isArrayEmpty(this.state.blogArray) ? [] : this.state.blogArray.map((item, pos) => {
          
        return (
          <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
          /*<div className="BlogCard" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>*/
        )
      })

      return(
        <div className="App">
          <button className="ShowHideBtn" onClick={this.onHideBtnClick}>
          {this.state.showBlogs ? 'Hide blogs' : 'Show blogs'}
          </button>
        <br></br>
        {
          this.state.showBlogs ? blogCards : null
        }
        </div>
      );
    }

  /*  React.createElement("div", {
      className: "App"
    }, React.createElement("div", null, React.createElement("h3", null, blogObj.title), React.createElement("p", null, blogObj.description)), React.createElement("div", null, React.createElement("h3", null, blogObj.title), React.createElement("p", null, blogObj.description)), React.createElement("div", null, React.createElement("h3", null, blogObj.title), React.createElement("p", null, blogObj.description)))*/
}

export default App;
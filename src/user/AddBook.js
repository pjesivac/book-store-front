// import React from "react";
// import axios from "axios";
// class NewPost extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: 0,
//       title: "",
//       image_url: "",
//       author: "",
//       content: "",
//       posts: [],
//     };

//     this.submitForm = this.submitForm.bind(this);
//   }
//   componentDidMount() {
//     axios
//       .get(
//         `https://jsonblob.com/api/jsonBlob/a7db6075-58e1-11eb-bd60-5bef0f35e980`
//       )
//       .then((res) => {
//         const posts = res.data.posts;
//         this.setState({ posts });
//         if (posts.length === 0)
//           this.setState((current_state) => {
//             return { id: current_state.id + 1 };
//           });
//         else {
//           let newId = parseInt(posts[posts.length - 1].id) + 1;
//           this.setState((current_state) => {
//             return { id: current_state.id + newId };
//           });
//         }
//       });
//   }

//   postPost = (data) => {
//     return axios(
//       `https://jsonblob.com/api/jsonBlob/a7db6075-58e1-11eb-bd60-5bef0f35e980`,
//       {
//         method: "PUT",
//         data,
//       }
//     );
//   };

//   checkTitleAuthor(stringy) {
//     if (stringy.length <= 20) return true;
//     else return false;
//   }
//   checkContent(content) {
//     if (content.length <= 250) return true;
//     else return false;
//   }
//   areTheyEmpty(stringy) {
//     if (stringy.length === 0) return false;
//     else return true;
//   }
//   submitForm(e) {
//     e.preventDefault();
//     if (
//       this.areTheyEmpty(this.state.title) &&
//       this.areTheyEmpty(this.state.author) &&
//       this.areTheyEmpty(this.state.image_url) &&
//       this.areTheyEmpty(this.state.content) &&
//       this.checkContent(this.state.content) &&
//       this.checkTitleAuthor(this.state.title) &&
//       this.checkTitleAuthor(this.state.author)
//     ) {
//       let post = {
//         id: this.state.id,
//         title: this.state.title,
//         image_url: this.state.image_url,
//         author: this.state.author,
//         content: this.state.content,
//       };
//       let posts = this.state.posts;
//       posts.push(post);
//       this.setState(posts);
//       let newPosts = { posts: this.state.posts };
//       this.postPost(newPosts);
//       window.location.href = `/post/${this.state.id}`;
//     } else {
//       alert("Data invalid");
//     }
//   }
//   render() {
//     return (
//       <div className="row">
//         <form className="col s12" onSubmit={this.submitForm}>
//           <div className="row">
//             <div className="input-field col s6">
//               <input
//                 placeholder="Author"
//                 id="author"
//                 type="text"
//                 className="validate"
//                 value={this.state.author}
//                 onChange={(e) => this.setState({ author: e.target.value })}
//               />
//             </div>
//             <div className="input-field col s6">
//               <input
//                 placeholder="Title"
//                 id="title"
//                 type="text"
//                 className="validate"
//                 value={this.state.title}
//                 onChange={(e) => this.setState({ title: e.target.value })}
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="input-field col s12">
//               <input
//                 placeholder="Image URL:"
//                 id="image"
//                 type="url"
//                 className="validate"
//                 value={this.state.image_url}
//                 onChange={(e) => this.setState({ image_url: e.target.value })}
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="input-field col s12">
//               <textarea
//                 placeholder="Article:"
//                 id="content"
//                 name="content"
//                 className="materialize-textarea"
//                 value={this.state.content}
//                 onChange={(e) => this.setState({ content: e.target.value })}
//               ></textarea>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col s3">
//               <button type="submit" className="waves-effect waves-light btn">
//                 Create New Post
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default NewPost;

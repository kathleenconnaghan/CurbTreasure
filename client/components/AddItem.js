import React from 'react';
import { addNewItem } from "../store/items"; 
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import PublishIcon from '@material-ui/icons/Publish';
import LinearProgress from '@material-ui/core/LinearProgress';

//------------------------Styles

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1), // test
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//-------------------Add Item Class Component

class AddItem extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      title:'', 
      description:'', 
      location:'', 
      category:'', 
      previewImage: undefined,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // --------------- TEXT HANDLE SUBMIT --------------------------
  handleSubmit(event){
    
    
    const { title, description, location, category,} = this.state
    event.preventDefault()
    // alert(`
    //   ____Your Details____\n
    //   Title : ${title}
    //   Description : ${description}
    //   Location : ${location}
    //   Category : ${category}
    // `)
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(this.state);
      // convert image file to base64 string
      this.props.addNewItem({
        title: this.state.title, 
        description: this.state.description,
        location: this.state.location,
        category: this.state.category,
        imageUrl: reader.result
        
      });
    }, false);
    reader.readAsDataURL(this.state.selectedFile);
  }
  
  // --------------- TEXT HANDLE CHANGE --------------------------
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value, // name is applicable for all below 
      // previewImage : event.target.selectedFile,
    });
  }
//--------------------- IMAGE CHANGE & UPLOAD
  onFileChange = event => {
    const theFile = event.target.files[0];

    this.setState({ selectedFile: theFile });

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      this.setState({previewImage: reader.result});
    }, false);
    reader.readAsDataURL(theFile);
      // {(
      //     <div>
      //       <img className="preview my20" src={this.state.previewImage} alt="" height= "300" width= "300"/>
      //       Heeeeey
      //     </div>
      //   )}
  };
      
  fileData = () => {
    if (this.state.selectedFile) {
      
      return (
        <div>
          <h2>Preview</h2>
  
          {this.state.previewImage && (
          <div>
            <img className="preview my20" src={this.state.previewImage} alt="" height= "300" width= "300"/>
            
          </div>
        )}
            <Typography>File Name: {this.state.selectedFile.name}</Typography>
            <Typography>File Type: {this.state.selectedFile.type}</Typography>
        </div>

      );
    } else {
      return (
        <div>
          <br />
          <h4>Please complete all fields before submitting</h4>
        </div>
      );
    }
  };


//-------------------- IMAGE RENDER ---------------------------------
  render(){
    const {
      currentFile,
      previewImage,

    } = this.state;
    return(
    
      
      <Container component="main" maxWidth="xs">
        
      <div>
        <div>
          <div>
    
              <h1> Share your treasure! </h1>

           <div>
  
               {/* <Button input type="file" onChange={this.onFileChange}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon= {<AddPhotoAlternateIcon />}
          >
            {"Provide A Photo"}
          </Button> */}

          {/* <Button input type="file" onChange={this.onFileChange}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon= {<AddPhotoAlternateIcon />}
          >
            {"Provide A Photo"}
          </Button> */}

          <Button
            variant="contained"
            component="label"
            color="primary"
          >
            Provide a Photo
            <input
              type="file"
              hidden
              onChange={this.onFileChange}
            />
          </Button>

          {/* <div>
            <input type="file" name="file"/>
            <div>
              <button >Submit</button>
            </div>
          </div> */}

           </div>
        {this.fileData()}
       </div>
      </div>
      

    
{/* -------------------- TEXT RENDER --------------------------------- */}
  
      <form onSubmit={this.handleSubmit}>
        {/* -----------------------------------------------TITLE */}
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="What is it?"
            name="title"
            autoComplete="title"
            autoFocus
          />
        {/* -----------------------------------------------DESCRIPTION */}
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            label="Category"
            name="category"
            autoComplete="category"
            value= {this.state.category}
            onChange={this.handleChange}
          />
          {/* -----------------------------------------------LOCATION */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            value= {this.state.description}
            onChange={this.handleChange}
          />
             {/* -----------------------------------------------CATEGORY */}
             <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="location"
            label="Location"
            name="location"
            autoComplete="location"
            value= {this.state.location}
            onChange={this.handleChange}
          />
          {/* -----------------------------------------------UPLOAD SUBMIT BUTTON */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<PublishIcon/>}>
            {"Upload Your Treasure"}
          </Button>
      </form>
      </div>

      </Container>
    )
  }
}
// ---------------------------------------------------------- Map State & Dispatch
const mapStateToProps = (state) => ({
  item: state.item,
});

const mapDispatchToProps = (dispatch) => ({
  addNewItem: (item) => dispatch(addNewItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
# Comments App
This project is comments app using React Redux. 

## Instructions
* "npm run start" - start with production environment
* "npm run start_stage" - start with stage environment
* "npm run start_dev" - start with development environment

### config.js (`/utills` )
Set up the URLS for dev, stage and prod environment

### API requests
All the API requests are located at the redux actions files (`/redux/<name>/<name>Actions` ).<br/>

## Project structure:
* components
* containers
* redux
* utills
* app.js
* index.js
* serviceWorker.js

## Basic Information
All the components actions will be managed in the [MainContainer](#MainContainer) by passing them as props to the child components.<br/>

### Containers:
<a name="MainContainer"></a>
* Main:
Container that charge of all redux integrations, it's the main container of the app.<br/>
This container handles components actions by sending them props and trigger the fetch components request on app first rendering.<br/>
The props passed from this container: 
  * handleSendComment - handles send comment action 
  * handleFilter - handles filter applied action 
  * comments redux state - the state of the comments managed by redux

* CommentsContainer:<br/>
Contains the body of the comments including the filter component.<br/>
This component should get the following props:<br/>
  * comments redux relevant state as "state"
  * handleFilter function to handle the filter actions

## Components:
* NewCommentComponent:<br/>
This is the top component including the input fields and a submit button to create a new comment.<br/>
On submit action triggered this component will send the inputs as comment object to the "handleSendComment" function from the props.<br/>
For better UX this component should get "state" object that including "loading" state from props.

* FilterCommentsComponent:<br/>
The filter input component needs to get "handleFilterInputChanged" function that passed through props, so the parent container will handle the filter action.

* CommentComponent:<br/>
This is the comments showen below component.
This component should get comment object from props.<br/>

// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet = () => {

    const message = this.createChatBotMessage("Hello friend");
    this.updateChatbotState(message);
   };
   
   handleSDLCList = () => {
    const message = this.createChatBotMessage(
      "The software development life cycle consists of planning, analysis, design, implementation, testing, deployment and maintenance."
      + " Here are some links to explain more about the SDLC.",
      {
        widget: "SDLCLinks"
      }
    );
    this.updateChatbotState(message);
   };

   handleMethodologyList = () => {
    const message = this.createChatBotMessage(
      "Some of the most popular methodologies used in the SDLC include the Waterfall,"
      + " Agile, Scrum, Kanban, Lean, and Spiral. Click one of the links below to learn more.",
      {
        widget: "MethodologyLinks"
      }
    );
    this.updateChatbotState(message);
   }

   handleArchList = () => {
    const message = this.createChatBotMessage(
      "Some of the most popular software architectures used include the Monolithic,"
      + " Client-Server, Microservices, Service-Oriented, Event-Driven, Layered, and Model-View-Controller architectures."
      + " Click one of the links below to learn more.",
      {
        widget: "ArchLinks"
      }
    );
    this.updateChatbotState(message);
   }

   handleMGMTList = () => {
    const message = this.createChatBotMessage(
      "There are multiple tools used to manage projects in software development. "
      + "These are some of the most popular as well for testing and maintenance of code.",
      {
        widget: "MGMTLinks"
      }
    );
    this.updateChatbotState(message);
   }

   handleOtherList = () => {
    const message = this.createChatBotMessage(
      "Within the development process, there are other factors to consider. Click one of the links below to learn more.",
      {
        widget: "OtherLinks"
      }
    );
    this.updateChatbotState(message);
   }

   updateChatbotState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
   };
 }
 
 export default ActionProvider;
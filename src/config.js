// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
const config = {
  botName: "DEVBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help you learn about software development. What do you want to learn?",{
    widget: "learningOptions",
  }),
],
widgets: [
  {
    widgetName: "learningOptions",
    widgetFunc: (props) => <LearningOptions {...props}/>,
  },
  {
    widgetName: "SDLCLinks",
    widgetFunc: (props) => <LinkList {...props}/>,
    props: {
      options: [
        {
          text: "Link 1",
          url: "https://pmbasics101.com/software-development-life-cycle/",
          id: 1,
        },
        {
          text: "SDLC Phases and Models",
          url: "https://www.softwaretestinghelp.com/software-development-life-cycle-sdlc/",
          id: 2,
        },
        {
          text: "Video Explanation with Examples",
          url: "https://www.youtube.com/watch?v=CjKzkj1xUJk",
          id: 3,
        }
      ]
    }
  },
  {
    widgetName: "MethodologyLinks",
    widgetFunc: (props) => <LinkList {...props}/>,
    props: {
      options: [
        {
          text: "Waterfall",
          url: "https://www.projectmanager.com/guides/waterfall-methodology",
          id: 1,
        },
        {
          text: "Agile",
          url: "https://www.atlassian.com/agile",
          id: 2,
        },
        {
          text: "Scrum",
          url: "https://www.nimblework.com/agile/scrum-methodology/#:~:text=Scrum%20is%20an%20agile%20development,the%20development%20of%20the%20project.",
          id: 3,
        },
        {
          text: "Kanban",
          url: "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban",
          id: 4,
        },
        {
          text: "Lean",
          url: "https://kanbanize.com/lean-management/what-is-lean-management",
          id: 5,
        },
        {
          text: "Spiral",
          url: "https://www.techtarget.com/searchsoftwarequality/definition/spiral-model#:~:text=The%20spiral%20model%20is%20a,large%2C%20expensive%20and%20complicated%20projects.",
          id: 6,
        }
      ]
    }
  },
  {
    widgetName: "ArchLinks",
    widgetFunc: (props) => <LinkList {...props}/>,
    props: {
      options: [
        {
          text: "Monolithic",
          url: "https://www.geeksforgeeks.org/monolithic-architecture/#",
          id: 1,
        },
        {
          text: "Client-Server",
          url: "https://www.simplilearn.com/what-is-client-server-architecture-article#:~:text=The%20client%2Dserver%20architecture%20refers,model%20or%20client%20server%20network.",
          id: 2,
        },
        {
          text: "Microservices",
          url: "https://cloud.google.com/learn/what-is-microservices-architecture#:~:text=Microservices%20architecture%20(often%20shortened%20to,its%20own%20realm%20of%20responsibility.",
          id: 3,
        },
        {
          text: "Service-Oriented",
          url: "https://aws.amazon.com/what-is/service-oriented-architecture/#:~:text=you%20implement%20microservices%3F-,What%20is%20service%2Doriented%20architecture%3F,other%20across%20platforms%20and%20languages.",
          id: 4,
        },
        {
          text: "Event-Driven",
          url: "https://aws.amazon.com/event-driven-architecture/",
          id: 5,
        },
        {
          text: "Layered",
          url: "https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html",
          id: 6,
        },
        {
          text: "Model-View-Controller",
          url: "https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm#:~:text=The%20Model%2DView%2DController%20(,development%20aspects%20of%20an%20application.",
          id: 7,
        }
      ]
    }
  },
  {
    widgetName: "MGMTLinks",
    widgetFunc: (props) => <LinkList {...props}/>,
    props: {
      options: [
        {
          text: "GitHub",
          url: "https://www.jobsity.com/blog/a-quick-guide-to-using-github-for-project-management",
          id: 1,
        },
        {
          text: "Jira",
          url: "https://www.contegix.com/resources/jira-project-management",
          id: 2,
        },
        {
          text: "Docker",
          url: "https://docker-curriculum.com/",
          id: 3,
        },
        {
          text: "Travis CI",
          url: "https://adamtheautomator.com/travis-ci/",
          id: 4,
        }
      ]
    }
  },
  {
    widgetName: "OtherLinks",
    widgetFunc: (props) => <LinkList {...props}/>,
    props: {
      options: [
        {
          text: "Costs",
          url: "https://www.uptech.team/blog/software-development-costs#:~:text=Ultimately%2C%20it%20comes%20down%20to,than%20700%20hours%20to%20develop.",
          id: 1,
        },
        {
          text: "Hurt Statement",
          url: "https://www.webstrategiesinc.com/blog/pain-statements-and-user-intent#:~:text=What%20are%20pain%20statements%3F,they%20are%20expressed%20as%20statements.",
          id: 2,
        },
        {
          text: "Development Team Roles",
          url: "https://projectcor.com/blog/fundamental-roles-on-a-software-development-team/",
          id: 3,
        }
      ]
    }
  },
  {
    widgetName: "deploymentLinks"
  },
  {
    widgetName: "maintenanceLinks"
  }
  
],
};

export default config

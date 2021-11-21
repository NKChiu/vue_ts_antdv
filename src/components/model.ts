export interface AvatarAction{
    name: string;
    title: string;
}

export const MenuItems: Object[] = [
    {
        key:"/",
        title:"MENU1",
        path:"/",
        uri: "/",
        icon: "home",
        children:[
          {
              key:"/menu1/page1",
              title:"title1",
              path:"/menu1/page1",
              uri: "/menu1/page1",
              icon: "tool",
              disabled:false,
              parentId: ""
          },
          {
              key:"/menu1/page2",
              title:"title2",
              path:"/menu1/page2",
              uri: "/menu1/page2",
              icon: "tool",
              
              disabled:false,
              parentId: ""
          }

        ],
        disabled:false,
        parentId: ""
    },
    {
        key:"/menu2",
        title:"MENU2",
        path:"",
        uri: "",
        icon: "file",
        children:[
          {
              key:"/menu2/page3",
              title:"title3",
              path:"/menu2/page3",
              uri: "/menu2/page3",
              icon: "tool",
              disabled:false,
              parentId: ""
          },
          {
              key:"/menu2/page4",
              title:"title4",
              path:"/menu2/page4",
              uri: "/menu2/page4",
              icon: "tool",
              
              disabled:false,
              parentId: ""
          }

        ],
        disabled:false,
        parentId: ""
    },
]
import type {Post} from "./CompoundComponentDesignPattern.tsx";
import {createContext, type ReactNode, useContext} from "react";

interface CardProps {
  post: Post;
  children: ReactNode;
}

interface CardContext {
  post: Post;
}

/*
* This is the normal card component, and it uses props to render the card data
* but when we will convert it into a compound component then we will have to use
* context to share the post data among smaller components
* */
// const Card = ({post}: CardProps) => {
//   return (
//     <div className="bg-slate-200 p-5 rounded-2xl">
//       <h1 className="text-xl">{post.title}</h1>
//       <p className="my-2">{post.description}</p>
//       <p className="text-sm text-gray-500">{post.author}</p>
//
//       <div className="w-full mt-5 flex justify-end">
//         <button className="bg-slate-500 py-2 px-5 text-gray-100 rounded-2xl mr-2 hover:bg-slate-400 cursor-pointer">Read
//           More
//         </button>
//         <button
//           className="bg-slate-500 py-2 px-5 text-gray-100 rounded-2xl hover:bg-slate-400 cursor-pointer">Comments
//         </button>
//       </div>
//     </div>
//   )
// }

/*
* Now we are using context to share the data among the components
* and breaking down the card component into a smaller components
* */
const CardContext = createContext<CardContext | undefined>(undefined);

function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a Card');
  }
  return context;
}

/*
* Broken the Card component is broken down to different smaller components
* and exported to be used in any component. This is only beneficial if we
* are using this card component at multiple places, and we need some specific
* part of card component like we need only title and description somewhere
* but somewhere we want title and author, or somewhere we don't want button
* Then only breaking down is worthy otherwise its not
* */
const CardComponent = ({post, children}: CardProps) => {
  return (
    <CardContext.Provider value={{post}}>
      <div className="bg-slate-200 p-5 rounded-2xl">
        {children}
      </div>
    </CardContext.Provider>
  )
}

const CardTitle = () => {
  const {post} = useCardContext();
  return (
    <h1 className="text-xl">{post.title}</h1>
  )
}

const CardDescription = () => {
  const {post} = useCardContext();
  return (
    <p className="my-2">{post.description}</p>
  )
}

const CardAuthor = () => {
  const {post} = useCardContext();
  return (
    <p className="text-sm text-gray-500">{post.author}</p>
  )
}

const CardActions = () => {
  return (
    <div className="w-full mt-5 flex justify-end">
      <button
        className="bg-slate-500 py-2 px-5 text-gray-100 rounded-2xl mr-2 hover:bg-slate-400 cursor-pointer">Read
        More
      </button>
      <button
        className="bg-slate-500 py-2 px-5 text-gray-100 rounded-2xl hover:bg-slate-400 cursor-pointer">Comments
      </button>
    </div>
  )
}

export const Card = Object.assign(CardComponent, {
  Title: CardTitle,
  Description: CardDescription,
  Author: CardAuthor,
  Actions: CardActions,
});

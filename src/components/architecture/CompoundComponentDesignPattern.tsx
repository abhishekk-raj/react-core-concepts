import {useState} from "react";
import {Card} from "./Card.tsx";

export interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
}

const CompoundComponentDesignPattern = () => {
  const [post] = useState<Post>(() => {
    return {
      id: 1,
      title: "Learning curve",
      description: "Learning curve is not curve its learning what you learn. If you get it then you are a great learner, hahaha",
      author: "Abhishek Raj",
    }
  });

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <Card post={post}>
        <Card.Title/>
        <Card.Description/>
        <Card.Author/>
        <Card.Actions/>
      </Card>
    </div>
  )
}

export default CompoundComponentDesignPattern;
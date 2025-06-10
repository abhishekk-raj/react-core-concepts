import type {ComponentType} from "react";

interface WithAuthHocProps {
  name: string;
}

const withAuthHoc = (Component: ComponentType<WithAuthHocProps>) => {
  return (props: WithAuthHocProps) => {
    return <Component {...props} />;
  }
}

export default withAuthHoc;

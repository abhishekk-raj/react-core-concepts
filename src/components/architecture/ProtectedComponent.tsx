import withAuthHoc from "./withAuthHoc.tsx";

interface ProtectedComponentProps {
  name: string;
}

const Component = ({name}: ProtectedComponentProps) => {
  return <h1>Welcome {name}!</h1>
}

const ProtectedComponent = withAuthHoc(Component);

export default ProtectedComponent;

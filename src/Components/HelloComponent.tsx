import RxFM from "rxfm";

interface HelloComponentProps {
  name: string;
}

const HelloComponent = ({ name }: HelloComponentProps) => {
  return <div class="text-2xl text-red-700">Hello {name}</div>;
};

export default HelloComponent;
export { HelloComponent };

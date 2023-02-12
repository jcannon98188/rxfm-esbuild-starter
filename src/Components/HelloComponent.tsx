import RxFM, { type FC } from 'rxfm'

interface HelloComponentProps {
  name: string
}

const HelloComponent: FC<HelloComponentProps> = ({
  name
}: HelloComponentProps) => {
  return <div class="text-2xl text-red-700 ">Hello {name}</div>
}

export default HelloComponent
export { HelloComponent }

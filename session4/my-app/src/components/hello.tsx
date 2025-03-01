export type Props = {
    name: string
}

const HelloWorld = (props: Props) => {

    return (<h1>Hello world {props.name}</h1>)
}

export default HelloWorld
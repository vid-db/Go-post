
import { quantum } from 'ldrs'


const Loading = () => {
    quantum.register()
    return (

        <div className="mx-auto my-auto text-xl">
            <l-quantum
                size="45"
                speed="1.75"
                color="black"
            ></l-quantum>
            Loading...
        </div>
    )
}

export default Loading




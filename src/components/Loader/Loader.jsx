import "./Loader.css"
import { DotPulse } from '@uiball/loaders'

function Loader() {
    return (
        <div className="loader-container">
            <DotPulse 
                size={100}
                speed={1.3} 
                color="#FF585F" 
            />
        </div>
    )
}

export default Loader
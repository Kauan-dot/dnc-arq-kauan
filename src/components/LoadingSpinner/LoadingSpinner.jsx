import './LoadingSpinner.css'
import LoadingSpinnerGif from '../../assets/loading-spinner.gif'

function LoadingSpinner() {
    return (
        <div className='loading-overlay-container d-flex al-center jc-center'>
            <img src={LoadingSpinnerGif} alt="Loading" height="80px"/>
        </div>
    )
}

export default LoadingSpinner
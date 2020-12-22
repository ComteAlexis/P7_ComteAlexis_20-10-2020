import React from 'react'

const ImportImage = ({ handleFileChange, file }) => {
    const style= {
        fill: 'none'
    }

    const onlyStroke={
        stroke: 'currentColor',
        strokeWidth: '1.7px',
        fill: 'none'
    }

    const fillBlue = {
        fill: 'currentColor'
    }

    const importFileStyle = {
        display: 'none'
    }

    const inputRef = React.createRef()

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleChange = (e) => {
        handleFileChange(inputRef.current.files[0])
    }

    return (
        <div>
            <input onChange={handleChange} accept={'.png, .jpg, .jpeg, .gif'} type='file' ref={inputRef} style={importFileStyle}/>
            <svg onClick={handleClick} viewBox="0 0 96 103" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1,0,0,1,-2298.28,-1086.91)">
                    <g id="ajout-image" transform="matrix(0.759311,0,0,1,551.256,0.301303)">
                        <rect x="2300.8" y="1086.6" width="126.429" height="102.486" style={style}/>
                        <g id="Ajouter-image" transform="matrix(1.34344,0,0,1.02009,-880.295,661.684)">
                            <g transform="matrix(1.00017,0,0,0.980307,66.177,-645.086)">
                                <path d="M2357.75,1161.98C2357.69,1161.99 2357.63,1162 2357.57,1162L2305.16,1162C2304.9,1162 2304.66,1161.86 2304.54,1161.63C2304.41,1161.41 2304.41,1161.13 2304.55,1160.9L2330.75,1116.2C2330.88,1115.98 2331.11,1115.85 2331.36,1115.85C2331.61,1115.85 2331.84,1115.98 2331.97,1116.2L2343.91,1136.58L2348.64,1128.54C2348.77,1128.32 2349,1128.18 2349.25,1128.18C2349.5,1128.18 2349.73,1128.32 2349.86,1128.54L2368.87,1160.88C2369,1161.1 2369,1161.38 2368.88,1161.61C2368.75,1161.84 2368.51,1161.98 2368.26,1161.98L2357.75,1161.98ZM2331.36,1117.98L2306.41,1160.55L2357.37,1160.55C2357.43,1160.54 2357.49,1160.53 2357.55,1160.53L2367,1160.53L2349.25,1130.32L2344.52,1138.36C2344.4,1138.58 2344.16,1138.71 2343.91,1138.71C2343.66,1138.71 2343.43,1138.58 2343.3,1138.36L2331.36,1117.98Z" style={fillBlue}/>
                            </g>
                            <path d="M2371.71,493.013L2371.71,428.882L2446.47,428.882L2446.47,481.336C2452.91,481.336 2458.15,486.568 2458.15,493.013C2458.15,499.457 2452.91,504.689 2446.47,504.689C2440.03,504.689 2434.79,499.457 2434.79,493.013L2371.71,493.013Z" style={onlyStroke}/>
                            <g transform="matrix(1,0,0,1,0,4.12631)">
                                <circle cx="2432.63" cy="441.506" r="6.638" style={style}/>
                            </g>
                            <path d="M2448.27,491.822L2454.27,491.822L2454.27,494.822L2448.27,494.822L2448.27,500.822L2445.27,500.822L2445.27,494.822L2439.27,494.822L2439.27,491.822L2445.27,491.822L2445.27,485.822L2448.27,485.822L2448.27,491.822Z" style={onlyStroke}/>
                        </g>
                        <g transform="matrix(1.67389,0,0,1.271,-1595.54,-254.323)">
                            <path d="M2380.39,1069.22C2378.62,1069.22 2377.01,1069.94 2375.85,1071.1C2374.69,1072.26 2373.97,1073.86 2373.97,1075.63C2373.97,1077.4 2374.69,1079.01 2375.85,1080.17C2377.01,1081.33 2378.62,1082.05 2380.39,1082.05C2382.16,1082.05 2383.76,1081.33 2384.92,1080.17C2386.08,1079.01 2386.8,1077.4 2386.8,1075.63C2386.8,1073.86 2386.08,1072.26 2384.92,1071.1C2383.76,1069.94 2382.16,1069.22 2380.39,1069.22ZM2380.39,1070.01C2381.94,1070.01 2383.35,1070.64 2384.37,1071.65C2385.39,1072.67 2386.01,1074.08 2386.01,1075.63C2386.01,1077.19 2385.39,1078.59 2384.37,1079.61C2383.35,1080.63 2381.94,1081.26 2380.39,1081.26C2378.83,1081.26 2377.43,1080.63 2376.41,1079.61C2375.39,1078.59 2374.76,1077.19 2374.76,1075.63C2374.76,1074.08 2375.39,1072.67 2376.41,1071.65C2377.43,1070.64 2378.83,1070.01 2380.39,1070.01Z" style={fillBlue}/>
                        </g>
                    </g>
                </g>
            </svg>
            { file ? <span>{file.name}</span> : '' }
        </div>)
}



export default ImportImage
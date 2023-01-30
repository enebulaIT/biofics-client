import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useAssumedDeviceType() {

  const [assumedDeviceType, setAssumedDeviceType] = useState('');

  // Callback function to assign value to assignedDevicetype state
  const findAssumedDevice = () => {
    const { width } = getWindowDimensions();

    console.log('width', width)
    if(width <= 600 ) setAssumedDeviceType('Mobile');
    else if(width <= 1200 && width > 600) setAssumedDeviceType('Tablet');
    else setAssumedDeviceType('Desktop');
}
  useEffect(() => {
    
    findAssumedDevice();

    window.addEventListener('resize', findAssumedDevice);
    return () => window.removeEventListener('resize', findAssumedDevice);
  }, [])

  return { assumedDeviceType };
}

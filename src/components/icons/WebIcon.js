import React from 'react'

const WebIcon = (props) => {
  const {height,width} = props ;
  return (
    <svg
    width={`${width}`}
    height={`${height}`}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M55 22.5H5M35 43.75L41.25 37.5L35 31.25M25 31.25L18.75 37.5L25 43.75M5 19.5L5 40.5C5 44.7004 5 46.8006 5.81745 48.4049C6.5365 49.8161 7.68386 50.9635 9.09507 51.6825C10.6994 52.5 12.7996 52.5 17 52.5H43C47.2004 52.5 49.3006 52.5 50.9049 51.6825C52.3161 50.9635 53.4635 49.8161 54.1826 48.4049C55 46.8006 55 44.7004 55 40.5V19.5C55 15.2996 55 13.1994 54.1826 11.5951C53.4635 10.1839 52.3161 9.03651 50.9049 8.31745C49.3006 7.5 47.2004 7.5 43 7.5L17 7.5C12.7996 7.5 10.6994 7.5 9.09507 8.31745C7.68386 9.0365 6.5365 10.1839 5.81745 11.5951C5 13.1994 5 15.2996 5 19.5Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  )
}

export default WebIcon
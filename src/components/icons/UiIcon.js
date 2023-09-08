const UiIcon = (props) => {
  const {height,width} = props ;
  return (
    <svg
    width={`${width}`}
    height={`${height}`}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.125 21.375H49.875M21.375 21.375L21.375 49.875M18.525 7.125H38.475C42.4654 7.125 44.4606 7.125 45.9847 7.90158C47.3253 8.58468 48.4153 9.67466 49.0984 11.0153C49.875 12.5394 49.875 14.5346 49.875 18.525V38.475C49.875 42.4654 49.875 44.4606 49.0984 45.9847C48.4153 47.3253 47.3253 48.4153 45.9847 49.0984C44.4606 49.875 42.4654 49.875 38.475 49.875H18.525C14.5346 49.875 12.5394 49.875 11.0153 49.0984C9.67466 48.4153 8.58468 47.3253 7.90158 45.9847C7.125 44.4606 7.125 42.4654 7.125 38.475V18.525C7.125 14.5346 7.125 12.5394 7.90158 11.0153C8.58468 9.67466 9.67466 8.58468 11.0153 7.90158C12.5394 7.125 14.5346 7.125 18.525 7.125Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UiIcon;

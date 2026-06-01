declare module '*.css';
declare module '*.svg';
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.JPG' {
  const src: string;
  export default src;
}
interface MoveElementProps {
    children: React.ReactNode;
    initial: initialProps;
    animate: animateProps;
    transition: transitionProps;
    className?: string;
}

interface FadeInProps {
    children: React.ReactNode;
    initial: initialProps;
    animate: animateProps;
    transition: transitionProps;
    className?: string;
}


interface initialProps {
    x?: number;
    y?: number;
    opacity?: number;
    height?: number;
    width?: number;
    color?: string;
    background?: string;
  }
  
  interface animateProps {
    x?: number;
    y?: number;
    opacity?: number;
    height?: number;
    width?: number;
    color?: string;
    background?: string;
  }
  
  interface transitionProps {
    duration: number;
    delay?: number;
  }

//   SCROLL ANIMATIONS
interface ScrollProps {
    children: React.ReactNode;
    initial: ControlProps;
    animate: ControlProps;
    reverse: ControlProps;
    threshold?: number;
    className?:string
}

interface ControlProps {
  opacity?: number;
  y?: number;
  x?:number;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
}
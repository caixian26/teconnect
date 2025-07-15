import { useState, useEffect, useRef } from 'react';

function useIntersectionObserver(options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null); // 감시할 요소를 참조하기 위한 ref

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // entry.isIntersecting은 요소가 화면에 보이는지 여부를 boolean으로 반환
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target); // 한 번 보이면 더 이상 감시하지 않음
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current); // ref가 연결된 요소를 감시 시작
    }

    // 컴포넌트가 언마운트될 때 감시를 중단
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting]; // 감시할 요소에 연결할 ref와, 화면에 보이는지 여부를 반환
}

export default useIntersectionObserver;
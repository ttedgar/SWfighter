import { useEffect, useRef, useState } from 'react';

function App() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const characterRef = useRef();
  const deathstarRef = useRef();
  const shotRefs = Array.from({ length: 100 }, () => useRef());
  const shotSetters = [];
  const shots = [];
  for (let i = 1; i <= 100; i++) {
    const [shotLeft, setShotLeft] = useState(left);
    shotSetters.push(setShotLeft);
    shots.push(shotLeft);
  } 
  const [shotNumber, setShotNumber] = useState(0)
  const [dsDown, setDsDown] = useState(true)
  const [dsTop, setDsTop] = useState(0)
  const [dsLeft, setDsLeft] = useState(0)
  const [dsHealth, setDsHealth] = useState(1)
  const [isDsDead, setIsDsDead] = useState(false)

  useEffect(() => {
    shotRefs.forEach((ref) => {
      ref.current.style.left ='-1000px'
    })
    const dsStyle = deathstarRef.current.style;
    dsStyle.top = '100px';
    
  }, [])

  useEffect(() => {
    const dsStyle = deathstarRef.current.style;
    function moveDeathstar() {
      const dsSpeed = Math.round(10 + (Math.random() * 30))

      function moveDsDown() {
        const down = setInterval(() => {
          dsStyle.top = Number(dsStyle.top.slice(0, dsStyle.length - 3)) + 2 + 'px';
          setDsTop(Number(dsStyle.top.slice(0, dsStyle.length - 3)) + 100)
          setDsLeft(Number(dsStyle.left.slice(0, dsStyle.length - 3)))
          if (Number(dsStyle.top.slice(0, dsStyle.length - 3)) > window.innerHeight - 120) {
            clearInterval(down);
            setDsDown(false);
          }
        }, dsSpeed);
        return down;
      }
      
      function moveDsUp() {
        dsStyle.top = window.innerHeight - 120 + 'px';
        const up = setInterval(() => {
          dsStyle.top = Number(dsStyle.top.slice(0, dsStyle.length - 3)) - 2 + 'px';
          setDsTop(Number(dsStyle.top.slice(0, dsStyle.length - 3)) - 100)
          setDsLeft(Number(dsStyle.left.slice(0, dsStyle.length - 3)))
          if (Number(dsStyle.top.slice(0, dsStyle.length - 3)) < 100) {
            setDsDown(true);
            clearInterval(up);
          }
        }, dsSpeed);
        return up;
      }
      
      dsDown ? moveDsDown() : moveDsUp()
    }
    moveDeathstar();
  }, [dsDown])  


  function shoot(shotNumber) {
    setShotNumber((prevShot) => {
      return prevShot + 1
    })
    const shotSetter = shotSetters[shotNumber];
    shotSetter(left)
    shotNumber === 99 ? setShotNumber(0) : null;
    const shotStyle = shotRefs[shotNumber].current.style;
    shotRefs[shotNumber].current.src = "../../images/shot.png"
    shotStyle.height = '5px'
    shotStyle.top = `${top + 44}px`;
    shotStyle.left = `${left + 50}px`;
    shotSetter(left + 50)
    const interval = setInterval(() => {
      shotSetter((prevPosition) => {
        shotStyle.left = `${prevPosition + 20}px`;
        return prevPosition + 20
      })
      if (Number(shotStyle.left.slice(0, shotStyle.left.length - 2)) > window.innerWidth - 180 
      && Number(shotStyle.top.slice(0, shotStyle.top.length - 2)) > dsTop - 100
      && Number(shotStyle.top.slice(0, shotStyle.top.length - 2)) < dsTop + 100) {
        setDsHealth(prevHP => prevHP - 1);
        if (dsHealth < 0 && !isDsDead) {
          setIsDsDead(true)
          deathstarRef.current.src = "../../images/deathstar-ruin.png"
          shotRefs[shotNumber].current.style.zIndex = '9999';
          shotStyle.height = '200px'
          shotRefs[shotNumber].current.src = "../../images/explosion.gif"
          deathstarRef.current.style.left = window.innerWidth - 200 + 'px';

          const left = setInterval(() => {
            const dsStyle = deathstarRef.current.style;
            dsStyle.left = (Number(dsStyle.left.slice(0, dsStyle.length - 4)) - 2) + 'px'
            console.log(dsStyle.left, Number(dsStyle.left.slice(0, dsStyle.length - 4)));
            if (Number(dsStyle.left.slice(0, dsStyle.length - 4)) < -200) {
              clearInterval(left);
              setDsDown(false);
            }
          }, 10);
        } else {
          shotRefs[shotNumber].current.style.zIndex = '9999';
          shotStyle.height = '50px'
          shotRefs[shotNumber].current.src = "../../images/explosion.gif"
          setTimeout(() => {
            shotStyle.top = `-1000px`;
            shotStyle.left = `-1000px`;
            shotStyle.height = '5px';
            shotRefs[shotNumber].current.src = "../../images/shot.png";
          }, 500);
        }
        clearInterval(interval);
      }

      if (Number(shotStyle.left.slice(0, shotStyle.left.length - 2)) > window.innerWidth - 60) {
        shotStyle.top = `-1000px`;
        shotStyle.left = `-1000px`;
        clearInterval(interval);
      }
    }, 20)
  }

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === '2' && top < window.innerHeight - 140) {
        // console.log(top);
        setTop((prevPosition) => {
          const newPosition = prevPosition + 25;
          characterRef.current.style.top = `${newPosition}px`;
          return newPosition;
        });
      } else if (event.key === '5' && top > 0) {
        // console.log(top);
        setTop((prevPosition) => {
          const newPosition = prevPosition - 25;
          characterRef.current.style.top = `${newPosition}px`;
          return newPosition;
        });
      } else if (event.key === '3' && left < window.innerWidth - 200) {
        // console.log(left);
        setLeft((prevPosition) => {
          const newPosition = prevPosition + 25;
          characterRef.current.style.left = `${newPosition}px`;
          return newPosition;
        });
      } else if (event.key === '1' && left > 0) {
        setLeft((prevPosition) => {
          // console.log(left);
          const newPosition = prevPosition - 25;
          characterRef.current.style.left = `${newPosition}px`;
          return newPosition;
        });
      } else if (event.key === 's') {
        shoot(shotNumber);
      }
    }

    window.addEventListener('keypress', handleKeyPress);
    
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [top, left, shotNumber, isDsDead])


  return (
    <>
      {shots.map((shotLeft, index) => (
        <img
          key={`shot-${index + 1}`}
          src="../../images/shot.png"
          alt=""
          className="shot1"
          ref={shotRefs[index]}
          style={{ left: `${shotLeft}px` }}
        />
      ))}
      <img src="../../images/deathstar.png" alt="" className='deathstar' id='deathstar' ref={deathstarRef} />
      <img src='../../images/XWingright.png' className='character' alt='' ref={characterRef}></img>
      <img src='../../images/laser1.png' className='laser'></img>
    </>
  );
}

export default App;

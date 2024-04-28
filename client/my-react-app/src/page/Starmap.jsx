import { useEffect, useRef, useState } from 'react';

function App() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [deathstarTop, setDeathstartTop] = useState(null)
  const characterRef = useRef();
  const shot1Ref = useRef();
  const shot2Ref = useRef();
  const shot3Ref = useRef();
  const shot4Ref = useRef();
  const shot5Ref = useRef();
  const shot6Ref = useRef();
  const shot7Ref = useRef();
  const shot8Ref = useRef();
  const shot9Ref = useRef();
  const shot10Ref = useRef();
  const shot11Ref = useRef();
  const shot12Ref = useRef();
  const shot13Ref = useRef();
  const shot14Ref = useRef();
  const shot15Ref = useRef();
  const shot16Ref = useRef();
  const shot17Ref = useRef();
  const shot18Ref = useRef();
  const shot19Ref = useRef();
  const shot20Ref = useRef();
  const shot21Ref = useRef();
  const shot22Ref = useRef();
  const shot23Ref = useRef();
  const shot24Ref = useRef();
  const shot25Ref = useRef();
  const shot26Ref = useRef();
  const shot27Ref = useRef();
  const shot28Ref = useRef();
  const shot29Ref = useRef();
  const shot30Ref = useRef();
  const shot31Ref = useRef();
  const shot32Ref = useRef();
  const deathstarRef = useRef();
  const [shot1Left, setShot1Left] = useState(left)
  const [shot2Left, setShot2Left] = useState(left)
  const [shot3Left, setShot3Left] = useState(left)
  const [shot4Left, setShot4Left] = useState(left)
  const [shot5Left, setShot5Left] = useState(left)
  const [shot6Left, setShot6Left] = useState(left)
  const [shot7Left, setShot7Left] = useState(left)
  const [shot8Left, setShot8Left] = useState(left)
  const [shot9Left, setShot9Left] = useState(left)
  const [shot10Left, setShot10Left] = useState(left)
  const [shot11Left, setShot11Left] = useState(left)
  const [shot12Left, setShot12Left] = useState(left)
  const [shot13Left, setShot13Left] = useState(left)
  const [shot14Left, setShot14Left] = useState(left)
  const [shot15Left, setShot15Left] = useState(left)
  const [shot16Left, setShot16Left] = useState(left)
  const [shot17Left, setShot17Left] = useState(left)
  const [shot18Left, setShot18Left] = useState(left)
  const [shot19Left, setShot19Left] = useState(left)
  const [shot20Left, setShot20Left] = useState(left)
  const [shot21Left, setShot21Left] = useState(left)
  const [shot22Left, setShot22Left] = useState(left)
  const [shot23Left, setShot23Left] = useState(left)
  const [shot24Left, setShot24Left] = useState(left)
  const [shot25Left, setShot25Left] = useState(left)
  const [shot26Left, setShot26Left] = useState(left)
  const [shot27Left, setShot27Left] = useState(left)
  const [shot28Left, setShot28Left] = useState(left)
  const [shot29Left, setShot29Left] = useState(left)
  const [shot30Left, setShot30Left] = useState(left)
  const [shot31Left, setShot31Left] = useState(left)
  const [shot32Left, setShot32Left] = useState(left)
  const [shotNumber, setShotNumber] = useState(0)
  const shotRefs = [shot1Ref, shot2Ref, shot3Ref, shot4Ref, shot5Ref, shot6Ref, shot7Ref, shot8Ref, shot9Ref, shot10Ref, shot11Ref, shot12Ref, shot13Ref, shot14Ref, shot15Ref, shot16Ref, shot17Ref, shot18Ref, shot19Ref, shot20Ref, shot21Ref, shot22Ref, shot23Ref, shot24Ref, shot25Ref, shot26Ref, shot27Ref, shot28Ref, shot29Ref, shot30Ref, shot31Ref, shot32Ref];
  const shotSetters = [setShot1Left, setShot2Left, setShot3Left, setShot4Left, setShot5Left, setShot6Left, setShot7Left, setShot8Left, setShot9Left, setShot10Left, setShot11Left, setShot12Left, setShot13Left, setShot14Left, setShot15Left, setShot16Left, setShot17Left, setShot18Left, setShot19Left, setShot20Left, setShot21Left, setShot22Left, setShot23Left, setShot24Left, setShot25Left, setShot26Left, setShot27Left, setShot28Left, setShot29Left, setShot30Left, setShot31Left, setShot32Left];
  const shots = [shot1Left, shot2Left, shot3Left, shot4Left, shot5Left, shot6Left, shot7Left, shot8Left, shot9Left, shot10Left, shot11Left, shot12Left, shot13Left, shot14Left, shot15Left, shot16Left, shot17Left, shot18Left, shot19Left, shot20Left, shot21Left, shot22Left, shot23Left, shot24Left, shot25Left, shot26Left, shot27Left, shot28Left, shot29Left, shot30Left, shot31Left, shot32Left]
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
    shotNumber === 31 ? setShotNumber(0) : null;
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
      <img src="../../images/shot.png" alt="" className='shot1' id='shot1' ref={shot1Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot2' ref={shot2Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot3' ref={shot3Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot4' ref={shot4Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot5' ref={shot5Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot6' ref={shot6Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot7' ref={shot7Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot8' ref={shot8Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot9' ref={shot9Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot10' ref={shot10Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot11' ref={shot11Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot12' ref={shot12Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot13' ref={shot13Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot14' ref={shot14Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot15' ref={shot15Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot16' ref={shot16Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot17' ref={shot17Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot18' ref={shot18Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot19' ref={shot19Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot20' ref={shot20Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot21' ref={shot21Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot22' ref={shot22Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot23' ref={shot23Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot24' ref={shot24Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot25' ref={shot25Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot27' ref={shot27Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot26' ref={shot26Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot28' ref={shot28Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot29' ref={shot29Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot30' ref={shot30Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot31' ref={shot31Ref} />
      <img src="../../images/shot.png" alt="" className='shot1' id='shot32' ref={shot32Ref} />
      <img src="../../images/deathstar.png" alt="" className='deathstar' id='deathstar' ref={deathstarRef} />
      <img src='../../images/XWingright.png' className='character' alt='' ref={characterRef}></img>
      <img src='../../images/laser1.png' className='laser'></img>
    </>
  );
}

export default App;

/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from 'react';

function App() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const characterRef = useRef();
  const deathstarRef = useRef();
  const tieRefs = Array.from({ length: 25 }, () => useRef());
  const tieSetters = [];
  const ties = [];
  const tieTopSetters = [];
  const tieTops = [];
  const tieLeftSetters = [];
  const tieLefts = [];
  const tieDownSetters = [];
  const tieDowns = [];
  const isTieDeads = [];
  const isTieDeadSetters = [];
  for (let i = 1; i <= 25; i++) {
    const [tie, setTie] = useState(window.innerWidth);
    tieSetters.push(setTie);
    ties.push(tie);
    const [tieTop, setTieTop] = useState(null);
    tieTopSetters.push(setTieTop);
    tieTops.push(tieTop);
    const [tieLeft, setTieLeft] = useState(null);
    tieLeftSetters.push(setTieLeft);
    tieLefts.push(tieLeft);
    const [tieDown, setTieDown] = useState(null);
    tieDownSetters.push(setTieDown);
    tieDowns.push(tieDown);
    const [isTieDead, setIsTieDead] = useState(null);
    isTieDeadSetters.push(setIsTieDead);
    isTieDeads.push(isTieDead);
  } 
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
  const [tieRefresher, setTieRefresher] = useState(true)

  function hitTarget(shotRef, shotStyle) {
    shotRef.current.style.zIndex = '9999';
    shotStyle.height = '50px'
    shotRef.current.src = "../../images/explosion.gif"
  }

  function hitTieFighter(shotStyle) {
    for (let i = 0; i < 25; i++) {
      if (Number(shotStyle.top.split('p')[0]) > tieTops[i] - 25 &&
          Number(shotStyle.top.split('p')[0]) < tieTops[i] + 25 &&
          Number(shotStyle.left.split('p')[0]) > tieLefts[i] &&
          Number(shotStyle.left.split('p')[0]) < tieLefts[i] + 25) {
        tieRefs[i].current ? tieRefs[i].current.src = "../../images/explosion.gif" : null;
        setTimeout(() => {
          if (tieRefs[i].current) {
            tieRefs[i].current.style.left = '-1000px';
            tieRefs[i].current.style.top = '-1000px';
          }
          const setIsTieDead = isTieDeadSetters[i];
          setIsTieDead(true);
        }, 400);
      }
    }
  }

  useEffect(() => {
    shotRefs.forEach((ref) => {
      ref.current.style.left ='-1000px'
    })
    const dsStyle = deathstarRef.current.style;
    dsStyle.top = '100px';
  }, [])

  useEffect(() => {
    let counter = 0
    const tieProduction = setInterval(() => {
      console.log('counter: ', counter);
      counter++;
      counter === 24 ? counter = 0 : null;
      if (tieRefs[counter].current) {
        const tieStyle = tieRefs[counter].current.style;
        const tieLeftSetter = tieLeftSetters[counter];
        const tieTopSetter = tieTopSetters[counter];
        const right = setInterval(() => {
          tieStyle.left = Number(tieStyle.left.split('p')[0]) - 0.2 + 'px';
          tieLeftSetter(Number(tieStyle.left.split('p')[0]));
          if (Number(tieStyle.left.split('p')[0]) === -100) {
            clearInterval(right);
          }
        }, 10)
        if (tieRefresher) {
          const down = setInterval(() => {
            tieStyle.top = Number(tieStyle.top.split('p')[0]) + 0.6 + 'px';
            tieTopSetter(Number(tieStyle.top.split('p')[0]) + 100);
            if (Number(tieStyle.top.split('p')[0]) > window.innerHeight - 100) {
              clearInterval(down);
              setTieRefresher(false);
              tieRefresher ? setTieRefresher(false) : setTieRefresher(true);
            }
          }, 20)
        } else {
          const up = setInterval(() => {
            
            tieStyle.top = Number(tieStyle.top.split('p')[0]) - 0.8 + 'px'
            tieTopSetter(Number(tieStyle.top.split('p')[0]));
            if (Number(tieStyle.top.split('p')[0]) < -20) {
              clearInterval(up)
              setTieRefresher(true);
            }
          }, 20)
        }
      }
    }, 1000);
    
  }, [tieRefresher])

  useEffect(() => {
    const dsStyle = deathstarRef.current.style;
    let dsSpeed = Math.round(10 + (Math.random() * 30));
    let down;
    let up;

    function moveDeathstar() {
      function moveDsDown() {
        down = setInterval(() => {
          dsStyle.top = Number(dsStyle.top.split('p')[0]) + 2 + 'px';
          setDsTop(Number(dsStyle.top.split('p')[0]) + 100)
          setDsLeft(Number(dsStyle.left.split('p')[0]))
          if (Number(dsStyle.top.split('p')[0]) > window.innerHeight - 120) {
            clearInterval(down);
            setDsDown(false);
          }
        }, dsSpeed);
      }
      
      function moveDsUp() {
        dsStyle.top = window.innerHeight - 120 + 'px';
        up = setInterval(() => {
          dsStyle.top = Number(dsStyle.top.split('p')[0]) - 2 + 'px';
          setDsTop(Number(dsStyle.top.split('p')[0]) - 100)
          setDsLeft(Number(dsStyle.left.split('p')[0]))
          if (Number(dsStyle.top.split('p')[0]) < 100) {
            setDsDown(true);
            clearInterval(up);
          }
        }, dsSpeed);
      }
      dsDown ? moveDsDown() : moveDsUp();
    }
    if (!isDsDead) {
      moveDeathstar();
      
    } else {
      return () => {
        console.log('Cleanup');
        clearInterval(down);
        clearInterval(up);
        setTimeout(() =>{
          deathstarRef.current.style.top = '-500px'
        }, 5000)
      };
    }
  }, [dsDown, isDsDead])

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
      if (Number(shotStyle.left.split('p')[0]) > window.innerWidth - 180 
      && Number(shotStyle.top.split('p')[0]) > dsTop - 100
      && Number(shotStyle.top.split('p')[0]) < dsTop + 100
      && !isDsDead) {
        setDsHealth(prevHP => prevHP - 1);
        if (dsHealth < 0 && !isDsDead) {
          setIsDsDead(true);
          console.log('DSDEAD');
          deathstarRef.current.src = "../../images/deathstar-ruin.png";
          deathstarRef.current.classList.add('active');
          shotRefs[shotNumber].current.style.zIndex = '9999';
          shotStyle.height = '200px';
          shotRefs[shotNumber].current.src = "../../images/explosion.gif";
          deathstarRef.current.style.left = window.innerWidth - 200 + 'px';
          setTimeout(() => {
            shotStyle.top = `-1000px`;
            shotStyle.left = `-1000px`;
            clearInterval(interval);
          }, 750)
        } else {
          hitTarget(shotRefs[shotNumber], shotStyle);
          setTimeout(() => {
            shotStyle.top = `-1000px`;
            shotStyle.left = `-1000px`;
            shotStyle.height = '5px';
            shotRefs[shotNumber].current.src = "../../images/shot.png";
          }, 500);
        }
        clearInterval(interval);
      }

      hitTieFighter(shotStyle);

      if (Number(shotStyle.left.split('p')[0]) > window.innerWidth) {
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
      {ties.map((tieLeft, index) => (
        !isTieDeads[index] ? 
        <img
        key={`tie-${index + 1}`}
        src="../../images/TIEfighter.png"
        alt=""
        className="tie"
        ref={tieRefs[index]}
        style={{ left: `${tieLeft}px` }}
      /> : null
      ))}
      <img src="../../images/deathstar.png" alt="" className='deathstar' id='deathstar' ref={deathstarRef} />
      <img src='../../images/XWingright.png' className='character' alt='' ref={characterRef}></img>
      <img src='../../images/laser1.png' className='laser'></img>
    </>
  );
}

export default App;

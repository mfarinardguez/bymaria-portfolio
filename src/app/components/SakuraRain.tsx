'use client';

import { useEffect, useState } from "react";
import styles from "./SakuraRain.module.css";

interface SakuraProps {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function SakuraRain() {
  const [sakuras, setSakuras] = useState<SakuraProps[]>([]);

  useEffect(() => {
    const NUM_SAKURAS = 15;
    const sakurasArray = Array.from({ length: NUM_SAKURAS }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 5 + Math.random() * 10,
    }));
    setSakuras(sakurasArray);
  }, []);

  return (
    <div className={styles.sakuraContainer}>
      {sakuras.map(({ id, left, delay, duration }) => (
        <div
          key={id}
          className={styles.sakura}
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}

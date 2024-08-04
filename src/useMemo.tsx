import React, { useState, useMemo } from 'react';

export default function BuffSystem() {
  const [attackPower, setAttackPower] = useState(10);
  const [buff, setBuff] = useState(2);

  const effectivePower = useMemo(() => {
    console.log('버프 적용!');
    return attackPower * buff;
  }, [attackPower, buff]);

  return (
    <div>
      <p>공격력: {effectivePower}</p>
      <button onClick={() => setAttackPower(attackPower + 1)}>
        공격력 증가
      </button>
      <button onClick={() => setBuff(buff + 1)}>버프 강화</button>
    </div>
  );
}
